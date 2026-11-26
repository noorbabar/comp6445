# Tutorial 1: Forensic soundness and the investigator's role

## Key takeaway

The course isn't about one tool or memorising artefacts. It's about **understanding how computers work**, so I can recognise what abnormal traffic, usage or files look like.

Rabbit holes are common. Before checking anything, I should have (and write down) a **reason** for checking it.

## What a forensic investigator should do

- Collect and preserve evidence in a sound, documented way
- Analyse objectively and consider other explanations
- Document everything as I go (ABD: Always Be Documenting)
- Report facts, and label opinions clearly as opinions
- Help the court: my duty is to the court, not the client

## What an investigator should NOT do

- Decide whether someone is guilty
- Act as an advocate for whoever is paying
- Change the evidence
- Go beyond the scope I was given, or beyond my expertise
- Guess without saying it's a guess

## Do artefacts exist to help investigators?

No. Each one exists to make the computer nicer to use:

- **Prefetch** makes programs start faster
- **LNK files and Jump Lists** power the "Recent" menus
- **ShellBags** remember how folders were viewed
- **Browser history** is for convenience
- **Logs** are for troubleshooting

So I need to know when an artefact is **not** created. Example: copying a file without opening it makes no LNK file, so a missing LNK doesn't prove nothing was copied.

## What makes evidence admissible?

- **Defensible:** collected with a proven, accepted method
- **Repeatable:** documented well enough that another examiner gets the same result

## Amero: what would we have done differently?

- Imaged the drive through a **write blocker** and **hashed** it
- **Scanned for malware** and checked what starts automatically (persistence)
- Tested other explanations: could pop-ups chaining together explain it, rather than her visiting the sites?
- Looked at timing: dozens of pages in seconds suggests automation, not a person
- Checked proxy and firewall logs to back it up
- Reported limits honestly

## Four pillars of forensic soundness

- **ABD** (Always Be Documenting)
- **Chain of custody**
- **Hashes**
- **Know your tools**: versions, limits, and validating results with a second tool

## Handy everyday tools

- `strings`: readable text inside any file
- `cat`: print a file
- `file`: what a file really is, from its first bytes
- `xxd` or a hex editor: the raw bytes
- `base64 -d`: decode Base64
- my own small scripts