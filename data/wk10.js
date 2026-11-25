window.CONTENT = window.CONTENT || {};
CONTENT[10] = {
  "professional": {
    "notes": "<h4>The mock trial</h4>\n<p>Monday was a mock civil trial, with students as expert witnesses. Questions like the ones asked there are good examples of exam questions.</p>\n<p><b>Answer every one in four steps:</b></p>\n<ol>\n<li><b>Define</b> it.</li>\n<li>Say <b>why it exists</b> and <b>why it matters</b> to the case.</li>\n<li>Say <b>how you used or checked it</b>.</li>\n<li>Give a <b>limitation</b>.</li>\n</ol>\n<p>Example, the page file: (1) where Windows moves memory to disk when RAM is full; (2) it can hold passwords, URLs, images, even private browsing; (3) search it with strings, keywords or carving; (4) no timestamps for its contents, so it can't tell you <i>when</i>.</p>\n\n<h4>Questions to be ready for</h4>\n<table>\n<tr><th>Question</th><th>Short answer</th></tr>\n<tr><td><b>What is a hash?</b></td><td>A one-way function (MD5, SHA-1, SHA-256) giving a fixed-length fingerprint. Change one bit and it's completely different. Used for integrity (acquisition hash = verification hash), finding known files even if renamed, and removing duplicates.</td></tr>\n<tr><td><b>What is a bit-for-bit copy?</b></td><td>A physical image of every sector from the first to the last: used, unused, slack, unpartitioned and hidden areas. Proven by hashing both source and image.</td></tr>\n<tr><td><b>What is the registry, and why does it exist?</b></td><td>Windows' central settings database, replacing scattered settings files. It records activity as a side effect (USBs, programs run, time zone, accounts), which is why it's useful to us.</td></tr>\n<tr><td><b>What's in each hive?</b></td><td>SAM: accounts, logins, password hashes. SYSTEM: control sets, time zone, USBs, services. SOFTWARE: OS, install date, programs, Run keys, auto-login settings, SID → profile path. SECURITY: policy, stored secrets. NTUSER.DAT: that user's activity (UserAssist, recent docs, MountPoints2).</td></tr>\n<tr><td><b>What happens when a PC is locked?</b></td><td>Everything keeps running (memory, programs, connections), but you can't use it without the password. So think before switching it off: you'd lose memory.</td></tr>\n<tr><td><b>Does the account have a password?</b></td><td>SAM V value: the hash length shows if one is set. Also check auto-login (SOFTWARE Winlogon) and whether the screen lock needs a password (NTUSER). If it logs in automatically with no lock, anyone at the keyboard <i>is</i> that account.</td></tr>\n<tr><td><b>What is a log file?</b></td><td>A record of events over time: when, who, what, result. Exists for troubleshooting and auditing. Check its time zone, format, and whether it's complete (retention, rotation, tampering).</td></tr>\n<tr><td><b>Why did you pick that time zone for your timeline?</b></td><td>To put every source on one clock. Choose the case's zone, confirmed from the registry (Select\\Current → TimeZoneInformation). Note which sources are UTC (NTFS, registry, captures) and which are local (FAT32, some logs), and convert each.</td></tr>\n<tr><td><b>How are Autopsy paths different from Windows paths?</b></td><td>Autopsy shows paths relative to the image and volume, with forward slashes and no drive letter (e.g. <code>/disk.e01/vol_vol3/Users/…</code>). Convert to <code>C:\\Users\\…</code> in a report. It also shows things Explorer hides ($MFT, $Unalloc, orphan and carved files).</td></tr>\n<tr><td><b>TCP, UDP, TLS, DNS?</b></td><td>TCP: reliable, ordered, handshake. UDP: fast, no guarantees. TLS: encryption on top of TCP (HTTPS, port 443). DNS: turns names into IPs (port 53).</td></tr>\n<tr><td><b>Why does DNS matter in a case?</b></td><td>It shows which sites were looked up and when, even if the traffic after is encrypted. Helps the timeline and corroborates browser history. Limit: encrypted DNS hides it.</td></tr>\n<tr><td><b>How can you tell incognito mode was used?</b></td><td>Mostly by absence plus other traces: DNS or proxy logs with no matching history, remnants in memory and the page file, leftover downloads. Give each one's limits.</td></tr>\n<tr><td><b>Type I vs Type II error?</b></td><td>Type I = false positive (innocent thing flagged). Type II = false negative (missing something real, e.g. \"no evidence found\" when it's there).</td></tr>\n</table>\n<p>Know how each tool <b>works</b> (Autopsy modules, Wireshark statistics, Volatility plugins, Registry Explorer), not just which buttons to press.</p>\n\n<h4>Lessons for written answers</h4>\n<ol>\n<li>Proof-read the basics: names, dates, time zone on the cover.</li>\n<li><b>One account isn't one person</b> (auto-login, no screen lock, shared passwords).</li>\n<li>Make a <b>time zone table</b> for every source. Check the control set, the sign of the Bias, and daylight saving dates.</li>\n<li><b>Corroborate</b> disk evidence with network or memory evidence.</li>\n<li><b>Absence</b> of evidence means something, but isn't proof.</li>\n<li>Use every piece of evidence you're given, or say why you didn't.</li>\n<li>Run a <b>keyword search</b>, or explain why not.</li>\n<li>Check <b>more than one</b> execution artefact (Prefetch and UserAssist).</li>\n<li>Don't claim more than the evidence shows.</li>\n</ol>",
    "cards": [
      [
        "What four steps should every mock-trial-style answer have?",
        "<b>Define</b> it → why it <b>exists</b> and why it <b>matters</b> → how you <b>used or checked</b> it → a <b>limitation</b>."
      ],
      [
        "What is a hash, and why is it important?",
        "A one-way function giving a fixed-length fingerprint; one bit changed = totally different hash. Uses: integrity (acquisition = verification), finding known files even if renamed, de-duplication, matching leaked files."
      ],
      [
        "What is a bit-for-bit copy?",
        "A physical image of every sector, first to last: used, unused, slack, unpartitioned and hidden areas. Verified by hashing source and image."
      ],
      [
        "What is the registry, and why does it exist?",
        "Windows' central database of settings and state, replacing scattered settings files. It records activity as a side effect (USBs, programs, time zone, accounts)."
      ],
      [
        "What happens when a PC is locked, and why does it matter?",
        "Everything keeps running (memory, programs, connections) but you can't interact without the password. Switching it off loses memory, so decide carefully."
      ],
      [
        "How can you tell if an account has a password, and whether it logs in automatically?",
        "SAM <b>V</b> value hash length shows a password is set. SOFTWARE <b>Winlogon</b> shows auto-login; NTUSER shows whether the screen lock needs a password."
      ],
      [
        "What is a page file?",
        "<code>pagefile.sys</code>: where Windows moves memory to disk when RAM is full. Can hold URLs, passwords, private browsing. <b>No timestamps</b> for its contents. Search with strings, keywords, carving."
      ],
      [
        "What is a log file, and what do you check about it?",
        "A time-ordered record of events (when, who, what, result) for troubleshooting and auditing. Check its time zone, format and completeness (retention, rotation, tampering)."
      ],
      [
        "Why choose one time zone for your timeline?",
        "To put every source on one clock. Use the case's zone (confirmed via Select\\Current → TimeZoneInformation), and convert each UTC or local source to it."
      ],
      [
        "Autopsy path vs Windows path?",
        "Autopsy: relative to the image and volume, forward slashes, no drive letter (<code>/disk.e01/vol_vol3/Users/…</code>). Report it as <code>C:\\Users\\…</code>."
      ],
      [
        "Why does DNS matter in a case?",
        "Shows which sites were looked up and when, even when later traffic is encrypted. Helps timelines and corroboration. Limit: encrypted DNS hides it."
      ],
      [
        "How can you tell incognito/private browsing was used?",
        "Mostly by absence plus other traces: DNS/proxy logs with no matching history, remnants in memory and the page file, leftover downloads. State each one's limits."
      ],
      [
        "Type I vs Type II error.",
        "<b>Type I:</b> false positive (innocent thing flagged). <b>Type II:</b> false negative (missing something real)."
      ],
      [
        "\"One account isn't one person.\" What evidence shows this?",
        "Auto-login enabled, no screen lock, shared passwords: anyone at the keyboard becomes that account. Back it up with physical evidence (access logs, CCTV, interviews)."
      ]
    ]
  },
  "practice": {
    "notes": "<h4>Reading a tool screenshot</h4>\n<p>Ask four things every time:</p>\n<ol>\n<li><b>Which tool</b> is this?</li>\n<li><b>Which artefact</b> is it showing?</li>\n<li><b>Which fields</b> matter?</li>\n<li><b>What does it prove</b>, and what <b>can't</b> it prove?</li>\n</ol>\n<p>Then convert any UTC time to the case's time zone, and say what you'd check next.</p>\n\n<table>\n<tr><th>Screenshot</th><th>Read</th><th>Watch for</th></tr>\n<tr><td><b>FTK Imager / ewfinfo</b> summary</td><td>Acquisition vs verification hash, sector count × bytes per sector, bad sectors, tool, version, times, examiner</td><td>Hashes match = exact copy. Fewer sectors than the drive reports = hidden area (HPA/DCO) or bad sectors</td></tr>\n<tr><td><b>mmls</b> (partition table)</td><td>\"DOS\" = MBR (GPT says GUID). Start = the offset for other TSK tools. Length × 512 = size</td><td>\"Unallocated\" rows = unpartitioned space. A 1 MiB gap at the start is normal; a big gap elsewhere isn't. Last sector + 1, × 512 = image size</td></tr>\n<tr><td><b>fsstat</b></td><td>Cluster size ÷ sector size = sectors per cluster; MFT record size; volume serial</td><td>The volume serial also appears in LNK files: it links files to that drive</td></tr>\n<tr><td><b>istat</b> (one MFT record)</td><td>$SI and $FN times, allocated or not, resident or not</td><td>$SI earlier than $FN = copied with old times kept, or timestomped. Times ending .0000000 = set by a tool</td></tr>\n<tr><td><b>Hex view</b></td><td>Left: offset. Middle: bytes. Right: text</td><td>First bytes vs extension: <code>89 50 4E 47</code> = PNG, <code>50 4B 03 04</code> = ZIP, <code>FF D8 FF</code> = JPEG, <code>25 50 44 46</code> = PDF, <code>4D 5A</code> = EXE</td></tr>\n<tr><td><b>FAT32 directory entry</b></td><td>First byte <code>E5</code> = deleted (first letter lost). Start cluster and size are <b>little-endian</b> (read bytes backwards)</td><td>Chain is wiped, so assume the file sits in consecutive clusters from the start cluster; check they're free; if not, carve</td></tr>\n<tr><td><b>Autopsy OS Accounts</b></td><td>RID 500 Administrator, 501 Guest, 1000+ real users; logins; enabled/disabled</td><td>One active account ≠ one person</td></tr>\n<tr><td><b>Registry Explorer</b>: time zone</td><td>Select\\Current first. Bias in hex may be negative (two's complement): <code>0xFFFFFDA8</code> = −600 → UTC+10</td><td>Daylight saving only applies between its dates</td></tr>\n<tr><td><b>USB keys</b> (USBSTOR, MountedDevices, MountPoints2)</td><td>Device and serial; drive letter; which user</td><td>Can't show which files were copied. Need setupapi.dev.log for first connection and LNKs for files opened</td></tr>\n<tr><td><b>Recycle Bin</b></td><td>$I/$R pair, SID folder</td><td>The SID's RID = who deleted it. Deletion time in $I is UTC</td></tr>\n<tr><td><b>Prefetch / UserAssist</b></td><td>Run count, last run</td><td>One without the other is possible: check both</td></tr>\n<tr><td><b>Web history</b></td><td>URL (search words are in <code>q=</code>), visit time</td><td>Chrome time = microseconds since 1601; Firefox = microseconds since 1970. A visit isn't proof of intent</td></tr>\n<tr><td><b>Volatility imageinfo / pslist / netscan</b></td><td>Profile (match the service pack), image time, PIDs, parents, connections</td><td>Wrong parent, duplicate system process, late start, odd port (e.g. 4444) = suspicious</td></tr>\n<tr><td><b>Wireshark</b> packet list / Conversations</td><td>DNS names, TLS site name (SNI), frame sizes, byte counts each way</td><td>1,514-byte frames = a big transfer. Big <i>download</i> isn't exfiltration: check which direction the bytes went. NBNS announces the computer name</td></tr>\n<tr><td><b>Splunk</b> results</td><td>Status codes, counts, times</td><td>Many 401s then a 200 = brute force that worked; the first 200 is the break-in time</td></tr>\n<tr><td><b>iLEAPP / ALEAPP</b></td><td>Serial, IMEI, bundle IDs</td><td>Fake app names (vaults), Cydia/Sileo = jailbreak</td></tr>\n<tr><td><b>Procmon</b></td><td>Time, process, PID, operation, path, result</td><td>No packet contents: pair with Wireshark</td></tr>\n</table>\n\n<h4>Following a file through NTFS</h4>\n<p>A favourite long question: walk a small file through creation, deletion and reuse. The marks are in naming each structure that changes.</p>\n<p><b>1. A tiny file is created</b> (e.g. 500 bytes)</p>\n<ul>\n<li>A free MFT record is found using the <b>MFT's own bitmap</b> (which records are free). It's marked in use.</li>\n<li><b>$STANDARD_INFORMATION</b>: four times set to now (UTC). <b>$FILE_NAME</b>: name, parent folder, its own four times.</li>\n<li>The parent folder's index is updated to list it.</li>\n<li>It's small enough to be <b>resident</b>: the content sits <b>inside the MFT record</b> (records are usually 1,024 bytes). So <b>no clusters</b> are used and <b>$Bitmap doesn't change</b>.</li>\n</ul>\n<p><b>2. It's deleted</b> (permanently, not via the Recycle Bin)</p>\n<ul>\n<li>The record is marked <b>not in use</b> in the MFT bitmap, and it's removed from the folder's index.</li>\n<li>$Bitmap doesn't change (it never had clusters).</li>\n<li><b>Nothing is wiped.</b> The 500 bytes are still in the record until it's reused.</li>\n</ul>\n<p><b>3. A bigger file reuses that record</b> (e.g. 3,000 bytes, 4,096-byte clusters)</p>\n<ul>\n<li>Record marked in use again; its <b>sequence number goes up by one</b> (that's how you tell it's been reused).</li>\n<li>New $SI and $FN times and name.</li>\n<li>Too big to be resident, so <b>non-resident</b>: a free cluster is found, its <b>$Bitmap bit set to 1</b>, and a <b>cluster run</b> recorded (start cluster, length 1).</li>\n<li>Slack: 4,096 − 3,000 = 1,096 bytes.\n<ul>\n<li>With 512-byte sectors: the rest of the last sector is <b>RAM slack</b> (zeroed), the remaining whole sectors are <b>drive slack</b> (old data left as is).</li>\n<li>With 4,096-byte sectors (sector = cluster): it's all RAM slack, zeroed, so <b>no drive slack</b>.</li>\n</ul></li>\n<li>Bits of the old 500-byte content may survive at the <b>end of the MFT record</b>, after the new record's end marker.</li>\n<li>A record never goes back from non-resident to resident.</li>\n</ul>\n<p><b>Checklist:</b> MFT bitmap vs $Bitmap · $SI vs $FN · resident vs non-resident · cluster runs · $Bitmap bit set or cleared · nothing wiped · sequence number · slack (does drive slack exist?) · leftovers in the record.</p>\n\n<h4>\"Clearing browser history stops recovery\"? False</h4>\n<p>Give at least three places it survives:</p>\n<ul>\n<li>Deleted rows inside the history database (free pages, the -wal file)</li>\n<li>Unallocated space and slack; cache and cookies</li>\n<li>DNS cache; LNK files and Jump Lists; Zone.Identifier on downloads; Prefetch</li>\n<li>Page file, hibernation file and memory; Volume Shadow Copies</li>\n<li>Synced accounts on other devices</li>\n<li>Off the computer: proxy, firewall and DNS logs, packet captures, the ISP, the website's own logs</li>\n</ul>\n\n<h4>Analysing a network log</h4>\n<ol>\n<li><b>Preserve:</b> hash the file, work on a copy.</li>\n<li><b>Load</b> it into Splunk (or a spreadsheet) and check it parsed properly.</li>\n<li><b>Normalise</b> the times to one zone.</li>\n<li><b>Baseline</b> normal, then look for: failures then a success, big outbound transfers, odd ports, off-hours activity, new destinations, regular beacons.</li>\n<li><b>Group and count</b> (<code>stats count by src_ip, status</code> or a pivot table / COUNTIFS) → sort → set a threshold. Turns thousands of rows into a ranked list, and is repeatable.</li>\n<li><b>Chart</b> it: a line or column chart over time (spikes, off-hours, regular beacons; easy for a court), plus a bar chart of top IPs. Avoid pie charts.</li>\n<li><b>Corroborate</b>: unusual isn't proof. It might be a backup or an update.</li>\n</ol>\n<p>Unusual traffic can mean a breach, theft of data, ransomware getting ready, or an insider. If personal data left, there may be a duty to notify (OAIC).</p>\n\n<h4>Incident response: tricks for dynamic analysis</h4>\n<table>\n<tr><th>Problem</th><th>Trick</th></tr>\n<tr><td>Running malware safely</td><td>A virtual machine with a <b>snapshot</b> and no real data. Start Procmon (filtered to the sample) and Wireshark <b>before</b> running it.</td></tr>\n<tr><td>Which folder does it read? Which file does it write? Which registry key does it check?</td><td>Procmon Operation column: <code>QueryDirectory</code> / <code>ReadFile</code>; <code>WriteFile</code>; <code>RegOpenKey</code> / <code>RegQueryValue</code></td></tr>\n<tr><td>It never connects anywhere</td><td>It can't connect if its server name won't resolve: no DNS answer, no TCP. Point the name at a local IP in the <b>hosts file</b> (or use a fake DNS/internet tool like INetSim or FakeNet), then watch Procmon <code>TCP Connect</code> or Wireshark for the port</td></tr>\n<tr><td>What server name does it use?</td><td>Wireshark filter <code>dns</code> while it runs, or <code>strings</code> on the file</td></tr>\n<tr><td>Its User-Agent</td><td>Not in Procmon. Once it can connect, read the HTTP header in Wireshark</td></tr>\n<tr><td>Encrypted output</td><td>Find the key and method: static (strings, Ghidra) or dynamic (a file or registry value it writes may hold the key)</td></tr>\n<tr><td>Scrambled JavaScript</td><td>Tidy it with a beautifier, swap <code>eval</code> for <code>console.log</code>, run it in a sandbox and step through. If it's XORed and you know how the answer starts, XOR with that known text to recover the key</td></tr>\n<tr><td>How did an attacker get into a Linux server?</td><td><code>/var/log/auth.log</code> (logins, brute force), web server logs (exploits, uploads), <code>.bash_history</code>, cron jobs, recently changed files (<code>find / -mmin -60</code>), new users and <code>authorized_keys</code></td></tr>\n</table>",
    "cards": [
      [
        "The four questions for any tool screenshot.",
        "Which <b>tool</b>? Which <b>artefact</b>? Which <b>fields</b> matter? What does it <b>prove</b>, and what <b>can't</b> it?"
      ],
      [
        "FTK Imager summary: what do you check?",
        "Acquisition and verification hashes match (exact copy); sector count × sector size vs the drive's real size (shortfall = HPA/DCO or bad sectors); bad sectors; tool, version, times."
      ],
      [
        "mmls shows an \"Unallocated\" row of 2,048 sectors at the start. Suspicious?",
        "No: a 1 MiB gap after the MBR is normal alignment. A large gap between or after partitions is worth checking (unpartitioned space)."
      ],
      [
        "istat: $SI Created is a year <b>earlier</b> than $FN Created. Why?",
        "The file was copied or extracted keeping its original times, <b>or</b> $SI was timestomped. Times ending .0000000 suggest a tool set them. $FN is the more reliable \"arrived here\" time."
      ],
      [
        "A file named .zip starts with <code>89 50 4E 47</code>. What is it?",
        "A <b>PNG</b> renamed to .zip (a ZIP starts <code>50 4B 03 04</code>). Extension mismatch: hiding in plain sight."
      ],
      [
        "FAT32 directory entry starts <code>E5</code>, start cluster bytes <code>07 00</code>, size bytes <code>00 20 00 00</code>. Read it.",
        "<b>E5</b> = deleted (first letter lost). Little-endian: start cluster <b>7</b>; size <b>0x2000 = 8,192 B</b> = 2 clusters of 4 KB. Assume clusters 7–8, check they're free, extract; carve if fragmented."
      ],
      [
        "Registry Bias = <code>0xFFFFFDA8</code>. What time zone?",
        "Two's complement: <b>−600</b> minutes. UTC = local + Bias, so local = <b>UTC+10</b> (plus daylight saving only between its dates)."
      ],
      [
        "USB keys show device, serial, drive letter and user. What <b>can't</b> they show?",
        "<b>Which files were copied.</b> Use setupapi.dev.log for first connection and LNK files for files opened from it."
      ],
      [
        "Wireshark Conversations: 10 GB from the outside server to the laptop, 30 MB back. Exfiltration?",
        "<b>No</b>: that's a big <b>download</b>. The 30 MB is mostly acknowledgements. Exfiltration = big bytes from <b>inside → outside</b>."
      ],
      [
        "Splunk: hundreds of 401s for one user from one IP, then a 200, then an export. What happened, and what do you do?",
        "A brute force that <b>succeeded</b> at the first 200 (compromise time), followed by data export. Block the IP, reset the password and add MFA, review what was exported, preserve and hash the logs, hunt for the IP elsewhere."
      ],
      [
        "NTFS: what happens when a 500-byte file is created?",
        "Free MFT record found via the <b>MFT bitmap</b>, marked in use; $SI and $FN set; parent index updated; content <b>resident</b> in the record, so <b>no clusters</b> used and <b>$Bitmap unchanged</b>."
      ],
      [
        "NTFS: what happens when that resident file is deleted?",
        "Record marked not in use (MFT bitmap), removed from the folder index, $Bitmap unchanged, <b>nothing wiped</b>: content recoverable until the record is reused."
      ],
      [
        "NTFS: a 3,000-byte file reuses the record (4 KB clusters). What changes?",
        "Marked in use, <b>sequence number +1</b>; new $SI/$FN; <b>non-resident</b>: a cluster allocated (<b>$Bitmap bit → 1</b>) and a cluster run recorded; 1,096 B slack; old content may linger at the end of the record."
      ],
      [
        "Sector size = cluster size (both 4,096). What does that mean for slack?",
        "All slack is <b>RAM slack</b> (rest of the one sector), zero-filled, so there's <b>no drive slack</b>."
      ],
      [
        "MFT bitmap vs $Bitmap.",
        "<b>MFT bitmap</b> (inside $MFT): which MFT <b>records</b> are free. <b>$Bitmap</b> (a file): which <b>clusters</b> are free."
      ],
      [
        "\"Clearing browser history prevents recovery.\" True?",
        "<b>False.</b> Deleted database rows (free pages, -wal), unallocated/slack, cache, DNS cache, LNK/Jump Lists, Prefetch, page file and memory, shadow copies, synced devices, proxy/firewall/ISP logs."
      ],
      [
        "Which Splunk/Excel function turns a huge log into suspects, and which chart shows it?",
        "A <b>group-by count</b> (<code>stats count by src_ip</code> / pivot, COUNTIFS) → sort → threshold. Chart: <b>line/column over time</b> plus a <b>bar chart of top IPs</b>. Avoid pie charts."
      ],
      [
        "Malware won't connect because its server name doesn't resolve. How do you see which port it uses?",
        "Make the name resolve: add it to the <b>hosts file</b> pointing at a local IP (or use a fake DNS like INetSim/FakeNet), then watch Procmon <code>TCP Connect</code> or Wireshark for the port."
      ],
      [
        "Procmon: which operations show folders read, files written and registry keys checked?",
        "<code>QueryDirectory</code>/<code>ReadFile</code>; <code>WriteFile</code>; <code>RegOpenKey</code>/<code>RegQueryValue</code>."
      ],
      [
        "How do you deobfuscate a scrambled JavaScript sample?",
        "Beautify it, replace <code>eval</code> with <code>console.log</code>, run it in a sandbox and step through. If XORed and you know how the plaintext starts, XOR with that to get the key."
      ],
      [
        "Linux server compromised: where do you look first?",
        "<code>/var/log/auth.log</code>, web server logs, <code>.bash_history</code>, cron jobs, recently changed files (<code>find / -mmin</code>), new users and <code>authorized_keys</code>."
      ]
    ]
  }
};