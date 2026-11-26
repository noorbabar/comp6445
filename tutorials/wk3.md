# Tutorial 3: Windows artefacts and time

## Start by fingerprinting the system
- **System:** serial, OS version, computer name, network, **time zone**
- **Data:** user accounts, installed programs
Do this before any analysis, because everything else depends on it (especially the time zone).

## Where Windows keeps data
- **Documents** and the user profile
- **AppData**: per-user app data (Roaming, Local)
- **ProgramData**: machine-wide app data
- **Registry**
- **Temp** files

## Artefacts by question
| Question | Artefacts |
|---|---|
| Which files were opened? | LNK, Jump Lists, RecentDocs, ShellBags |
| Which USBs? | USBSTOR, setupapi.dev.log, MountedDevices, MountPoints2 |
| Which programs ran? | Prefetch, UserAssist |
| Which networks / sites? | Network profiles, browser history |

**ShellBags** remember how folders were viewed in Explorer, including folders since deleted and folders on removable drives. Good for "a folder existed on the USB".

## Time formats
| Format | Counts | From |
|---|---|---|
| Unix | seconds | 1 Jan 1970 UTC |
| Windows FILETIME | 100-nanosecond ticks | 1 Jan 1601 UTC |
| Chrome | microseconds | 1 Jan 1601 UTC |
| Firefox | microseconds | 1 Jan 1970 UTC |
| ISO 8601 | text | e.g. 2021-03-14T02:05:09Z (Z = UTC) |

Converting in PowerShell:
```
[DateTimeOffset]::FromUnixTimeSeconds(1600000000).UtcDateTime
[DateTime]::FromFileTimeUtc(132450000000000000)
[DateTime]::FromFileTimeUtc(13245000000000000 * 10)    # Chrome: ×10 first
```

## FAT32 and time (mock-trial favourite)
- Stores **local time with no zone**: depends on the clock and zone of whichever PC wrote it
- Modified time only to **2 seconds**
- Accessed = **date only**
- No "changed" time
So it's hard to order events or compare with UTC sources.

## Tools used
WinPrefetchView, ShellBagsView, Registry Explorer, RegEdit, Autopsy. RegRipper for quick reports:
```
rip.pl -r SYSTEM -p timezone
rip.pl -r NTUSER.DAT -p userassist
rip.pl -r SYSTEM -p usbstor
```

## Recycle Bin
See Week 3 Practice notes ($I/$R, SID folder, deletion time at offset 16).
