window.CONTENT = window.CONTENT || {};
CONTENT[4] = {
  "professional": {
    "notes": "<p>No Monday lecture this week (public holiday).</p>\n\n<h4>The professional side of memory</h4>\n<ul>\n<li><b>Decide before you arrive</b> whether you need RAM. Once the power goes, it's gone for good.</li>\n<li><b>You will change the evidence</b> by capturing it. That's fine if you can explain exactly what you changed and why.</li>\n<li><b>Write down</b> the tool, version, where you ran it from, the time, and the hash of the output.</li>\n<li>In court, keep it simple: \"RAM is the computer's short-term memory. It holds what was running at that moment.\"</li>\n</ul>",
    "cards": [
      [
        "Why decide about RAM <b>before</b> arriving at the scene?",
        "RAM is lost the moment power goes. If you only think about it after pulling the plug, the chance is gone."
      ],
      [
        "Capturing RAM changes it. Does that ruin the evidence?",
        "No. Every capture changes memory because the tool has to run. What matters is <b>documenting</b> it: which tool, version, where it ran from, when, and the output hash, so the change can be explained."
      ],
      [
        "How would you explain RAM to a jury in one line?",
        "The computer's <b>short-term memory</b>: it holds what was running and open at that moment, and is wiped when the power goes off."
      ],
      [
        "What should your notes record for a memory capture?",
        "Tool and version, where it was run from (network share or USB), the time, the machine state, and the <b>hash</b> of the memory image."
      ]
    ]
  },
  "technical": {
    "notes": "<h4>Why look at RAM?</h4>\n<p>Attackers hide malware on disk in four main ways:</p>\n<ul>\n<li><b>Renaming or moving</b> it (e.g. calling it svchost.exe)</li>\n<li><b>Packing</b> it (compressing it so it looks different)</li>\n<li><b>Encrypting</b> it (it only unlocks itself when it runs)</li>\n<li><b>Rootkits</b> (hiding it from Windows itself)</li>\n</ul>\n<p>None of that helps once it <b>runs</b>. To do anything, the code has to be loaded into memory in a form the CPU can use. Remote-access malware has to keep running to take commands, so it stays in memory the whole time.</p>\n<p>Memory isn't a perfect view either: malware can try to hide there too (see injection and rootkits below).</p>\n\n<h4>What's in memory (and what isn't)</h4>\n<ul>\n<li>Running processes, and some recently finished ones</li>\n<li>Recently typed commands</li>\n<li>Network connections and open ports</li>\n<li>Drivers, services and system code</li>\n<li>Passwords, encryption keys (e.g. BitLocker), security info</li>\n<li>Pieces of disk data that were loaded: MFT entries, registry, event logs, open files</li>\n<li>Clear-text fragments: chats, URLs, documents being edited</li>\n<li>Inside each program: its code, its variables, and its working memory (the <b>stack</b> and <b>heap</b>)</li>\n</ul>\n<p><b>Not in memory:</b> files on disk that haven't been opened since boot. For those, go to the disk (the MFT).</p>\n\n<h4>One chance only</h4>\n<ul>\n<li>Power off = memory gone. You can't decide afterwards that you wanted it.</li>\n<li>Plan before you arrive: is memory likely to matter for this case?</li>\n<li>A <b>locked</b> screen changes your plan. If it's unlocked, capturing memory now may be your only chance to get keys and open files.</li>\n<li>Some memory can be recovered from a switched-off disk (below), but don't rely on it.</li>\n</ul>\n\n<h4>Physical vs virtual memory</h4>\n<ul>\n<li><b>Physical memory</b> = the actual RAM chips.</li>\n<li><b>Virtual memory</b> = what each program <i>thinks</i> it has. Windows gives every program its own neat, private address space, whatever else is running.</li>\n<li>Windows maps that onto real RAM, and moves the bits that don't fit out to the <b>pagefile</b> on disk.</li>\n<li>So a PC with 8 GB of RAM can run several programs that each think they have 16 GB. The overflow lives in the pagefile.</li>\n<li>Why it matters: a RAM image alone may be missing pieces that were swapped out to disk.</li>\n</ul>\n\n<h4>Memory saved on disk</h4>\n<table>\n<tr><th>Source</th><th>What it is</th><th>Watch out for</th></tr>\n<tr><td><code>hiberfil.sys</code></td><td>Full copy of RAM written when the PC hibernates, so it can resume exactly where it was</td><td>Compressed, Microsoft-only format: convert it first (Volatility <code>imagecopy</code>). <b>Not deleted</b> after resuming, so it's a snapshot from the <b>last</b> hibernation, maybe weeks ago. Great for history.</td></tr>\n<tr><td><code>pagefile.sys</code></td><td>The \"overflow\" pieces of RAM swapped to disk</td><td>Not a full copy and has no structure, so memory tools can't parse it. No timestamps. Run <code>strings</code> on it for readable text.</td></tr>\n<tr><td><code>.vmem</code> / <code>.vmss</code></td><td>A virtual machine's RAM, written when it's suspended or snapshotted</td><td>Can capture many machines without running anything on them.</td></tr>\n<tr><td>Crash dumps</td><td>RAM saved when Windows or a program crashed</td><td>Only covers the moment of the crash.</td></tr>\n</table>\n\n<h4>Capturing RAM</h4>\n<ul>\n<li><b>You can't capture memory without changing it</b>: your tool has to load into the same memory. The answer is <b>process and documentation</b>: a set method, notes on every step, and a tool with a small footprint. That's what keeps it admissible.</li>\n<li>Same method as disk acquisition: document, capture, hash.</li>\n<li>You need <b>administrator</b> rights. In a client's network you may need their IT team to log in for you.</li>\n<li><b>Never run the tool from, or save the image to, the disk you'll image next.</b> Use a USB/SD card (with enough space: at least the size of RAM) or a network share.</li>\n<li>A USB writes new registry entries (USBSTOR, MountedDevices). In a USB-theft case, a network share is safer.</li>\n<li>Hard cases:\n<ul>\n<li><b>Cloud or data centre:</b> no physical access, so use hypervisor snapshots or an agent</li>\n<li><b>Locked, no password:</b> very hard (special hardware attacks or an agent installed beforehand)</li>\n<li><b>User isn't an admin:</b> tools can't read memory</li>\n</ul></li>\n</ul>\n\n<h4>Capture tools</h4>\n<table>\n<tr><th>Tool</th><th>Notes</th></tr>\n<tr><td><b>FTK Imager (Lite)</b></td><td>Same tool as disk imaging. Lite needs no install, runs from USB or network. Easy GUI, raw (dd) output. Not the smallest footprint.</td></tr>\n<tr><td><b>Redline Collector</b></td><td>Captures memory plus extra context (see below)</td></tr>\n<tr><td><b>dd / windd</b></td><td>Command-line raw copy</td></tr>\n<tr><td><b>PowerShell</b></td><td>Built into Windows, so nothing to bring. Not available on Windows 7.</td></tr>\n<tr><td><b>Enterprise agents</b> (EnCase Enterprise, F-Response)</td><td>Already installed across a company. Capture over the network.</td></tr>\n<tr><td>Others</td><td>WinPmem, DumpIt, Magnet RAM Capture</td></tr>\n</table>\n\n<h4>Redline</h4>\n<ul>\n<li>Free GUI tool from Mandiant for quick triage and memory analysis.</li>\n<li>Easy first look: clear visual views, <b>IOC</b> matching, whitelisting (hiding known-good items), and <b>process scoring</b> (ranks how suspicious each process looks).</li>\n<li>Clunky for deep work, so most analysts move to Volatility for the detail.</li>\n<li>Accepts any raw memory image, or a Collector's results. Processing takes time, so plan for it.</li>\n</ul>\n<p><b>Collectors</b>: you build a small package on your own machine, then run it on the suspect machine(s). As well as memory, it can grab:</p>\n<ul>\n<li>basic system info</li>\n<li>file listings and registry hives</li>\n<li>event logs</li>\n<li>network info (ports, DNS cache, ARP table)</li>\n<li>browser history, cookies, downloads</li>\n<li>common persistence spots (things set to run at startup)</li>\n<li>IOC scan results</li>\n</ul>\n<p>Why use one: the <b>same</b> collection runs the <b>same way</b> on many machines (repeatable), and each run becomes its own analysis session. More items = slower and noisier, so only pick what you need.</p>\n\n<h4>Looking for evil: six steps</h4>\n<table>\n<tr><th>Step</th><th>Look for</th></tr>\n<tr><td>1. Processes</td><td>Anything out of place</td></tr>\n<tr><td>2. Handles and DLLs</td><td>Odd files, registry keys or libraries a process is using</td></tr>\n<tr><td>3. Network</td><td>Connections to unknown or outside addresses</td></tr>\n<tr><td>4. Code injection</td><td>Malicious code inside a normal process</td></tr>\n<tr><td>5. Rootkits</td><td>Things hidden from Windows' own lists</td></tr>\n<tr><td>6. Export</td><td>Dump it, hash it, check VirusTotal, reverse engineer</td></tr>\n</table>\n<p>Redline is fine for steps 1–3. Use Volatility for 4–5 (or everything).</p>\n\n<h4>How Windows keeps track of processes</h4>\n<ul>\n<li>Every process has an <b>EPROCESS</b> block in memory. It holds: name, <b>PID</b> (process ID), <b>PPID</b> (parent's ID), start time, exit time, and where its resources are.</li>\n<li>The blocks are joined in a chain. Each one points to the <b>next</b> (flink) and the <b>previous</b> (blink). This is a \"doubly linked list\".</li>\n<li>When a process <b>ends</b>, Windows unhooks it from the chain. Its block can stay in memory for a while until it's overwritten.</li>\n<li>Malware with kernel access can unhook <b>itself</b> while still running: <b>DKOM</b> (Direct Kernel Object Manipulation). The chain just skips over it, so anything that reads the chain can't see it.</li>\n</ul>\n\n<h4>pslist vs psscan (and friends)</h4>\n<p><b>Think of a school roll.</b></p>\n<ul>\n<li><b>pslist</b> reads the roll (the chain). Quick and tidy, but if a student rubs their own name off, they're not counted. Students who've gone home aren't on it either.</li>\n<li><b>psscan</b> ignores the roll and walks every room looking for anyone wearing a school badge (an EPROCESS block). It finds the student who rubbed their name off, and badges left behind by students who've gone home.</li>\n</ul>\n<table>\n<tr><th>Plugin</th><th>How it works</th><th>Shows hidden?</th><th>Shows finished?</th><th>Use it for</th></tr>\n<tr><td><b>pslist</b></td><td>Follows the chain</td><td>No</td><td>No</td><td>What Task Manager shows</td></tr>\n<tr><td><b>pstree</b></td><td>Follows the chain, draws parent → child</td><td>No</td><td>No</td><td>Spotting the wrong parent</td></tr>\n<tr><td><b>psscan</b></td><td>Searches all memory for EPROCESS blocks</td><td><b>Yes</b></td><td><b>Yes</b></td><td>Hidden and recently ended processes</td></tr>\n<tr><td><b>pstotal</b> / psxview</td><td>Compares psscan with pslist</td><td>Yes</td><td>Yes</td><td>Highlighting the differences for you</td></tr>\n</table>\n<p><b>pslist and pstree</b> read the same chain, so they show the same processes. pstree just lays them out as a family tree.</p>\n<table>\n<tr><th>If you see</th><th>It means</th></tr>\n<tr><td>In both pslist and psscan</td><td>Normal running process</td></tr>\n<tr><td>Only in psscan, <b>with</b> an exit time</td><td>It already finished. Normal, but may still be relevant (malware that ran and quit)</td></tr>\n<tr><td>Only in psscan, <b>no</b> exit time</td><td>Still running but missing from the chain: <b>hidden (DKOM rootkit)</b>. Big red flag.</td></tr>\n<tr><td>Garbage name or impossible times in psscan</td><td>Leftover junk the scan matched by accident. Scans can give false hits.</td></tr>\n</table>\n<p><b>The same pattern runs through Volatility:</b> \"list\" plugins follow Windows' own records (current only); \"scan\" plugins search raw memory (also finds closed, hidden or leftover items).</p>\n<table>\n<tr><th>Follows Windows' list</th><th>Scans memory</th></tr>\n<tr><td>pslist</td><td>psscan</td></tr>\n<tr><td>connections (old Windows)</td><td>connscan</td></tr>\n<tr><td>sockets (old Windows)</td><td>sockscan</td></tr>\n<tr><td>—</td><td>filescan (file objects), mutantscan (mutexes)</td></tr>\n</table>\n<p><b>netscan</b> (Vista and later) does all four network jobs in one: current and closed connections and sockets.</p>\n\n<h4>Spotting a suspicious process</h4>\n<p>You have to <b>know normal to find evil</b>. The SANS \"Hunt Evil\" poster lists what normal Windows processes look like.</p>\n<table>\n<tr><th>If you see</th><th>It means</th></tr>\n<tr><td>Misspelt system name (<code>svhost</code>, <code>lsasss</code>)</td><td>Malware pretending to be Windows</td></tr>\n<tr><td>Right name, wrong folder (svchost.exe in Downloads, not System32)</td><td>Malware using a trusted name</td></tr>\n<tr><td>Two of something that should be unique (lsass, wininit, services)</td><td>An impostor</td></tr>\n<tr><td>Wrong parent (svchost's parent should be <b>services.exe</b>)</td><td>Started by something it shouldn't be</td></tr>\n<tr><td>Office app starting PowerShell</td><td>Likely a malicious document</td></tr>\n<tr><td>System process started long after boot</td><td>Launched later. Compare with the attack time</td></tr>\n<tr><td>System process running as a normal user (or the reverse)</td><td>Not the real one. Check with <code>getsids</code></td></tr>\n</table>\n\n<h4>Suspicious memory objects</h4>\n<p>Smarter malware hijacks a normal process instead of running its own, so look <i>inside</i> processes too:</p>\n<ul>\n<li><b>DLLs</b>: shared code libraries. Malware can force a process to load its DLL (side-loading or injection). Watch for DLLs from odd folders like Temp.</li>\n<li><b>Handles</b>: a process's \"open tabs\" on things: files, folders, registry keys, network ports, mutexes. Malware holding odd keys or files gives itself away.</li>\n<li><b>Mutex</b>: a \"this is taken\" flag. Malware often creates one with a fixed name so it doesn't infect the same machine twice. Known mutex names are good IOCs.</li>\n<li><b>Threads</b>: the smallest unit of work inside a process. Malware can start its own thread inside someone else's process.</li>\n</ul>\n\n<h4>Code injection and hollowing</h4>\n<ul>\n<li><b>Injection:</b> malware writes its code into a normal, running process and runs it there.</li>\n<li><b>Process hollowing:</b> start a real program (e.g. svchost) <b>paused</b>, scoop out its code, put malware in its place, then <b>resume</b> it. It looks like svchost from the outside, so antivirus that trusts svchost lets it through.</li>\n</ul>\n\n<h4>When you don't know what you're looking for</h4>\n<ul>\n<li><b>IOCs</b> (indicators of compromise): known signs of a specific attack (file names, hashes, mutexes, IPs). Load them into Redline and check many machines at once. Security teams build big libraries of them in advance.</li>\n<li><b>Frequency of least occurrence:</b> count how many processes use each DLL or handle, then look at the <b>rarest</b>. Normal Windows DLLs are used by dozens of processes; malware's are used by one. A DLL with a slightly wrong name used once stands out straight away.</li>\n</ul>\n\n<h4>Suspicious network activity</h4>\n<p>Most malware needs to phone home, to send data out or get orders. So:</p>\n<ul>\n<li><b>Which process?</b> Should it be on the network at all? Notepad or Calculator with a connection is odd.</li>\n<li><b>Listening ports:</b> is something waiting for incoming connections? Know what's normal for that network.</li>\n<li><b>Ports used:</b> malware likes going <b>out</b> on common ports (80, 443) to blend in with web traffic. But that helps you: a system process on port 80 is strange.</li>\n<li><b>When:</b> line connection times up with the infection time.</li>\n<li><b>Outside IPs:</b> why would this PC talk to a server overseas? Check the IP's reputation (e.g. VirusTotal).</li>\n<li><b>Inside IPs:</b> connections to other machines on the network, especially one already known to be infected, show <b>lateral movement</b> and help set the scope.</li>\n</ul>\n\n<h4>Volatility basics</h4>\n<ul>\n<li>Free, command-line, written in Python. Comes on the SIFT workstation. Harder to start with than Redline, but much more flexible.</li>\n<li>v2 format: <code>vol.py -f image.raw --profile=PROFILE plugin</code></li>\n<li>v3 format: <code>vol -f image.raw windows.pslist</code> (plugins are grouped: <code>windows.</code>, <code>registry.</code>)</li>\n<li><code>vol.py -h</code> lists every plugin.</li>\n</ul>\n<p><b>Profiles and the KDBG (v2)</b></p>\n<ul>\n<li>Different Windows versions (even service packs) lay memory out differently. The <b>profile</b> tells Volatility which layout to expect. Wrong profile = garbage or nothing.</li>\n<li><code>imageinfo</code> suggests profiles, and shows the time the image was taken (UTC and local).</li>\n<li>It also finds the <b>KDBG</b> (kernel debugger block): the \"map\" Volatility starts from to find everything else, like the EPROCESS chain.</li>\n<li>Give the KDBG address in later commands (<code>-g</code> / <code>--kdbg</code>) so it doesn't search again. Faster.</li>\n<li><b>v3</b> works out the layout itself, so no profile.</li>\n</ul>\n\n<h4>Plugins that get confused</h4>\n<table>\n<tr><th>Plugin</th><th>Answers</th><th>Not to be confused with</th></tr>\n<tr><td><b>dlllist</b></td><td>Which code libraries a process loaded</td><td><b>handles</b>: what a process has <i>open</i> (files, keys, mutexes)</td></tr>\n<tr><td><b>cmdline</b></td><td>The command that <i>started</i> a process (path + arguments)</td><td><b>cmdscan / consoles</b>: what someone <i>typed</i> in a command window (consoles also shows the output)</td></tr>\n<tr><td><b>getsids</b></td><td><i>Who</i> a process runs as, and with what rights</td><td><b>envars</b>: the process's environment settings (paths, temp folder, user name)</td></tr>\n<tr><td><b>procdump</b> (v2)</td><td>Saves a process's program file so you can hash it</td><td><b>memdump / memmap --dump</b>: saves <i>all</i> its memory (for strings, passwords)</td></tr>\n<tr><td><b>dumpfiles</b></td><td>Saves files cached in memory (v3 also uses it for a process's exe and DLLs)</td><td><b>filescan</b>: only <i>lists</i> file objects. Use its address with dumpfiles to save one</td></tr>\n<tr><td><b>hashdump</b></td><td>Local account password hashes (from SAM)</td><td><b>lsadump</b>: stored secrets (LSA). <b>cachedump</b>: cached domain logins</td></tr>\n<tr><td><b>imagecopy</b></td><td>Converts hiberfil.sys into a normal memory image</td><td><b>imageinfo</b>: identifies the image (profile, time)</td></tr>\n<tr><td><b>timeliner</b></td><td>Timeline of memory events, to merge with your disk timeline</td><td>mactime (disk only)</td></tr>\n</table>\n<p>Also useful:</p>\n<ul>\n<li><code>hivelist</code> + <code>printkey</code>: read registry from memory, e.g. the Run keys for <b>persistence</b> (what starts automatically)</li>\n<li><code>yarascan</code>: search memory with YARA malware rules</li>\n</ul>\n\n<h4>What to do with a suspicious process</h4>\n<ul>\n<li><b>How was it started?</b> cmdline. <b>By what?</b> pstree (parent). <b>As whom?</b> getsids.</li>\n<li><b>What is it doing?</b> dlllist, handles, netscan.</li>\n<li><b>Dump it:</b> procdump with its PID (or dumpfiles in v3).</li>\n<li>Then <b>hash it</b> (MD5/SHA) and check VirusTotal, run <code>strings</code> for readable text (IPs, URLs, passwords), or hand it on for reverse engineering.</li>\n</ul>\n<p><b>Usual answer flow for a malware question:</b></p>\n<ol>\n<li><code>imageinfo</code> (v2): get the profile</li>\n<li><code>netscan</code>: find the odd connection and its PID</li>\n<li><code>pslist</code>/<code>pstree</code>: which process owns that PID, and its parent</li>\n<li><code>psscan</code>: anything hidden?</li>\n<li><code>cmdline</code>: how it was started, and from where</li>\n<li><code>procdump</code>: save it, hash it, check VirusTotal</li>\n</ol>\n\n<h4>Doing it in Volatility</h4>\n<p><b>Run a plugin:</b></p>\n<ul>\n<li>v3: <code>vol -f mem.raw windows.pslist</code></li>\n<li>v2: <code>vol.py -f mem.raw --profile=Win7SP1x64 pslist</code> (get the profile from <code>imageinfo</code> first; v3's <code>windows.info</code> does the same job)</li>\n<li>Add <code>--pid 4471</code> to look at one process. Add <code>-o out/</code> (v3) or <code>-D out/</code> (v2) to choose where dumps go.</li>\n</ul>\n\n<p><b>Reading pslist output</b> (made-up example):</p>\n<pre>PID   PPID  Name          CreateTime   ExitTime\n612   508   services.exe  08:01:14     N/A\n780   612   svchost.exe   08:01:15     N/A\n3120  2984  explorer.exe  08:03:40     N/A\n4471  3120  svchost.exe   14:52:07     N/A</pre>\n<p>The last row is the suspect: svchost should have <b>services.exe (612)</b> as its parent, not explorer, and it started hours after boot.</p>\n\n<p><b>Which command for which job</b></p>\n<table>\n<tr><th>You want to find</th><th>Do this (v3)</th></tr>\n<tr><td>The odd process</td><td><code>windows.pstree</code>: look for an unusual program whose parent is the email client, a browser or explorer. Then <code>windows.psscan</code> for hidden ones.</td></tr>\n<tr><td>What it started (its children)</td><td><code>windows.pstree</code>: rows whose PPID = the suspect's PID</td></tr>\n<tr><td>Where it ran from</td><td><code>windows.cmdline --pid N</code> (or the first line of <code>windows.dlllist --pid N</code>). Temp, Downloads or AppData = suspicious.</td></tr>\n<tr><td>Who it talks to</td><td><code>windows.netscan</code>: find the suspect's PID, note the foreign IP and port. For a hostname, search its memory (below).</td></tr>\n<tr><td>Passwords, keys, URLs it used</td><td>Check <code>windows.cmdline</code> for arguments, then dump its memory: <code>windows.memmap --dump --pid N</code>, then <code>strings</code> + <code>grep -i</code> for \"pass\", \"key\", \"http\". Keys in use must be in RAM (same reason BitLocker keys are).</td></tr>\n<tr><td>What someone typed</td><td><code>cmdscan</code> / <code>consoles</code> (v2), <code>windows.cmdscan</code> (v3)</td></tr>\n<tr><td>How it survives a reboot</td><td><code>windows.registry.printkey --key \"Software\\Microsoft\\Windows\\CurrentVersion\\Run\"</code> (check both the user and machine hives). Also services (<code>windows.svcscan</code>), the Startup folder and scheduled tasks.</td></tr>\n<tr><td>A file that was open in memory</td><td><code>windows.filescan</code> (search the output for the name), then <code>windows.dumpfiles --virtaddr &lt;address&gt;</code>. Only works for files opened since boot.</td></tr>\n<tr><td>Is it known malware?</td><td><code>windows.pslist --pid N --dump</code> (v3) or <code>procdump -p N</code> (v2), then <code>sha256sum</code> and search the hash on VirusTotal to get the malware family.</td></tr>\n<tr><td>Password hashes on the machine</td><td><code>windows.hashdump</code></td></tr>\n</table>\n\n<p><b>Tips</b></p>\n<ul>\n<li>Output is long. Pipe it: <code>| grep -i svchost</code>, or save it: <code>&gt; pslist.txt</code>.</li>\n<li>To compare pslist and psscan, save both and look for PIDs only in psscan (v2's <code>psxview</code> does this for you).</li>\n<li>Work from a <b>clue</b> (an IP, a time, a file name), not from the top of the list.</li>\n<li>Write down every command and plugin version, same as any other analysis.</li>\n</ul>",
    "cards": [
      [
        "Why memory forensics? (\"It can run, it can hide, but…\")",
        "\"…it <b>has to run</b>.\" Malware hides on disk by <b>renaming</b> (a password stealer renamed svchost.exe), <b>packing</b>, <b>encryption</b> (dormant, then decrypts) and <b>rootkits</b>, but must reveal itself in memory to execute. <b>Fileless</b> attacks (e.g. PowerShell reverse shell) never touch disk."
      ],
      [
        "What's in a memory image? What's NOT?",
        "Running and recently closed <b>processes</b>, <b>recent commands</b>, <b>network connections</b>, cached MFT and registry pieces, <b>passwords and keys</b> (BitLocker), drivers and services, clear-text fragments.<br><b>Not:</b> files on disk that were <b>never opened</b> since boot."
      ],
      [
        "BitLocker and memory: what do you do?",
        "Memory is a <b>one-chance</b> source. A BitLocker disk image is encrypted; after login the keys are in RAM. <b>Check (and document) whether BitLocker is on before pulling power</b>. Get the key from IT/<b>Active Directory</b> or from a memory capture. No key afterwards: brute force, cold boot, TPM sniffing (impractical)."
      ],
      [
        "Scope caveat: why might running a memory tool from USB hurt a case?",
        "Plugging in your USB <b>overwrites registry USB values</b> (MountedDevices keeps only the last device per letter), which can damage a USB-exfiltration case. Consider native PowerShell or network acquisition, and document it."
      ],
      [
        "Other memory sources on disk.",
        "<b>hiberfil.sys</b>: a full RAM snapshot from the <b>last hibernation</b> (not deleted after resume; convert with imagecopy). <b>pagefile.sys</b>: paged-out fragments, <b>no structure or timestamps</b>, so use <code>strings</code>. Crash dumps; a VM's <b>.vmem</b>."
      ],
      [
        "Acquiring memory: the core problem and the answer.",
        "<b>You can't acquire memory without changing it</b> (your tool loads into RAM). The answer is <b>documentation and process</b>: small-footprint tools, run from a network share or USB, never from the disk you'll image. You need <b>admin rights</b> and target space ≥ total RAM."
      ],
      [
        "Memory acquisition tools.",
        "<b>FTK Imager (Lite)</b> → raw dd; <b>Redline Collector</b>; DumpIt, WinPmem, Magnet RAM Capture; dd/windd; <b>PowerShell</b> (not Win7); enterprise agents (EnCase Enterprise, F-Response)."
      ],
      [
        "Redline: what is it, and what can a collector gather?",
        "Mandiant's <b>GUI</b> triage and memory tool (IOCs, process scoring). Collectors also gather OS info, file listings, registry, event logs, network (ports, DNS, ARP), browser artefacts, persistence and IOC results. Repeatable across machines."
      ],
      [
        "The six-step memory analysis approach.",
        "1. <b>Processes</b> out of place<br>2. <b>Handles/DLLs</b><br>3. <b>Network</b> connections<br>4. <b>Code injection</b><br>5. <b>Rootkit</b> signs<br>6. <b>Export</b> (dump, hash, VirusTotal, reverse engineering)"
      ],
      [
        "EPROCESS and DKOM.",
        "Each process has an <b>EPROCESS block</b> (name, PID, PPID, create/exit time) in a <b>doubly linked list</b> (flink/blink). Terminated ones are unlinked but may remain. <b>DKOM</b> rootkits unlink themselves. <b>Found by scanning but missing from the list = rootkit sign.</b>"
      ],
      [
        "Red flags for suspicious processes.",
        "<ul><li><b>Misspellings</b> (svhost, lsasss)</li><li><b>Right name, wrong path</b> (svchost in Downloads; a svchost.exe in a temp folder)</li><li><b>Duplicates</b> (two lsass or explorer)</li><li><b>Wrong parent</b> (Word/notepad → PowerShell)</li><li>Late <b>start time</b></li><li>Wrong <b>user/SID</b></li></ul>\"Know normal, find evil.\""
      ],
      [
        "Suspicious memory objects; code injection and hollowing.",
        "DLLs from odd paths (temp), unusual <b>handles</b> (files, keys, mutexes), injected <b>threads</b>. <b>Process hollowing:</b> suspend a legit process, hollow it out, insert code, resume, so it runs under a trusted name."
      ],
      [
        "Two techniques with no prior knowledge.",
        "<b>IOCs</b> (load into Redline across machines) and <b>Frequency of Least Occurrence</b> (rarely referenced DLLs/handles stand out, e.g. a misspelt a DLL with a slightly wrong name)."
      ],
      [
        "Suspicious network activity in memory.",
        "Should this process talk at all (notepad, calc)? Unexpected <b>listening ports</b>? <b>System process on port 80</b>? Fake svchost listening on 127.0.0.1? Connection time vs infection time; external IP reputation (VirusTotal); internal IPs (lateral movement)."
      ],
      [
        "Volatility syntax, profiles and KDBG.",
        "<code>vol.py -f image plugin --profile=PROFILE</code>. The profile describes the OS memory layout; the <b>KDBG</b> is the starting structure. <b>Wrong profile = garbage output.</b> <code>imageinfo</code> suggests profiles (e.g. WinXPSP2x86 vs SP3, since service packs change the kernel). Pass <code>--kdbg</code> to speed things up. (v3 detects automatically.)"
      ],
      [
        "pslist vs psscan vs pstree vs pstotal.",
        "<b>pslist</b>: walks the linked list (Task Manager view). <b>psscan</b>: scans for EPROCESS headers, finding <b>hidden and exited</b> processes. <b>pstree</b>: parent–child tree. <b>pstotal</b>: compares psscan and pslist (hidden processes)."
      ],
      [
        "Other key Volatility plugins.",
        "<b>getsids</b> (who ran it), <b>procdump</b> (v2) / dumpfiles --pid (v3), <b>dlllist</b>, <b>handles</b>, <b>filescan</b>, <b>mutantscan</b>, <b>netscan</b> (Vista+; connections/sockets/connscan/sockscan for XP), <b>cmdline</b>, <b>cmdscan/consoles</b> (command history), <b>imagecopy</b> (hiberfil), <b>timeliner</b>."
      ],
      [
        "Typical Volatility answer flow for a malware question.",
        "imageinfo → <b>netscan</b> (suspicious connection's PID) → <b>pslist/pstree</b> (which process, which parent) → <b>cmdline</b> → <b>procdump</b> → hash → VirusTotal / strings."
      ],
      [
        "Volatility: you need the program a suspicious PID was run from. Which plugin?",
        "<b>windows.cmdline --pid N</b> (or the first entry of <b>dlllist</b>). Temp, Downloads or AppData paths are suspicious."
      ],
      [
        "Volatility: how do you find what a suspicious process started?",
        "<b>pstree</b>: look for rows whose <b>PPID</b> equals the suspect's PID."
      ],
      [
        "Volatility: how would you find a password or key a running program used?",
        "Check <b>cmdline</b> arguments first. Then dump its memory (<b>memmap --dump --pid N</b>) and run <b>strings</b> + grep for words like pass, key, http. Keys in use have to be in RAM."
      ],
      [
        "Volatility: how do you check how malware survives a reboot?",
        "<b>printkey</b> on the <b>Run</b> keys (user and machine hives). Also check services (<b>svcscan</b>), the Startup folder and scheduled tasks."
      ],
      [
        "Volatility: how do you recover a file from memory?",
        "<b>filescan</b> to find it and its address, then <b>dumpfiles --virtaddr</b> to save it. Only works for files opened since boot."
      ],
      [
        "You have a dumped executable. How do you find out which malware it is?",
        "Hash it (<b>sha256sum</b>) and search the hash on <b>VirusTotal</b>, which names the malware family."
      ],
      [
        "netscan shows PID 4471 talking to an outside IP. Next three steps?",
        "1. <b>pslist/pstree</b>: what is 4471, and who's its parent?<br>2. <b>cmdline</b>: where did it run from?<br>3. <b>Dump</b> it, hash it, check VirusTotal."
      ],
      [
        "pslist vs psscan: how does each find processes?",
        "<b>pslist</b> follows Windows' own chain of EPROCESS blocks (like reading a class roll).<br><b>psscan</b> searches all of memory for anything that looks like an EPROCESS block (like checking every room for a school badge)."
      ],
      [
        "Which of pslist / psscan shows finished processes? Which shows hidden ones?",
        "<b>psscan</b> shows both. pslist shows neither, because finished and hidden processes are no longer in the chain it reads."
      ],
      [
        "pslist vs pstree?",
        "Same data, same chain. pstree just draws it as a parent → child tree, so a wrong parent is easy to spot."
      ],
      [
        "A process is in psscan but not pslist, and has <b>no exit time</b>. What does it mean?",
        "It's still running but has been unhooked from the chain: a <b>hidden process (DKOM rootkit)</b>. Big red flag."
      ],
      [
        "A process is in psscan but not pslist, and <b>has an exit time</b>. What does it mean?",
        "It simply <b>finished</b>, and its block hasn't been overwritten yet. Not hidden, but it may still matter (malware that ran and quit)."
      ],
      [
        "What does pstotal (or psxview) do?",
        "Compares psscan with pslist and highlights processes that appear in one but not the other."
      ],
      [
        "\"list\" plugins vs \"scan\" plugins in Volatility: the general rule?",
        "<b>list</b> = follow Windows' own records, so only what's current and visible.<br><b>scan</b> = search raw memory for the structure, so also closed, hidden or leftover items. E.g. pslist/psscan, connections/connscan, sockets/sockscan."
      ],
      [
        "What's in an EPROCESS block?",
        "Process name, <b>PID</b>, <b>parent PID</b>, start time, exit time, and pointers to its resources. Plus links to the next (flink) and previous (blink) block."
      ],
      [
        "What is DKOM?",
        "<b>Direct Kernel Object Manipulation</b>: malware with kernel access unhooks its own EPROCESS block from the chain, so pslist and Task Manager can't see it. psscan still can."
      ],
      [
        "Physical vs virtual memory.",
        "<b>Physical</b> = the real RAM. <b>Virtual</b> = the private address space each program thinks it has. Windows maps virtual onto RAM and pushes the overflow to the <b>pagefile</b>."
      ],
      [
        "Why is hiberfil.sys useful even weeks after hibernation?",
        "It isn't deleted after resuming, so it's a snapshot of RAM from the <b>last</b> hibernation: a view of the past that a live capture can't give."
      ],
      [
        "How do you analyse pagefile.sys?",
        "It has no structure, so memory tools can't parse it. Run <b>strings</b> (or keyword search) for readable text."
      ],
      [
        "Why can a VM's memory be easier to collect?",
        "Suspending or snapshotting a VM writes its RAM to disk (.vmem), so you can capture many machines <b>without running anything on them</b>."
      ],
      [
        "Name four ways to capture memory.",
        "FTK Imager Lite, Redline Collector, dd/windd, PowerShell (not on Win7). Also WinPmem, DumpIt, Magnet RAM Capture, or enterprise agents (EnCase Enterprise, F-Response)."
      ],
      [
        "Why not run your memory tool from the suspect's hard drive?",
        "You'd write to the disk you're about to image, changing evidence. Run from USB/SD or a network share, and save the image there too."
      ],
      [
        "What can a Redline Collector gather besides memory?",
        "System info, file listings, registry hives, event logs, network info (ports, DNS cache, ARP), browser history/cookies/downloads, persistence locations, IOC results."
      ],
      [
        "Benefits of a Redline Collector?",
        "Small, portable, and <b>repeatable</b>: the same collection runs the same way on many machines, and each run becomes its own analysis session."
      ],
      [
        "Redline vs Volatility.",
        "<b>Redline:</b> GUI, quick triage, IOCs, process scoring. Good for steps 1–3. <b>Volatility:</b> command line, more flexible and detailed. Better for injection and rootkits (steps 4–5)."
      ],
      [
        "What is a handle, and why look at them?",
        "A process's open reference to something: a file, folder, registry key, port or mutex. Malware holding odd keys or files gives itself away."
      ],
      [
        "What is a mutex, and why does malware use one?",
        "A named \"this is taken\" flag. Malware creates one so it doesn't infect the same machine twice. A known mutex name is a useful IOC."
      ],
      [
        "What is frequency of least occurrence?",
        "Count how many processes use each DLL or handle, then focus on the <b>rarest</b>. Normal ones are shared by many processes; malware's usually appear once."
      ],
      [
        "Why is svchost.exe in a Downloads folder suspicious?",
        "The real svchost runs from <b>C:\\Windows\\System32</b>, and its parent is <b>services.exe</b>. Right name, wrong folder = malware using a trusted name."
      ],
      [
        "Why would malware use port 443 outbound, and how can that give it away?",
        "It blends in with normal web traffic and gets through proxies. But a system process that shouldn't browse (e.g. lsass) talking on 80/443 stands out."
      ],
      [
        "What do connections to <b>internal</b> IPs tell you?",
        "Possible <b>lateral movement</b>: the attacker spreading to other machines. Helps work out the scope of the incident."
      ],
      [
        "What is the KDBG?",
        "The kernel debugger block: the starting point Volatility uses to find everything else (like the process chain). imageinfo finds it; passing it with -g/--kdbg speeds up later commands."
      ],
      [
        "What does imageinfo tell you?",
        "Suggested <b>profile(s)</b>, the <b>KDBG</b> location, and when the image was taken (UTC and local)."
      ],
      [
        "dlllist vs handles?",
        "<b>dlllist:</b> the code libraries a process loaded.<br><b>handles:</b> the things it has open (files, keys, mutexes, ports)."
      ],
      [
        "cmdline vs cmdscan/consoles?",
        "<b>cmdline:</b> the command that started a process.<br><b>cmdscan/consoles:</b> what a user typed in a command window (consoles also shows output)."
      ],
      [
        "procdump vs memdump?",
        "<b>procdump:</b> saves the process's program file (hash it, VirusTotal).<br><b>memdump/memmap --dump:</b> saves all of its memory (strings, passwords, URLs)."
      ],
      [
        "filescan vs dumpfiles?",
        "<b>filescan</b> lists file objects found in memory. <b>dumpfiles</b> saves them (give it the address from filescan)."
      ],
      [
        "hashdump vs lsadump vs cachedump?",
        "<b>hashdump:</b> local account password hashes. <b>lsadump:</b> stored LSA secrets. <b>cachedump:</b> cached domain login hashes."
      ],
      [
        "Which plugins help with persistence?",
        "<b>hivelist</b> + <b>printkey</b> on the Run keys, to see what's set to start automatically."
      ],
      [
        "Which plugin converts hiberfil.sys, and which builds a memory timeline?",
        "<b>imagecopy</b> converts hiberfil.sys to a raw image. <b>timeliner</b> builds a memory timeline to merge with the disk one."
      ],
      [
        "You've dumped a suspicious process. What next?",
        "Hash it (MD5/SHA) and check <b>VirusTotal</b>; run <b>strings</b> for IPs, URLs and passwords; send for reverse engineering. Also note who ran it (getsids) and how (cmdline)."
      ],
      [
        "When is collecting memory difficult?",
        "Cloud/data centre (no physical access: use snapshots or agents); locked with no password; user isn't an administrator."
      ],
      [
        "hiberfil.sys vs pagefile.sys.",
        "<b>hiberfil.sys:</b> a full RAM snapshot from the last hibernation.<br><b>pagefile.sys:</b> scattered pieces of RAM swapped to disk, with no timestamps, so you can't say when they were written."
      ],
      [
        "Which Volatility plugin answers: \"who is this process talking to?\"",
        "<b>netscan</b>. It gives the connection, the remote IP and port, and the <b>PID</b>, which you then look up with pslist/pstree."
      ],
      [
        "Which plugin shows how a process was started?",
        "<b>cmdline</b>: the full command, including the path and arguments."
      ],
      [
        "You find Excel as the parent of PowerShell. What does it suggest?",
        "A <b>malicious document</b>: a macro in the spreadsheet launched PowerShell. Office apps shouldn't normally start shells."
      ],
      [
        "Why run a memory tool from a network share rather than a USB?",
        "Plugging in a USB writes new registry entries (USBSTOR, MountedDevices), which can overwrite evidence in a USB-theft case."
      ],
      [
        "Volatility v2 vs v3: the main practical difference?",
        "v2 needs a <b>profile</b> (the Windows version), suggested by <code>imageinfo</code>. v3 detects the layout itself."
      ]
    ]
  }
};