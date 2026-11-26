# Tutorial 4: Memory with Volatility 3

## What lives in memory
Program code, variables and state; the **stack** and **heap**; OS data (process lists, handles, registry hives loaded in memory); network sockets; typed commands; keys and passwords; files mapped into memory.

## Process hollowing (tutorial definition)
Start a real process **suspended**, swap its code for malicious code, then **resume** it. It looks like svchost, so antivirus that trusts svchost lets it run.

## When is memory hard to collect?
- **Cloud / data centre:** no physical access, so use hypervisor snapshots or an agent
- **Locked PC, no password:** DMA attacks, cold boot, or an agent installed beforehand
- **User isn't an admin:** tools need admin or kernel rights

## Memory found on disk
`.vmem` / `.vmss` (VMs), crash dumps, `hiberfil.sys` (compressed RAM on hibernate), `pagefile.sys` (no timestamps for contents).

## Suspicious-process checklist
- Odd or misspelt names (svhost, lsasss)
- Right name, wrong folder
- Two of something that should be single (lsass, wininit, services)
- Wrong parent (svchost's parent should be services.exe)
- Started long after boot
- System process running as a normal user

## Volatility 3 commands
```
vol -f mem.raw windows.info
vol -f mem.raw windows.pslist
vol -f mem.raw windows.pstree
vol -f mem.raw windows.psscan
vol -f mem.raw windows.cmdline --pid 1234
vol -f mem.raw windows.envars --pid 1234
vol -f mem.raw windows.dlllist --pid 1234
vol -f mem.raw windows.handles --pid 1234
vol -f mem.raw windows.netscan
vol -f mem.raw -o out/ windows.dumpfiles --pid 1234           # exe + DLLs
vol -f mem.raw -o out/ windows.memmap --dump --pid 1234       # all its memory
vol -f mem.raw windows.filescan | grep -i secret
vol -f mem.raw -o out/ windows.dumpfiles --virtaddr 0x...      # one file from filescan
vol -f mem.raw windows.registry.hivelist
vol -f mem.raw windows.registry.printkey --key "Software\Microsoft\Windows\CurrentVersion\Run"
vol -f mem.raw windows.hashdump        # local NTLM hashes
vol -f mem.raw windows.cachedump       # cached domain logins
vol -f mem.raw windows.lsadump         # LSA secrets
vol -f mem.raw windows.vadyarascan --yara-rules "rule x {strings: $a=\"evil\" condition: $a}"
```

## Example: ransomware memory image
Work from a clue: netscan → PID → pstree (parent) → cmdline (path) → dump → hash → VirusTotal for the family name. Check Run keys for persistence.

## Cracking passwords
- **hashdump** gives NTLM hashes; crack with a wordlist (dictionary) or rules, e.g. hashcat mode 1000:
```
hashcat -m 1000 hashes.txt rockyou.txt
```
- Brute force = every combination. Dictionary = likely passwords. Rainbow table = precomputed lookups (beaten by salting; NTLM isn't salted).

See Week 4 Practice notes for pslist vs psscan and the full "which plugin for which job" table.
