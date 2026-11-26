# Tutorial 5: Network analysis with Wireshark

## Packets
- **Header** (source, destination, ports, size) + **payload**
- Usually up to about **1,500 bytes** (Ethernet MTU); IP allows up to ~64 KB
- Nesting: Ethernet frame ⊃ IP packet ⊃ TCP segment / UDP datagram ⊃ application data

## What does a capture see?
A network card hands you **layer 2 frames** (already decoded). Raw signals need a hardware TAP or radio gear. Wi-Fi needs **monitor mode** on the right channel (and the Wi-Fi key to decrypt).

## Core moves in Wireshark
```
eth.addr == aa:bb:cc:dd:ee:ff          # one MAC
ip.addr == 10.0.0.5                    # one host
tcp.stream eq 3                        # one conversation
dns                                    # all lookups
http.request                           # all requests
```
- Right-click → **Follow → TCP / HTTP Stream** to read a conversation
- **Statistics → Conversations / Endpoints / Protocol Hierarchy / Resolved Addresses** for the big picture
- **File → Export Objects → HTTP / SMB** to pull files out
- Analyse by **who, what, when, where**

## Decrypting HTTPS (exact menu)
**Edit → Preferences → Protocols → TLS → (Pre)-Master-Secret log filename** = the `SSLKEYLOGFILE` the browser wrote. HTTP/2 then decodes.

## Capture challenges
- **Time:** was it running when it happened?
- **Scope:** which packets did you actually get?
- **Size:** how many, and can you store them?

## Why one PC misses others' traffic
Switches send frames only to the right port (MAC address table). ARP maps IP → MAC. **ARP spoofing** = one device claiming others' IPs to sit in the middle.

## Where to capture
| Goal | Where |
|---|---|
| One device | On the device |
| All internet traffic | The edge (firewall ↔ ISP) |
| Two specific PCs | SPAN/TAP on their switch ports |
| Wi-Fi | Monitor mode on the channel, or at the access point |

## Legal and handling
- Do you have permission? Workplace surveillance and interception laws; other people's privacy.
- An IP or MAC is a device, not a person.
- Don't upload evidence captures to online analysers. Use TShark or local tools.
```
capinfos capture.pcap                     # summary: start, end, packet count
tshark -r capture.pcap -q -z conv,ip      # conversations without the GUI
tshark -r capture.pcap -Y dns -T fields -e frame.time -e dns.qry.name
```

See Week 5 Practice notes for the full "doing it in Wireshark" table.
