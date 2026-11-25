window.CONTENT = window.CONTENT || {};
CONTENT[8] = {
  "professional": {
    "notes": "<p>Monday's lecture isn't assessed. A few of its writing tips are still exactly what markers want in written answers, so here's the short version.</p>\n\n<h4>Writing findings that hold up <span class=\"na\">Not assessed</span></h4>\n<ul>\n<li><b>Never \"I found X, therefore Y.\"</b> One artefact is a claim. Line several up into a sequence.</li>\n<li><b>Installed isn't used.</b> To go further, link it: e.g. one PC's registry lists another PC's IP as a recent remote-desktop connection, <i>and</i> the other PC's log shows connections from the first.</li>\n<li><b>Absence can count, carefully.</b> If a cleaning tool was installed and then there are no execution traces at all, that gap is worth stating, but it's weaker than direct evidence.</li>\n<li><b>Read actions in context.</b> An IT admin using remote-control software may just be doing their job.</li>\n<li>Name the exact source (path, file) and tool version for every finding. Explain technical terms like hashes for the judge.</li>\n<li>Label opinion as opinion. Never say guilty or innocent.</li>\n</ul>\n\n<h4>Other ideas from the lecture <span class=\"na\">Not assessed</span></h4>\n<ul>\n<li><b>Access log vs audit log:</b> an access log says something was requested; an audit log says who changed what, and when.</li>\n<li><b>Log retention</b> limits investigations: once logs are deleted, that activity can't be investigated.</li>\n<li><b>Private browsing</b> still leaves traces: anything shown on screen was in RAM, so memory and the page file can hold it.</li>\n<li><b>AI tools</b> in an investigation: you must understand, check and be able to reproduce what they did. They make small mistakes.</li>\n</ul>",
    "cards": []
  },
  "practice": {
    "notes": "<h4>Malware: the main types</h4>\n<table>\n<tr><th>Type</th><th>What it does</th></tr>\n<tr><td><b>Spyware</b></td><td>Watches the user and sends data out (keystrokes, browser data, screenshots)</td></tr>\n<tr><td><b>Adware</b></td><td>Shows pop-ups and ads (remember Julie Amero)</td></tr>\n<tr><td><b>Ransomware</b></td><td>Encrypts files and demands payment (e.g. WannaCry)</td></tr>\n<tr><td><b>Trojan</b></td><td>Disguised as something useful</td></tr>\n<tr><td><b>Dropper</b></td><td>Exists only to download and install more malware</td></tr>\n<tr><td><b>Rootkit</b></td><td>Hides itself and other malware from the system</td></tr>\n</table>\n\n<h4>How malware gets in</h4>\n<ul>\n<li><b>People:</b> phishing emails, bad downloads</li>\n<li><b>Code bugs:</b> a flaw that lets an attacker run code remotely (RCE)</li>\n<li><b>Supply chain:</b> a trusted supplier or software update is compromised</li>\n<li><b>Stolen credentials:</b> logging in as a real user</li>\n</ul>\n\n<h4>How it stays (persistence)</h4>\n<p>Malware wants to survive a reboot. Common spots:</p>\n<ul>\n<li>Registry <b>Run</b> keys (user and machine)</li>\n<li><b>Services</b></li>\n<li><b>Scheduled tasks</b></li>\n<li>The <b>Startup</b> folder</li>\n<li><b>DLL hijacking:</b> putting a malicious DLL where a program will load it instead of the real one</li>\n</ul>\n<p>Malware doesn't always have to run straight away: a planted DLL (or a <code>.so</code> via <code>LD_PRELOAD</code> on Linux) just waits to be loaded.</p>\n\n<h4>How it hides from analysts</h4>\n<ul>\n<li><b>Rootkits:</b> unhook from the process list (DKOM, see Week 4)</li>\n<li><b>Sandbox detection:</b> checks if it's in a virtual machine or analysis tool, and behaves if so</li>\n<li><b>Waiting for a human:</b> does nothing until the mouse moves or a key is pressed</li>\n<li><b>One-time download links:</b> the payload URL works once, so you can't fetch it again</li>\n<li><b>Obfuscation:</b> scrambled code or strings (Base64, XOR, reversed text) so it doesn't look suspicious</li>\n</ul>\n\n<h4>Two ways to analyse malware</h4>\n<table>\n<tr><th></th><th>Dynamic</th><th>Static</th></tr>\n<tr><td>What</td><td><b>Run it</b> somewhere safe and watch what it does</td><td><b>Read it</b> without running it</td></tr>\n<tr><td>Good for</td><td>Quick view of real behaviour: files, registry, network</td><td>Seeing everything it <i>could</i> do, including hidden paths</td></tr>\n<tr><td>Weakness</td><td>Malware may detect the sandbox and behave</td><td>Slow; obfuscation and packing get in the way</td></tr>\n<tr><td>Tools</td><td>Virtual machines, Sandboxie, online sandboxes, Process Monitor, Process Explorer, Wireshark, strace/ltrace (Linux)</td><td>strings, deobfuscation, Ghidra or IDA (disassemblers), YARA</td></tr>\n</table>\n<p>Online sandboxes are handy, but uploading a client's file to a public service can break <b>confidentiality</b>, and may tip off the attacker.</p>\n\n<h4>Doing it: the tools</h4>\n<table>\n<tr><th>Tool</th><th>What you do</th><th>What you look for</th></tr>\n<tr><td><b>VirusTotal</b></td><td>Search the file's hash (don't upload the file itself if it's confidential)</td><td>How many engines flag it, the malware family name, related domains and IPs</td></tr>\n<tr><td><b>strings</b></td><td><code>strings sample.exe | less</code> (add <code>-el</code> for Windows wide text)</td><td>URLs, IPs, file paths, registry keys, commands, error messages</td></tr>\n<tr><td><b>Process Monitor</b> (Procmon)</td><td>Start capture, run the sample, stop. Filter → <i>Process Name is sample.exe</i>. Tools → Process Tree for children.</td><td>Operation column: <code>WriteFile</code> (files dropped), <code>RegSetValue</code> (e.g. a Run key = persistence), <code>Process Create</code>, <code>TCP Connect</code> (who it calls)</td></tr>\n<tr><td><b>Process Explorer</b></td><td>Live tree of running processes. Options → VirusTotal.com → check.</td><td>Odd parents, unsigned programs, programs in Temp/Downloads, VirusTotal hits</td></tr>\n<tr><td><b>Wireshark</b></td><td>Capture while the sample runs</td><td>Procmon shows <i>that</i> it connected, not <i>what</i> it sent. Wireshark shows the DNS lookups, servers and data.</td></tr>\n<tr><td><b>Sandboxie</b></td><td>Run one program in a sandbox</td><td>Its file and registry writes are redirected to a separate folder, so everything it creates is isolated and easy to list</td></tr>\n<tr><td><b>Ghidra</b></td><td>New project → import the file → let it auto-analyse. Search → For Strings. Click a function to see the Decompile window.</td><td>Readable C-like code: what it checks, where it connects, hard-coded keys or passwords</td></tr>\n<tr><td><b>YARA</b></td><td>Write a rule, then <code>yara rule.yar file_or_folder</code></td><td>Matches files (or memory) against patterns for a malware family</td></tr>\n<tr><td><b>CyberChef</b> (or a script)</td><td>Paste the scrambled text, add recipes: From Base64, From Hex, ROT13, XOR, Reverse</td><td>The real command, URL or key hidden inside</td></tr>\n</table>\n\n<p><b>A YARA rule</b> reads like this:</p>\n<pre>rule Example_Stealer {\n  strings:\n    $a = \"steal_passwords\" ascii\n    $b = { 4D 5A }                 // EXE header\n    $c = \"evil-domain.example\"\n  condition:\n    $b at 0 and ($a or $c)\n}</pre>\n<p>Name, the patterns to look for, and when to say \"match\". Sigma does the same job for <b>logs</b> (see Week 9).</p>\n\n<h4>What happens when you visit a website</h4>\n<p>Knowing normal lets you spot abnormal, and malware uses the same steps.</p>\n<ol>\n<li>Check the <b>hosts file</b> and DNS cache, then a <b>DNS lookup</b> (UDP 53) for the IP</li>\n<li><b>ARP</b> to find the router's MAC address</li>\n<li><b>TCP handshake</b>: SYN → SYN-ACK → ACK on port 80</li>\n<li><b>HTTP request</b> (GET, with Host and User-Agent headers)</li>\n<li>Server <b>redirects</b> to HTTPS (301) → new handshake on 443 + <b>TLS handshake</b> (site name, certificate)</li>\n<li>Page loads, and the browser fetches images, scripts and so on</li>\n</ol>\n<p>No DNS answer = no connection. So a malware sample that never gets a DNS reply never reaches its server.</p>\n\n<h4>Linux: where to look</h4>\n<ul>\n<li><code>~/.bash_history</code>: commands typed</li>\n<li><code>/var/log/auth.log</code> (logins, sudo), <code>/var/log/syslog</code></li>\n<li><code>crontab</code> / <code>/etc/cron*</code>: scheduled jobs (persistence)</li>\n<li><code>/etc/passwd</code> and <code>/etc/shadow</code>: accounts and password hashes</li>\n<li><code>~/.ssh/authorized_keys</code>: a planted key = a back door</li>\n</ul>\n\n<h4>Incident response</h4>\n<ul>\n<li>Using forensics to investigate and respond to an attack, often <b>while it's still happening</b>.</li>\n<li>Plan: scope, communications, and the big trade-off: <b>containing</b> the attack quickly vs <b>preserving evidence</b> (pulling the plug stops it but loses memory).</li>\n<li>Collect in <b>order of volatility</b>: most fragile first (memory, network connections) → disk → backups and logs.</li>\n<li>A typical malware case: talk to the user → capture memory → image the disk → find the sample → hash it and check VirusTotal → see what it did (sandbox, Procmon, Wireshark) → search other machines for the same file or server → clean up and block.</li>\n</ul>\n\n<h4>Giving evidence <span class=\"na\">Not assessed</span></h4>\n<p>The Wednesday lecture on court and cross-examination isn't assessed, but these answers use assessed knowledge, and the mock trial questions are like exam questions.</p>\n<ul>\n<li><b>Prepare:</b> know the case, your instructions (your report must stay inside them; the instructions can be seen by the other side), and every line of your report. Answer only what's asked. \"I don't know\" is fine.</li>\n<li><b>Made a mistake?</b> Own it. Minor: explain it. Major: withdraw and reissue. Court transcripts are public and can be read back to you in later cases.</li>\n<li><b>\"How did you find the time zone?\"</b> SYSTEM hive → <code>Select\\Current</code> → that control set's <code>TimeZoneInformation</code>. Not \"NTP\": that sets the clock, not the zone.</li>\n<li><b>\"When was this written to the page file?\"</b> You can't say: the page file has no timestamps for its contents.</li>\n<li><b>\"Your tool version had a hash bug.\"</b> You checked the hash independently with a second tool and got the same value.</li>\n<li><b>\"Was she unhappy at work?\"</b> Not your expertise. Decline. Stay in your lane.</li>\n<li><b>Opinion vs fact:</b> about 600 MB sent over an encrypted connection to a cloud storage site, and a 600 MB ZIP on the desktop: \"In my opinion the file was uploaded.\" That's an inference. Label it.</li>\n<li><b>Accused of bias?</b> \"My role is to present the facts independently. My personal views didn't affect my evidence.\"</li>\n<li><b>Don't put intent in a report</b> (\"changed the time zone to cover tracks\") unless you can rule out other causes (e.g. an update).</li>\n</ul>",
    "cards": [
      [
        "Malware types.",
        "<b>Spyware</b> (monitors and exfiltrates), <b>adware</b> (pop-ups, cf. Amero), <b>ransomware</b> (WannaCry), <b>trojans</b>, <b>droppers</b> (install other malware), and <b>persistence</b> (Run keys, services, scheduled tasks, startup folder, DLL hijacking)."
      ],
      [
        "How does malware get deployed?",
        "<b>Human error</b> (phishing), <b>code vulnerabilities</b> (RCE), <b>upstream/supply chain</b>, <b>credential compromise</b>."
      ],
      [
        "What happens when you visit google.com:80?",
        "1. Hosts file and DNS cache → <b>DNS lookup</b> (UDP 53)<br>2. <b>ARP</b> for the gateway MAC<br>3. <b>TCP handshake</b> SYN, SYN-ACK, ACK on port 80<br>4. <b>HTTP GET</b> (Host, User-Agent)<br>5. <b>301 → HTTPS 443</b>, new handshake + <b>TLS</b> (SNI, certificate)<br>6. Render and fetch sub-resources<br>No DNS answer means no connection."
      ],
      [
        "Dynamic analysis tools.",
        "VMs, <b>Sandboxie</b>, online sandboxes (ANY.RUN, but beware confidentiality). <b>Procmon</b> (file, registry and network access per process; <b>no packet contents</b>, so pair with Wireshark), <b>Process Explorer</b>, <code>strace</code>/<code>ltrace</code>."
      ],
      [
        "Static analysis.",
        "<b>Deobfuscation</b> (unscrambling Base64, XOR, reversed text), <b>disassembly</b> (Ghidra/IDA), <b>YARA rules</b> (pattern signatures for families)."
      ],
      [
        "Malware evasion techniques.",
        "<b>Rootkits</b> (unlink from EPROCESS), <b>sandbox detection</b>, <b>human detection</b> (waits for mouse movement), <b>one-time URLs</b>."
      ],
      [
        "\"Malware doesn't always have to run.\"",
        "A malicious DLL or .so can be <b>planted for future execution</b>: <b>DLL search-order hijacking</b>, or LD_PRELOAD on Linux."
      ],
      [
        "Linux forensics basics.",
        "bash history, <code>/var/log</code> (auth.log, syslog), cron, /etc/passwd and shadow, SSH authorized_keys."
      ],
      [
        "Define incident response.",
        "Applying digital forensics to investigate and <b>respond, often in real time</b>. Needs careful planning: scope, <b>containment vs evidence preservation</b>, communications, order of volatility."
      ],
      [
        "Dynamic vs static malware analysis.",
        "<b>Dynamic:</b> run it in a sandbox and watch (Procmon, Process Explorer, Wireshark). Fast, real behaviour, but it may detect the sandbox.<br><b>Static:</b> read it without running (strings, Ghidra, YARA). Shows everything it could do, but slow."
      ],
      [
        "Process Monitor: what do you filter on, and which operations matter?",
        "Filter <b>Process Name is sample.exe</b>. Watch <code>WriteFile</code> (files dropped), <code>RegSetValue</code> (e.g. Run keys = persistence), <code>Process Create</code> (children), <code>TCP Connect</code> (servers contacted)."
      ],
      [
        "Why pair Process Monitor with Wireshark?",
        "Procmon shows <b>that</b> a process connected, but not <b>what</b> it sent. Wireshark shows the DNS lookups, servers and data."
      ],
      [
        "What does Process Explorer add?",
        "A live parent/child tree, signature checks, and a VirusTotal column, so odd parents, unsigned programs and known malware stand out."
      ],
      [
        "How do you check a sample on VirusTotal without breaching confidentiality?",
        "Search its <b>hash</b> instead of uploading the file. Uploading shares it publicly and may tip off the attacker."
      ],
      [
        "What does Ghidra do, and where do you look?",
        "Disassembles and decompiles a program. Import → auto-analyse → Search for Strings, then read functions in the Decompile window for checks, servers, keys."
      ],
      [
        "What are the parts of a YARA rule?",
        "A <b>name</b>, <b>strings</b> (text or byte patterns to find) and a <b>condition</b> (when to call it a match). Used on files or memory."
      ],
      [
        "Name five persistence locations on Windows.",
        "Run keys, services, scheduled tasks, the Startup folder, DLL hijacking."
      ],
      [
        "Four ways malware hides from analysts.",
        "Rootkits (unhooking from process lists), sandbox detection, waiting for human input, one-time download links. Plus obfuscation."
      ],
      [
        "Containment vs evidence preservation: what's the trade-off?",
        "Stopping the attack fast (pulling the plug, isolating) can destroy volatile evidence like memory and live connections. Plan it, and capture the most volatile data first if you can."
      ],
      [
        "What is the order of volatility?",
        "Collect the most fragile data first: memory and live network connections → running processes → disk → logs and backups."
      ],
      [
        "Where do you look on a Linux machine?",
        "<code>.bash_history</code>, <code>/var/log/auth.log</code> and <code>syslog</code>, cron jobs, <code>/etc/passwd</code> and <code>/etc/shadow</code>, <code>~/.ssh/authorized_keys</code>."
      ]
    ]
  }
};