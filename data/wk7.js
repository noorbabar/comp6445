window.CONTENT = window.CONTENT || {};
CONTENT[7] = {
  "professional": {
    "notes": "<p>Monday was a guest lecture on incident response in large companies. It's not assessed, but a few ideas connect to assessed weeks (memory, network, and the incident response tutorial), so here's the short version.</p>\n\n<h4>The incident response cycle <span class=\"na\">Not assessed</span></h4>\n<p>The common framework (NIST):</p>\n<ol>\n<li><b>Preparation:</b> be ready before anything happens</li>\n<li><b>Identification:</b> spot it and work out what's going on</li>\n<li><b>Containment:</b> stop it spreading (lock accounts, isolate hosts, block bad IPs)</li>\n<li><b>Eradication:</b> remove it (wipe malware, reset accounts, patch)</li>\n<li><b>Recovery:</b> back to normal</li>\n<li><b>Lessons learned:</b> review and improve</li>\n</ol>\n<p>In practice it's a loop, not a straight line: <b>observe → orient → decide → act</b>, repeated until the questions are answered.</p>\n\n<h4>Ideas worth borrowing <span class=\"na\">Not assessed</span></h4>\n<ul>\n<li><b>You can't find what you can't see.</b> If nothing was logged, there's no trace to find. Locard's \"every contact leaves a trace\" doesn't automatically apply to computers.</li>\n<li><b>Pivot on IOCs.</b> One bad IP leads to an infected host, which leads to more IPs, which lead to more hosts. Document every step.</li>\n<li><b>Some IOCs matter more than others</b> (the \"pyramid of pain\"). Hashes and IPs are easy for an attacker to change; their tools and habits are hard to change, so those are more valuable to detect.</li>\n<li><b>Map what you find to the kill chain</b> (recon → delivery → … → persistence → actions) to see what the attacker is after.</li>\n<li><b>Remove them in one sweep.</b> Acting too early tips them off. The worst outcome is finding months later they still had a backdoor you missed.</li>\n<li><b>Post-incident review:</b> what happened, what went well, what could be better, what changes next time. Keep it <b>blameless</b>, and give each action an owner.</li>\n<li>Most incidents aren't about who did it. Attribution is hard and usually not the priority.</li>\n</ul>\n\n<h4>Example: \"my computer's been hacked\" <span class=\"na\">Not assessed</span></h4>\n<p>An employee says their laptop is slow and windows keep flashing up. Typical steps:</p>\n<ul>\n<li>Talk to the user. Image the machine and examine it.</li>\n<li>Check their recent emails, downloads and network logs.</li>\n<li>Find the malware, then check VirusTotal or a sandbox: what does it do, what did it take?</li>\n<li>Look for the same email or malware on other machines, and for other devices contacting the same server.</li>\n<li>Fix: wipe the device, block the domain and file hashes, tell the user.</li>\n</ul>",
    "cards": []
  },
  "practice": {
    "notes": "<h4>Why phones matter</h4>\n<ul>\n<li>Phones used to turn up only in some cases. Now they're a possible source in almost <b>every</b> case and are seized as a matter of course.</li>\n<li>Rule of thumb: if you're taking the laptop, you probably want the phone too. Work chat often lives in WhatsApp, Signal or Messenger.</li>\n<li>But scope widely: sometimes you image dozens of phones and the real evidence is on a laptop.</li>\n</ul>\n\n<h4>Types of device, and what each can give</h4>\n<table>\n<tr><th>Era</th><th>Examples</th><th>Evidence</th></tr>\n<tr><td><b>\"Dumbphones\"</b> (80s–00s, still sold cheap)</td><td>Old Nokia, basic flip phones</td><td>SMS, call logs, contacts. Some later ones: basic web, calendar, email, photos</td></tr>\n<tr><td><b>Early smartphones</b> (early–late 00s)</td><td>Symbian, BlackBerry, Windows Mobile, Palm</td><td>+ web history, calendar, email, files, photos, GPS if fitted, a little app data</td></tr>\n<tr><td><b>Modern smartphones</b> (after 2007)</td><td>iOS and Android (about 97–99% of phones; Android most common)</td><td>+ cell tower, GPS and Wi-Fi location, lots of third-party app data</td></tr>\n<tr><td><b>Other smart devices</b></td><td>Tablets, card-payment terminals, car systems, GPS units</td><td>Same as phones; GPS units can hold navigation history</td></tr>\n</table>\n<ul>\n<li>Early app data was limited: phones were expensive, apps were hard to build, and there was no App Store until 2008.</li>\n<li>Dumbphones are still popular with criminals: no GPS, no web history, no apps, so less to track. More common in criminal cases than corporate ones.</li>\n<li>Companies often have a \"fleet\" of the same model, which makes planning easier.</li>\n<li>Know what a device <i>can</i> hold before promising what you'll find.</li>\n</ul>\n\n<h4>Mobile device or computer?</h4>\n<p>Decided by the <b>operating system</b>, not the shape.</p>\n<table>\n<tr><th>Device</th><th>OS</th><th>Treat as</th></tr>\n<tr><td>iPad</td><td>iPadOS</td><td>Mobile</td></tr>\n<tr><td>Android tablet</td><td>Android</td><td>Mobile</td></tr>\n<tr><td>Surface or other Windows tablet</td><td>Windows</td><td>Computer</td></tr>\n<tr><td>Card-payment terminal</td><td>Often locked-down Android</td><td>Mobile</td></tr>\n</table>\n\n<h4>Why seizing a phone is tricky</h4>\n<ul>\n<li><b>Several radios</b> (mobile, Wi-Fi, Bluetooth, NFC), so just holding it isn't enough to cut it off.</li>\n<li><b>Hard to fully switch off</b>: many have no removable battery, and \"off\" can be a low-power state.</li>\n<li><b>Encrypted by default.</b></li>\n</ul>\n<p>If it stays connected:</p>\n<ul>\n<li><b>Remote wipe</b> (Find My iPhone, Google Find My Device): the keys are destroyed, so the data is gone.</li>\n<li><b>New messages</b> get written into the same database and can overwrite deleted ones still recoverable there. Some phones cap the message database size, so old messages are pushed out.</li>\n<li><b>New email</b> can push older mail off the device.</li>\n<li><b>Cloud sync</b> can delete or change things on the phone.</li>\n</ul>\n<p><b>Prepare before you go:</b> an isolation plan, get passcodes if you can (most phones need one to image), chain of custody forms, notes and photos, and record the <b>IMEI</b> and serial number.</p>\n\n<h4>Isolating a phone</h4>\n<table>\n<tr><th>Method</th><th>Good</th><th>Bad</th></tr>\n<tr><td><b>Faraday bag</b></td><td>Blocks every signal at once. Works for phones you can't switch off. Some have windows so you can work through the bag.</td><td>Cheap ones may leak: <b>test it</b>. Big devices need big bags. Reconnects the moment it's taken out.</td></tr>\n<tr><td><b>Airplane mode</b></td><td>Works when no bag is available</td><td>You have to handle the phone (document it). Check which radios it actually turns off: Wi-Fi and Bluetooth may stay on.</td></tr>\n<tr><td><b>Remove the SIM</b></td><td>Stops the mobile network</td><td>Doesn't stop Wi-Fi, Bluetooth or an <b>eSIM</b>. Some phones won't run without a SIM.</td></tr>\n<tr><td><b>Power off</b></td><td>Good for custody: nothing runs while you hold it</td><td>Most phones must be <b>on</b> to image. It may reconnect when turned back on. After a restart the data stays locked until the passcode is entered (<b>BFU</b>, \"before first unlock\").</td></tr>\n</table>\n<p><b>Order:</b> Faraday bag → airplane mode (plus Wi-Fi and Bluetooth off) → remove SIM → power off if appropriate. Layer them quickly so if one fails, the others cover it.</p>\n<p>An eSIM can only be removed through Settings, with the phone on, which risks the wipe arriving first.</p>\n<p><b>Not</b> valid isolation: changing the PIN (alters evidence), power-saving mode (radios stay on), an ordinary evidence bag (doesn't block signals).</p>\n\n<h4>Getting the data off</h4>\n<ul>\n<li>There are thousands of phone models, so labs rely on one or two big tools: <b>Cellebrite</b> and <b>XRY</b> (MSAB). Santoku Linux is a free, SIFT-like option. You also need the right cables and hardware.</li>\n<li>Keep tools <b>up to date</b>. When an app updates its database layout, an old tool may silently fail to read it. Check the tool's error log or you won't know what you missed.</li>\n</ul>\n<table>\n<tr><th></th><th>Logical</th><th>Physical</th></tr>\n<tr><td>What</td><td>Asks the phone for its data, at the file level</td><td>Bit-for-bit copy of the whole memory chip</td></tr>\n<tr><td>How</td><td>Phone backups (iTunes/Finder, Android backup), an agent app, or the maker's interface</td><td>Root or jailbreak, custom bootloader, <b>JTAG</b> (soldering to test points), <b>chip-off</b> (removing the chip)</td></tr>\n<tr><td>Deleted data?</td><td>Generally no, <b>but</b> deleted messages often survive inside the database files</td><td>Yes, including unallocated space</td></tr>\n<tr><td>Risk</td><td>Low: uses the phone's own features</td><td>High: can damage or brick the phone</td></tr>\n<tr><td>How common</td><td><b>Most common</b></td><td>Preferred but hardest. Apple and Google make it near impossible without exploits</td></tr>\n</table>\n<p>A logical extraction still brings photos with their <b>EXIF</b> metadata, including GPS location.</p>\n\n<h4>SIM cards and memory cards</h4>\n<ul>\n<li><b>SIM:</b> modern phones store little on it, but older ones may keep contacts, SMS and call records there. Image it too.</li>\n<li><b>SIM clone:</b> a copy of the SIM's identity with no network access. Lets a phone that needs a SIM boot and be imaged without connecting.</li>\n<li><b>Memory card:</b> usually take it out and image it separately with a write blocker (it can be huge). But if the <b>phone encrypted it</b>, image it in the phone so the phone decrypts it. Imaging the phone doesn't always include the card.</li>\n</ul>\n\n<h4>Jailbreaking and rooting</h4>\n<ul>\n<li>Gaining full (root) access by running outside code the maker didn't intend (e.g. checkra1n).</li>\n<li><b>Risks:</b> it can brick the phone (evidence gone), and it <b>changes the device</b>: you can't be sure code you didn't write didn't add or delete data.</li>\n</ul>\n<p><b>\"Is a jailbroken image forensically sound?\"</b> Don't just say yes or no. Answer: <b>not automatically</b>, but it can be defended if you:</p>\n<ol>\n<li>take a <b>logical</b> extraction first</li>\n<li>test the same method on an <b>identical test phone</b> loaded with known messages and photos, and show they're unchanged</li>\n<li><b>document</b> what it changes, and <b>disclose</b> it (same approach as live or memory capture)</li>\n</ol>\n\n<h4>Encryption and passcodes</h4>\n<ul>\n<li>The single biggest obstacle in mobile forensics, especially for police.</li>\n<li>A 4-digit PIN is only 10,000 options, and older phones could be brute-forced. Modern phones add delays, wipe after too many tries, and use hardware security chips.</li>\n<li>iPhones may also need the backup password and the PC to be \"trusted\" by the phone. A computer the phone already trusts (a pairing record) can sometimes back it up.</li>\n<li>Commercial exploit tools exist for law enforcement, but they're expensive and version-specific.</li>\n</ul>\n<p><b>San Bernardino (2015–16):</b> the FBI had a shooter's iPhone 5C, locked with a 4-digit PIN and set to wipe after 10 wrong tries. It asked a court to make Apple build software to turn off the wipe and the delays. Apple refused. A third party (later named as Australian firm Azimuth Security) unlocked it for over $1 million, and the case was dropped. The method only worked on older iPhones.</p>\n\n<h4>The process problem</h4>\n<ul>\n<li>To image most phones, the phone must be <b>on</b> and <b>running code</b>. You can't use a write blocker in about 99% of cases.</li>\n<li>So, as with memory: understand exactly what your tool does to the phone, document it, and be ready to defend it in court.</li>\n</ul>\n\n<h4>Two ways to analyse</h4>\n<table>\n<tr><th>High-level</th><th>Targeted</th></tr>\n<tr><td>A tool parses the whole extraction automatically (SMS, calls, contacts, known apps)</td><td>Dig into one app's database by hand</td></tr>\n<tr><td>Good start for most cases. Feels push-button, but with so many phones it's necessary.</td><td>For malware, incident response, or apps the tool doesn't know</td></tr>\n<tr><td>Tools: XRY Reader, Cellebrite Reader, iPhone Backup Extractor, iLEAPP, ALEAPP</td><td>Tools: DB Browser for SQLite, a plist viewer, jadx</td></tr>\n<tr><td>Fast, covers many phones</td><td>Slow, usually one phone at a time</td></tr>\n</table>\n\n<h4>What a phone has that a laptop doesn't</h4>\n<ul>\n<li>SMS/iMessage and mobile call logs</li>\n<li>Location: cell towers, GPS, Wi-Fi, map searches and destinations</li>\n<li>IDs: <b>IMEI</b> (the handset), <b>IMSI</b> and <b>ICCID</b> (the SIM), phone number, Apple/Google account</li>\n<li>Mobile-only apps (ride share, banking, chat)</li>\n<li>Health data, saved Wi-Fi networks and passwords, Bluetooth pairings</li>\n</ul>\n<p>All of it is full of timestamps, so add it to your timeline. Always check the phone's <b>time zone</b>, and whether each app saved times in UTC or local time.</p>\n\n<h4>Phone data lives in databases</h4>\n<ul>\n<li>Most app data is in <b>SQLite</b> databases (single-file databases). Settings are often in <b>plists</b> (iOS) or <b>XML</b> (Android).</li>\n<li>Third-party apps keep their own chats and calls. Big tools read the apps they know, so check for others yourself.</li>\n<li><b>Deleted rows</b> often stay in the database file (in free space, or the <code>-wal</code> journal file next to it) until the database is cleaned up. So even a logical extraction can recover deleted messages.</li>\n</ul>\n<table>\n<tr><th>What</th><th>iPhone</th><th>Android</th></tr>\n<tr><td>Messages</td><td><code>sms.db</code> (Library/SMS)</td><td><code>mmssms.db</code> (com.android.providers.telephony)</td></tr>\n<tr><td>Contacts</td><td><code>AddressBook.sqlitedb</code></td><td><code>contacts2.db</code></td></tr>\n<tr><td>Accounts</td><td><code>Accounts3.sqlite</code></td><td><code>accounts.db</code></td></tr>\n<tr><td>Location</td><td><code>consolidated.db</code> (old iOS); newer iOS spreads it across several databases</td><td>Google Maps and location history databases</td></tr>\n<tr><td>Wi-Fi</td><td>Known networks plist</td><td><code>WifiConfigStore.xml</code> (older: <code>wpa_supplicant.conf</code>)</td></tr>\n<tr><td>WhatsApp</td><td><code>ChatStorage.sqlite</code> + plists + media</td><td><code>msgstore.db</code></td></tr>\n<tr><td>Installed apps</td><td>App list by bundle ID</td><td><code>packages.xml</code></td></tr>\n</table>\n<p>Exact paths change between OS and app versions: always check for the specific model and version.</p>\n\n<h4>Phone time formats</h4>\n<ul>\n<li><b>iOS:</b> often \"Mac absolute time\": seconds since <b>1 Jan 2001</b> (newer sms.db uses nanoseconds since 2001)</li>\n<li><b>Android:</b> usually Unix time in <b>milliseconds</b> since 1 Jan 1970</li>\n<li>Get the starting date wrong and every time is out by about 31 years.</li>\n</ul>\n\n<h4>Doing it in iLEAPP / ALEAPP</h4>\n<ul>\n<li>Free tools that turn an iOS (iLEAPP) or Android (ALEAPP) extraction into an HTML report. Point it at the extraction folder or archive, pick an output folder, run, then open the report.</li>\n<li>The report has a <b>sidebar of categories</b>, each a table you can search and sort, and a timeline.</li>\n</ul>\n<table>\n<tr><th>You want</th><th>Where to look</th><th>Why</th></tr>\n<tr><td>Device serial, IMEI, OS version</td><td>Device info section</td><td>Record it for chain of custody, and confirm it's the right phone</td></tr>\n<tr><td>Phone number, Apple/Google account</td><td>Accounts, device info</td><td>Links the phone to a person</td></tr>\n<tr><td>Contacts</td><td>Contacts (count the rows)</td><td>Who they know, and names for message numbers</td></tr>\n<tr><td>Messages, including deleted</td><td>SMS/iMessage section. For deleted ones, open the database and its <code>-wal</code> file yourself</td><td>Deleted rows can survive in the database</td></tr>\n<tr><td>Installed apps</td><td>Installed apps / application state. Read the <b>bundle ID</b> (e.g. <code>com.apple.calculator</code>), not the name or icon</td><td>An app called \"Calculator\" with a different ID may be a <b>hidden photo vault</b></td></tr>\n<tr><td>Signs of jailbreak</td><td>Installed apps: package managers like <code>com.saurik.Cydia</code> or Sileo</td><td>Affects how the evidence can be trusted</td></tr>\n<tr><td>Where they went</td><td>Locations, Maps / navigation history, the timeline for that date</td><td>Location is a phone's big strength. Check UTC vs local</td></tr>\n<tr><td>Saved Wi-Fi passwords</td><td>Wi-Fi section (Android: <code>WifiConfigStore.xml</code>, the PreSharedKey field)</td><td>Places they've been; may unlock other evidence. Check older copies for what it was \"at seizure\"</td></tr>\n<tr><td>Photos and where they were taken</td><td>Photos / media; then <code>exiftool</code> on the file for GPS and time</td><td>GPS gives an address. Receipts in photos are records too</td></tr>\n</table>\n\n<h4>Doing it by hand</h4>\n<table>\n<tr><th>Task</th><th>Tool and how</th></tr>\n<tr><td>Read a message database</td><td><b>DB Browser for SQLite</b>: open <code>sms.db</code>, Browse Data → <code>message</code> table (text, date, sent or received) and <code>handle</code> table (the phone numbers). Link them on the handle ID.</td></tr>\n<tr><td>Find deleted messages</td><td>Run <code>strings</code> over <code>sms.db*</code> / <code>mmssms.db*</code> (includes the -wal file), or use a SQLite recovery tool</td></tr>\n<tr><td>Read a plist</td><td>A plist viewer, or <code>plutil -p file.plist</code> on a Mac</td></tr>\n<tr><td>Photo location and hidden preview</td><td><code>exiftool photo.jpg</code> for GPS and dates. <code>exiftool -b -ThumbnailImage photo.jpg &gt; thumb.jpg</code> pulls out the small preview, which may show what the photo looked like <b>before editing</b></td></tr>\n<tr><td>Look inside an Android app (APK)</td><td>An APK is a ZIP. <b>jadx</b> (or apktool) turns its code (<code>classes.dex</code>) back into readable Java. Search the code and <code>res/values/strings.xml</code> for hard-coded passwords or keys.</td></tr>\n<tr><td>Vault app contents</td><td>Find the app's folder (Android: <code>/data/data/&lt;package&gt;/</code>), count its files, look for its key in <code>shared_prefs</code>, decrypt, then exiftool the photos</td></tr>\n</table>",
    "cards": [
      [
        "Why do mobiles matter now? What's the rule of thumb?",
        "They're a potential source in almost every case, seized as a matter of course. <b>\"If you're getting a laptop, you usually want the phone too.\"</b> Business chat may live in WhatsApp, Signal or Messenger."
      ],
      [
        "Generations and the evidence each can give.",
        "<ul><li><b>Dumbphones:</b> SMS, call logs, contacts</li><li><b>Early smartphones</b> (Symbian, BlackBerry, Windows Mobile): + web history, calendar, email, files, photos, maybe GPS, limited app data</li><li><b>Post-iPhone</b> (iOS/Android, about 97–99% of the market): + cell/GPS/Wi-Fi location, <b>extensive third-party app data</b></li></ul>Know what a device <i>can</i> hold before promising anything."
      ],
      [
        "Why was early third-party app data limited? Why do criminals like dumbphones?",
        "Phones were expensive, development was hard, and there was <b>no App Store</b> until 2007. Dumbphones give <b>no GPS, web history or messaging apps</b>, just calls and SMS, so they're harder to track."
      ],
      [
        "Why keep mobile tools up to date?",
        "Apps change their <b>SQLite schema</b> with updates; an old Cellebrite may <b>fail to parse silently</b>. <b>Check the processing error logs</b>, or you won't know evidence was missed."
      ],
      [
        "Mobile device or computer? What's the rule?",
        "Decided by the <b>operating system</b>. Mobile OS (iOS/iPadOS, Android) → mobile tools. Desktop OS (Surface Pro on Windows) → computer methods. iPad Pro and Galaxy Tab S4 = mobile; Surface Pro and Tab Pro (Windows) = computer. POS terminals often run locked-down Android."
      ],
      [
        "Lesson: you image dozens of phones and none matter. What went wrong?",
        "Nothing, as long as you <b>scoped widely</b>. The real evidence can be on another device (e.g. the laptop). Seize broadly, but don't assume the phone holds the answer."
      ],
      [
        "Why is phone seizure tricky? What must you prepare?",
        "<b>Multiple radios</b> (so taking it away isn't enough), <b>hard to fully power down</b>, <b>encryption always on</b>. Prepare an isolation strategy, get <b>passcodes</b> (most phones need one to image), chain of custody, photos, and record <b>IMEI and serial</b>."
      ],
      [
        "Why isolate a phone? Beyond remote wipe.",
        "<ul><li><b>Remote wipe</b> (Find My, Android Device Manager): keys dropped, data gone</li><li><b>New SMS/MMS</b> are written to SQLite and can <b>overwrite deleted rows</b></li><li>New email <b>pushes older mail off</b> the device</li><li><b>Account sync</b> deletions propagate</li></ul>"
      ],
      [
        "Four isolation techniques: pros and cons.",
        "<ul><li><b>Power down:</b> good custody, but phones must be on to image; may reconnect at power-on; BFU encryption</li><li><b>Remove SIM:</b> stops cellular, but not Wi-Fi, Bluetooth or <b>eSIM</b>; some phones won't run without a SIM</li><li><b>Airplane mode:</b> must handle the phone (document it); check which radios it kills</li><li><b>Faraday bag:</b> works on devices you can't power off; size limits; can fail; <b>test it</b>; reconnects if removed</li></ul>"
      ],
      [
        "Correct isolation order.",
        "1. <b>Faraday bag</b><br>2. <b>Airplane mode</b> (plus Wi-Fi and Bluetooth off)<br>3. <b>Remove SIM</b> (failsafe)<br>4. <b>Power down</b> if appropriate<br>Layer them quickly so one failure is covered by the others."
      ],
      [
        "Why isn't pulling the SIM enough? The eSIM problem?",
        "Phones <b>beacon and probe for known Wi-Fi</b> and have Bluetooth. An <b>eSIM</b> can only be removed by powering on and using Settings, which risks receiving the wipe first."
      ],
      [
        "Mobile acquisition tools.",
        "<b>Cellebrite</b>, <b>XRY (MSAB)</b>; <b>Santoku Linux</b> (open source). You also need the right cables and hardware, which can be very expensive."
      ],
      [
        "Logical acquisition (mobile).",
        "The <b>most common</b> type: a file-system level extraction of what the phone <b>presents</b> (backups like iTunes/ADB, agents, API calls). <b>Generally no deleted files</b>, but deleted rows may survive inside <b>SQLite DBs</b> (e.g. SMS.db) until they're vacuumed."
      ],
      [
        "Physical acquisition (mobile).",
        "A <b>bit-for-bit copy of flash</b>, including unallocated space and deleted data. <b>Preferred but hardest</b>: needs root/jailbreak, <b>custom bootloaders</b>, <b>JTAG</b> (soldering to test points) or <b>chip-off</b> (risky)."
      ],
      [
        "Jailbreaking: what is it, and what are the risks?",
        "Gaining <b>root</b> by installing third-party code on hardware not designed for it (e.g. checkra1n). Risks: <b>bricking</b> (evidence destroyed); <b>it modifies the device</b>, and you can't guarantee it didn't add or delete data (code you didn't write)."
      ],
      [
        "\"Is a jailbroken image forensically sound?\" Model answer.",
        "<b>Not automatically.</b> It changes the device, but can be <b>defended</b> if you: take a <b>logical acquisition first</b>; <b>test on an identical test phone</b> with known SMS and photos and show they're <b>unchanged</b>; <b>document, validate and disclose</b> it (like memory or live imaging). Beware the yes/no trap."
      ],
      [
        "SIM cards: data, and SIM cloning.",
        "Older phones may store <b>contacts, SMS and call records</b> on the SIM, so image it or you might miss evidence. <b>SIM clone:</b> mirrors the SIM's identity with <b>no network connectivity</b>, so a phone that needs a SIM can boot and be imaged safely."
      ],
      [
        "Memory card: image it in the phone or out?",
        "Usually <b>remove it and image normally</b> (write blocker; it may be big). If it's <b>encrypted by the phone</b>, image it <b>in the phone</b> so it decrypts. Imaging the phone doesn't always capture the card."
      ],
      [
        "Mobile encryption: PIN brute force facts.",
        "Encryption is the <b>biggest challenge</b>. A 4-digit PIN = <b>10,000 combinations</b>, so older phones could be brute-forced by a robot in under a day. Early iPhones could get around the 10-try wipe by rebooting before the last try (no saved counter). A computer the phone already trusts (pairing record) can sometimes unlock or back it up."
      ],
      [
        "San Bernardino (2015–16).",
        "The FBI wanted Apple to build software disabling auto-erase and delays on a shooter's <b>iPhone 5C</b>. <b>Apple refused.</b> In March 2016 a third party unlocked it (over $1.3M; 5C and older without Touch ID), and the case was withdrawn. The vendor was later named as <b>Azimuth Security</b> (Australia)."
      ],
      [
        "The mobile process challenge.",
        "The phone must be <b>on and running code</b> to acquire it; <b>write blocking is impossible in about 99% of cases</b>. The answer is <b>documentation</b>: understand and defend exactly what your tool does."
      ],
      [
        "High-level vs targeted analysis.",
        "<b>High-level:</b> tools auto-parse the whole image (XRY Reader, iPhone Backup Extractor). A good start for most cases. <b>Targeted:</b> low-level, one app or DB (malware/IR); slow."
      ],
      [
        "Key mobile databases (older iOS).",
        "<b>sms.db</b> (iOS, SQLite: <code>message</code> + <code>handle</code> tables; link to contacts for names); <b>consolidated.db</b> (old iOS location); WhatsApp <b>ChatStorage.sqlite</b> + plists. Check the phone's time zone and UTC vs local for each app."
      ],
      [
        "What can a phone give you that a hard drive can't?",
        "SMS/iMessage, cellular call logs; <b>cell-tower and GPS location</b>, Maps destinations; <b>IMEI/IMSI/ICCID</b>, phone number, Apple ID; mobile-only app data (WhatsApp, Uber, banking); <b>health data</b>; Wi-Fi networks and passwords; Bluetooth pairings."
      ],
      [
        "Mobile difficulties (Tut 7).",
        "Many phone types; <b>encryption by default</b>; <b>remote wipe</b>; <b>changing state</b> (messages, cloud sync); hard to power down fully."
      ],
      [
        "Which are NOT valid phone isolation methods?",
        "<b>Changing the PIN</b> (alters evidence), <b>power-saving mode</b> (radios stay on), an <b>ordinary evidence bag</b> (doesn't block RF)."
      ],
      [
        "How has mobile forensics evolved?",
        "Dumbphones (SIM/handset dumps, proprietary cables) → early smartphones → modern <b>FDE/FBE by default</b>, Secure Enclave, auto-wipe, USB restricted mode, so physical extraction is near-impossible without exploits (GrayKey, Cellebrite Premium). Reliance on logical, backup and cloud. <b>Tool versions matter.</b>"
      ],
      [
        "What do iLEAPP and ALEAPP do?",
        "Free tools that turn an iOS (iLEAPP) or Android (ALEAPP) extraction into a searchable HTML report, with a sidebar of categories (device info, accounts, contacts, messages, apps, locations, Wi-Fi) and a timeline."
      ],
      [
        "How do you spot a disguised app (e.g. a fake calculator)?",
        "Check its <b>bundle ID</b> / package name in the installed apps list, not its name or icon. The real one is <code>com.apple.calculator</code>; anything else called \"Calculator\" may be a hidden photo vault."
      ],
      [
        "What shows that an iPhone was jailbroken?",
        "Package managers in the installed apps: <code>com.saurik.Cydia</code> or Sileo (and tools like checkra1n or unc0ver)."
      ],
      [
        "Where are SMS on iOS and Android?",
        "<b>iOS:</b> <code>sms.db</code> (Library/SMS). <b>Android:</b> <code>mmssms.db</code> in com.android.providers.telephony. Both SQLite."
      ],
      [
        "How do you read sms.db by hand?",
        "Open it in <b>DB Browser for SQLite</b>. The <code>message</code> table has the text, date and whether it was sent or received; the <code>handle</code> table has the phone numbers. Link them on the handle ID."
      ],
      [
        "How can a logical extraction still recover deleted messages?",
        "Deleted rows stay inside the SQLite file (free pages) or its <code>-wal</code> journal until the database is cleaned. Check with <code>strings</code> or a SQLite recovery tool."
      ],
      [
        "Where does Android store saved Wi-Fi passwords?",
        "<code>WifiConfigStore.xml</code> (the PreSharedKey field); older versions use <code>wpa_supplicant.conf</code>."
      ],
      [
        "How do you get GPS and a hidden preview from a photo?",
        "<code>exiftool photo.jpg</code> shows GPS and dates. <code>exiftool -b -ThumbnailImage photo.jpg &gt; thumb.jpg</code> extracts the embedded preview, which may show the photo <b>before</b> it was edited."
      ],
      [
        "How do you look inside an Android app (APK)?",
        "An APK is a ZIP. Decompile <code>classes.dex</code> with <b>jadx</b> (or apktool) and search the code and <code>res/values/strings.xml</code> for hard-coded passwords or keys."
      ],
      [
        "iOS vs Android time formats?",
        "<b>iOS:</b> often seconds (or nanoseconds) since <b>1 Jan 2001</b> (Mac absolute time). <b>Android:</b> usually Unix <b>milliseconds</b> since 1970. Wrong start date = about 31 years out."
      ],
      [
        "IMEI vs IMSI vs ICCID.",
        "<b>IMEI:</b> identifies the handset. <b>IMSI:</b> identifies the subscriber on the SIM. <b>ICCID:</b> the SIM card's serial number."
      ],
      [
        "What is BFU, and why does it matter?",
        "<b>Before first unlock</b>: after a restart, a phone's data stays encrypted until the passcode is entered. Powering a phone off can lock you out of data you could have got while it was on and unlocked."
      ],
      [
        "Which isolation methods are NOT valid?",
        "Changing the PIN (alters evidence), power-saving mode (radios stay on), an ordinary evidence bag (doesn't block signals)."
      ],
      [
        "High-level vs targeted mobile analysis: which tools?",
        "<b>High-level:</b> XRY Reader, Cellebrite Reader, iPhone Backup Extractor, iLEAPP/ALEAPP. <b>Targeted:</b> DB Browser for SQLite, plist viewers, jadx, for one app at a time."
      ],
      [
        "What's a vault app, and how would you examine it?",
        "An app that hides encrypted photos behind a disguise. Find its folder, count the files, find its key (often in <code>shared_prefs</code>), decrypt, then check the photos' EXIF for location."
      ]
    ]
  }
};