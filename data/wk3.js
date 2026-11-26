window.CONTENT = window.CONTENT || {};
CONTENT[3] = {
  "professional": {
    "notes": "<h4>Document what matters</h4>\n<p>Not literally everything. Write it down if it:</p>\n<ul>\n<li>could <b>change the evidence</b></li>\n<li>could change <b>how someone else reads it</b></li>\n<li>would leave a <b>gap in the story</b> if missing</li>\n</ul>\n<p>Photograph before touching. Unplugging a charging phone or carrying it to another room changes its logs, Wi-Fi and location. Note what <i>you</i> did, so it isn't later read as suspicious.</p>\n\n<h4>Write blockers have limits</h4>\n<ul>\n<li>They stop <b>writes</b>, but the drive still spins up and updates its own <b>SMART</b> counters (e.g. power cycle count).</li>\n<li>If a drive was imaged twice but shows 30 extra power cycles, someone has to explain them. Record SMART values before and after.</li>\n<li>Data can hide in <b>HPA/DCO</b>, areas the computer normally can't see.</li>\n</ul>\n\n<h4>At the scene (ISO 27037)</h4>\n<ul>\n<li>Secure the area, find who's in charge, note who had access.</li>\n<li><b>On stays on, off stays off</b> until you've decided.</li>\n<li>Live data needed? Acquire it first.</li>\n<li>Data stable? Pull the plug. Not stable? Normal shutdown.</li>\n<li>Label everything, tape the power switch.</li>\n<li><b>Collection</b> = taking the device. <b>Acquisition</b> = copying its data on site.</li>\n</ul>\n\n<h4>The expert witness</h4>\n<ul>\n<li>Gives <b>relevant, impartial</b> evidence within their expertise.</li>\n<li>Duty is to the <b>court</b>, not the client.</li>\n<li>Never answers \"is he guilty?\".</li>\n<li>Juries trust experts even when they're wrong, so mistakes have real consequences.</li>\n</ul>\n\n<h4>The Patterson case (mushroom murders, 2023)</h4>\n<p>A meal laced with death cap mushrooms; three people died. Several phones, a laptop and SIMs were examined.</p>\n<p><b>Went well</b></p>\n<ul>\n<li>Found more than one phone</li>\n<li>Linked browsing history to phone location</li>\n<li>CCTV and cell tower records backed it up</li>\n</ul>\n<p><b>Went badly</b></p>\n<ul>\n<li>A phone wasn't put in a <b>Faraday bag</b> and was <b>remotely wiped</b> in police custody.</li>\n<li>A keyword search for \"death cap\" missed a file that said \"Deathcap\". Wildcards or the botanical name would have caught it.</li>\n<li>The examiner had <b>no training</b> on the tool he used, and admitted it in court.</li>\n<li>A cache entry doesn't prove a deliberate visit: pages can be preloaded.</li>\n</ul>\n<p>Correct analysis can still be thrown out if the process or report is weak.</p>\n\n<h4>Telling the story</h4>\n<ul>\n<li>One artefact is just a claim. Several, linked in time order, are a story.</li>\n<li>Artefacts answer <b>what, when, where</b> and sometimes <b>who</b>. Never <b>why</b>.</li>\n<li>They exist to make the computer faster or easier to use, not for investigators.</li>\n</ul>\n<p>Example story (data theft):</p>\n<ol>\n<li>USB plugged in (registry)</li>\n<li>Folder created on it (ShellBags)</li>\n<li>Work files opened from it (LNK)</li>\n<li>Cleaning tool run (Prefetch)</li>\n<li>Email: \"all sorted\"</li>\n<li>Resignation the next day</li>\n</ol>\n<p>Write it as a table: <b>Date/Time | Activity | Source</b>.</p>\n\n<h4>Writing for a jury</h4>\n<ul>\n<li>Juries are ordinary people. Explain files, timestamps and hashes in plain words.</li>\n<li>Keep <b>facts</b> (what you saw) separate from <b>opinions</b> (what you think it means).</li>\n<li>Don't overstate or understate. Define your terms.</li>\n</ul>",
    "cards": [
      [
        "Scenario: a laptop and phone on a desk need acquiring. What do you document first?",
        "<ul><li>Your <b>arrival time</b></li><li><b>Everything on the table</b> (passive and active devices)</li><li><b>Connections</b> (e.g. a pen drive plugged in)</li><li>Whether each device is <b>on</b> (unplugging a charging phone creates a log entry)</li><li><b>Photograph before touching</b> (e.g. the IMEI needs handling to read)</li></ul>Not literally everything: document what matters to the case."
      ],
      [
        "You carry the phone into another room. What can change?",
        "<b>GPS/location</b>, <b>Bluetooth</b> (discovers new devices), <b>Wi-Fi</b> (may drop), and unplugging <b>USB</b> creates a log. Record every action so a reader knows <b>you</b> caused it, not \"suspicious ejection\"."
      ],
      [
        "Does a write blocker stop a disk from changing at all?",
        "<b>No.</b> It blocks <b>data writes</b>, but:<ul><li><b>Physical:</b> platters spin and the actuator moves (could scratch a dropped drive)</li><li><b>Helium drives</b> can fail with altitude if shipped by air</li><li><b>Electronics:</b> the controller updates its own <b>SMART</b> values</li><li>Non-write commands (queries) still pass through</li></ul>"
      ],
      [
        "What is SMART, and why does it matter forensically?",
        "<b>S.M.A.R.T.</b> (about 1994) = the drive's self-reported health counters (power-on hours, <b>Power Cycle Count</b>, reallocated sectors...). <b>The drive updates them itself, even behind a write blocker</b> (power cycle +1 on every spin-up).<br>If a drive was imaged twice but shows 30 extra power cycles, someone has to explain them. So <b>capture SMART values</b>: ABD includes knowing your tools' limits."
      ],
      [
        "HPA and DCO.",
        "<b>HPA = Host Protected Area</b>, <b>DCO = Device Configuration Overlay</b>: drive areas that tell the computer how big the disk is. The OS doesn't show them, so <b>data can be hidden there</b>. Malware has hidden there to <b>survive a zero-wipe or factory reset</b> and reinfect."
      ],
      [
        "What's a known limitation of ewfacquire?",
        "<b>It doesn't store SMART values</b> (paid tools do). Capture them anyway, so any change is either <b>explained by what you did</b> or <b>unexplained</b> (and needs investigation)."
      ],
      [
        "The three tests for \"what should I document?\"",
        "Document anything that:<br>1. <b>Could change the evidence</b><br>2. <b>Could change how another examiner interprets it</b><br>3. <b>Would leave a gap in the chain of events</b> if omitted"
      ],
      [
        "ISO/IEC 27037 §6.2.1: what should the DEFR do on arrival?",
        "DEFR = <b>Digital Evidence First Responder</b>.<ul><li><b>Secure and control the area</b></li><li>Find <b>who's in charge</b></li><li><b>Document everyone with access</b></li><li><b>ON stays ON, OFF stays OFF</b> (until documented and decided)</li><li><b>Photograph/sketch</b> the scene, components and cables in place</li></ul>Photos beat handwriting (0 vs O); video is less useful."
      ],
      [
        "ISO 27037 §6.2.3: risk questions before collecting or acquiring.",
        "<ul><li>Which <b>collection/acquisition method</b>?</li><li>What <b>equipment</b> is needed on site?</li><li>How <b>volatile</b> is the data?</li><li>Is <b>remote access</b> possible, and does it threaten integrity?</li></ul>Not weighing risks first can lose some or all of the evidence."
      ],
      [
        "Collection vs acquisition.",
        "<ul><li><b>Collection:</b> physically <b>taking the device</b> away from the scene</li><li><b>Acquisition:</b> making a <b>copy of its data</b> (e.g. on site) when you can't take it</li></ul>If you can seize the whole thing, do so."
      ],
      [
        "Volatile vs stable data.",
        "<ul><li><b>Volatile:</b> can change any moment or is lost on power-off (RAM; network state; moving the device can change it)</li><li><b>Stable:</b> survives abrupt power loss (disk)</li></ul>"
      ],
      [
        "ISO 27037 Fig 2: collection flowchart, device ON.",
        "1. Live/volatile data needed? → Yes: go to <b>acquisition (Fig 4)</b><br>2. Is the data <b>stable</b>? Yes → <b>pull the power at the device</b> (a shutdown creates more events). No → <b>normal shutdown</b><br>3. <b>Label, disconnect and secure</b> cables and ports; <b>tape the power switch</b><br>4. Other media → handle per media guidelines"
      ],
      [
        "ISO 27037 Fig 3: collection, device OFF.",
        "Battery-powered? No → remove power at the device. Yes → <b>remove power and battery</b>, <b>remove the HDD</b> if conditions allow, <b>label and document</b> it. Then label and secure cables, tape the switch, handle other media.<br>Why remove the battery? <b>Standby modes and timers</b> could wake it."
      ],
      [
        "Expert witness: definition and role.",
        "(Federal Court) A party may <b>retain</b> a <b>specialist</b> to give <b>expert opinion</b>, if qualified by <b>expertise, training and specialised knowledge</b>.<br>Role: give <b>relevant and impartial evidence within their expertise</b>. <b>Duty is to the court, not the client.</b> Stay in your lane: never answer \"is he guilty?\"."
      ],
      [
        "The \"proof\" of an expert, and the \"weight\" of an expert.",
        "<b>Proof:</b> <b>competency</b> (can do it), <b>proficiency</b> (repeat it without mistakes), <b>experience</b>, and not making simple mistakes.<br><b>Weight:</b> experts are <b>trusted</b>, so juries believe them even when they're wrong, and their opinions have consequences (Amero)."
      ],
      [
        "Erin Patterson (2023 mushroom murders): basic facts and devices.",
        "A beef Wellington laced with <b>death cap</b> mushrooms (<i>Amanita phalloides</i>); <b>3 died</b>, 1 survived. Digital interest: <b>4 phones, 1 laptop, 3 SIMs</b>. Convicted in the Supreme Court of Victoria, 2025."
      ],
      [
        "Patterson: what's the caveat about phone location data?",
        "Phone location often comes from <b>cell towers</b> (trilateration), which is <b>imprecise</b>: signal strength varies with obstacles. It shows a <b>connection to a tower</b>, not an exact position, so it's not damning on its own."
      ],
      [
        "Patterson: what was the phone-handling failure?",
        "The phone wasn't <b>isolated</b> (no <b>Faraday bag</b>), so it was <b>remotely wiped while in police custody</b>. It had also allegedly been factory-reset 3 times beforehand, and SIMs were swapped between devices."
      ],
      [
        "Patterson: \"a little-used SIM means it's not her main phone\". Why is that a risky conclusion?",
        "Most people barely use <b>SMS or voice calls</b> now (they use apps and data). Without that context, the conclusion could <b>mislead the court</b>. <b>Understand the device and your tools.</b>"
      ],
      [
        "Patterson: what did the AppCache finding show, and what question did the court ask?",
        "A <b>string</b> in a Chrome <b>AppCache</b> file with <b>\"Deathcap (Amanita phalloides) iNaturalist\"</b>, with M, A and C times all identical. The court asked <b>\"can files download automatically?\"</b>, because that would undercut \"she fetched it\". A cache entry ≠ a deliberate visit (<b>preload/prefetch</b>)."
      ],
      [
        "Patterson keyword-search failure: what went wrong, and what should have been done?",
        "Searched \"death cap\", \"death cap mushroom(s)\", \"mushrooms\", \"poison\", but the artefact said <b>\"Deathcap\"</b> (no space), so it was <b>missed</b> until scope was broadened. Terms were <b>too narrow/literal</b>. Better: <b>fuzzy search</b>, <b>wildcards</b> (<code>death*cap</code>), and the <b>botanical name</b>."
      ],
      [
        "Patterson: the training problem.",
        "He used <b>Magnet AXIOM</b> but had <b>no formal training</b> on it, and admitted it under cross-examination, giving the defence an angle. Certification is <b>version-specific</b>, so practitioners often retrain yearly. A student would get no such leniency."
      ],
      [
        "Patterson: what went well, and what went badly?",
        "<b>Well:</b> found <b>more than one phone</b>; caught a <b>fake phone number</b> lie; <b>browsing history + location</b> (iNaturalist page, then near those sites about 2 hours later); <b>CCTV</b> of dumping the dehydrator; cell-tower records.<br><b>Badly:</b> the remote wipe (no isolation); the keyword miss; no tool training."
      ],
      [
        "Patterson rulings: what are they, and what's the key warning?",
        "Rulings decide <b>admissibility</b> (Ruling 1: expert evidence about poison searches; Ruling 4: incriminating conduct such as lies and SIM swaps).<br><b>You can do 100% correct analysis, but if you botch the process or reporting, the evidence can't be used.</b>"
      ],
      [
        "Why do artefacts exist?",
        "<b>Not for investigators.</b> They exist to <b>improve the user experience</b> (caches speed up pages, etc.). Forensics repurposes them. \"Everything's a database.\" Pick artefacts that fit the question; you can only analyse what's actually stored (e.g. no keylogger logs)."
      ],
      [
        "Writing for a jury: what does Patterson teach?",
        "The prosecution had to ask \"<b>what is a computer?</b>\". Juries are ordinary people: explain files, folders, timestamps and <b>hashes</b> in plain words. If you verify hashes, <b>explain what a hash is</b>."
      ],
      [
        "\"Telling the story\": why is one artefact not enough? Give the USB example.",
        "One piece of evidence is just an <b>assertion</b>. A deleted image on a USB could be freeing space. <b>Correlated:</b> the USB was plugged in, the file was copied to it, then <b>renamed</b>, <b>encrypted</b> and deleted. Together, in <b>time order</b>, that tells a story. Also: DNS logs ≠ visits (ads); Windows 11 changed artefacts (absent ≠ deleted)."
      ],
      [
        "What questions do artefacts answer, and which don't they answer?",
        "<b>What, when, where</b> (device, port) and, if possible, <b>who</b>. <b>Not \"why\"</b>."
      ],
      [
        "FAT32 vs NTFS time storage.",
        "<b>FAT32 = local time</b> (no zone); <b>NTFS = UTC</b>. A FAT32 USB edited at 3:15 pm in Perth still reads 3:15 pm when plugged in overseas, and gets read as that country's local time."
      ],
      [
        "ISO 21043-4 §5.1.6.2 event reconstruction: five questions. Recommended timeline format?",
        "1. What <b>activities/events</b>? 2. <b>Where</b>? 3. <b>When</b>? 4. In what <b>order</b>? 5. <b>Who</b>?<br>Format: <b>Date/Time | Activity | Source</b> (cite the artefact and evidence ID). Use one column per person for multi-person cases."
      ],
      [
        "Data theft timeline: what story do the artefacts tell?",
        "Work docs created on the desktop → USB E:\\ volume first created (serial in registry) → folder made on E:\\ (<b>ShellBags</b>) → docs on E:\\ (<b>LNK</b>) → <b>CCleaner run</b> (<b>Prefetch</b>) → email to a personal address saying \"all sorted\" → resignation. No single row shows theft; the <b>correlated sequence</b> does."
      ],
      [
        "ISO 21043-4 vs 21043-5. What does §8.1 Testimony require?",
        "<b>-4 = Interpretation; -5 = Reporting.</b><br>Testimony must be <b>accurate, clear, responsive, impartial, and within your expertise</b>; <b>don't overstate or understate</b> opinions; <b>don't present opinions as facts</b> (separate them from observations); <b>support</b> both with case records; use <b>common terminology</b> or define it (glossary)."
      ],
      [
        "Elements of an expert report.",
        "<ul><li><b>Summary</b></li><li>Acknowledgement of the <b>Expert Witness Code of Conduct</b> (NSW)</li><li><b>Specialised knowledge</b> (who you are)</li><li><b>Assumptions and limitations</b></li><li><b>List of documents</b> provided (images)</li><li><b>Appendices</b> for long outputs</li></ul>"
      ]
    ]
  },
  "technical": {
    "notes": "<h4>Before you start</h4>\n<ul>\n<li><b>Scope:</b> what's alleged, and when? Pick techniques that fit.</li>\n<li>Start the slow jobs first, then work while they run: <b>hashing, signature analysis, carving, indexing</b>.</li>\n<li>Write notes so someone else could repeat every command.</li>\n</ul>\n\n<h4>Signatures and hashes</h4>\n<ul>\n<li><b>Signature analysis:</b> checks a file's extension against its real header bytes. A photo renamed <code>.dll</code> gets caught.</li>\n<li><b>Hash sets:</b> renaming doesn't change content, so the hash stays the same.\n<ul>\n<li><b>Known good</b> (e.g. NSRL): skip standard Windows files.</li>\n<li><b>Known bad:</b> find specific files, even renamed.</li>\n</ul></li>\n</ul>\n\n<h4>Searching</h4>\n<ul>\n<li><b>Raw search:</b> starts straight away but re-reads the whole disk each time, and can't see inside DOCX, ZIP or PDF.</li>\n<li><b>Index:</b> slow to build, then instant, and reads inside documents.</li>\n<li>Pick words that narrow things down. \"Confidential\" is in every email footer. Use proximity instead, e.g. <code>invoice w/3 \"bank details\"</code>.</li>\n</ul>\n\n<h4>Timestamps (MACB)</h4>\n<ul>\n<li><b>M</b>odified: content changed</li>\n<li><b>A</b>ccessed</li>\n<li><b>C</b>hanged: the file's record changed (e.g. renamed)</li>\n<li><b>B</b>orn: created</li>\n</ul>\n<p>NTFS stores UTC. FAT32 stores local time with no zone.</p>\n<table>\n<tr><th>If you see</th><th>It means</th></tr>\n<tr><td>Born later than Modified</td><td>A <b>copy</b> (keeps old M, gets new B)</td></tr>\n<tr><td>Only C changed</td><td><b>Renamed</b> or moved on the same volume</td></tr>\n<tr><td>A and C changed</td><td>Moved to a <b>different volume</b></td></tr>\n<tr><td>$SI earlier than $FN, or ends in .0000000</td><td>Possible <b>timestomping</b> (faked times)</td></tr>\n</table>\n<ul>\n<li><b>$SI</b> times can be changed by normal programs. <b>$FN</b> times only by Windows itself.</li>\n<li><code>fls</code> + <code>mactime</code> turn all the times into one sorted timeline.</li>\n</ul>\n\n<h4>The registry</h4>\n<p>Windows' settings database, split into <b>hives</b>:</p>\n<ul>\n<li><b>SAM:</b> user accounts</li>\n<li><b>SYSTEM:</b> hardware, USBs, time zone</li>\n<li><b>SOFTWARE:</b> programs, Windows version, install date</li>\n<li><b>SECURITY:</b> security policy</li>\n<li><b>NTUSER.DAT:</b> one per user, their activity</li>\n</ul>\n<ul>\n<li>Always check <code>SYSTEM\\Select\\Current</code> first. SYSTEM has two copies of its settings, and you must read the live one.</li>\n<li><b>Bias</b> = minutes you add to local time to get UTC. −600 = UTC+10. 300 = UTC−5.</li>\n<li>Install date is yesterday? Windows was probably reinstalled. Look for older data.</li>\n</ul>\n\n<h4>Proving USB use: five pieces</h4>\n<table>\n<tr><th>Artefact</th><th>Answers</th></tr>\n<tr><td><b>USBSTOR</b> (SYSTEM)</td><td>Which device (make, model, serial)</td></tr>\n<tr><td><b>setupapi.dev.log</b></td><td>When it was first plugged in</td></tr>\n<tr><td><b>MountedDevices</b> (SYSTEM)</td><td>Which drive letter</td></tr>\n<tr><td><b>MountPoints2</b> (NTUSER.DAT)</td><td>Which user</td></tr>\n<tr><td><b>LNK files</b></td><td>Which files were opened from it</td></tr>\n</table>\n<p>Don't just list them: show how they link (serial number, volume IDs).</p>\n\n<h4>Proving a program ran</h4>\n<ul>\n<li><b>Prefetch</b> (<code>C:\\Windows\\Prefetch</code>): run count, last run time, created ≈ first run.</li>\n<li><b>UserAssist</b> (NTUSER.DAT): per user, programs opened from the desktop. Names are ROT13 (<code>PNYP.RKR</code> = <code>CALC.EXE</code>).</li>\n<li>Check both. One can exist when the other doesn't.</li>\n</ul>\n\n<h4>Time formats</h4>\n<ul>\n<li><b>Unix:</b> seconds since 1970</li>\n<li><b>Windows FILETIME:</b> 100-nanosecond ticks since 1601</li>\n<li><b>Chrome:</b> microseconds since 1601</li>\n<li><b>FAT32:</b> local time, 2-second steps, accessed is a date only</li>\n</ul>\n\n<h4>Check your tools</h4>\n<ul>\n<li>A real tool version once added a day to every login date.</li>\n<li>Record tool versions and confirm key findings with a second tool.</li>\n<li><b>Super timeline</b> (log2timeline/Plaso) merges everything into one view, but you still check it by hand.</li>\n</ul>",
    "cards": [
      [
        "Two rules for writing up an investigation.",
        "A report <b>tells a story</b> on a timeline. <b>Time zones:</b> normalise every source to one zone (e.g. Brisbane UTC+10 vs Auckland UTC+12 = 2 hours out)."
      ],
      [
        "Documentation tips before analysis.",
        "Someone with little knowledge should be able to <b>repeat your commands</b>; record <b>times</b>; record <b>reasoning</b>; use screenshots; paste <b>entire commands</b> (or <code>script</code>); give paths for big outputs. You're accountable for any AI errors; never paste evidence into public AI."
      ],
      [
        "Scoping: what background do you gather?",
        "What's the alleged activity? <b>When</b>? Which techniques are most likely to help? What priority and order? Deadlines are real (court, regulators, active adversaries)."
      ],
      [
        "Which techniques need up-front \"set and forget\" processing?",
        "<b>Hash analysis, signature analysis, file carving, full-text indexing.</b> Start them first, then do basic analysis while they run."
      ],
      [
        "What is signature analysis, and why would someone rename a file?",
        "Comparing a file's <b>extension</b> with its <b>header magic bytes</b> across the whole drive. Renaming hides files or <b>gets past extension-only controls</b> (proxies, email filters, USB rules). <b>A mismatch is suspicious.</b>"
      ],
      [
        "Common magic bytes.",
        "PNG <code>89 50 4E 47</code>; JPEG <code>FF D8 FF</code>; PDF <code>25 50 44 46</code> (%PDF); ZIP/DOCX <code>50 4B 03 04</code> (PK); EXE <code>4D 5A</code> (MZ)."
      ],
      [
        "Signature analysis in TSK vs Autopsy.",
        "TSK: <code>sorter -o &lt;offset&gt; -d out image</code> sorts files into categories and writes <b>mismatch.txt</b>. Autopsy: the <b>Extension Mismatch Detector</b> ingest module → Results › Extracted Content › Extension Mismatch Detected (expect \"normal\" mismatches)."
      ],
      [
        "Hash analysis: why does it work, and what are its two uses?",
        "Renaming or moving doesn't change content, so <b>the hash stays the same</b> (the name lives in the file system).<ul><li><b>Known bad:</b> find specific files or malware across machines</li><li><b>Known good</b> (<b>NIST NSRL</b>, a gold SOE image): <b>exclude</b> OS noise (culling)</li></ul>"
      ],
      [
        "Hash sets in TSK and Autopsy.",
        "TSK: <code>md5deep -r mount &gt; db.hash</code>; <code>hfind -i md5sum db.hash</code>; <code>hfind db.hash &lt;md5&gt;</code>. Autopsy: <b>Hash Lookup</b> module. Known bads appear under <b>Results › Hashset Hits</b>; known goods only in a column."
      ],
      [
        "Raw string search vs full-text indexing.",
        "<b>Raw (grep):</b> starts immediately and supports regex, but is slow, <b>re-reads the disk every search</b>, does one pattern per pass, and <b>can't read compressed files</b> (PDF, ZIP, DOCX).<br><b>Indexing:</b> slow to build, then <b>near-instant</b>; file-type aware, expands containers, reads metadata. Repeated searches → index."
      ],
      [
        "Bad keywords, and how to fix them.",
        "Bad: \"fraud\" (nobody writes it), \"confidential\" (every email disclaimer), the company name, short strings like \"ABC\".<br>Fix: get background and lingo; use <b>Boolean</b> (<code>invoice AND \"bank details\"</code>), <b>proximity</b> (<code>w/2</code>), regex; <b>whole-word</b> search for acronyms."
      ],
      [
        "MACB meaning. Where are NTFS times stored, and in what zone?",
        "<b>M</b>odified (content), <b>A</b>ccessed, <b>C</b>hanged (MFT record/metadata), <b>B</b>orn (created). NTFS: in <b>$STANDARD_INFORMATION</b>, in <b>UTC</b>. Explorer shows only three (no C)."
      ],
      [
        "FAT32 timestamps.",
        "Created (date and time), Modified (date and time), <b>Accessed: date only</b> (shows 12:00:00 AM). <b>Local time, no zone flag</b>, which is ambiguous on USB sticks that travel."
      ],
      [
        "$SI update rules: rename, local move, volume move, copy.",
        "<ul><li><b>Rename / local move:</b> only <b>C</b> changes</li><li><b>Volume move:</b> A and C change</li><li><b>Copy:</b> A, B and C change (M kept)</li><li><b>Modify:</b> M</li><li><b>Create:</b> all four</li><li><b>Delete:</b> nothing</li></ul>"
      ],
      [
        "M = 04/03 11:05; A, C, B = 09/03 16:40. What happened?",
        "A <b>copy</b>: created (B) <b>after</b> modified (M), because a copy keeps the original M but gets a new B. It's a copy on the <b>same volume</b>."
      ],
      [
        "M, A, B = 14/06 08:20; C = 30/06 19:55. What happened?",
        "The file was <b>renamed or moved</b> (same volume) later: the only operation that updates C alone."
      ],
      [
        "fls and mactime: what does each do?",
        "<b>fls</b> lists files in an image (<code>-l</code> times, <code>-r</code> recursive, <code>-m /</code> outputs a <b>bodyfile</b>: pipe-delimited, 4 time columns, UTC, <b>epoch seconds since 1970</b>; each file twice, $SI and $FN).<br><b>mactime</b> stacks the 4 columns into one timeline, applies a <b>time zone</b> (<code>-z</code>), limits dates and exports CSV."
      ],
      [
        "Reading mactime's type column: \"macb\", \".a.b\", \"m.c.\"",
        "Shows which times changed at that moment: <b>macb</b> = all four; <b>.a.b</b> = accessed and born; <b>m.c.</b> = modified and changed."
      ],
      [
        "Timeline example: a cleaning tool. What's the story?",
        "IE cache shows the CCleaner site visited → Program Files\\CCleaner and a Desktop LNK created → <b>Prefetch CCLEANER64.EXE born, then modified minutes later</b> (executed) → files deleted and change times updated (uninstall). Downloaded, installed, <b>run</b>, uninstalled: anti-forensics."
      ],
      [
        "$FN vs $SI, and what is timestomping?",
        "$FILE_NAME has its own MACB, <b>only changeable by the kernel</b> (needs a rootkit); $SI can be changed from user space. <b>Timestomping</b> = faking $SI times to hide files (e.g. making malware look years old). <b>Detect: compare $SI with $FN</b>; $SI earlier than $FN, or <b>.0000000</b> fractions, are red flags."
      ],
      [
        "$FN update rules (key differences from $SI).",
        "<b>Rename, access and modify: no change</b> in $FN. Local move: M and C copied from $SI. Volume move, copy and create: all change."
      ],
      [
        "Magnet AXIOM's \"Find Evidence\" button lesson.",
        "Pressing a button isn't analysis: people who did couldn't explain artefacts like <b>Prefetch</b> in court."
      ],
      [
        "What is the registry, and what does it contain?",
        "A <b>hierarchical database of low-level settings</b> for Windows and apps (keys = folders, values = settings). It holds OS details, <b>user accounts</b>, preferences, app settings and licences, <b>startup/persistence keys</b>, evidence of access and execution."
      ],
      [
        "Persistence and the Cyber Kill Chain.",
        "Lockheed Martin's <b>Kill Chain</b> = the attacker's steps (recon → … → <b>persistence</b> …). <b>Startup keys</b> define what runs at boot; <code>C:\\temp\\virus.exe</code> there is suspicious."
      ],
      [
        "The five hives and their locations.",
        "<ul><li><b>SAM</b>: accounts, groups, NTLM hashes</li><li><b>SYSTEM</b>: setup, mounted devices (USB), drivers, services, time zone</li><li><b>SOFTWARE</b>: installed software, Windows version and settings</li><li><b>SECURITY</b>: security policy, LSA secrets</li></ul>All in <code>C:\\Windows\\System32\\config</code>. <b>NTUSER.DAT</b> (one per user, hidden) in <code>C:\\Users\\&lt;name&gt;</code>."
      ],
      [
        "To crack a Windows password offline you need which hives?",
        "<b>SAM + SYSTEM</b>."
      ],
      [
        "Registry tools.",
        "<b>RegEdit</b> (Load Hive, no parsing); <b>RegRipper</b> (plugins extract keys into a report); <b>MiTeC WRR</b> (offline viewer that decodes SAM); AccessData Registry Viewer. Work from the <b>image</b>, never the live system."
      ],
      [
        "Environment baseline to confirm first.",
        "<b>OS version and patch level, time zone, computer name, accounts, network settings.</b>"
      ],
      [
        "Where is the OS version, and what's in it?",
        "<code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion</code>: ProductName, RegisteredOwner and Organisation, SystemRoot, <b>InstallDate (Unix time)</b>."
      ],
      [
        "InstallDate is yesterday. What do you think, and what do you do?",
        "Windows was <b>reinstalled/reformatted</b> (\"wiped\" usually means zero-filled, so be careful with terms). Look for <b>other or deleted partitions</b>, <b>carve</b>, recover deleted data, and ask the solicitor why. \"Follow the bouncing ball.\""
      ],
      [
        "Control sets: which do you read, and how do you know?",
        "SYSTEM holds ControlSet001 and 002 (current and <b>Last Known Good</b>). Read <b><code>SYSTEM\\Select\\Current</code></b>: 1 → ControlSet001. <b>Do this first</b>, or you may read the wrong time zone (a classic cross-exam trap)."
      ],
      [
        "Time-zone key and its values.",
        "<code>SYSTEM\\ControlSet00X\\Control\\TimeZoneInformation</code>: <b>TimeZoneKeyName</b>, <b>Bias</b> (minutes to <b>add to local to get UTC</b>), <b>DaylightBias</b>, <b>ActiveTimeBias</b> (the bias when the hive was captured)."
      ],
      [
        "Bias 300 means? Bias −600 means?",
        "<b>300</b> → local = UTC−5 (New York). <b>−600</b> → local = UTC+10 (Sydney, no daylight saving). UTC = local + Bias."
      ],
      [
        "BIOS time check.",
        "Boot into the BIOS to confirm its time and account for <b>clock skew</b>. Mostly relevant before Windows 10; later versions sync from <b>NTP</b>."
      ],
      [
        "Computer name and network keys.",
        "<code>…\\Control\\ComputerName\\ComputerName</code>; <code>…\\Services\\Tcpip\\Parameters</code> (hostname, domain, DHCP, last network config). Use the name to search SIEM logs."
      ],
      [
        "SAM structure: RIDs and SIDs.",
        "<code>SAM\\Domains\\Account\\Users</code>. <b>RID</b> 500 = Administrator, 501 = Guest, <b>1000+</b> = real users. The <b>SID</b> ends with the RID (S-1-5-21-…-1000); the Recycle Bin folder is named after it. The Names key maps username → RID."
      ],
      [
        "SAM \"F\" value: key offsets.",
        "0x08 <b>account creation</b>; 0x10 <b>last login</b>; 0x18 RID; 0x1C account type/status; 0x1E <b>failed logins</b>; 0x20 <b>total logins</b>. (Offsets vary by source/version; tools parse it.)"
      ],
      [
        "SAM \"V\" value contents.",
        "<b>Username</b>, full name, comment, home directory, <b>LM hash</b> and <b>NTLM hash</b> offsets and lengths."
      ],
      [
        "Why validate your tools?",
        "Your report says last login 12 Aug; the other side's tool says 13 Aug; one tool version had a <b>bug adding a day</b>. Record <b>tool versions</b>, check with a <b>second tool</b> (or a third, or a hex editor), read release notes. Real case: a Cellebrite app-parsing bug."
      ],
      [
        "You suspect something but can't fully prove it. How do you write it?",
        "Flag it as an <b>investigation point</b> (\"activity X found, can't be substantiated without more analysis\"), not a conclusion."
      ],
      [
        "Why does USB evidence matter?",
        "<b>Point of compromise</b> (infected USB), <b>insider threat</b> (running unauthorised tools), <b>data theft/exfiltration</b> (IP theft, often on the employee's last day). Many organisations block USB writes and use <b>DLP</b>, but not all."
      ],
      [
        "The five-piece USB puzzle.",
        "1. <b>USBSTOR</b> → which device (make, model, <b>serial</b>)<br>2. <b>setupapi.dev.log</b> → <b>first</b> connection time<br>3. <b>MountedDevices</b> → <b>drive letter</b><br>4. <b>MountPoints2</b> (NTUSER.DAT) → <b>which user</b><br>5. <b>LNK files</b> → <b>which files</b> were opened"
      ],
      [
        "USBSTOR path and contents.",
        "<code>SYSTEM\\ControlSet###\\Enum\\USBSTOR</code> (non-storage devices: \\Enum\\USB). Per device: ClassGUID, manufacturer, friendly name, <b>serial number</b> (generated for no-name brands)."
      ],
      [
        "setupapi log location (XP vs Win7+), and how to use it.",
        "XP: <code>C:\\Windows\\setupapi.log</code>; Win7+: <code>C:\\Windows\\inf\\setupapi.dev.log</code>. Search for the <b>serial</b> to find the install entry = <b>first time attached</b>."
      ],
      [
        "MountedDevices: what does it map? Caveat?",
        "USB device ↔ volume GUIDs, and ↔ <b>DOS drive letters</b> (e.g. E:). It keeps only the <b>last</b> device per letter."
      ],
      [
        "MountPoints2: where, and why does it matter?",
        "<code>NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MountPoints2</code>. Volume GUIDs mounted <b>under that user</b>; match to MountedDevices to tie the device to a <b>person</b>. Steps 1–3 are in SYSTEM (computer-wide)."
      ],
      [
        "USB parsing warning.",
        "Key behaviour <b>changes across Windows versions</b>. Use <b>multiple parsers</b> or spot-check the registry."
      ],
      [
        "What's in an LNK file?",
        "The target's <b>full original path</b> (drive letter or network share), the <b>target's timestamps</b> (plus the LNK's own), and for external drives the <b>volume serial number</b>. Proves files were on a USB <b>without having the USB</b>."
      ],
      [
        "LNK limitation, and the \"bank robbery\" analogy.",
        "LNKs are created when a file is <b>opened</b>. <b>Copying without opening leaves no LNK.</b> But thieves usually \"check the bag\" (open files to verify), so LNKs often exist."
      ],
      [
        "Where to find LNK files.",
        "<code>C:\\Users\\%User%\\AppData\\Roaming\\Microsoft\\Windows\\Recent</code>; desktop shortcuts; filter by .lnk in Autopsy; <b>carve</b> by signature."
      ],
      [
        "Why does evidence of execution matter?",
        "Proves an app <b>actually ran</b>: deletion tools (CCleaner), hacking tools, cloud sync (Dropbox at 3 pm → check proxy logs). In IR: <b>when virus.exe first ran and from where</b> sets your timeline start."
      ],
      [
        "Prefetch: purpose, location, contents.",
        "Added in <b>XP</b> to <b>speed up app launch</b> (not designed for forensics). <code>C:\\Windows\\Prefetch\\NAME.EXE-HASH.pf</code>. Holds the exe name, <b>DLLs used</b>, <b>run count</b>, <b>last run time</b>. File created ≈ first run. Tools: prefetch.py, MiTeC WFA. An empty folder on a busy PC is suspicious but not proof."
      ],
      [
        "UserAssist: location, contents and quirks.",
        "<code>NTUSER.DAT\\…\\Explorer\\UserAssist\\{GUID}\\Count</code>. Per-user <b>run count</b> and <b>last run</b> for <b>GUI-launched</b> programs only (<b>not cmd</b>). Names are <b>ROT13</b> (PNYP.RKR = CALC.EXE). Useful when Prefetch is missing."
      ],
      [
        "ROT13 decode: \"Abgrcnq\"",
        "<b>Notepad</b>. Shift each letter 13 places (doing it twice gets the original back)."
      ],
      [
        "Super timeline: tool and caveats.",
        "<b>log2timeline/Plaso</b> combines MFT, registry, LNK, Prefetch and more into one filterable timeline. Supports E01 and DD; easiest on <b>SIFT</b>. <b>You still validate manually.</b>"
      ]
    ]
  }
};