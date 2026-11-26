# Tutorial 7: Mobile forensics (iLEAPP, ALEAPP, Cellebrite)

## What a phone gives that a hard drive doesn't
SMS/iMessage and call logs; cell-tower and GPS location, Maps destinations; **IMEI / IMSI / ICCID**, phone number, Apple ID; mobile-only apps (chat, ride share, banking); health data; Wi-Fi networks and passwords; Bluetooth pairings.

## Why phones are difficult
Many models; encrypted by default; remote wipe; constantly changing (messages, cloud sync); hard to fully power off.

## Not valid isolation
- Changing the PIN (alters evidence)
- Power-saving mode (radios stay on)
- An ordinary evidence bag (doesn't block signals)

## How mobile forensics has changed
Dumbphones (SIM and handset dumps, special cables) → early smartphones → today: full encryption by default, Secure Enclave, auto-wipe, USB restricted mode. Physical extraction is near impossible without exploit tools (GrayKey, Cellebrite Premium), so most work relies on **logical**, **backup** and **cloud** extractions. Tool versions matter.

## Running iLEAPP / ALEAPP
```
python ileapp.py -t tar -i extraction.tar -o report/      # iOS
python aleapp.py -t fs  -i extracted_folder/ -o report/   # Android
```
(or the GUI versions: pick input, output folder, run, open `index.html`)

## Skills practised
- **Bundle IDs** expose disguised apps (a "calculator" vault)
- **Cydia / Sileo** = jailbreak
- **Deleted SMS** survive in SQLite (free pages, -wal)
- **Wi-Fi passwords** in `WifiConfigStore.xml`
- **EXIF** GPS and thumbnails with exiftool
- **APK** reversing with jadx

See Week 7 Practice notes for the full tables.
