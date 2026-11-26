window.CONTENT = window.CONTENT || {};
CONTENT[9] = {
  "professional": {
    "notes": "<p>No Monday lecture this week.</p>",
    "cards": []
  },
  "technical": {
    "notes": "<h4>Revision: how answers earn marks</h4>\n<ul>\n<li>An <b>X-mark question wants about X separate points</b>, each <b>explained</b> (why it matters), not just listed. Listing the five USB artefacts gets you little; explaining where each lives, what it holds and how they link gets full marks.</li>\n<li>For scenarios, <b>write your thought process</b> and <b>state assumptions</b> (\"I'll assume the PC was on and unlocked, so…\").</li>\n<li>Use the five-step method as a skeleton: <b>Prepare → Secure and seize → Preserve → Analyse → Report</b>, saying <i>why</i> at each step (e.g. why physical over logical).</li>\n<li>Be <b>specific</b>: \"which hive?\" → \"SYSTEM\", not a vague area.</li>\n<li>Mention <b>backstops</b>: a second tool, the raw hex, a second artefact.</li>\n<li>Explain like it's for a jury: say what an artefact <i>is</i> before what it <i>shows</i>.</li>\n<li>For a tool screenshot: which tool, which artefact, which fields matter, what it proves and what it can't.</li>\n<li>Multiple-answer multiple choice: wrong ticks cost marks, so only tick what you're sure of.</li>\n</ul>\n\n<h4>Revision: what a good investigator does</h4>\n<ul>\n<li><b>Pulls on every string:</b> time zone, custody, hashes, keywords, deleted data, recent files, web history, then a timeline.</li>\n<li><b>Corroborates:</b> web history → network capture → memory (was the process running and talking to that site?).</li>\n<li><b>Validates</b> results and assumptions, including what they've been told.</li>\n<li><b>Understands the scope</b> and their role vs the investigator's.</li>\n<li><b>Can explain every artefact</b> they mention to a lay person.</li>\n<li><b>Tells one clear story</b> in time order.</li>\n</ul>\n<p><b>Same fact, three readings:</b> \"explicit material was found on the computer\".</p>\n<ul>\n<li>A lay person takes it at face value.</li>\n<li>An IT person knows it was in the browser cache.</li>\n<li>A forensic analyst considers the alternatives (pop-ups, malware, redirects), then checks and corroborates.</li>\n</ul>\n\n<h4>Revision: quick facts worth having ready</h4>\n<ul>\n<li><b>E01:</b> header and every data block sealed with a CRC; the MD5/SHA1 covers <b>data blocks only</b>, so it matches a raw copy of the original. Faking it would need a hash collision <i>and</i> CRC collisions at once.</li>\n<li><b>Acquisition form:</b> model and serials (PC and disk), start and stop times, hashes, sign-off by a second person.</li>\n<li><b>Physical / logical / LEF:</b> whole disk / one partition / chosen files (a sealed container with its own hashes; no slack at all).</li>\n<li><b>Journal entry for a removed disk:</b> photos in place and of the label; make, model, serial; size, type (HDD/SSD), interface; <b>LBA / total sector count</b> (sectors imaged must match it, or there may be a hidden area like HPA/DCO); times; hash; tool and version; bag number. Say <i>why</i> for each.</li>\n<li><b>$Bitmap</b> is a file (one bit per cluster). <b>Drive slack</b> = untouched whole sectors in the last cluster (bigger, more useful). <b>RAM slack</b> = rest of the last sector, zero-filled.</li>\n<li>The alternative to indexing is <b>raw string searching</b>.</li>\n<li><b>Memory</b> won't hold files that haven't been opened since boot. Look on disk (MFT) for those.</li>\n<li><b>Local account details</b> (last login, created, home folder) are in the <b>SAM</b> hive.</li>\n<li><b>Memory image + suspicious network traffic:</b> pick the profile (match the service pack) → netscan → PID → pslist/pstree → check against normal → dump → hash → VirusTotal.</li>\n<li><b>Timeline without Prefetch:</b> browser runs → file appears in Downloads → that program's times update → burst of new files = it was installed. Then confirm with Prefetch.</li>\n<li><b>Password attacks:</b> brute force (every combination), dictionary (a list of likely passwords), rainbow table (precomputed hash → password lookups, beaten by <b>salting</b>).</li>\n<li><b>Base64</b> is encoding, not encryption. <b>Unix epoch</b> = seconds since 1 Jan 1970.</li>\n</ul>\n\n\n<h4>Detection engineering</h4>\n<ul>\n<li>Writing and tuning <b>rules</b> so attacks raise <b>alerts</b> automatically.</li>\n<li>Why automate: people are slow, inconsistent, get alert fatigue, and can't watch everything all night.</li>\n</ul>\n<p><b>Why it's hard</b></p>\n<ol>\n<li><b>Many log sources</b>, some you have to pull, some push, some don't log at all → <b>centralise</b> them</li>\n<li><b>Many formats</b> (JSON, CSV, plain text; events split over lines; commas or spaces inside fields) → <b>normalise</b> (e.g. the OCSF standard field names)</li>\n<li><b>Missing or poor logs</b></li>\n<li><b>Different time formats</b></li>\n<li><b>Different time zones</b> → convert everything to <b>UTC</b></li>\n</ol>\n\n<h4>The tools</h4>\n<table>\n<tr><th>Type</th><th>Examples</th><th>Does</th></tr>\n<tr><td><b>SIEM</b></td><td>Splunk, QRadar, Elastic</td><td>Collects logs from everywhere, searches, correlates, alerts</td></tr>\n<tr><td><b>IDS</b></td><td>Snort, Suricata</td><td>Watches network traffic against signatures</td></tr>\n<tr><td></td><td>Zeek</td><td>Turns traffic into tidy connection logs</td></tr>\n<tr><td><b>Rule formats</b></td><td>Sigma</td><td>Log detection rules that work in any SIEM</td></tr>\n<tr><td></td><td>YARA</td><td>Patterns for files and memory</td></tr>\n</table>\n\n<h4>Reading web logs</h4>\n<table>\n<tr><th>Status</th><th>Means</th><th>Pattern to watch</th></tr>\n<tr><td>200</td><td>OK</td><td>200 on an admin page with no login first = possible bypass</td></tr>\n<tr><td>301 / 302</td><td>Redirect</td><td></td></tr>\n<tr><td>401</td><td>Not logged in / wrong password</td><td>Lots from one IP = brute force</td></tr>\n<tr><td>403</td><td>Forbidden</td><td>Repeated by one user agent = a blocked crawler or scanner</td></tr>\n<tr><td>404</td><td>Not found</td><td>Many in a row = someone probing for pages</td></tr>\n<tr><td>500</td><td>Server error</td><td>Odd input crashing the app (injection attempts)</td></tr>\n</table>\n\n<h4>Doing it in Splunk</h4>\n<p>A search is a <b>pipeline</b>: find events, then pass them through <code>|</code> commands, left to right.</p>\n<pre>index=web status=401 | stats count by clientip | sort - count</pre>\n<p>= \"failed logins, counted per IP, biggest first\".</p>\n<table>\n<tr><th>Command</th><th>Does</th><th>Example</th></tr>\n<tr><td>search terms</td><td>Filter events</td><td><code>index=web status=403 uri=\"/admin*\"</code></td></tr>\n<tr><td><code>stats count by X</code></td><td>Count per value</td><td><code>| stats count by useragent</code></td></tr>\n<tr><td><code>stats dc(X)</code></td><td>Number of <b>different</b> values</td><td><code>| stats dc(clientip)</code></td></tr>\n<tr><td><code>top</code></td><td>Most common values</td><td><code>| top limit=5 clientip</code></td></tr>\n<tr><td><code>sort - X</code></td><td>Sort, biggest first</td><td><code>| sort - count</code></td></tr>\n<tr><td><code>head N</code></td><td>First N results</td><td><code>| head 1</code></td></tr>\n<tr><td><code>table</code></td><td>Show chosen fields</td><td><code>| table _time clientip uri status</code></td></tr>\n<tr><td><code>timechart</code></td><td>Counts over time</td><td><code>| timechart span=1h count by status</code></td></tr>\n<tr><td><code>rex</code></td><td>Pull a field out with a regex</td><td><code>| rex \"user=(?&lt;user&gt;\\w+)\"</code></td></tr>\n<tr><td><code>where</code></td><td>Filter on a calculated value</td><td><code>| where count &gt; 50</code></td></tr>\n</table>\n<p>Use wildcards in values: <code>useragent=\"*Googlebot*\"</code>. Combine with <code>AND</code> / <code>OR</code> / <code>NOT</code> (in capitals) and brackets.</p>\n\n<h4>What to search for</h4>\n<table>\n<tr><th>Attack</th><th>What it looks like</th><th>Splunk idea</th></tr>\n<tr><td><b>Brute force</b></td><td>Many failures from one IP or on one user, then a <b>success</b>. The success is the break-in.</td><td><code>status=401 | stats count by clientip, user</code>, then search that IP for a 200 after</td></tr>\n<tr><td><b>User enumeration</b></td><td>Many different usernames tried; real ones get a different reply (\"wrong password\" vs \"no such user\", or a different size)</td><td><code>| stats dc(user) by clientip</code>, then compare responses</td></tr>\n<tr><td><b>Auth bypass</b></td><td>200s on protected pages with no login before; odd parameters like <code>../</code>, <code>' OR 1=1--</code>, <code>admin=true</code></td><td><code>uri=\"/admin*\" status=200</code> and check those IPs never logged in</td></tr>\n<tr><td><b>Unusual access</b></td><td>An IP or account that doesn't normally touch internal documents (baseline vs anomaly)</td><td><code>uri=\"/internal/*\" | stats count by clientip</code>: the rare one stands out</td></tr>\n<tr><td><b>Phishing</b></td><td>Look-alike domains (typos of real ones), logins POSTed to outside sites</td><td>Search referrers and destinations for near-miss domain names</td></tr>\n<tr><td><b>Bad program</b></td><td>A system program name whose hash isn't on the known-good list</td><td>Compare hashes against the list (a hash set, Week 3)</td></tr>\n<tr><td><b>Fake bots</b></td><td>\"Googlebot\" user agent from an IP that isn't Google's (check with reverse DNS); bots hitting 403s</td><td><code>useragent=\"*Googlebot*\" | stats dc(clientip)</code></td></tr>\n<tr><td><b>Living off the land</b></td><td>Attackers using Windows' own tools: <code>powershell -enc</code> (decode the Base64), <code>certutil -urlcache</code> (downloading), <code>mshta</code>, <code>rundll32</code>; programs in Temp/Downloads; Office starting a shell</td><td>Search process logs for these command lines</td></tr>\n</table>\n\n<h4>No Splunk? The command line</h4>\n<table>\n<tr><th>Job</th><th>Command</th></tr>\n<tr><td>Count requests per IP</td><td><code>cut -d' ' -f1 access.log | sort | uniq -c | sort -nr | head</code></td></tr>\n<tr><td>Count different user agents</td><td><code>awk -F'\"' '{print $6}' access.log | sort -u | wc -l</code></td></tr>\n<tr><td>Count matching lines</td><td><code>grep -c \"401\" access.log</code></td></tr>\n<tr><td>Hide matching lines</td><td><code>grep -v \"Googlebot\" access.log</code></td></tr>\n<tr><td>Lines whose hash <b>isn't</b> on the good list</td><td><code>grep -v -F -f good_hashes.txt exec.log</code></td></tr>\n</table>\n<p><code>sort | uniq -c | sort -nr</code> is the command-line version of <code>stats count by … | sort - count</code>.</p>",
    "cards": [
      [
        "How to answer scenario questions for marks.",
        "Write your <b>whole thought process</b> (photograph in situ → locked or unlocked? → capture memory if unlocked …). <b>State assumptions.</b> <b>Marks ≈ points</b>: explain <b>why</b> each step matters. Mention backstops (second tool, raw hex). <b>Be specific</b>: \"which hive?\" → SYSTEM."
      ],
      [
        "USB question worth many marks: what earns full marks?",
        "Listing the 5 artefacts ≈ <b>half a mark</b>. Full marks need each explained: <b>where it lives, what it holds, how they link</b> (serial ties USBSTOR ↔ setupapi ↔ MountedDevices; volume GUID ties MountedDevices ↔ MountPoints2; volume serial ties LNK)."
      ],
      [
        "Using the methodology as your scenario-answer skeleton.",
        "<b>Prepare</b> (kit list) → <b>Secure &amp; Seize</b> (photos, serials, docs) → <b>Preserve</b> (physical vs logical, and <b>why</b>) → <b>Analyse</b> (tool + reason, pros and cons) → <b>Report</b>."
      ],
      [
        "What goes on an acquisition form?",
        "Model and <b>serials of PC and disk</b>; <b>start/stop times</b>; <b>acquisition hash(es)</b>; <b>second-verifier sign-off</b>."
      ],
      [
        "What is an LEF?",
        "Like a sealed ZIP: not for compression, but a <b>secure container</b> with an <b>acquisition hash</b> and a <b>verification hash</b>."
      ],
      [
        "Is $Bitmap a file? What are drive slack and RAM slack (recap)?",
        "<b>Yes</b>, $Bitmap is a file (one bit per cluster). <b>Drive slack</b> = unused whole sectors in the last cluster, untouched and <b>bigger</b>, so more likely useful. <b>RAM slack</b> = rest of the last sector, <b>zero-padded</b>."
      ],
      [
        "\"What's the alternative to full-text indexing?\"",
        "<b>Raw text / string searching</b> (not \"substring\")."
      ],
      [
        "What makes a good investigator?",
        "Pulls on every string; <b>finds corroborating evidence</b> (web history → PCAP → memory); <b>validates</b> results and assumptions; understands <b>scope</b>; can explain artefacts to lay people; tells a <b>cohesive, sequential story</b>."
      ],
      [
        "\"Explicit material found\": the three readings.",
        "<b>Layperson:</b> face value. <b>IT person:</b> knows it was in the browser cache. <b>Forensic analyst:</b> considers alternatives, validates and corroborates."
      ],
      [
        "Brute force vs dictionary vs rainbow table.",
        "<b>Brute force:</b> try every combination. <b>Dictionary:</b> a wordlist of likely passwords. <b>Rainbow table:</b> precomputed hash → password chains for fast lookup, <b>defeated by salting</b>."
      ],
      [
        "Key cheat-sheet facts.",
        "Epoch = seconds since <b>1 Jan 1970</b>; <b>Base64 is encoding, not encryption</b>; E01: CRC per block + hash over data blocks only; old segments 700 MB; FAT: local time, access date only; NTFS: UTC."
      ],
      [
        "Which hive holds each local account's last login, creation time and home folder?",
        "<b>SAM</b>."
      ],
      [
        "What won't you find in a memory image?",
        "Files on disk that haven't been opened since the last boot. They were never loaded into RAM, so look on disk (MFT)."
      ],
      [
        "Memory image, suspicious traffic: imageinfo suggests a few profiles. What next?",
        "Pick the profile matching the service pack shown → <b>netscan</b> (connection + PID) → <b>pslist/pstree</b> (which process, which parent) → check against normal → <b>procdump</b> → hash → VirusTotal."
      ],
      [
        "What do you record about a hard disk removed from a PC, and why?",
        "Photos in place and of the label; make, model, serial (ties image to disk); size, HDD/SSD, interface; <b>total sector count</b> (must match sectors imaged, or there may be a hidden area); times; hash; tool and version; bag number. Explain why for each."
      ],
      [
        "Why automate detection? Define detection engineering.",
        "Humans are slow, inconsistent and don't scale (alert fatigue, nights). <b>Detection engineering</b> = designing, maintaining and tuning threat-detection logic (rules and alerts)."
      ],
      [
        "Five difficulties of detection.",
        "1. <b>Multiple log sources</b> (pull or push APIs, none) → centralise<br>2. <b>Multiple formats</b> (json, csv, plaintext; fragmented events; commas or spaces inside fields) → normalise (OCSF)<br>3. <b>Availability</b> of good logs<br>4. <b>Time formats</b><br>5. <b>Time zones</b> → normalise to UTC"
      ],
      [
        "SIEM vs IDS vs rule formats.",
        "<b>SIEMs</b> (Splunk, QRadar, Elastic): centralise, search, correlate, alert. <b>IDS:</b> Snort and Suricata (signatures), <b>Zeek</b> (connection logs). <b>Rules:</b> <b>Sigma</b> (SIEM-agnostic log rules), <b>YARA</b> (file and memory patterns)."
      ],
      [
        "Splunk SPL basics.",
        "Pipeline: <code>index=web status=401 | stats count by useragent</code>; <code>stats dc(field)</code> distinct count; <code>top limit=10 src_ip</code>; <code>sort - count</code>; <code>timechart span=1h count by status</code>; <code>rex \"user=(?&lt;user&gt;\\w+)\"</code>; <code>table _time src_ip uri</code>."
      ],
      [
        "Detection logic: brute force, enumeration, auth bypass.",
        "<b>Brute force:</b> many failures from one IP or user, <b>then a success</b> (the compromise). <b>Enumeration:</b> many usernames with different responses for valid and invalid ones. <b>Auth bypass:</b> 200s on protected URLs with no prior login, or odd parameters (../, admin=true)."
      ],
      [
        "Detection logic: phishing, bad binary, bots.",
        "<b>Phishing:</b> look-alike domains, credential POSTs externally. <b>Bad binary:</b> a system binary name whose <b>hash isn't in the known-good set</b>. <b>Bots:</b> count user agents, verify \"Googlebot\" IPs by reverse DNS, repeated 403s."
      ],
      [
        "Read this Splunk search: <code>index=web status=401 | stats count by clientip | sort - count</code>",
        "Failed logins (401), counted per IP address, sorted with the most first. The top IP is the likely brute-forcer."
      ],
      [
        "Splunk: count how many <b>different</b> user agents there are.",
        "<code>| stats dc(useragent)</code>"
      ],
      [
        "Splunk: which IP made the most requests?",
        "<code>| top limit=1 clientip</code> (or <code>stats count by clientip | sort - count | head 1</code>)."
      ],
      [
        "Splunk: how many different IPs claimed to be Googlebot?",
        "<code>useragent=\"*Googlebot*\" | stats dc(clientip)</code>. Check them with reverse DNS: fakes won't resolve to Google."
      ],
      [
        "Splunk: which URLs did one IP fail to access?",
        "<code>clientip=X (status=401 OR status=403) | table uri</code>"
      ],
      [
        "How do you tell a brute force <b>succeeded</b>?",
        "Many failures from one IP or on one account, then a <b>success</b> (200 / login OK) from it. That success is the compromise."
      ],
      [
        "How does user enumeration show up in logs?",
        "One source trying many different usernames. Real usernames get a different reply (message, size or status), which tells the attacker which ones exist."
      ],
      [
        "How do you find a program running with a hash that's not on the known-good list (command line)?",
        "<code>grep -v -F -f good_hashes.txt exec.log</code>: show lines that don't contain any known-good hash."
      ],
      [
        "Command-line version of \"count requests per IP, biggest first\"?",
        "<code>cut -d' ' -f1 access.log | sort | uniq -c | sort -nr | head</code>"
      ],
      [
        "401 vs 403?",
        "<b>401:</b> not authenticated (not logged in or wrong password). <b>403:</b> authenticated or not, you're <b>not allowed</b>."
      ],
      [
        "What are \"living off the land\" signs in logs?",
        "Attackers using built-in Windows tools: <code>powershell -enc</code> (Base64 command), <code>certutil -urlcache</code> (download), <code>mshta</code>, <code>rundll32</code>; programs in Temp/Downloads; Office starting a shell."
      ],
      [
        "Sigma vs YARA vs Snort.",
        "<b>Sigma:</b> log detection rules for any SIEM. <b>YARA:</b> patterns for files and memory. <b>Snort/Suricata:</b> signatures for live network traffic."
      ]
    ]
  }
};