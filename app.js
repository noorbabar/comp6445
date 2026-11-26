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
  { id: "technical",    label: "Technical",    sub: "Wednesday" },
  { id: "tutorial",     label: "Tutorial",     sub: "Lab" },
  { id: "ctf",          label: "CTF",          sub: "Locked" },
  { id: "report",       label: "Report",       sub: "Locked" },
];

const LOCKED = {
  ctf:      "ctf writeups",
  report:   "reports 1 and 2",
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
      ${isLocked || tab.id === "tutorial" ? "" : `<div class="switch">
        <button data-mode="notes" class="${view.mode === "notes" ? "on" : ""}">Notes</button>
        <button data-mode="cards" class="${view.mode === "cards" ? "on" : ""}">Flashcards</button></div>`}
    </div>
    <div id="body"></div>`;
  $("main").querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => go({ tab: b.dataset.tab, mode: "notes" }));
  $("main").querySelectorAll("[data-mode]").forEach((b) => b.onclick = () => { deck = { pos: 0, flipped: false }; go({ mode: b.dataset.mode }); });

  if (isLocked) drawLocked(tab.id);
  else if (tab.id === "tutorial") drawTutorial();
  else if (view.mode === "cards") drawCards(section(view.week, tab.id).cards || []);
  else drawNotes(section(view.week, tab.id).notes);
}

function drawNotes(html) {
  $("body").innerHTML = html ? `<div class="notes">${html}</div>` : `<div class="empty">No notes yet.</div>`;
  linkify($("body"));
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
  linkify($("card"));
  $("card").onclick = () => { deck.flipped = !deck.flipped; drawCards(cards); };
  $("prev").onclick = () => move(-1);
  $("next").onclick = () => move(1);
}

function drawTutorial() {
  const pub = (window.TUTORIALS || {})[view.week];
  const mine = unlocked && unlocked.find((f) => f.name.replace(/\\/g, "/") === `wk${view.week}/tut.md`);
  const hasLocked = (window.TUTORIAL_LOCKED || []).includes(view.week);
  let html = pub ? `<div class="notes">${md(pub)}</div>` : `<div class="empty">No notes yet.</div>`;
  if (mine) html += `<hr><p><button class="btn" id="lock">Lock</button></p><div class="notes">${md(mine.text)}</div>`;
  else if (hasLocked && window.PRIVATE) html += `<hr><div class="locked"><h4>Locked</h4>
      <p class="muted">The worked sample exam answers are course material, so they're locked.</p>
      <form id="unlock"><input type="password" placeholder="Passphrase" autocomplete="current-password">
      <button class="btn dark">Unlock</button><span class="muted" id="msg"></span></form></div>`;
  $("body").innerHTML = html;
  linkify($("body"));
  if ($("lock")) $("lock").onclick = () => { unlocked = null; draw(); };
  if ($("unlock")) $("unlock").onsubmit = async (e) => {
    e.preventDefault();
    $("msg").textContent = "Checking…";
    try { unlocked = await decrypt(window.PRIVATE, $("unlock").querySelector("input").value); draw(); }
    catch (err) { $("msg").textContent = "Nice try."; }
  };
}

function drawLocked(tabId) {
    if (unlocked) {
        const path = (f) => f.name.replace(/\\/g, "/");
        const files = tabId === "report"
        ? unlocked.filter((f) => path(f).startsWith("reports/"))
        : unlocked.filter((f) => path(f) === `wk${view.week}/${tabId === "tutorial" ? "tut" : "ctf"}.md`);
        $("body").innerHTML = `<p><button class="btn" id="lock">Lock</button></p>` + (files.length
        ? files.map((f) => `<div class="notes">${md(f.text)}</div>`).join("<hr>")
        : `<div class="empty">Nothing here yet.</div>`);
        $("lock").onclick = () => { unlocked = null; draw(); };
        return;
    }
  $("body").innerHTML = `
    <div class="locked">
      <h4>Locked</h4>
      <p>${LOCKED[tabId]}</p>
      <p class="muted">i'd love to share but i can't due to course policy so they're locked for only me to see...unless you can guess the passphrase (you can't) and its not 'password'.</p>
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
  const out = []; let list = null, code = false, para = [], table = null;
  const inline = (t) => esc(t)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  const endList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  const endTable = () => { if (table) { out.push(table.join("") + "</table>"); table = null; } };
  const flush = () => { if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; } endList(); endTable(); };
  for (const line of src.split("\n")) {
    if (line.startsWith("```")) { flush(); out.push(code ? "</code></pre>" : "<pre><code>"); code = !code; continue; }
    if (code) { out.push(esc(line) + "\n"); continue; }
    const h = line.match(/^#{1,3}\s+(.*)/), ul = line.match(/^\s*[-*]\s+(.*)/), ol = line.match(/^\s*\d+[.)]\s+(.*)/);
    const row = line.trim().startsWith("|") ? line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()) : null;
    if (row) {
      if (para.length || list) { const t = table; table = null; flush(); table = t; }
      if (row.every((c) => /^:?-{2,}:?$/.test(c))) continue;
      if (!table) { table = ["<table>"]; table.push("<tr>" + row.map((c) => `<th>${inline(c)}</th>`).join("") + "</tr>"); }
      else table.push("<tr>" + row.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>");
      continue;
    }
    endTable();
    if (h) { flush(); out.push(`<h4>${inline(h[1])}</h4>`); }
    else if (ul || ol) {
      const tag = ul ? "ul" : "ol";
      if (para.length) { const p = para; para = []; out.push(`<p>${inline(p.join(" "))}</p>`); }
      if (list !== tag) { endList(); out.push(`<${tag}>`); list = tag; }
      out.push(`<li>${inline((ul || ol)[1])}</li>`);
    }
    else if (line.startsWith("> ")) { flush(); out.push(`<blockquote>${inline(line.slice(2))}</blockquote>`); }
    else if (!line.trim()) flush();
    else { endList(); para.push(line); }
  }
  flush(); if (code) out.push("</code></pre>");
  return out.join("");
}

