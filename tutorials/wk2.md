# Tutorial 2: Disks, deletion, FAT32 and NTFS

## What is a file?
Data plus metadata (name, size, times, where it's stored). The Linux `file` command looks at the **magic bytes** at the start of the file, not the extension.
```
file mystery.jpg        # "PNG image data" = it's really a PNG
xxd mystery.jpg | head  # see the header bytes yourself
```

## Where can data hide on a drive?
- **Hidden partitions** (partition table edited so the OS ignores them)
- **Unallocated space** (deleted files not yet overwritten)
- **Slack**: file slack (end of the last cluster) and volume slack (end of the partition)
- **HPA / DCO**: service areas the drive hides from the computer. Detect by comparing the drive's real sector count with what was imaged.

## Carving: SSD vs HDD
- **HDD:** files are mostly contiguous and stay until overwritten. Carving works well.
- **SSD:** harder. Wear levelling scatters data, **TRIM** and garbage collection can erase freed blocks, and the real mapping is hidden inside the drive.

## Why file systems, and why different ones?
They organise files, track used and free clusters, and store metadata.
| File system | Good | Bad |
|---|---|---|
| FAT32 | Works everywhere (USBs, cameras) | 4 GB file limit, no permissions, no journal, **local time** |
| NTFS | Journal, permissions, ADS, encryption, **UTC** | Windows-centric |
| ext4 | Linux default | Not native on Windows |

## Why isn't data wiped on delete?
**Speed.** Overwriting takes time, so the file system just marks the space free. That's why recovery works.

## The undelete demo
On a FAT USB, after deleting a file:
- the content stayed at the same address
- the directory entry's first byte changed to **0xE5** (first letter of the name lost)
```
fls -r -d usb.img          # list deleted entries
icat usb.img <inode> > recovered.bin
```

## Anti-forensics (three kinds)
- **Physical destruction**
- **Secure wipe**: overwriting with zeros or random data
- **Encryption**

## Alternate Data Streams (ADS)
- An extra **$DATA** attribute on an NTFS file: `file.txt:secret.txt`
- Lost when copied to FAT32 (no ADS support)
- Originally for Mac resource forks; now used to hide malware
- `Zone.Identifier` is an ADS Windows adds to downloads (records where it came from)
```
dir /r                     # Windows: show streams
Get-Item file.txt -Stream *
Get-Content file.txt -Stream Zone.Identifier
```

## Autopsy for this week
See Week 2 Practice notes: volume list, special folders ($OrphanFiles, $Unalloc, $CarvedFiles), the "if you see this, it means" table.
