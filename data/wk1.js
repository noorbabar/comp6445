window.CONTENT = window.CONTENT || {};
CONTENT[1] = {
  "professional": {
    "notes": "<h4>Core question</h4>\n<p>For any piece of evidence, ask: what does it actually show, and what else could have caused it? If something innocent could produce the same data, the conclusion can be challenged.</p>\n\n<h4>A file existing isn't proof</h4>\n<p>A photo on a phone only proves the file is there. It doesn't prove who put it there, whether it was on purpose, whether they opened it, or whether they agree with it. It could have come from:</p>\n<ul><li>group chat auto-downloads</li><li>an AirDrop accepted by mistake</li><li>the browser cache</li></ul>\n<p>So you corroborate: check it against other, independent evidence.</p>\n\n<h4>History</h4>\n<ul><li><b>1984:</b> the FBI starts examining computers as a dedicated job</li><li><b>2001:</b> DFRWS writes the standard definition of digital forensics</li></ul>\n\n<h4>When courts trust an expert</h4>\n<ul><li><b>US (Daubert):</b> is the method testable, peer reviewed, with a known error rate, and generally accepted?</li><li><b>Australia (Honeysett):</b> is the opinion based on specialised knowledge from training, study or experience? There's no upfront method test, but you get questioned on it in court.</li></ul>\n\n<h4>Two types of error</h4>\n<ul><li><b>Implementation error:</b> the tool has a bug.</li><li><b>Abstraction error:</b> the tool is right, but you read too much into it. E.g. a cached page shows data arrived, not that someone chose to visit it.</li></ul>\n<p>Most real mistakes are abstraction errors.</p>\n\n<h4>Key cases</h4>\n<ul><li><b>Silk Road (done right):</b> laptop seized while open and unlocked. The live capture and notes beat the \"planted evidence\" claim.</li><li><b>Julie Amero (done wrong):</b> a teacher convicted because of pop-ups that malware caused. Full story below.</li></ul>\n\n<h4>The Julie Amero case</h4><p><b>What happened (2004, Connecticut, USA)</b></p><ul><li>Julie Amero was a substitute teacher in a Year 7 class, using the classroom computer.</li><li>She stepped out briefly. When she came back, explicit adult pop-ups were opening on the screen, faster than she could close them.</li><li>The school had told staff not to turn the computers off, so she didn't. She tried to keep the screen away from the students and reported it.</li><li>Students told their parents. She was fired and charged with putting children at risk.</li></ul><p><b>The trial (2007)</b></p><ul><li><b>The school's IT manager</b> examined the <b>original computer</b> the day after: no forensic image, no write blocker, no hash, no notes. Asked about viruses, he said he didn't know of any, but he had never checked.</li><li><b>A police detective</b> used a tool that the vendor itself said can't tell a deliberate visit from a pop-up. He told the jury a <b>red link</b> proved she had clicked it.</li><li>The jury convicted her on 4 counts, carrying up to 40 years in prison.</li></ul><p><b>What a proper examination found</b></p><ul><li>The website's own code made that link red. Her browser showed <b>visited</b> links in <b>green</b>, and there was no cache entry for the page, so the red link actually showed she <b>hadn't</b> clicked it.</li><li>The antivirus was long out of date.</li><li><b>Adware</b> had been installed days <b>before</b> the incident, before she ever used the machine. Adware can open pop-up after pop-up on its own.</li><li>Browser cache entries can't show intent: pages land there whether you click, get redirected, or malware loads them.</li><li>Her own defence expert found the adware before trial, but it wasn't raised in time, so the jury never heard it.</li></ul><p><b>How it was overturned</b></p><ul><li>Security researchers re-examined the computer for free, and 28 computer science professors publicly backed her.</li><li>The state's own forensic lab contradicted the prosecution's evidence.</li><li>In June 2007 the conviction was set aside and a new trial ordered. In 2008 she pleaded guilty to a minor offence to end the case, and gave up her teaching licence. The case took years from her life.</li></ul><p><b>Why it matters for this course</b></p><ul><li><b>No image, no hash, no notes:</b> the evidence was examined live and changed (the observer effect).</li><li><b>Nobody asked \"what else could cause this?\"</b>: malware was never ruled out.</li><li><b>Abstraction error:</b> the tools worked, but people read intent into data that can't show it.</li><li><b>Tool limits ignored:</b> the detective's tool couldn't tell clicks from pop-ups, and he said otherwise.</li><li>Both \"experts\" fail the six traits of a professional below.</li></ul><h4>Six traits of a professional</h4>\n<ul><li>technical skill</li><li>understands the forensic process</li><li>problem solving</li><li>knows the legal requirements</li><li>ethics</li><li>questioning mindset</li></ul>\n<p>Useful as a checklist for judging whether someone in a case did their job.</p>",
    "cards": [
      [
        "What are the two questions to ask of every piece of evidence (the W1 takeaway)?",
        "1. <b>What does it show?</b><br>2. <b>What else could have produced exactly this?</b><br>If another cause could create the same artefact, the interpretation can be challenged."
      ],
      [
        "Border-officer scenario: a \"bad\" photo is in your gallery. Give ways it could have got there without you choosing it.",
        "<ul><li>Group-chat auto-download (e.g. WhatsApp)</li><li>Unsolicited AirDrop</li><li>Forwarded into a family chat</li><li>Shared album / sync from another device</li><li>Browser cache from a page opened once</li><li>You screenshotted it to report it</li><li>Coursework (journalism, security, law)</li><li>Second-hand phone</li><li>You <b>deleted</b> it and it's still recoverable, so the \"worst\" artefact may show you <i>rejected</i> it</li></ul>"
      ],
      [
        "\"You have this photo, so you're dangerous\" is really six claims stacked together. List them, and say which one is actually proven.",
        "1. The file is on the device: <b>the only fact</b><br>2. A human put it there on purpose<br>3. That human was you<br>4. You viewed it<br>5. You agreed with it<br>6. You intend to act on it<br>Claims 2–6 are only asserted."
      ],
      [
        "The same artefact can be judged against three different thresholds. Name them.",
        "<ul><li><b>Border officer:</b> discretion</li><li><b>Civil case:</b> balance of probabilities</li><li><b>Criminal case:</b> beyond reasonable doubt</li></ul>"
      ],
      [
        "1984 vs 2001: what happened in each year?",
        "<ul><li><b>1984:</b> the FBI <b>Magnetic Media Program</b>. Examining computers became a dedicated job, not a favour from \"the IT person\".</li><li><b>2001:</b> the first <b>DFRWS</b> (Digital Forensic Research Workshop) in Utica, NY. Practitioners and academics wrote the field's definition.</li></ul>So the field had a job 17 years before it had a definition."
      ],
      [
        "DFRWS 2001 definition: the key words, in your own words.",
        "Using <b>scientifically derived and proven methods</b> to <b>preserve, collect, validate, identify, analyse, interpret, document and present</b> digital evidence, in order to <b>reconstruct events found to be criminal</b> or to <b>anticipate unauthorised actions</b> that disrupt operations."
      ],
      [
        "Daubert v Merrell Dow (US, 1993): what was the story?",
        "<ul><li>Families sued over the morning-sickness drug <b>Bendectin</b> (birth defects)</li><li>Merrell Dow had 30+ studies (about 130,000 patients) showing no link</li><li>The families had animal studies, chemical-structure analysis and unpublished reanalysis</li><li>The Supreme Court replaced the rigid \"generally accepted\" rule (Frye) with a flexible test applied by the judge</li><li>Back in the lower court their evidence was excluded again: they <b>won the principle and lost the case</b></li></ul>"
      ],
      [
        "Daubert's four factors. Phrase them as questions about YOUR tool.",
        "1. <b>Testable:</b> can it be tested, and has it been?<br>2. <b>Peer reviewed:</b> published so others can check it?<br>3. <b>Known error rate:</b> how often is it wrong, and how?<br>4. <b>Generally accepted</b> by the relevant community?"
      ],
      [
        "Australia vs the US: what does the court ask about an expert?",
        "<ul><li><b>US (Daubert):</b> is the <b>method</b> reliable?</li><li><b>Australia:</b> is it <b>specialised knowledge</b>, based on your <b>training, study or experience</b>? There's <b>no separate step</b> where you prove your method first.</li></ul>"
      ],
      [
        "Honeysett v The Queen (HCA 2014): facts and outcome.",
        "An armed robber wore a pillowcase over his head. An anatomy professor compared the CCTV with the accused and listed 8 similarities and no differences, <b>without measuring anything</b>. He admitted any layperson could make those observations. <b>Inadmissible:</b> nothing in it needed specialised knowledge."
      ],
      [
        "If Australia has no \"prove your method\" step, where does method reliability still get tested? (3 places)",
        "<ul><li>Inside the word <b>\"knowledge\"</b>: it must be more than a hunch, held on good grounds</li><li>The <b>judge can exclude</b> evidence when the risk of misleading outweighs its value</li><li>The <b>jury and cross-examination</b>: how far you're believed</li></ul>That's <b>harder, not easier</b>: the questions come later, in the witness box."
      ],
      [
        "Closed-source tools: what's the problem, the counter-argument, and Brian Carrier's middle path?",
        "<ul><li><b>Problem:</b> if the code is secret, nobody can check the error rate or test it (two Daubert factors)</li><li><b>Counter:</b> commercial tools are heavily used and accepted by courts for decades (\"generally accepted\")</li><li><b>Carrier</b> (author of TSK/Autopsy): keep the interface closed if you like, but <b>publish the part that reads the data</b></li></ul>"
      ],
      [
        "Implementation error vs abstraction error.",
        "<ul><li><b>Implementation error</b> = a <b>bug</b>: the tool computed the layer wrongly. Rare, findable, fixable.</li><li><b>Abstraction error</b> = the tool is correct, but <b>you read a meaning the layer doesn't carry</b>. This is an interpretation error, and the course trains you to avoid it.</li></ul>"
      ],
      [
        "Cached-file example: walk up the abstraction layers. Which step has no support?",
        "Bytes on disk → file system → this is browser cache → each entry maps to a URL → the browser requested the URL → <b>a human chose to go there</b> ✗<br>The cache only proves <b>these bytes arrived over the network at about this time</b>."
      ],
      [
        "Ways bytes can land in the browser cache with no human choosing them.",
        "Pop-ups; ads and trackers on a page you did visit; redirects and auto-refreshing pages; browser <b>prefetching</b>; adware fetching in the background; scanners and indexers; someone else at the keyboard."
      ],
      [
        "BTK (Wichita, 2005): how was he caught?",
        "He asked police whether a floppy disk could be traced; they answered \"Rex, it will be OK\" in a newspaper ad. His purple floppy held a <b>deleted Word document</b> whose <b>metadata</b> said \"Last modified by: Dennis\" and \"Christ Lutheran Church\". The church website gave the surname, and <b>Dennis Rader</b> was arrested on 25 Feb 2005.<br><b>Lesson:</b> he knew what he was sending, but not what the file carried underneath."
      ],
      [
        "Photo metadata demo: what three lessons does it teach?",
        "1. <b>Files carry more than their content</b> (GPS, time). Systems write most data; they don't lie about what they did, but can be wrong about what it <i>meant</i>.<br>2. <b>Platforms strip evidence as a feature</b> (WhatsApp strips, AirDrop keeps). So acquire from the <b>source device</b>; a screenshot is worth less than the message store.<br>3. <b>Original vs copy</b> is a real forensic question."
      ],
      [
        "Dabate (Connecticut, 2015): what did \"the house\" show against his story?",
        "<ul><li>Wife's <b>Fitbit</b> moving until <b>10:05 am</b> (he said she died about 9 am)</li><li><b>Outlook login at 8:41 am from the home IP</b> (he claimed to be at the roadside)</li><li>Browser history at 9:18 am</li><li>Alarm panic button at 10 am</li><li>Her phone note \"Why I want a divorce\"</li><li>Facebook posts after her supposed death</li></ul>Convicted in 2022, sentenced to 65 years."
      ],
      [
        "Definition of a professional digital forensics practitioner (key words).",
        "Someone who <b>regularly</b> does digital forensic analysis, can <b>collect, preserve and analyse</b> evidence during an investigation, and <b>present it in a legal forum</b>, with <b>competency, quality and efficiency</b>."
      ],
      [
        "The six elements of a professional practitioner.",
        "1. <b>Technically proficient</b><br>2. <b>Understands the forensic process</b> (preservation, documented and validated process)<br>3. <b>Problem-solving</b> (critical, objective, doesn't jump to conclusions)<br>4. <b>Understands legal requirements</b> (warrant scope, licensing, witness duties)<br>5. <b>Strong ethics</b> (\"can I vs should I\")<br>6. <b>Questioning mindset</b>"
      ],
      [
        "Silk Road (2013): how was Ross Ulbricht's laptop seized, and why that way?",
        "Two agents staged a loud argument in the library; he looked away; a third agent grabbed the <b>open, unlocked, logged-in</b> laptop. Because of <b>full-disk encryption</b>, a closed lid would have meant lost evidence. <b>The arrest was designed around the state of the machine.</b>"
      ],
      [
        "Silk Road: what was done after the seizure, and why did the \"planted evidence\" defence fail?",
        "<b>Thomas Kiernan (FBI)</b> kept it awake, did a <b>live capture</b> and took screenshots before shutdown, recovering chats, the journal and the Bitcoin ledgers. The defence (Dratel) said it could have been planted; this failed because the <b>contemporaneous record</b> (live capture, screenshots, who-touched-what) rebutted it. \"The evidence survived <b>because of</b> the paperwork.\""
      ],
      [
        "Julie Amero (2004): what happened in the classroom?",
        "A substitute teacher stepped out and came back to <b>explicit adult pop-ups</b> that opened faster than she could close them. School policy said not to shut PCs down, so she turned the monitor away and reported it. She was fired and charged, and in <b>2007</b> convicted on <b>4 counts (up to 40 years)</b> of risk of injury to a minor."
      ],
      [
        "Amero witness 1, Robert Hartz (school IT manager): what went wrong?",
        "He examined the <b>original, live computer</b> the next day: <b>no image, no write blocker, no hash, no documentation</b>. On viruses: \"I don't know of any\", but he never checked. On an endless pop-up loop: \"never seen it, so probably not\". He failed all six elements and never addressed <b>intent</b>."
      ],
      [
        "What did the later examination of Amero's PC find?",
        "<ul><li>Temporary Internet Files <b>don't show intent</b> (a \"damning\" site can just be a pop-up)</li><li>Antivirus was <b>end-of-life</b> (signatures from June 2004)</li><li>Adware <b>\"NewDotNet\"</b> installed on <b>14 Oct 2004</b>, 5 days before the incident and before she used the PC</li></ul>"
      ],
      [
        "Amero witness 2, Det. Lounsbury: the \"red link\" claim and the three reasons it was wrong.",
        "He said the red link proved it was clicked, using the tool ComputerCop (which by the vendor's own admission <b>can't tell intentional from accidental</b> visits).<br>1. The <b>website's HTML coloured it red</b> on purpose<br>2. Her browser coloured <b>visited links green</b>, so red meant <i>not</i> visited<br>3. <b>No cache entry</b> existed for it<br>So it was <b>exculpatory</b>."
      ]
    ]
  },
  "technical": {
    "notes": "<h4>Methodology</h4>\n<p>Prepare → Secure &amp; Seize → Preserve → Analyse → Report</p>\n<ul><li><b>Prepare:</b> kit, forms, legal authority</li><li><b>Secure &amp; Seize:</b> control the scene, photograph and record everything</li><li><b>Preserve:</b> make a verified forensic copy</li><li><b>Analyse:</b> work on the copy, never the original</li><li><b>Report:</b> explain findings so others can check them</li></ul>\n\n<h4>Chain of custody</h4>\n<p>Record who had the evidence, when, and what they did with it. Use a custody form, numbered tamper-evident bags, photos and notes. Any gap lets the other side claim tampering. The notebook is the most important item in the kit.</p>\n\n<h4>Devices that are switched on</h4>\n<ul><li><b>Desktop or laptop:</b> pull the plug (a normal shutdown writes more data)</li><li><b>Server:</b> proper shutdown (pulling the plug can corrupt databases)</li><li><b>Encrypted disk (e.g. BitLocker):</b> capture memory or a live image first, or the data may be locked for good</li><li><b>Phone:</b> Faraday bag, so it can't be remotely wiped</li></ul>\n\n<h4>Forensic images</h4>\n<p>A copy of every sector, including deleted and empty space. Connect the drive through a write blocker, because the OS writes to any drive you plug in.</p>\n<ul><li><b>DD (raw):</b> just the bytes. You record the hashes yourself.</li><li><b>E01:</b> the bytes plus case info, a checksum (CRC) per block, and the hash built in.</li></ul>\n\n<h4>Verification</h4>\n<p>Hash the source and the image. Matching hashes mean an identical copy. Don't leave the scene with an unverified image, and keep a second verified copy somewhere else.</p>",
    "cards": [
      [
        "The five-step forensic methodology.",
        "<b>Prepare → Secure &amp; Seize → Preserve → Analyse → Report</b>. Preserve = take a forensic image."
      ],
      [
        "Why have a forensic lab? What's in it (hardware, software, people)?",
        "A secure place to <b>store evidence</b> and powerful machines for <b>offline analysis</b>.<ul><li><b>Hardware:</b> workstations (for indexing), an evidence safe, tamper-proof bags, write blockers and adapters</li><li><b>Software:</b> imaging (EnCase, FTK Imager, Paladin); analysis (EnCase, FTK, SIFT, log2timeline); screenshot tools</li><li><b>People:</b> trained staff and clear <b>SOPs</b></li></ul>"
      ],
      [
        "\"Tools do the heavy lifting, but…\"",
        "They're <b>not a substitute for analysis</b>: tools have bugs, so <b>validate with another tool</b>. In court you'll be asked \"did you validate it?\". If you can't explain what you did, the report is worthless."
      ],
      [
        "Chain-of-custody details to record when receiving a device.",
        "Who gave it to you, who you gave it to, what's in the bag, <b>serial, model and condition</b> (cracked screen etc.), backed by <b>photos</b>, so nobody can claim it was damaged in your care."
      ],
      [
        "Bug-out kit contents, and the most important item.",
        "Screwdrivers, SATA/IDE cables and adapters, chargers, USB hubs, SD readers, a forensic laptop, <b>Faraday bags</b>, a camera, and a <b>notebook and pen</b>, which is <b>the most important</b> (documentation)."
      ],
      [
        "What does a Faraday bag do, and why does it matter?",
        "It <b>blocks Wi-Fi, mobile and radio signals</b>, so the phone's state doesn't change and the suspect <b>can't remote-wipe it</b>. An iPhone wipe destroys its encryption keys, so <b>nothing</b> can be recovered."
      ],
      [
        "\"Trust but verify\" at a seizure: example.",
        "A suspect says an old laptop is broken and unused. If it's <b>in scope</b> of the warrant or instructions, <b>image it anyway</b>."
      ],
      [
        "Seizure checklist.",
        "<ul><li>Covert or overt?</li><li><b>Legal authority</b>: written permission, a warrant, or the owner's undertaking</li><li><b>Secure the scene</b></li><li>Document arrival, every step, departure</li><li>Maintain chain of custody until return</li></ul>"
      ],
      [
        "Covert vs overt seizure examples.",
        "<b>Covert:</b> imaging at 1 am under a cover story (\"IT update tonight\"), photographing everything first to restore it exactly. <b>Overt:</b> a search warrant, or an employer taking its own device."
      ],
      [
        "Why not photograph a scene with your personal phone?",
        "If the other side demands the <b>original</b> photos, the only way is to <b>image your whole phone</b>, exposing your private data. Use the kit camera."
      ],
      [
        "First steps at a running, logged-in computer (in order).",
        "1. <b>Secure the scene</b> (remove people; never leave it unattended)<br>2. <b>Document it</b> (photograph everything)<br>3. <b>Check if it's running</b><br>4. Decide whether to pull the power"
      ],
      [
        "Pulling the power: workstation vs server vs FDE.",
        "<ul><li><b>Workstation:</b> pull the plug (any interaction logs something)</li><li><b>Server:</b> <b>proper shutdown</b> (transactions, journals, file locks, DB corruption risk)</li><li><b>Full-disk encryption:</b> possibly your only chance to see it decrypted, so take a <b>live image and/or memory image first</b> (or get BitLocker keys from AD)</li></ul>"
      ],
      [
        "Live imaging: is it sound? All-in-one PCs? Devices with internet?",
        "Live imaging can be sound, but <b>raises the bar for detailed notes</b> (why each step, what impact). All-in-ones: force-hold or normal shutdown, <b>document which</b>, then boot-USB acquisition. Internet-capable devices: <b>airplane mode</b> (documented) plus a Faraday bag."
      ],
      [
        "Chain of custody: consequences of failure and how to track it.",
        "Suspicion of tampering and possible <b>inadmissibility</b>. Track it with seizure notes/journal, a CoC form, movement records, <b>tamper-proof bags with unique serials</b> (\"bag and tag\") and an evidence safe. You must be able to <b>back it up</b>."
      ],
      [
        "Define forensic acquisition, and give the four methods.",
        "An <b>exact forensic copy</b>, usually <b>bit-for-bit / sector-by-sector</b>.<ul><li><b>Disk:</b> remove the drive, attach via write blocker or duplicator</li><li><b>Live:</b> run software on the running OS, save to external storage</li><li><b>Boot CD/USB:</b> forensic OS, disk mounted <b>read-only</b></li><li><b>Network:</b> an <b>agent</b> (pre-installed or pushed via SCCM), good for many machines</li></ul>"
      ],
      [
        "Observer effect and write blockers (version).",
        "Investigating evidence <b>must not change it</b>: always work on a copy. A write blocker is a <b>physical barrier to write requests</b> (read-only on the evidence side), and it <b>strengthens defensibility</b>. Software alternative: EnCase <b>FastBlock SE</b>."
      ],
      [
        "DD vs E01: compare.",
        "<b>DD/raw:</b> plain bit-for-bit dump; mounts natively on Linux; often split; <b>hashes must be computed, stored and verified manually</b>.<br><b>E01</b> (Expert Witness Format, Guidance/EnCase): <b>hash and case metadata built in</b>, <b>CRC per block</b>, compression, segments, de facto court standard; needs libewf or special tools."
      ],
      [
        "DD hashing workflow.",
        "Take the <b>acquisition hash</b> of the source device, then the <b>verification hash</b> of the output file. Matching MD5s mean an exact copy (two hashes to compute and record)."
      ],
      [
        "Inside an E01: header, CRCs and hash.",
        "<b>Header:</b> case name, examiner, evidence number (e.g. initials_LP01), notes (serials). The header and every block are <b>sealed by a CRC</b>. The <b>MD5/SHA-1 covers only the data blocks</b>, so it matches a hash of the raw disk. Tampering would need a hash collision <b>and</b> CRC collisions."
      ],
      [
        "Verification and backup rules.",
        "Verification = <b>recompute the image hash and compare</b> with the acquisition hash. <b>Don't leave the scene unverified.</b> Make a <b>second copy and verify it</b>, stored elsewhere (\"one is none, two is one\"). <b>Never analyse an unverified image.</b>"
      ],
      [
        "What goes on an acquisition form?",
        "Device model and <b>serials of both the PC and the disk</b>; <b>start/stop times</b>; <b>acquisition hash(es)</b>; <b>sign-off by a second verifier</b>."
      ],
      [
        "Anton Piller order.",
        "The <b>civil equivalent of a search warrant</b> (Australia), granted <b>ex parte</b> when there's a heightened risk of evidence destruction. Very specific scope (address, time, person, items); police are called if entry is refused; expensive; forensic experts help draft it (include the <b>car</b> and <b>passwords</b>)."
      ]
    ]
  }
};