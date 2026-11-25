const WEEKS = {
  1:  { title: "Foundations and acquisition" },
  2:  { title: "File systems" },
  3:  { title: "Windows artefacts and timelines" },
  4:  { title: "Memory forensics" },
  5:  { title: "Network forensics" },
  7:  { title: "Mobile forensics" },
  8:  { title: "Court and expert evidence" },
  9:  { title: "Detection and revision" },
  10: { title: "Mock trial and revision" },
};

const TABS = [
  { id: "professional", label: "Professional", sub: "Monday" },
  { id: "practice",     label: "Practice",     sub: "Wednesday" },
  { id: "tutorial",     label: "Tutorial",     sub: "Locked" },
  { id: "ctf",          label: "CTF",          sub: "Locked" },
  { id: "report",       label: "Report",       sub: "Locked" },
];

const LOCKED = {
  tutorial: "idk if i can share these but to be safer its hidden",
  ctf:      "flags are hidden and so are the challenge qs per course policy",
  report:   "my reports, for future ref",
};

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
};
let view = Object.assign({ week: 1, tab: "professional", mode: "notes" }, store.get("view", {}));
if (!WEEKS[view.week]) view.week = 1;
let unlocked = null;           
let deck = { pos: 0, flipped: false };

const CONTENT = window.CONTENT || {};
const section = (w, t) => (CONTENT[w] && CONTENT[w][t]) || {};

function go(changes) { Object.assign(view, changes); store.set("view", view); draw(); }

function draw() {
  const w = WEEKS[view.week];
  $("weeks").innerHTML = Object.keys(WEEKS).map((n) =>
    `<button data-week="${n}" class="${+n === view.week ? "on" : ""}">W${n}</button>`).join("");
  $("weeks").querySelectorAll("button").forEach((b) => b.onclick = () => go({ week: +b.dataset.week, mode: "notes" }));

  const tab = TABS.find((t) => t.id === view.tab) || TABS[0];
  const isLocked = !!LOCKED[tab.id];

  $("main").innerHTML = `
    <div class="wtitle"><small>Week ${view.week}</small><h2>${esc(w.title)}</h2></div>
    <div class="tabs">${TABS.map((t) =>
      `<button data-tab="${t.id}" class="${t.id === tab.id ? "on" : ""}">${t.label}<span>${t.sub}</span></button>`).join("")}</div>
    <div class="shead">
      <div class="meta"></div>
      ${isLocked ? "" : `<div class="switch">
        <button data-mode="notes" class="${view.mode === "notes" ? "on" : ""}">Notes</button>
        <button data-mode="cards" class="${view.mode === "cards" ? "on" : ""}">Flashcards</button></div>`}
    </div>
    <div id="body"></div>`;
  $("main").querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => go({ tab: b.dataset.tab, mode: "notes" }));
  $("main").querySelectorAll("[data-mode]").forEach((b) => b.onclick = () => { deck = { pos: 0, flipped: false }; go({ mode: b.dataset.mode }); });

  if (isLocked) drawLocked(tab.id);
  else if (view.mode === "cards") drawCards(section(view.week, tab.id).cards || []);
  else drawNotes(section(view.week, tab.id).notes);
}

function drawNotes(html) {
  $("body").innerHTML = html ? `<div class="notes">${html}</div>` : `<div class="empty">No notes yet.</div>`;
}

function drawCards(cards) {
  if (!cards.length) { $("body").innerHTML = `<div class="empty">No flashcards yet.</div>`; return; }
  const c = cards[deck.pos];
  $("body").innerHTML = `
    <div class="count">Card ${deck.pos + 1} of ${cards.length}</div>
    <div class="card" id="card">${deck.flipped
      ? `<div class="qsmall">${c[0]}</div><div>${c[1]}</div>`
      : `<div class="q">${c[0]}</div><div class="hint">Tap to flip</div>`}</div>
    <div class="ctl"><button class="btn" id="prev">← Back</button><span class="sp"></span><button class="btn" id="next">Next →</button></div>`;
  const move = (d) => { deck.pos = (deck.pos + d + cards.length) % cards.length; deck.flipped = false; drawCards(cards); };
  $("card").onclick = () => { deck.flipped = !deck.flipped; drawCards(cards); };
  $("prev").onclick = () => move(-1);
  $("next").onclick = () => move(1);
}

function drawLocked(tabId) {
  const prefix = `week${view.week}/${tabId}`;
  if (unlocked) {
    const files = unlocked.filter((f) => f.name.replace(/\\/g, "/").startsWith(prefix));
    $("body").innerHTML = `<p><button class="btn" id="lock">Lock</button></p>` + (files.length
      ? files.map((f) => `<details class="file"><summary>${esc(f.name)}</summary><div class="body notes">${md(f.text)}</div></details>`).join("")
      : `<div class="empty">Nothing here yet. Add files under <code>private/${prefix}</code>.</div>`);
    $("lock").onclick = () => { unlocked = null; draw(); };
    return;
  }
  $("body").innerHTML = `
    <div class="locked">
      <h4>Locked</h4>
      <p>${LOCKED[tabId]}</p>
      <p class="muted">these are my write-ups and notes for the CTFs and assignments, which i'd love to share but i cant due to course policy so they're locked...unless you can guess the passphrase (you can't) and its not 'password'. feel free to look @ the notes + flashcards (more helpful!)</p>
      ${window.PRIVATE ? `<form id="unlock">
        <input type="password" placeholder="Passphrase" autocomplete="current-password">
        <button class="btn dark">Unlock</button><span class="muted" id="msg"></span></form>` : ""}
    </div>`;
  if (!window.PRIVATE) return;
  $("unlock").onsubmit = async (e) => {
    e.preventDefault();
    $("msg").textContent = "Checking…";
    try { unlocked = await decrypt(window.PRIVATE, $("unlock").querySelector("input").value); draw(); }
    catch (err) { $("msg").textContent = "Nice try."; }
  };
}

async function decrypt(p, pass) {
  const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: bytes(p.salt), iterations: p.iterations, hash: "SHA-256" },
    base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(p.iv) }, key, bytes(p.data));
  return JSON.parse(new TextDecoder().decode(plain));
}

function md(src) {
  const out = []; let list = false, code = false, para = [];
  const inline = (t) => esc(t).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  const flush = () => { if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; } if (list) { out.push("</ul>"); list = false; } };
  for (const line of src.split("\n")) {
    if (line.startsWith("```")) { flush(); out.push(code ? "</code></pre>" : "<pre><code>"); code = !code; continue; }
    if (code) { out.push(esc(line) + "\n"); continue; }
    const h = line.match(/^#{1,3}\s+(.*)/), li = line.match(/^\s*[-*]\s+(.*)/);
    if (h) { flush(); out.push(`<h4>${inline(h[1])}</h4>`); }
    else if (li) { if (para.length) flush(); if (!list) { out.push("<ul>"); list = true; } out.push(`<li>${inline(li[1])}</li>`); }
    else if (!line.trim()) flush();
    else { if (list) flush(); para.push(line); }
  }
  flush(); if (code) out.push("</code></pre>");
  return out.join("");
}

draw();
