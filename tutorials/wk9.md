# Tutorial 9: Detection engineering and Splunk

## Why automate detection?
People are slow, inconsistent and don't scale (alert fatigue, nights). **Detection engineering** = designing, maintaining and tuning detection rules and alerts.

## Five difficulties
1. Many log sources (pull, push, or none) → centralise
2. Many formats (JSON, CSV, plain text; split events; commas or spaces inside fields) → normalise (OCSF)
3. Missing or poor logs
4. Different time formats
5. Different time zones → normalise to UTC

## SIEM, IDS, rule formats
- **SIEM:** Splunk, QRadar, Elastic (centralise, search, correlate, alert)
- **IDS:** Snort, Suricata (signatures); Zeek (connection logs)
- **Rules:** Sigma (log rules for any SIEM), YARA (files and memory)

## Splunk cheat sheet
```
index=web status=401 | stats count by clientip | sort - count
index=web | stats dc(useragent)
index=web | top limit=10 clientip
index=web | timechart span=1h count by status
index=web | rex "user=(?<user>\w+)" | stats count by user
index=web | table _time clientip uri status
index=web useragent="*Googlebot*" | stats dc(clientip)
index=web (status=401 OR status=403) clientip=203.0.113.9 | table uri
index=web status=403 | stats count by useragent | sort - count
```

## Detection logic
| Attack | Signs |
|---|---|
| Brute force | Many failures from one IP/user, then a success (the compromise) |
| Enumeration | Many usernames; valid and invalid ones get different responses |
| Auth bypass | 200s on protected URLs with no login first; odd parameters (../, ' OR 1=1--, admin=true) |
| Phishing | Look-alike domains; credentials POSTed to outside sites |
| Bad binary | System program name with a hash not on the known-good list |
| Bots | Count user agents; verify "Googlebot" with reverse DNS; repeated 403s |
| Living off the land | powershell -enc, certutil -urlcache, mshta, rundll32; Office starting shells |

## Without Splunk
```
cut -d' ' -f1 access.log | sort | uniq -c | sort -nr | head
awk -F'"' '{print $6}' access.log | sort -u | wc -l
grep -v -F -f good_hashes.txt exec.log
```
