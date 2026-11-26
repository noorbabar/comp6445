window.CONTENT = window.CONTENT || {};
CONTENT[5] = {
  "professional": {
    "notes": "<p>Monday was a recorded guest lecture on network forensics and machine learning. It's not assessed, but the first idea (what encryption doesn't hide) is useful in any answer about encrypted traffic.</p>\n\n<h4>Encryption doesn't hide everything <span class=\"na\">Not assessed</span></h4>\n<p>Encryption hides <b>what</b> was sent. It doesn't hide:</p>\n<ul>\n<li><b>who</b> talked (IP addresses)</li>\n<li><b>when</b> and for <b>how long</b></li>\n<li><b>how often</b> (every 60 seconds like clockwork = beaconing)</li>\n<li><b>how much</b> went each way (big upload vs small download)</li>\n<li>the <b>shape</b> of the traffic (steady and regular vs bursty like normal browsing)</li>\n</ul>\n<p>Behaviour is a fingerprint, even when the content is locked.</p>\n\n<h4>Why simple checks fail <span class=\"na\">Not assessed</span></h4>\n<table>\n<tr><th>Check</th><th>Why it can mislead</th></tr>\n<tr><td>Lots of traffic</td><td>Might be normal for that machine</td></tr>\n<tr><td>Traffic right after the bad email was opened</td><td>Malware can wait before acting</td></tr>\n<tr><td>Domain names (DNS)</td><td>Increasingly encrypted too</td></tr>\n<tr><td>Unusual ports</td><td>Malware hides on normal ports (443, 53)</td></tr>\n<tr><td>New IP addresses</td><td>Big websites change IPs all the time</td></tr>\n<tr><td>Reading the content</td><td>TLS, QUIC and VPNs block it</td></tr>\n</table>\n\n<h4>Where machine learning fits <span class=\"na\">Not assessed</span></h4>\n<table>\n<tr><th>Type</th><th>Question it answers</th><th>What it can't tell you</th></tr>\n<tr><td><b>Anomaly detection</b></td><td>What's different from normal?</td><td>Whether \"different\" means malicious</td></tr>\n<tr><td><b>Classification</b></td><td>Does this look like a known thing?</td><td>Guilt, or what was actually sent</td></tr>\n<tr><td><b>Clustering</b></td><td>What behaves alike?</td><td>What each group means</td></tr>\n</table>\n<ul>\n<li>Models look at <b>features</b> of each connection: timing (gaps between packets, duration), direction (in vs out), and volume (bytes, packets).</li>\n<li>A <b>baseline</b> should be the same machine on normal days, because every device and user behaves differently. Write down your assumption that the baseline was clean.</li>\n<li>The model turns 90,000 connections into, say, 15 worth checking. Those are <b>leads, not proof</b>. You still confirm each one with other evidence (e.g. the process that made the connection, and when its file appeared on disk).</li>\n</ul>\n\n<h4>Reporting it properly <span class=\"na\">Not assessed</span></h4>\n<ul>\n<li>The capture is an <b>observation</b>. The model's output is an <b>inference</b>.</li>\n<li>A score of 99 is <b>not</b> \"99% guilty\". Never say \"malicious with 99% confidence\".</li>\n<li>Report: the model and version, what it was trained and tested on, error rates, features, assumptions, limits, and the hashes of the captures.</li>\n<li>Biased models can be excluded by a court (e.g. the COMPAS risk-score controversy).</li>\n<li>Models fail when: training labels are wrong, one class is rare, the network or users are different, protocols change over time, attackers deliberately pad or delay traffic, or the capture point differs.</li>\n</ul>",
    "cards": []
  },
  "technical": {
    "notes": "<h4>What network forensics is</h4>\n<ul>\n<li>Looking at data <b>moving</b> between computers (in transit), captured as it passed.</li>\n<li>Usually backs up disk and memory evidence, but can stand alone.</li>\n<li>Mostly used in incident response, but also helps in HR or IP-theft cases (e.g. proving what was uploaded).</li>\n<li>You need a working idea of the network layers to know what you're looking at.</li>\n</ul>\n\n<h4>Four big uses</h4>\n<table>\n<tr><th>Use</th><th>What the network shows</th><th>Real example</th></tr>\n<tr><td><b>Command and control (C2)</b></td><td>Malware checking in with its owner: which domain, how often, which port</td><td>SolarWinds 2020: regular HTTPS check-ins to attacker domains</td></tr>\n<tr><td><b>Breach detection</b></td><td>When it started: first contact with a bad IP, scanning, unusual internal traffic</td><td>Colonial Pipeline 2021: first connections from a stolen VPN account</td></tr>\n<tr><td><b>What was taken</b></td><td>How much data left, to where, when, over which protocol</td><td>Capital One 2019: data copied out to the attacker's cloud storage</td></tr>\n<tr><td><b>Patient zero</b></td><td>The first internal machine to contact the bad server</td><td>NotPetya 2017: traced back to the first infected host</td></tr>\n</table>\n<p>Knowing what was taken matters legally: in Australia, a breach of personal data can mean a duty to notify the people affected (overseen by the OAIC).</p>\n\n<h4>Why bother?</h4>\n<p>Disk and memory show what <b>arrived</b> and what <b>ran</b>. They rarely show what <b>left</b>. If someone uploads a file to a sharing site, the disk may show the site in browser history, but the capture shows the actual transfer: size, destination and time.</p>\n\n<h4>The layers (OSI vs TCP/IP)</h4>\n<p>Same idea, grouped differently: OSI has 7 layers, TCP/IP has 4.</p>\n<table>\n<tr><th>Layer</th><th>What lives there</th><th>Why you care</th></tr>\n<tr><td>1 Physical</td><td>Cables, fibre, radio</td><td>Where a TAP sits</td></tr>\n<tr><td>2 Data link</td><td><b>MAC addresses</b>, switches, ARP</td><td>Which network card; spoofing</td></tr>\n<tr><td>3 Network</td><td><b>IP addresses</b>, routing</td><td>Who talked to whom. You'll filter here most.</td></tr>\n<tr><td>4 Transport</td><td><b>TCP / UDP</b>, ports</td><td>Which service; connection flags</td></tr>\n<tr><td>5 Session</td><td>Keeps conversations going</td><td>Rarely looked at directly</td></tr>\n<tr><td>6 Presentation</td><td>Encryption (TLS), compression</td><td>Why you can't read content</td></tr>\n<tr><td>7 Application</td><td><b>HTTP, DNS, SMB, FTP, SMTP</b></td><td>The juicy stuff: files, logins, commands</td></tr>\n</table>\n<ul>\n<li><b>TCP:</b> reliable. Sets up a connection (handshake), confirms every packet. Used for file transfers, because one lost packet would corrupt the file.</li>\n<li><b>UDP:</b> fast, no checks. Used for DNS, games, streaming, where a lost packet doesn't matter.</li>\n<li>So an upload shows as <b>TCP</b>, lots of <b>POST</b> requests, and heaps of data to <b>one</b> destination.</li>\n<li>A <b>packet</b> = header (source, destination, ports, size) + payload. On normal Ethernet each is at most about <b>1,500 bytes</b>, so a big transfer is a long run of full-size packets.</li>\n<li>Packets nest like envelopes: Ethernet frame (MACs) ⊃ IP packet (IPs) ⊃ TCP/UDP (ports) ⊃ the actual data.</li>\n</ul>\n\n<h4>Network devices</h4>\n<ul>\n<li><b>Switch</b> (layer 2): sends each frame only to the port it's meant for, using a table of MAC addresses. So one computer only sees its own traffic. Can mirror traffic to you (SPAN).</li>\n<li><b>Router</b> (layer 3): moves traffic between networks. Often logs flows.</li>\n<li><b>Firewall:</b> allows or blocks connections, and logs both. Rejected attempts can show scanning.</li>\n<li><b>Proxy:</b> sits between users and the web. Logs URLs, and in companies may decrypt HTTPS (TLS inspection).</li>\n<li><b>ARP</b> matches IP addresses to MAC addresses on a local network. <b>ARP spoofing</b> = one device falsely claiming other devices' IPs, to sit in the middle.</li>\n</ul>\n\n<h4>Capturing traffic</h4>\n<table>\n<tr><th>Method</th><th>How</th><th>Good</th><th>Bad</th></tr>\n<tr><td><b>TAP</b> (layer 1)</td><td>Hardware on the cable copies the raw signal</td><td>Complete, passive, no effect on the network. <b>Best for evidence.</b> Good for long-term monitoring.</td><td>Needs physical access and a change window to install</td></tr>\n<tr><td><b>SPAN / port mirroring</b> (layer 2)</td><td>Switch copies frames to a monitoring port</td><td>Cheap, quick, uses existing switches. Fine for most incident response.</td><td>Can <b>drop packets</b> when busy, so not complete</td></tr>\n<tr><td><b>Host-based</b> (Wireshark, tcpdump)</td><td>Capture on one computer's network card</td><td>Easy, no extra hardware</td><td>Only sees traffic to and from that computer</td></tr>\n</table>\n<p><b>Where to capture:</b></p>\n<ul>\n<li>One device: on the device</li>\n<li>All internet traffic: at the edge (between the firewall and the internet)</li>\n<li>Two specific PCs: SPAN/TAP on their switch ports</li>\n<li>Wi-Fi: a wireless card in <b>monitor mode</b> on the right channel (plus the Wi-Fi key to decrypt), or at the access point</li>\n<li>A normal network card only shows you layer 2 and up. Raw signals need a TAP or radio equipment.</li>\n</ul>\n\n<h4>Three barriers</h4>\n<ol>\n<li><b>Encryption.</b> HTTPS hides content: URLs, files, passwords, commands. You still see IPs, ports, the TLS handshake (including the site name being asked for), timing, size and frequency. To decrypt:\n<ul>\n<li>the browser's key log file (<b>SSLKEYLOGFILE</b>), if it was set on the computer</li>\n<li>a company's <b>TLS inspection</b> proxy (a man-in-the-middle that decrypts and re-encrypts)</li>\n<li>QUIC traffic usually can't be decrypted, so rely on the statistics</li>\n</ul></li>\n<li><b>Size and retention.</b> A busy link makes terabytes a day. Full captures are kept for hours or days; <b>flow logs</b> (metadata only) are kept much longer. Find out weeks later and the packets may be gone.</li>\n<li><b>Capture location.</b> If it wasn't captured there, it doesn't exist.</li>\n</ol>\n<p>Capture challenges in short: <b>time</b> (was it running then?), <b>scope</b> (which traffic?), <b>size</b> (can you store it?).</p>\n\n<h4>File formats</h4>\n<ul>\n<li><b>PCAP</b>: the classic format. Layers 2–7. Details stored once for the whole file.</li>\n<li><b>PCAPNG</b> (\"next generation\"): can hold several interfaces, and tags each packet with the one it came from. More detail. Prefer it, but both work.</li>\n<li>Others exist (.cap, .dmp, .pklg), but nearly all tools read PCAP and PCAPNG.</li>\n</ul>\n\n<h4>Wireshark</h4>\n<ul>\n<li>A free packet analyser (started as \"Ethereal\" in 1997). Not a forensics tool as such, but the best free one for packets.</li>\n<li>Shows everything from layer 2 to 7 and doesn't hide or summarise anything. You have to know what you're looking at.</li>\n<li>A 5-minute capture of normal browsing can be hundreds of thousands of packets, so <b>filter</b> and use <b>Statistics</b>.</li>\n<li>Pivot from other evidence: Prefetch says malware ran at 14:05? Filter the capture to that time. Found a bad domain on disk? Filter for it.</li>\n<li>Files sent over plain HTTP or SMB can be rebuilt and saved. Then hash them, check VirusTotal, or run them in a sandbox and look for the domains they call in your capture.</li>\n</ul>\n\n<p><b>Display filters</b> (type in the bar at the top)</p>\n<table>\n<tr><th>Filter</th><th>Shows</th></tr>\n<tr><td><code>ip.addr == 10.0.0.5</code></td><td>Anything to or from that IP</td></tr>\n<tr><td><code>ip.src == 10.0.0.5 &amp;&amp; ip.dst == 203.0.113.9</code></td><td>Only from A to B</td></tr>\n<tr><td><code>ip.addr == 172.16.0.0/16</code></td><td>A whole subnet</td></tr>\n<tr><td><code>not ip.addr == 239.0.0.1</code></td><td>Everything except that IP</td></tr>\n<tr><td><code>tcp.port == 443</code></td><td>One port, either direction</td></tr>\n<tr><td><code>dns</code>, <code>http</code>, <code>smb2</code>, <code>arp</code></td><td>One protocol</td></tr>\n<tr><td><code>dns.qry.name == \"files.example.com\"</code></td><td>Lookups for one name</td></tr>\n<tr><td><code>http.request.method == \"POST\"</code></td><td>Uploads and form submissions</td></tr>\n<tr><td><code>http contains \"example.com\"</code></td><td>HTTP packets containing that text</td></tr>\n<tr><td><code>eth.addr == aa:bb:cc:dd:ee:ff</code></td><td>One MAC address</td></tr>\n<tr><td><code>http.user_agent</code></td><td>Requests that have a User-Agent</td></tr>\n<tr><td><code>http.authorization</code></td><td>Requests carrying a login</td></tr>\n<tr><td><code>tcp.flags.syn == 1 &amp;&amp; tcp.flags.ack == 0</code></td><td>New connection attempts (spot port scans)</td></tr>\n<tr><td><code>tcp.stream eq 7</code></td><td>One whole conversation</td></tr>\n</table>\n<p><code>==</code> and <code>eq</code> mean the same. <code>&amp;&amp;</code> = <code>and</code>.</p>\n\n<p><b>Where things are in Wireshark</b></p>\n<table>\n<tr><th>Menu</th><th>What it does</th><th>Use it to find</th></tr>\n<tr><td>Statistics → <b>Conversations</b></td><td>Who talked to whom, packets and bytes each way</td><td>Sort by bytes: big inside → outside = <b>exfiltration</b>. Long, small, regular = <b>beaconing</b>. Inside → inside you didn't expect = <b>lateral movement</b>.</td></tr>\n<tr><td>Statistics → <b>Endpoints</b></td><td>Each host on its own</td><td>The noisiest machines</td></tr>\n<tr><td>Statistics → <b>Protocol Hierarchy</b></td><td>How much of each protocol</td><td>Odd amounts, e.g. heaps of DNS = data being smuggled out inside DNS</td></tr>\n<tr><td>Statistics → <b>Resolved Addresses</b></td><td>Every IP and the name it was looked up as</td><td>Quick list of every place contacted, for threat checks</td></tr>\n<tr><td>Right-click → <b>Follow → TCP/HTTP Stream</b></td><td>Rebuilds one conversation as readable text</td><td>What was actually said: requests, pages, typed data</td></tr>\n<tr><td>File → <b>Export Objects → HTTP / SMB</b></td><td>Lists files sent over those protocols</td><td>Save the file, then hash it and check its real type</td></tr>\n<tr><td>Analyze → <b>Expert Information</b></td><td>Wireshark's own warnings</td><td>e.g. \"duplicate IP address\" (ARP spoofing)</td></tr>\n<tr><td>Edit → Preferences → Protocols → <b>TLS</b></td><td>Load the key log file</td><td>Decrypting HTTPS</td></tr>\n</table>\n\n<h4>Network Miner</h4>\n<ul>\n<li>Free \"push-button\" tool: load a capture and it pulls out the evidence for you. Wireshark makes you dig; Network Miner hands it over.</li>\n<li>Can also capture passively. Runs on Windows, Linux and Mac.</li>\n</ul>\n<table>\n<tr><th>Tab</th><th>Shows</th><th>Watch for</th></tr>\n<tr><td><b>Hosts</b></td><td>Every device: IP, MAC, guessed OS, open ports, sessions</td><td>A quick inventory of what was on the network</td></tr>\n<tr><td><b>Files</b></td><td>Files sent over the network, rebuilt</td><td>Downloads of programs, leaked documents</td></tr>\n<tr><td><b>Images</b></td><td>Pictures that crossed the network</td><td>Lots of screenshots = screen-grabbing malware</td></tr>\n<tr><td><b>Credentials</b></td><td>Usernames and passwords</td><td>Only from <b>unencrypted</b> protocols (HTTP, POP3, FTP). Almost nothing from HTTPS.</td></tr>\n<tr><td>DNS, Sessions, Parameters</td><td>Lookups, connections, form data</td><td>Bad domains, what was submitted</td></tr>\n</table>\n\n<h4>Who is it? (attribution)</h4>\n<ul>\n<li><b>MAC address</b>: the network card's hardware ID. Helps, but it can be <b>faked</b>, and iPhones use random ones. Only meaningful on the local network.</li>\n<li><b>IP address</b>: can change, be shared, or hide behind NAT. An IP or MAC is a device, <b>not a person</b>.</li>\n<li><b>User-Agent</b> (in HTTP requests): the browser telling the server what it is, e.g. \"Firefox on Windows\". Shows the OS and browser.</li>\n<li><b>DNS lookups</b> show which site names a machine asked for, even when the traffic after is encrypted.</li>\n</ul>\n\n<h4>Doing it in Wireshark</h4>\n<table>\n<tr><th>You want</th><th>How</th></tr>\n<tr><td>The IP a name pointed to</td><td>Filter <code>dns.qry.name == \"name\"</code>, open the <b>response</b>, read the A record. Or Statistics → Resolved Addresses.</td></tr>\n<tr><td>The name behind an IP</td><td>A DNS answer containing that IP, the HTTP <b>Host:</b> header, or Resolved Addresses.</td></tr>\n<tr><td>Which IP a MAC used</td><td>Filter <code>eth.addr == …</code> and read the source IP, or look at ARP replies.</td></tr>\n<tr><td>What was said over HTTP</td><td>Filter by IP + <code>http</code>, then Follow → HTTP Stream.</td></tr>\n<tr><td>The client's browser and OS</td><td>The <b>User-Agent</b> header in its requests.</td></tr>\n<tr><td>A file sent over SMB or HTTP</td><td>File → Export Objects → SMB/HTTP → Save. Then check its real type (the <code>file</code> command or its header bytes): the name may lie. Hash it.</td></tr>\n<tr><td>File names in a shared folder</td><td>Filter <code>smb2</code> and look at directory listing (Find) responses. Not every listed file will be in Export Objects.</td></tr>\n<tr><td>The client's port vs the server's</td><td>Servers listen on known ports (80, 443, 445, 5900 for VNC). The client uses a random high port. Filter the server port; the other side's port is the client's.</td></tr>\n<tr><td>A port scan</td><td>Filter new connection attempts (SYN, no ACK). One source hitting hundreds of ports, with lots of resets (RST) back = a scan.</td></tr>\n<tr><td>A device pretending to be others</td><td>Analyze → Expert Information, or filter <code>arp</code> and look for <b>one MAC</b> claiming <b>many IPs</b>.</td></tr>\n<tr><td>A password</td><td>Network Miner's Credentials tab, or filter <code>http.authorization</code>. \"Basic\" logins are only Base64: decode them.</td></tr>\n<tr><td>What malware a host got</td><td>Filter its IP: look at HTTP GETs for programs, DNS lookups and the User-Agent. Export the file, hash it, check VirusTotal.</td></tr>\n<tr><td>What was typed or seen in a remote desktop (VNC) session</td><td>Follow the stream. Wireshark decodes key presses (KeyEvent) in order. Screen updates are raw pixels that need rebuilding with another tool.</td></tr>\n</table>\n\n<h4>Finding patient zero</h4>\n<ol>\n<li>Hash the capture and write it in your notes.</li>\n<li>Statistics → Conversations / Endpoints: which hosts look abnormal?</li>\n<li>Filter DNS for bad domains, and HTTP GETs for downloaded programs.</li>\n<li>Look for beaconing (small, regular check-ins).</li>\n<li>The <b>earliest</b> host to do it is patient zero.</li>\n<li>Describe it: IP, MAC, User-Agent, host name.</li>\n<li>Confirm on its disk and memory.</li>\n</ol>\n\n<h4>Flow logs and the cloud <span class=\"na\">Not assessed</span></h4>\n<p>You can't plug a TAP into a cloud provider's data centre. Instead they offer <b>flow logs</b>: AWS VPC Flow Logs, Google Network Telemetry, Azure Network Watcher.</p>\n<ul>\n<li>A flow log records <b>metadata only</b>: source and destination IP and port, protocol, packets, bytes, start and end time, accepted or rejected. Like NetFlow.</li>\n<li>A <b>packet capture</b> holds the actual packets and content.</li>\n<li>Flow logs are small enough to keep for a long time and cover many machines at once, and are often on by default.</li>\n<li>They answer: who talked to whom and when, any contact with known bad IPs, rejected attempts (scanning), unusual outbound traffic from a server.</li>\n<li>They usually end up in a SIEM (e.g. Splunk) for searching.</li>\n</ul>\n\n<h4>Logs</h4>\n<ul>\n<li>Lots of activity is never written to disk in a readable way, especially in web apps. Their <b>logs</b> may be the only evidence.</li>\n<li>Find out where an app writes its logs, and how long they're kept.</li>\n<li>A good log line says <b>who</b>, <b>when</b>, <b>from where</b> and <b>what</b>: \"user jsmith logged in at 10:42:03 from 203.0.113.9 and exported the client list\". A bad one just says \"login 200\".</li>\n<li>Types you'll meet: firewall, proxy, DNS, VPN, web server, authentication, cloud flow logs.</li>\n</ul>\n\n<h4>Legal and handling</h4>\n<ul>\n<li>Check you're <b>allowed</b> to capture. Capturing other people's traffic without authority can breach interception, privacy or workplace surveillance laws.</li>\n<li>Don't upload evidence captures to online analysers (confidentiality, chain of custody). Analyse locally.</li>\n<li>Hash the capture file, like any other evidence.</li>\n</ul>",
    "cards": [
      [
        "Define network forensics and its four use cases.",
        "Analysis of <b>data in transit</b>, acquired through a capture medium. It <b>supplements disk and memory</b>.<br>Use cases: <b>C2</b> traffic, <b>breach detection</b>, <b>what was taken</b> (exfiltration), <b>finding patient zero</b>."
      ],
      [
        "Real-world example for each use case.",
        "<ul><li><b>C2:</b> SolarWinds/Sunburst 2020 (periodic HTTPS beaconing, odd DNS)</li><li><b>Breach detection:</b> Colonial Pipeline 2021 (first connections from a compromised VPN account)</li><li><b>What was taken:</b> Capital One 2019 (exfiltration to an attacker S3 bucket; drives breach notification, OAIC duty to notify)</li><li><b>Patient zero:</b> NotPetya 2017 (first internal host to contact C2)</li></ul>"
      ],
      [
        "Why does network evidence fill disk/memory blind spots?",
        "Disk and memory show what <b>landed and ran</b>, but rarely <b>what left</b>. An upload to a file-share site leaves browser history on disk, but the PCAP shows the <b>transfer, volume, destination and timing</b>."
      ],
      [
        "SPAN vs TAP vs host-based capture.",
        "<ul><li><b>SPAN / port mirroring (L2):</b> the switch copies frames; cheap, but <b>drops packets under load</b></li><li><b>TAP (L1):</b> hardware copies the raw signal; <b>complete, passive, preferred for evidence</b>; needs physical insertion</li><li><b>Host-based</b> (Wireshark/tcpdump): only traffic reaching that host</li></ul>"
      ],
      [
        "When would you choose SPAN over a TAP?",
        "Quick, low-cost, short-term targeted capture; the switch already supports it; packet loss is acceptable; no physical access or change window for a TAP. (TAP = evidentiary standard; SPAN is OK for most IR.)"
      ],
      [
        "PCAP vs PCAPNG.",
        "<b>PCAP (libpcap):</b> legacy, layers 2–7, metadata in one <b>global header</b> only. <b>PCAPNG:</b> <b>multiple interfaces</b> (Interface Description Block), each packet tied to its interface, more metadata. Prefer PCAPNG."
      ],
      [
        "Three barriers to network forensics.",
        "1. <b>Encryption</b> (no session keys)<br>2. <b>Size and retention</b> (terabytes a day: full PCAP kept for hours, flow metadata long-term)<br>3. <b>Capture location</b> (if it wasn't captured there, it doesn't exist)"
      ],
      [
        "Under TLS, what can and can't you see? How can you decrypt?",
        "<b>Can:</b> IPs, ports, <b>TLS handshake</b>, timing, volume, frequency. <b>Can't:</b> URLs, contents, credentials, commands.<br>Decrypt: an <b>SSLKEYLOGFILE</b> on the host (load into Wireshark), or enterprise <b>TLS inspection</b> (MITM proxy). <b>QUIC</b> usually can't be decrypted, so use statistics."
      ],
      [
        "OSI layers and their forensic relevance.",
        "1 Physical (TAPs) · 2 Data link (<b>MAC</b>, switches, ARP) · 3 Network (<b>IPs</b>) · 4 Transport (<b>TCP/UDP</b>, ports, flags) · 5 Session · 6 Presentation (TLS, encryption) · 7 Application (<b>HTTP, DNS, SMB</b>: the richest content). TCP/IP groups these into 4."
      ],
      [
        "TCP vs UDP: which carries a file upload, and why?",
        "<b>TCP</b>: connection-oriented and reliable (handshake, ACKs, ordering), so one lost packet doesn't corrupt the file. <b>UDP</b> is connectionless and fast (gaming). Expect lots of POSTs for uploads."
      ],
      [
        "Wireshark: what is it, and where did it come from?",
        "A packet sniffer and protocol analyser (\"not a forensics tool\" but the best free one), covering layers 2–7 and transparent about raw data. Written by <b>Gerald Combs</b> in 1997 as <b>Ethereal</b>. (Zeek is a different tool.)"
      ],
      [
        "Wireshark display filters: explain each.",
        "<code>ip.addr == 10.0.0.5</code> to or from that IP · <code>ip.src == A &amp;&amp; ip.dst == B</code> from A to B · <code>http.request.method == \"GET\"</code> page/file requests · <code>tcp.port == 443 and ip.src == 10.0.0.5</code> · <code>http contains \"example.com\"</code> · <code>ip.addr == 172.16.0.0/16</code> a subnet · <code>not ip.addr eq 239.0.0.1</code> everything except · <code>dns</code> DNS only"
      ],
      [
        "Wireshark Statistics views and what each finds.",
        "<b>Resolved Addresses:</b> inventory of IPs and names. <b>Conversations</b> (the most useful): sort by bytes → <b>exfiltration</b> (big internal → external); long low-and-slow → <b>beaconing</b>; internal ↔ internal → <b>lateral movement</b>. <b>Endpoints:</b> noisiest hosts. <b>Protocol Hierarchy:</b> odd volume, e.g. lots of DNS → <b>DNS exfiltration</b>."
      ],
      [
        "Pivoting and file extraction in Wireshark.",
        "Pivot from your timeline (Prefetch shows malware ran at T; filter that time or IP). Files over <b>HTTP</b> can be <b>exported</b>, then MD5 → VirusTotal or a sandbox → look for its domains in the PCAP."
      ],
      [
        "MAC address: what is it, and can it attribute a device?",
        "The NIC's hardware ID, used within a network segment. <b>Yes and no:</b> it can be <b>spoofed</b>, and iPhones use <b>random private MACs</b>."
      ],
      [
        "How do you find a client's OS from a capture?",
        "The <b>User-Agent</b> string in HTTP requests (e.g. \"Firefox on Windows\")."
      ],
      [
        "Network Miner: what is it, and what are its key tabs?",
        "An open-source <b>\"push-button\"</b> PCAP parser and passive sniffer that carves artefacts automatically. <b>Hosts</b> (IP, MAC, OS, ports), <b>Files</b>, <b>Images</b> (lots of screenshots = suspicious malware), <b>Credentials</b> (only <b>cleartext</b> protocols like HTTP/POP3), DNS, sessions, certificates."
      ],
      [
        "Scenario: find patient zero in a PCAP.",
        "1. <b>Hash</b> and journal the PCAP<br>2. Statistics → Conversations/Endpoints for abnormal hosts<br>3. Filter DNS to bad domains and HTTP GETs of executables<br>4. Look for <b>beaconing</b><br>5. The <b>earliest</b> host showing it = patient zero<br>6. Describe it (User-Agent, MAC)<br>7. <b>Corroborate</b> on its disk and memory"
      ],
      [
        "Logs as evidence: good vs bad log line.",
        "Good: \"user jsmith logged in at 10:42:03 from 203.0.113.9 and exported the client list\". Bad: \"login 200\". In web apps, logs may be the <b>only</b> evidence, so find out where the app writes them and how long they're kept."
      ],
      [
        "What is a packet? Encapsulation order.",
        "A chunk of a payload: <b>header</b> (metadata) + <b>payload</b>. Usually ≤ <b>1500 B (Ethernet MTU)</b>, max about 64 KB. Ethernet <b>frame</b> ⊃ IP <b>packet</b> ⊃ TCP <b>segment</b> / UDP <b>datagram</b> ⊃ application data."
      ],
      [
        "What does a NIC capture see? What about layer 1?",
        "<b>Layer 2 frames</b> after the hardware decodes them. Raw signals need a <b>hardware TAP</b> or SDR; Wi-Fi needs <b>monitor mode</b>."
      ],
      [
        "Filter by MAC; follow a stream.",
        "<code>eth.addr == aa:bb:…</code>. Follow → TCP/UDP/HTTP Stream, or <code>tcp.stream eq 7</code>. Analyse by <b>who, what, when, where</b>."
      ],
      [
        "Decrypting TLS in Wireshark (exact menu).",
        "<b>Edit → Preferences → Protocols → TLS → (Pre)-Master-Secret log filename</b> = the <b>SSLKEYLOGFILE</b> the browser wrote. HTTP/2 then decodes."
      ],
      [
        "Three capture challenges.",
        "<b>Time</b> (was capture running when it happened?), <b>scope</b> (which packets?), <b>size</b> (how many, storage)."
      ],
      [
        "Why might capturing on one PC miss other devices' traffic?",
        "<b>Switches only send frames where needed</b> (MAC address table), so a host sees only its own traffic. <b>ARP</b> maps IP → MAC; <b>ARP spoofing</b> = claiming others' IPs."
      ],
      [
        "Where to capture for each goal.",
        "Own device → host-based. All internet traffic → the <b>edge</b> (router/firewall ↔ ISP). Two PCs → SPAN/TAP on their <b>switch ports</b>. Wi-Fi → <b>monitor mode</b> on the right channel (plus the WPA key) or at the AP."
      ],
      [
        "Legal questions before capturing packets.",
        "Do you <b>have</b> and <b>need</b> permission? Workplace-monitoring law; <b>privacy</b> of others' traffic; an IP or MAC ≠ a person; capturing without authority may breach <b>telecommunications interception</b> law."
      ],
      [
        "Should you upload evidence PCAPs to online analysers?",
        "<b>Usually no</b> (confidentiality, chain of custody). Use TShark or CapAnalysis locally."
      ],
      [
        "Wireshark: where do you look first in a huge capture?",
        "<b>Statistics</b>: Conversations (sort by bytes), Endpoints, Protocol Hierarchy, Resolved Addresses. Get the big picture, then filter down. Or pivot from a time/IP you found on disk or in memory."
      ],
      [
        "Conversations sorted by bytes: what three patterns do you look for?",
        "<b>Exfiltration:</b> big transfer from inside to outside.<br><b>Beaconing:</b> long-lasting, small, regular connections to one outside host.<br><b>Lateral movement:</b> unexpected inside-to-inside connections."
      ],
      [
        "Protocol Hierarchy shows an unusually large share of DNS. Why does that matter?",
        "Data can be smuggled out hidden inside DNS lookups (DNS tunnelling/exfiltration), broken into tiny chunks."
      ],
      [
        "Wireshark: how do you read a whole conversation as text?",
        "Right-click a packet → <b>Follow → TCP Stream</b> (or HTTP Stream). Or filter <code>tcp.stream eq N</code>."
      ],
      [
        "Wireshark: how do you get a file out of a capture?",
        "<b>File → Export Objects → HTTP</b> (or SMB) → Save. Then check its real type (header bytes / <code>file</code>), hash it, and check VirusTotal."
      ],
      [
        "Wireshark: how do you find the IP a domain name resolved to?",
        "Filter <code>dns.qry.name == \"name\"</code>, open the <b>response</b> and read the A record. Or Statistics → Resolved Addresses."
      ],
      [
        "Wireshark: how do you find which IP a given MAC address used?",
        "Filter <code>eth.addr == aa:bb:cc:dd:ee:ff</code> and read the IP, or check the ARP replies."
      ],
      [
        "How do you tell the client's port from the server's?",
        "The server listens on a well-known port (80, 443, 445, 5900). The client uses a random high (ephemeral) port. The side that isn't the known port is the client."
      ],
      [
        "How do you spot a port scan in a capture?",
        "One source sending lots of SYNs (new connection attempts, no ACK) to many ports, with lots of RSTs coming back. Filter <code>tcp.flags.syn == 1 &amp;&amp; tcp.flags.ack == 0</code>, then check Conversations/Endpoints."
      ],
      [
        "How do you spot ARP spoofing?",
        "<b>One MAC address</b> claiming <b>several IPs</b> in ARP replies. Analyze → Expert Information flags \"duplicate IP address\"."
      ],
      [
        "Where can you find passwords in a capture, and when won't you?",
        "Network Miner's <b>Credentials</b> tab, or filter <code>http.authorization</code> (Basic auth is just Base64). Only for unencrypted protocols (HTTP, FTP, POP3). Not from HTTPS without keys."
      ],
      [
        "A file exported from SMB is called report.pdf but won't open. What do you check?",
        "Its <b>real type</b>: header bytes or the <code>file</code> command. The name can lie (signature analysis)."
      ],
      [
        "How can you tell what was typed in an unencrypted VNC (remote desktop) session?",
        "Follow the stream: Wireshark decodes the <b>KeyEvent</b> messages, which list each key pressed in order."
      ],
      [
        "Network Miner vs Wireshark.",
        "<b>Network Miner:</b> push-button; pulls out hosts, files, images and credentials automatically. <b>Wireshark:</b> every packet, full detail, you do the digging with filters and statistics."
      ],
      [
        "Network Miner Images tab is full of screenshots. What might that suggest?",
        "Screen-grabbing malware sending pictures of the desktop out over unencrypted HTTP."
      ],
      [
        "Name the four Network Miner tabs you'd check first.",
        "<b>Hosts</b> (IP, MAC, OS, ports), <b>Files</b>, <b>Images</b>, <b>Credentials</b>."
      ],
      [
        "What can a User-Agent tell you, and where is it?",
        "The browser and operating system (e.g. \"Chrome on macOS\"). It's a header in HTTP requests: filter <code>http.user_agent</code>."
      ],
      [
        "You found an IP on disk linked to malware. How do you use it in Wireshark?",
        "Filter <code>ip.addr == that IP</code>: see when contact started, how much data moved, and which internal hosts talked to it."
      ],
      [
        "An upload to a file-sharing site: TCP or UDP, and what does it look like?",
        "<b>TCP</b> (one lost packet would corrupt the file). Lots of <b>POST</b> requests and a big byte count to <b>one</b> destination."
      ],
      [
        "Is an IP or MAC address proof of who did something?",
        "No. It identifies a <b>device</b> (and MACs can be faked, IPs shared or changed). You need other evidence to link it to a person."
      ]
    ]
  }
};