const G = window.GLOSSARY || { items: [], terms: [] };
const ITEM = new Map(G.items.map((it, i) => [it[0], i]));
const TERM_MAP = new Map(G.terms.map(([word, name]) => [word, ITEM.get(name)]));
const TERM_RE = G.terms.length ? new RegExp("(?<![A-Za-z0-9_$\\\\./-])(" +
  G.terms.map(([f]) => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![A-Za-z0-9_])", "g") : null;

function linkify(root) {
  if (!TERM_RE || !root) return;
  const seen = new Set(), nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    if (node.parentNode.closest(".t, code, pre, svg, th")) continue;
    const text = node.nodeValue; let m, last = 0, frag = null;
    TERM_RE.lastIndex = 0;
    while ((m = TERM_RE.exec(text))) {
      const i = TERM_MAP.get(m[1]);
      if (i === undefined || seen.has(i)) continue;   
      seen.add(i);
      frag = frag || document.createDocumentFragment();
      frag.append(text.slice(last, m.index));
      const s = document.createElement("span");
      s.className = "t"; s.dataset.g = i; s.textContent = m[1];
      frag.append(s); last = m.index + m[1].length;
    }
    if (frag) { frag.append(text.slice(last)); node.replaceWith(frag); }
  }
}

const tip = document.createElement("div");
tip.id = "tip";
document.body.appendChild(tip);
function showTip(el) {
  const [name, what, why] = G.items[+el.dataset.g];
  tip.innerHTML = `<b>${esc(name)}</b><p>${esc(what)}</p><p><i>Why it matters:</i> ${esc(why)}</p>`;
  tip.style.display = "block";
  const r = el.getBoundingClientRect();
  tip.style.left = Math.min(Math.max(8, r.left), window.innerWidth - tip.offsetWidth - 8) + "px";
  tip.style.top = (r.bottom + 8 + tip.offsetHeight < window.innerHeight ? r.bottom + 8 : r.top - tip.offsetHeight - 8) + "px";
}
function hideTip() { tip.style.display = "none"; }
document.addEventListener("mouseover", (e) => { const t = e.target.closest(".t"); if (t) showTip(t); });
document.addEventListener("mouseout", (e) => { if (e.target.closest(".t")) hideTip(); });
document.addEventListener("click", (e) => {            
  const t = e.target.closest(".t");
  if (t) { e.stopPropagation(); showTip(t); } else hideTip();
}, true);
window.addEventListener("scroll", hideTip);

draw();
