# Tutorial 8: Malware and incident response

## Malware types
Spyware (watches and sends data out), adware (pop-ups; cf. Amero), ransomware (e.g. WannaCry), trojans, droppers (install more malware).

**Persistence:** Run keys, services, scheduled tasks, Startup folder, DLL hijacking.

## How malware gets in
Human error (phishing), code bugs (RCE), supply chain, stolen credentials.

## Visiting google.com:80, step by step
1. Hosts file and DNS cache, then DNS lookup (UDP 53)
2. ARP for the router's MAC
3. TCP handshake: SYN, SYN-ACK, ACK on port 80
4. HTTP GET (Host, User-Agent)
5. 301 redirect → HTTPS 443, new handshake + TLS (site name, certificate)
6. Page renders, sub-resources fetched

No DNS answer = no connection.

## Dynamic analysis
VMs, Sandboxie, online sandboxes (ANY.RUN, but mind confidentiality). **Procmon** shows file, registry and network access per process, but **not packet contents**, so run Wireshark too. Process Explorer; `strace` / `ltrace` on Linux.

## Static analysis
Deobfuscation, disassembly (Ghidra, IDA), YARA rules.

## How malware hides from analysis
Rootkits (unlinking from EPROCESS), sandbox detection, waiting for a human (mouse movement), one-time URLs.

## "Malware doesn't always have to run"
A malicious DLL or `.so` can be planted to load later: **DLL search-order hijacking**, or **LD_PRELOAD** on Linux.

## Linux basics
`~/.bash_history`, `/var/log/auth.log` and `syslog`, cron, `/etc/passwd` and `/etc/shadow`, `~/.ssh/authorized_keys`.

## Incident response
Using forensics to investigate and respond, often in real time. Plan: scope, **containment vs preserving evidence**, communications, **order of volatility**.

See Week 8 Practice notes for the tools table (Procmon, Process Explorer, Ghidra, YARA, VirusTotal, CyberChef).
