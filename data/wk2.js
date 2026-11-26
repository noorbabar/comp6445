window.CONTENT = window.CONTENT || {};
CONTENT[2] = {
  "professional": {
    "notes": "<h4>Forensic method</h4>\n<p>It's the scientific method, but under pressure: you usually get one attempt, someone is paying for an answer, and a lawyer will pick your reasoning apart later.</p>\n<ul>\n<li>State what you think happened</li>\n<li>Test it in a way that <b>could prove you wrong</b></li>\n<li>Write down exactly what you did, so someone else can repeat it</li>\n<li>Accept the result, even if you don't like it</li>\n<li>Keep records good enough to survive court years later</li>\n</ul>\n<p>If another examiner follows your notes on the same image and gets a different answer, that's your problem: the notes weren't precise enough.</p>\n\n<h4>A real test can fail</h4>\n<p>Amero example:</p>\n<ul>\n<li><b>Explicit content in the browser cache</b> could only ever \"agree\" with guilt, because clicking, redirects and adware all put it there. So it tests nothing.</li>\n<li><b>Visited-link colour and a cache entry for the clicked page</b> could have gone either way. Both pointed to her innocence.</li>\n</ul>\n<p>If \"what else could cause this?\" has lots of answers, you haven't tested anything yet.</p>\n\n<h4>Forensically sound</h4>\n<p>Evidence collected with a standard, documented, proven process. To be admissible it has to be:</p>\n<ul>\n<li><b>Defensible:</b> an accepted method, shown to be sound</li>\n<li><b>Repeatable:</b> a third party following your notes gets the same result</li>\n</ul>\n<p>A method counts as accepted if <b>either</b>:</p>\n<ul>\n<li>it's been <b>tested and published</b> (e.g. NIST's public write-blocker tests, plus your own check on the day), or</li>\n<li>courts have <b>accepted it before</b> (e.g. EnCase, used in court since the 1990s even though it's closed source)</li>\n</ul>\n<p>If neither applies, you become the test case. AI tools are a problem here: a deepfake detector saying \"91% fake\" has no published error rate for your kind of video, and an AI that filters 50,000 chats down to 200 can't explain what it dropped and may give a different 200 next time.</p>\n\n<h4>Writing a checkable note</h4>\n<p>\"Found deleted images on the USB\" can't be checked. A good note records:</p>\n<ul>\n<li>the device and its <b>serial number</b></li>\n<li>the <b>write blocker</b> used</li>\n<li>the <b>tool and version</b>, and its settings</li>\n<li>the <b>hashes</b> (and that they matched)</li>\n<li>the date and time</li>\n<li>where the output was saved, and what was found (e.g. 14 JPEGs)</li>\n<li>a re-check of the hash afterwards</li>\n</ul>\n\n<h4>The observer effect</h4>\n<p>Looking at evidence can change it, like checking tyre pressure lets out a little air.</p>\n<ul>\n<li><b>Plug a disk into Windows:</b> it replays the NTFS journal, updates the \"last mounted\" time, and may create System Volume Information and a Recycle Bin folder</li>\n<li><b>Plug it into a Mac:</b> it writes .Spotlight-V100, .fseventsd and .DS_Store files</li>\n<li><b>Turn on a phone:</b> it syncs, downloads, and could receive a remote wipe</li>\n<li><b>Open a document:</b> its accessed time changes and a thumbnail may be saved</li>\n</ul>\n<p>Rule: work on a copy, and prove the copy is identical.</p>\n\n<h4>Hashes</h4>\n<ul>\n<li>Same input always gives the same hash, on any machine</li>\n<li>Change one character and the hash is completely different</li>\n<li>Always the same length, whatever the input size</li>\n</ul>\n<p>Proving a copy is identical:</p>\n<ul>\n<li>Hash the source before imaging</li>\n<li>Hash the image and compare</li>\n<li>Record both, with the tool and algorithm</li>\n<li>Re-hash when you finish and after every transfer</li>\n</ul>\n<p><b>A matching hash proves</b> the copy matched the source at the moment you checked. <b>It doesn't prove</b> the source was genuine, or that you interpreted it correctly.</p>\n<p><b>Hashes don't match?</b> That's a finding: record it and explain it. Never quietly re-image until you get a number you like.</p>\n\n<h4>When changing evidence can't be avoided</h4>\n<p>Capturing RAM, imaging a phone that's on, a server that can't go offline, or logging into a cloud account all change something. What's expected:</p>\n<ul>\n<li>use the least intrusive method that answers the question</li>\n<li>know exactly what it changes</li>\n<li>record it as you go, not afterwards</li>\n<li>be able to explain why the alternatives were worse</li>\n</ul>\n<p>\"Unaltered\" isn't the standard. <b>Defensible</b> is.</p>\n\n<h4>Write blockers</h4>\n<p>Photograph the blocker's \"write block\" light: you're producing evidence that writes were blocked. Hardware blockers are stronger than software ones, because software blocking runs on the same machine that's trying to write.</p>\n\n<h4>Six principles for handling digital evidence</h4>\n<ul>\n<li>Normal forensic and legal rules still apply</li>\n<li>Seizing evidence shouldn't change it</li>\n<li>Only trained people touch originals</li>\n<li>Every seizure, access, storage and transfer is documented and reviewable</li>\n<li>Whoever holds the evidence is responsible for it</li>\n<li>Every agency handling it is responsible for following these rules</li>\n</ul>\n\n<h4>The paperwork</h4>\n<ul>\n<li><b>Chain-of-custody form:</b> who held it, when, what they did</li>\n<li><b>Tamper-evident bag:</b> signed and numbered</li>\n<li><b>Acquisition sheet:</b> make, model and serial of the computer <b>and</b> the drive (drives can be swapped between machines), start and stop times, hashes</li>\n</ul>\n\n<h4>R v Choiselat: one case from start to finish</h4>\n<p>In 2009 ASIC and the AFP searched four Melbourne locations over alleged market manipulation. A forensic team searched and imaged devices. Seven years later one examiner was subpoenaed to give evidence.</p>\n<ul>\n<li><b>Seizure:</b> scene maps, acquisition sheets, journals, evidence register</li>\n<li><b>Acquisition:</b> evidence register, hashes, journals</li>\n<li><b>Analysis:</b> journals, the process and findings, confirmed with more than one tool</li>\n<li><b>Reporting:</b> analysis report, expert report, affidavits</li>\n<li><b>Court:</b> a witness statement, and the examiner herself</li>\n</ul>\n<p>By the time of court, the documents are all that's left. Her statement:</p>\n<ul>\n<li>starts with her <b>qualifications</b>, because in Australia that's what allows you to give an opinion at all</li>\n<li>records <b>serial numbers</b>: facts, not memory, so hardest to argue with</li>\n<li>says she was <b>instructed</b> to act, not acting on her own</li>\n<li>was written years later, to the minute, from <b>contemporaneous</b> notes (written at the time)</li>\n</ul>\n<p>A <b>subpoena</b> is an order to attend court. Ignoring it is contempt of court.</p>\n\n<h4>Ethics</h4>\n<ul>\n<li><b>Ethics:</b> written codes from a professional body that you can be measured against</li>\n<li><b>Morals:</b> your personal sense of right and wrong</li>\n</ul>\n<p>You can refuse a case that bothers you. Once you accept it, your feelings can't shape the report.</p>\n<p>Questions to test a decision:</p>\n<ul>\n<li>Would I be fine seeing it on the front page?</li>\n<li>Does it break a non-negotiable rule?</li>\n<li>What if everyone did this?</li>\n<li>What does it do to my (or my employer's) reputation?</li>\n<li>Does it fit my own moral code?</li>\n</ul>\n<p>Main duties:</p>\n<ul>\n<li><b>Honesty and competence:</b> only take work you're qualified for, and report everything you found, including what hurts the client. Don't say more than the evidence supports.</li>\n<li><b>Legal limits:</b> the warrant's scope, telecommunications law, and (in NSW) an investigator's licence</li>\n<li><b>Objectivity:</b> don't let media, public opinion or out-of-scope information push you. Ask what would count as evidence against your own conclusion, and look for it.</li>\n<li><b>Conflicts of interest:</b> a conflict doesn't automatically rule you out, but hiding one does. Disclose it.</li>\n<li><b>Confidentiality:</b> you see far more than you need. It stays private unless there's a court order, client permission, or evidence of serious harm.</li>\n</ul>\n\n<h4>Standard of proof</h4>\n<ul>\n<li><b>Criminal:</b> beyond reasonable doubt. The defence only needs to create a reasonable doubt.</li>\n<li><b>Civil:</b> balance of probabilities (more likely than not)</li>\n</ul>\n<p>This is different from <b>admissibility</b>, which is whether the evidence is allowed in at all. Example: a USB plugged in at 1:58 am and a database opened from it 6 minutes later is usually enough in an employment (civil) case. In a criminal case the defence will ask whether five people shared that login. Your work stays the same; how hard it gets pushed changes.</p>\n\n<h4>Two cautionary cases</h4>\n<ul>\n<li><b>Casey Anthony:</b> one tool said a chloroform page was visited 84 times, another said once. The tool's author found the bug during the trial and confirmed it was once, but the jury never heard. Lessons: when tools disagree, the disagreement is the finding, and a correction nobody hears fixes nothing.</li>\n<li><b>Gordon Wood:</b> the prosecution expert tested his theory by having cadets thrown into a pool in daylight, nothing like a cliff at night. He'd already made up his mind (and written a book about it). The conviction was quashed. Lessons: you don't have to lie to lose your independence, an experiment that doesn't match real conditions proves nothing, and your duty is to the court.</li>\n</ul>\n\n<h4>When to decline a case</h4>\n<ul>\n<li>you aren't competent and can't become so in time</li>\n<li>you aren't independent and disclosure can't fix it</li>\n<li>the only honest answer is one the client won't accept</li>\n<li>it would need something unlawful</li>\n</ul>\n<p>Also say no if you're asked to stretch past what the evidence supports after you've been paid.</p>",
    "cards": [
      [
        "W2 closing line: what does your method actually do for you?",
        "It doesn't make you <b>right</b>. It makes you <b>checkable</b>, so someone can catch you when you're wrong."
      ],
      [
        "Why is forensic science \"normal science in difficult conditions\"? (3 conditions)",
        "<ul><li>You usually get <b>one attempt</b></li><li><b>Someone is paying you</b> and wants a particular answer</li><li>A lawyer will later <b>tear your reasoning apart in public</b></li></ul>"
      ],
      [
        "The four steps of the scientific method, and the extra one the forensic method adds.",
        "1. State what you think happened<br>2. <b>Test it in a way that could prove you wrong</b><br>3. Write down what you did so <b>someone else can repeat it</b><br>4. <b>Accept the result</b> even if you don't like it<br>+ <b>Keep a record good enough to survive court years later</b>"
      ],
      [
        "A defence expert follows your report on the same image and gets a different answer. Whose problem is it?",
        "<b>Yours.</b> Your documentation should have been precise enough to make the result reproducible."
      ],
      [
        "Amero revisited: which check \"could only agree\", and which \"could have gone either way\"?",
        "<ul><li><b>Could only agree:</b> explicit content in the browser cache. It gets there whether you clicked, were redirected or adware fetched it, so it can't show intent.</li><li><b>Could have gone either way:</b> visited-link colour (green if clicked) and a cache entry for the clicked page. Both could have supported the prosecution; <b>neither did</b>.</li></ul>If \"what else could produce this?\" has many answers, you haven't tested anything."
      ],
      [
        "Define \"forensically sound\".",
        "Evidence collected by a <b>standard, documented and proven process</b>. To be admissible it must be <b>defensible and repeatable</b>:<ul><li><b>Accepted:</b> an industry standard shown to be sound, <i>or</i> legal precedent</li><li><b>Repeatable:</b> documented well enough that a <b>third party</b> can get the same results from the same data and steps</li></ul>"
      ],
      [
        "\"Tested and published\" vs \"accepted before\": give the example of each.",
        "<ul><li><b>Tested:</b> a Tableau write blocker. <b>NIST</b> publishes a spec and test reports (including failures), plus your own check on the day.</li><li><b>Accepted before:</b> <b>EnCase</b> is closed-source, but courts have accepted it since the mid-1990s, so the burden shifted to whoever challenges it.</li></ul>You need only <b>one</b>. If neither applies, <b>you're the test case</b>, not the examiner."
      ],
      [
        "Rewrite \"Found deleted images of interest on the USB\" so it can be checked. What must it record?",
        "Device and <b>serial</b>; <b>write blocker</b>; <b>tool and version</b>; output format; <b>hashes</b> (matched); date and <b>time</b>; method and <b>settings</b> (e.g. PhotoRec default JPEG set); <b>output location</b>; results (14 JPEGs); <b>re-verification</b> of the hash afterwards.<br>Test: could another examiner reproduce it from your notes alone?"
      ],
      [
        "Why are AI tools a problem for forensic method? Give the two examples.",
        "<ul><li><b>Deepfake detector \"91% synthetic\":</b> no published spec and no error rate for video like yours (compressed, forwarded). The number only <i>looks</i> scientific.</li><li><b>LLM sorting 50,000 chats down to 200:</b> can't explain what it dropped, and a re-run may give a different 200. <b>Not reproducible, and biased by the prompt.</b></li></ul>"
      ],
      [
        "What is the observer effect? Give the disk examples.",
        "<b>Measuring something changes it</b> (like checking tyre pressure). Plug a disk into a running machine:<ul><li>Windows replays the <b>NTFS journal</b> and updates the <b>last mount time</b>; it may create <b>System Volume Information</b> and a <b>recycle bin</b></li><li>macOS writes <b>.Spotlight-V100</b>, <b>.fseventsd</b> and <b>.DS_Store</b></li></ul>All without you opening a file. What changes is the evidence itself."
      ],
      [
        "Observer effect: what happens if you power on a phone or open one file?",
        "<ul><li>The phone joins the network, syncs and downloads; a <b>remote wipe</b> can arrive</li><li>Opening a document changes its <b>access time</b>; a <b>thumbnail</b> may be cached elsewhere</li></ul>Rule: <b>work on a copy and prove the copy is identical.</b>"
      ],
      [
        "Properties of a hash function (cat vs Cat).",
        "<ul><li>Same input gives the same output, every time, on any machine</li><li>Change one character and the output is completely different: <b>no partial match</b></li><li><b>Fixed length</b> whether the input is 3 bytes or 200 MB</li><li>Same hash = treat as the same file</li></ul>"
      ],
      [
        "Four steps to prove a copy is identical.",
        "1. <b>Hash the source</b> before imaging<br>2. <b>Hash the image</b> and compare<br>3. <b>Record both</b> on the acquisition sheet with the tool and algorithm<br>4. <b>Re-hash</b> when finished and after every transfer"
      ],
      [
        "What does a matching hash prove, and what doesn't it prove?",
        "<b>Proves:</b> the copy matched the source <b>at the moment you measured</b>.<br><b>Doesn't prove:</b> that the source was authentic before you got it, or that you analysed or interpreted it correctly.<br>A mismatch tells you <i>something</i> happened between measurements, but not what."
      ],
      [
        "Hashes don't match. What do you do?",
        "Treat it as <b>a finding, not an inconvenience</b>: record it and explain it. <b>Never quietly re-image until you get a number you like.</b> Even \"I accidentally turned the phone on\" must be recorded and reported."
      ],
      [
        "When is changing the evidence unavoidable? (4 cases)",
        "<ul><li><b>Volatile memory</b> (you must run a tool)</li><li>A <b>phone that's already on</b></li><li>A <b>server</b> that can't go offline</li><li>An <b>account</b> you can only reach by logging in</li></ul>"
      ],
      [
        "When you must change evidence, what does the standard ask? (4 points + the key line)",
        "1. <b>Least intrusive method</b> that answers the question<br>2. <b>Know exactly what it changes</b><br>3. <b>Record it as you go</b>, not afterwards<br>4. Be able to say <b>why the alternative was worse</b><br><b>\"Unaltered is not the standard. Defensible is.\"</b> Unexplained evidence fails whether you touched it or not."
      ],
      [
        "Why photograph the write blocker's \"Write Block\" light? Hardware vs software blockers?",
        "You're not only blocking writes; you're <b>producing evidence that you blocked them</b>.<br><b>Software blocking is weaker:</b> the thing stopping writes runs on the same machine that wants to write. \"Being careful\" isn't provable; a tested blocker is."
      ],
      [
        "The six principles for handling digital evidence (apply them, don't just memorise).",
        "1. All general <b>forensic and procedural principles</b> apply<br>2. Seizure actions <b>shouldn't change</b> the evidence<br>3. Anyone accessing <b>originals must be trained</b> for it<br>4. All seizure, access, storage and transfer activity is <b>fully documented, preserved and reviewable</b><br>5. <b>The individual is responsible</b> for everything done while it's in their possession<br>6. <b>Any agency</b> handling it is responsible for compliance"
      ],
      [
        "ABD: what are the key documents, and why record the drive serial separately?",
        "<ul><li><b>Chain-of-custody form</b>: who held it, when, and what they did</li><li><b>Tamper-evident bag</b>: signed and numbered</li><li><b>Acquisition sheet</b>: make, model and serials of <b>machine and drive</b>, start/stop times, hashes</li></ul>Drives can be <b>swapped between machines</b>. \"The palest ink beats the best memory.\""
      ],
      [
        "R v Choiselat: what was the matter?",
        "<b>23 Sep 2009:</b> ASIC and the AFP executed warrants at <b>4 Melbourne locations</b>. Choiselat (director of Q Ltd and Jumbuck) was accused of <b>market manipulation</b> and concealing share interests. A <b>McGrathNicol</b> forensic team ran keyword searches and imaged devices. <b>7 years later</b> one practitioner was subpoenaed to the County Court of Victoria."
      ],
      [
        "Choiselat: the five stages and the documents each produces.",
        "1. <b>Seizure</b>: scene maps, acquisition sheets, journals, evidence register, sign-in/out register<br>2. <b>Acquisition</b>: evidence register, acquisition sheets, hashes, journals<br>3. <b>Analysis</b>: journals, documented process and findings<br>4. <b>Reporting</b>: analysis report, expert report, affidavits<br>5. <b>Presentation</b>: witness statement (and you in court)<br><b>What joins them is the paperwork.</b>"
      ],
      [
        "Choiselat: seizure-stage technicals.",
        "Pre-briefing with roles; each warrant has a defined <b>scope</b> and is <b>time-boxed</b>; evidence evaluated <b>on site</b> and seized only if within the warrant; every item recorded (<b>what, how, when, where, why, who</b>); maps; all work through <b>write blockers</b>."
      ],
      [
        "Choiselat: analysis-stage rules.",
        "Use established tools; <b>question and validate every finding</b>; <b>confirm with more than one tool or method</b>; <b>don't exceed your knowledge</b>. \"The process is the part everybody forgets to write down.\""
      ],
      [
        "Why does the witness statement open with who she is and her qualifications (paragraph 3)?",
        "In Australia expert opinion is admissible only if it rests on <b>specialised knowledge from training, study or experience</b>. Paragraph 3 <b>earns her the right to give an opinion at all</b> (Honeysett in reverse). Note her <b>NSW Commercial and Private Inquiry Agents Licence</b>: investigation work is regulated."
      ],
      [
        "Choiselat statement: which line is hardest to argue with, and why?",
        "The <b>serial number</b>: it's a fact, not a recollection. The <b>hard-drive serial is separate from the laptop serial</b>, and the <b>ASIC barcode</b> links to the agency's records. \"I was <b>instructed</b> to image at 8:32\" shows she wasn't acting on her own initiative (principle 5)."
      ],
      [
        "What does \"contemporaneous\" mean, and why does it matter?",
        "<b>Written at the time.</b> A tidy version written that evening is worth much less, and you'll be asked <b>when you wrote it</b>. (She signed the statement 2 years 8 months later, with times to the minute, from her notes.)"
      ],
      [
        "What is a subpoena, and what did the Choiselat one demand?",
        "A court order to <b>attend to give evidence</b>, produce documents, or both. Hers (County Court of Victoria, 2016) said: <b>turn up in person</b>. Not complying without lawful excuse is <b>contempt of court and may lead to arrest</b>. It's an order, not an invitation."
      ],
      [
        "Ethics vs morals.",
        "<ul><li><b>Ethics:</b> principles governing conduct, written at industry level by a <b>professional body</b>. External, written down, and <b>you can be measured against them</b> (ACS code, IFCSE).</li><li><b>Morals:</b> personal standards of right and wrong (religion, upbringing, culture). Not written down; nobody can audit them.</li></ul>Something can be ethical and still not sit right with you."
      ],
      [
        "Two \"ethical but uncomfortable\" examples, and the rule for each.",
        "<ul><li><b>Defending someone repellent:</b> everyone deserves a defence; you <b>can say no</b>, but if you take it, your view of the accused <b>can't shape the report</b></li><li><b>Unmasking a whistleblower</b> from a company laptop: lawful, but you may decline. If you commit, don't bend the facts.</li></ul>"
      ],
      [
        "Six questions to test an ethical decision.",
        "1. Would I be happy seeing it on the <b>front page</b> (SMH)?<br>2. Is there an <b>ethical non-negotiable</b>?<br>3. Does it affect the <b>greater good</b>?<br>4. What if <b>everyone</b> did it?<br>5. What does it do to <b>my or my employer's reputation</b>?<br>6. Is it consistent with <b>my own moral code</b>?<br>They're prompts, not rules. Journal your reasoning."
      ],
      [
        "IFCSE code of ethics: six lines.",
        "1. <b>Objectivity</b> and accurate findings<br>2. <b>Testify truthfully</b><br>3. Avoid anything that would look like a <b>conflict of interest</b><br>4. Based on <b>well-established, validated principles</b><br>5. <b>No disclosure</b> of confidential information without client permission or a court order<br>6. <b>Don't misrepresent credentials</b> or memberships"
      ],
      [
        "Honesty and competency: key points.",
        "Be honest about your capabilities; only take work you're <b>qualified</b> for. Evidence should be <b>relevant, reliable, sufficient and persuasive</b>. \"Sufficient\": <b>saying too much can hurt you</b>. <b>Report everything you found, including what hurts whoever is paying you.</b> A breach risks accreditation and reputation."
      ],
      [
        "Legal boundaries: what laws or gates limit HOW you get evidence?",
        "The <b>Telecommunications Act</b>, the <b>scope of the warrant</b>, and in NSW an <b>investigator's licence</b> (Commercial and Private Inquiry Agents). Working without it is <b>an offence, not a technicality</b>."
      ],
      [
        "Standard of proof: criminal vs civil. How is it different from admissibility?",
        "<ul><li><b>Criminal:</b> <b>beyond reasonable doubt</b> (liberty at stake). The defence only needs to leave a reasonable doubt.</li><li><b>Civil:</b> <b>balance of probabilities</b>, more likely than not (51%). Most industry work.</li></ul><b>Admissibility</b> = whether the evidence gets in; <b>standard of proof</b> = how high the bar is."
      ],
      [
        "USB-at-1:58am example: same findings, two rooms. What's the lesson?",
        "Registry shows a USB at 1:58 am; an LNK shows the database opened from it 6 minutes later.<ul><li><b>Civil (employment):</b> usually enough</li><li><b>Criminal:</b> the defence says \"5 people share that login\" or \"the PC sits unlocked in an open-plan office\"</li></ul><b>Your work doesn't change with the standard; what changes is how hard each finding gets pushed, and how much you should already have ruled out.</b>"
      ],
      [
        "Objectivity: what can bias you, and how is objectivity defined?",
        "Bias sources: <b>media attention</b>, <b>social-media opinion</b>, information <b>outside scope</b>, <b>lurid but irrelevant</b> material, <b>incomplete evidence</b> (Amero). Stay inside the questions you were asked.<br>Objectivity is <b>a property of how you set up the work</b>: what you'd accept as evidence <b>against</b> your own conclusion, and whether you looked for it."
      ],
      [
        "Conflicts of interest: types, and the key rule.",
        "Types: <b>personal relationships</b>, <b>financial interests</b> (e.g. shares), <b>prior commercial relationships</b>.<br>A conflict doesn't automatically bar you; <b>an undisclosed one does</b>. Disclose it, agree your role in writing, and stay inside it. (A family member's laptop: disclose, or refer it on.)"
      ],
      [
        "Confidentiality: why is it hard, and when does it give way?",
        "You collect <b>far more than needed</b> (whole disks or mailboxes), including commercially sensitive, <b>legally privileged</b> and private material. It stays confidential even though it was in the same image.<br><b>Gives way only for:</b> a <b>court order</b>, the <b>client's permission</b>, or finding evidence of <b>serious harm</b> to someone."
      ],
      [
        "Casey Anthony (2008–2011): what happened with the chloroform searches?",
        "<b>CacheBack</b> reported a chloroform page visited <b>84 times</b>; <b>NetAnalysis</b> said <b>once</b>. The prosecution told the jury 84. During the trial, CacheBack's author <b>John Bradley</b> found the <b>bug</b>, confirmed <b>1</b>, and told the prosecutor and sheriff. <b>The jury never heard it.</b> She was acquitted on unrelated grounds."
      ],
      [
        "Casey Anthony: the three lessons.",
        "1. A tool working <b>as designed</b> can still be wrong, and yours will be one day<br>2. <b>When two tools disagree, the disagreement is the finding.</b> Resolve it before reporting.<br>3. <b>A correction that never reaches the fact-finders corrects nothing.</b>"
      ],
      [
        "Gordon Wood / Caroline Byrne (The Gap, 1995–2012): what went wrong with the expert?",
        "Crown expert <b>A/Prof Rod Cross</b> (a <b>plasma</b> physicist) said she must have been <b>thrown</b>, based on <b>police cadets thrown into a pool in daylight</b>. The appeal court (2012) quashed the conviction: the conditions didn't match (night, cold, slippery rock), and he'd become <b>an investigator trying to prove guilt</b>. He'd written a book about the case: <b>confirmation bias</b>. Wood served about 3 years; his malicious-prosecution claim failed."
      ],
      [
        "Gordon Wood: the three lessons.",
        "1. <b>You don't have to lie to lose independence; you only have to want an answer.</b><br>2. <b>An experiment that doesn't match the conditions tests nothing</b> (digital parallel: live vs at-rest systems)<br>3. <b>Your duty is to the court</b>, not to whoever engaged you."
      ],
      [
        "When should you decline a case? (4 + the dangerous soft version)",
        "<ul><li>Not <b>competent</b> and can't become so in time</li><li>Not <b>independent</b> and disclosure can't fix it</li><li>Instructions are framed so the only honest answer is unwanted</li><li>It would need something <b>unlawful</b></li></ul>Soft version: you're asked to <b>stretch past what the evidence supports after you've been paid</b>. Same answer: no."
      ]
    ]
  },
  "technical": {
    "notes": "<h4>simplified analogy (easier 4 me to understand)</h4>\n<p> a disk is like one giant notebook:</p>\n<ul>\n<li><b>Sectors are the pages.</b> Every page is the same size (usually 512 bytes) and numbered 0, 1, 2, 3… That numbering is called LBA.</li>\n<li><b>Partitions are chapters.</b> The table of contents on page 0 (the MBR) says where each chapter starts and how long it is. Pages that belong to no chapter are unpartitioned space.</li>\n<li><b>A file system is a chapter's own index.</b> It records which files exist, their names and times, and which pages hold them. NTFS and FAT32 are two different styles of index.</li>\n<li><b>Clusters are the minimum booking.</b> The file system hands out pages in bundles (e.g. 8 pages = 4 KB). A tiny file still gets a whole bundle, and the unused end is slack.</li>\n</ul>\n\n<figure>\n<svg viewBox=\"0 0 680 330\" width=\"100%\" role=\"img\" aria-label=\"Disk split into MBR, partitions and a gap; a partition split into clusters; a cluster split into 8 sectors\" style=\"font-family:inherit;font-size:13px\">\n<rect x=\"10\" y=\"10\" width=\"660\" height=\"92\" fill=\"none\" stroke=\"#111\" stroke-dasharray=\"4 4\"/>\n<text x=\"24\" y=\"32\" font-weight=\"600\">Whole disk (sectors numbered from 0)</text>\n<rect x=\"24\" y=\"46\" width=\"70\" height=\"40\" fill=\"#eee\" stroke=\"#111\"/><text x=\"59\" y=\"70\" text-anchor=\"middle\">MBR</text>\n<rect x=\"102\" y=\"46\" width=\"320\" height=\"40\" fill=\"#fff\" stroke=\"#111\"/><text x=\"262\" y=\"70\" text-anchor=\"middle\">Partition 1 · NTFS (C:)</text>\n<rect x=\"430\" y=\"46\" width=\"160\" height=\"40\" fill=\"#fff\" stroke=\"#111\"/><text x=\"510\" y=\"70\" text-anchor=\"middle\">Partition 2 · FAT32</text>\n<rect x=\"598\" y=\"46\" width=\"58\" height=\"40\" fill=\"#fff\" stroke=\"#111\" stroke-dasharray=\"3 3\"/><text x=\"627\" y=\"70\" text-anchor=\"middle\">gap</text>\n<rect x=\"10\" y=\"118\" width=\"660\" height=\"96\" fill=\"none\" stroke=\"#111\" stroke-dasharray=\"4 4\"/>\n<text x=\"24\" y=\"140\" font-weight=\"600\">Inside a partition: clusters (here 4 KB = 8 sectors)</text>\n<rect x=\"24\" y=\"152\" width=\"96\" height=\"36\" fill=\"#fff\" stroke=\"#111\"/><text x=\"72\" y=\"175\" text-anchor=\"middle\">free</text>\n<rect x=\"130\" y=\"152\" width=\"96\" height=\"36\" fill=\"#111\" stroke=\"#111\"/><text x=\"178\" y=\"175\" text-anchor=\"middle\" fill=\"#fff\">file</text>\n<rect x=\"236\" y=\"152\" width=\"40\" height=\"36\" fill=\"#111\" stroke=\"#111\"/>\n<rect x=\"276\" y=\"152\" width=\"56\" height=\"36\" fill=\"#ddd\" stroke=\"#111\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\">slack</text>\n<rect x=\"342\" y=\"152\" width=\"96\" height=\"36\" fill=\"#fff\" stroke=\"#111\"/><text x=\"390\" y=\"175\" text-anchor=\"middle\">old deleted</text>\n<rect x=\"448\" y=\"152\" width=\"96\" height=\"36\" fill=\"#fff\" stroke=\"#111\"/><text x=\"496\" y=\"175\" text-anchor=\"middle\">free</text>\n<rect x=\"554\" y=\"152\" width=\"102\" height=\"36\" fill=\"#fff\" stroke=\"#111\"/><text x=\"605\" y=\"175\" text-anchor=\"middle\">free</text>\n<text x=\"340\" y=\"206\" text-anchor=\"middle\">A 6 KB file books 2 whole clusters (8 KB), leaving 2 KB of slack</text>\n<rect x=\"10\" y=\"230\" width=\"660\" height=\"90\" fill=\"none\" stroke=\"#111\" stroke-dasharray=\"4 4\"/>\n<text x=\"24\" y=\"252\" font-weight=\"600\">Inside one cluster: 8 sectors × 512 bytes</text>\n<g>\n<rect x=\"24\" y=\"264\" width=\"74\" height=\"34\" fill=\"#111\"/><text x=\"61\" y=\"286\" text-anchor=\"middle\" fill=\"#fff\">data</text>\n<rect x=\"102\" y=\"264\" width=\"74\" height=\"34\" fill=\"#111\"/><text x=\"139\" y=\"286\" text-anchor=\"middle\" fill=\"#fff\">data</text>\n<rect x=\"180\" y=\"264\" width=\"74\" height=\"34\" fill=\"#111\"/><text x=\"217\" y=\"286\" text-anchor=\"middle\" fill=\"#fff\">data</text>\n<rect x=\"258\" y=\"264\" width=\"74\" height=\"34\" fill=\"#111\"/><text x=\"295\" y=\"286\" text-anchor=\"middle\" fill=\"#fff\">data</text>\n<rect x=\"336\" y=\"264\" width=\"74\" height=\"34\" fill=\"#ddd\" stroke=\"#111\"/><text x=\"373\" y=\"286\" text-anchor=\"middle\">slack</text>\n<rect x=\"414\" y=\"264\" width=\"74\" height=\"34\" fill=\"#ddd\" stroke=\"#111\"/><text x=\"451\" y=\"286\" text-anchor=\"middle\">slack</text>\n<rect x=\"492\" y=\"264\" width=\"74\" height=\"34\" fill=\"#ddd\" stroke=\"#111\"/><text x=\"529\" y=\"286\" text-anchor=\"middle\">slack</text>\n<rect x=\"570\" y=\"264\" width=\"86\" height=\"34\" fill=\"#ddd\" stroke=\"#111\"/><text x=\"613\" y=\"286\" text-anchor=\"middle\">slack</text>\n</g>\n</svg>\n</figure>\n\n<h4>NTFS vs FAT32: where you'll meet each</h4>\n<table>\n<tr><th></th><th>NTFS</th><th>FAT32</th></tr>\n<tr><td>Where</td><td>Windows computers: the C: drive of a laptop image</td><td>USB sticks, SD cards, cameras. Readable by almost any device.</td></tr>\n<tr><td>Why it's used</td><td>Permissions, journal, very large files</td><td>Simple and compatible (max file size 4 GB)</td></tr>\n<tr><td>Index</td><td>MFT: one 1 KB record per file</td><td>Directory entries + the FAT (a chain of cluster numbers)</td></tr>\n<tr><td>Times</td><td>UTC, very precise, two sets ($SI and $FN)</td><td>Local time, no time zone; modified to 2 seconds; accessed is a date only</td></tr>\n<tr><td>Deleting a file</td><td>Record marked free but still lists where the data is → easy, reliable recovery</td><td>First letter of name becomes 0xE5 and the cluster chain is wiped → only the first cluster and size are known</td></tr>\n<tr><td>Recycle Bin</td><td>Yes, on internal drives ($Recycle.Bin)</td><td>Usually not: deleting from a USB skips the bin</td></tr>\n<tr><td>Hiding spots</td><td>ADS, resident data in MFT records, slack</td><td>Slack, deleted entries, gaps</td></tr>\n</table>\n\n<h4>Disk building blocks</h4>\n<ul>\n<li><b>Sector:</b> the smallest unit a disk reads or writes. 512 bytes on older drives, 4,096 on newer ones.</li>\n<li><b>LBA:</b> sectors are just numbered 0, 1, 2, 3…</li>\n<li><b>HDD:</b> spinning platters. Files tend to stay in one piece, and deleted data sits there until overwritten, so it's easier to recover.</li>\n<li><b>SSD:</b> flash chips. It spreads writes around (wear levelling) and may erase deleted blocks (TRIM), so recovering deleted files is much harder.</li>\n</ul>\n<ul>\n<li><b>MBR</b> (sector 0): boot code plus a table of up to 4 partitions. Each 16-byte entry holds the partition type (07 = NTFS), its start sector and its length. Limit about 2 TB.</li>\n<li><b>GPT:</b> the newer version. Up to 128 partitions and huge disks. Sector 0 holds a \"protective MBR\" (type 0xEE) so old tools don't think the disk is empty.</li>\n</ul>\n<p><b>Two formulas you'll use constantly:</b></p>\n<ul>\n<li><b>Size</b> = number of sectors × 512. A 50,000-sector partition = 25,600,000 bytes (about 24.4 MB).</li>\n<li><b>Sectors per cluster</b> = cluster size ÷ sector size. 4,096 ÷ 512 = 8.</li>\n</ul>\n\n<h4>Where data can hide</h4>\n<ul>\n<li><b>Unpartitioned space:</b> sectors outside every partition. Find gaps by checking each partition's start + length against the next one's start. E.g. P1 starts at sector 2,048 and is 50,000 sectors long, so it ends at 52,047. If P2 starts at 60,000, sectors 52,048–59,999 are a gap: 7,952 sectors × 512 = 4,071,424 bytes (about 3.9 MB).</li>\n<li><b>Deleted partition entries:</b> the data is still there. Scan for the start-of-volume signature (VBR) to find it.</li>\n<li><b>Volume slack:</b> leftover sectors at the end of a partition, too few to make a cluster. A 1,003-sector partition with 8-sector clusters fits 125 clusters (1,000 sectors), leaving 3 sectors: 3 × 512 = 1,536 bytes.</li>\n<li><b>File slack:</b> the unused end of a file's last cluster (see below)</li>\n<li><b>HPA/DCO:</b> hidden areas at the end of a drive that the computer doesn't normally see</li>\n<li><b>Alternate data streams</b> (NTFS)</li>\n<li><b>Unallocated space:</b> free clusters, often still holding deleted files</li>\n</ul>\n\n<h4>File slack worked example</h4>\n<p>A file always gets <b>whole clusters</b>: clusters needed = file size ÷ cluster size, <b>rounded up</b>. Slack = clusters × cluster size − file size.</p>\n<p>A 1,300-byte file in a 4,096-byte cluster (8 sectors of 512 bytes):</p>\n<ul>\n<li>Sectors 1 and 2 are full (1,024 bytes)</li>\n<li>Sector 3 holds the last 276 bytes. The other 236 bytes are <b>RAM slack</b>, and Windows fills them with zeros.</li>\n<li>Sectors 4 to 8 (5 × 512 = 2,560 bytes) are <b>drive slack</b>. They're left untouched and may still hold old data.</li>\n<li>Total slack: 236 + 2,560 = 2,796 bytes (the same as 4,096 − 1,300)</li>\n</ul>\n\n<h4>Types of image</h4>\n<ul>\n<li><b>Physical:</b> the whole disk, every sector. Captures deleted data, gaps and slack. Preferred.</li>\n<li><b>Logical:</b> one partition. Misses unpartitioned space. Common for servers.</li>\n<li><b>Logical evidence file (L01/AD1):</b> only chosen files, in a sealed, hashed container. No slack or deleted data.</li>\n</ul>\n\n<h4>RAID</h4>\n<p>Several disks working as one:</p>\n<ul>\n<li><b>RAID 0:</b> data split across disks. Lose one disk and you lose everything.</li>\n<li><b>RAID 1:</b> mirrored copies</li>\n<li><b>RAID 5:</b> split across disks with parity, so it survives one failed disk</li>\n<li><b>RAID 10:</b> a split across mirrored pairs</li>\n</ul>\n<p>Image every disk and record their order. A physical image needs the total of all the disks: 3 × 4 TB in RAID 0 = 12 TB of storage. You can rebuild the array in software, rebuild it on matching hardware (last resort), or image the running volume live (fast, but no slack).</p>\n<p><b>Cloud:</b> download the virtual disk file (VHD/VMDK) and hash it immediately, because anyone who mounts it can change it.</p>\n\n<h4>NTFS (Windows)</h4>\n<figure>\n<img src=\"https://i.imgur.com/LDDbK7z.png\" referrerpolicy=\"no-referrer\" loading=\"lazy\" alt=\"Layout of an NTFS partition: a header at the start, then blocks of file records (the MFT) with file data stored in between.\">\n<figcaption>How an NTFS partition is laid out: a header at the start, then blocks of file records (the MFT), with file data in between. Diagram from <a href=\"https://handmade.network/wiki/7002-tutorial_parsing_the_mft\" target=\"_blank\" rel=\"noopener\">Parsing the MFT by nakst, Handmade Network</a>.</figcaption>\n</figure>\n\n<p>Every file and folder has a 1,024-byte record in the <b>MFT</b> (Master File Table). Each record holds:</p>\n<ul>\n<li><b>$STANDARD_INFORMATION ($SI):</b> the timestamps Windows shows. Easy to change with tools.</li>\n<li><b>$FILE_NAME ($FN):</b> the name, the parent folder, and a second set of timestamps that only Windows itself updates</li>\n<li><b>$DATA:</b> the content</li>\n</ul>\n<p><b>Resident vs non-resident:</b></p>\n<ul>\n<li>Tiny files (under about 700 bytes) are stored <b>inside</b> the MFT record itself</li>\n<li>Bigger files are stored in clusters, and the record keeps a list of <b>cluster runs</b> (\"start at cluster X, carry on for N clusters\")</li>\n<li>When a file grows out of its record, the old content inside the record isn't wiped, so fragments can survive</li>\n</ul>\n<p><b>$Bitmap</b> is a separate file with one bit per cluster: 1 = in use, 0 = free.</p>\n<p><b>Deleting a file on NTFS:</b></p>\n<ul>\n<li>the MFT record is marked as free</li>\n<li>its clusters are marked free in $Bitmap</li>\n<li><b>nothing is wiped</b></li>\n</ul>\n<p>The record still lists exactly where the data is, so recovery is reliable until something overwrites it.</p>\n<p><b>Reading cluster runs:</b> <code>11 20 40</code>: the header 11 means 1 byte for the length and 1 for the start, so 0x20 clusters starting at cluster 0x40. A next run of <code>21 08 00 02</code> means 0x08 clusters, starting 0x200 after the previous run (the bytes 00 02 are read backwards: 0x0200), so at 0x40 + 0x200 = 0x240. <code>00</code> marks the end.</p>\n<p><b>Alternate Data Streams:</b> a hidden extra stream attached to a file. Explorer doesn't show it.</p>\n<ul>\n<li>create: <code>echo secret &gt; normal.txt:hidden.txt</code></li>\n<li>reveal: <code>dir /r</code></li>\n<li>Windows adds one called Zone.Identifier to downloaded files, which proves a file came from the internet</li>\n</ul>\n\n<h4>FAT32 (USB sticks, SD cards)</h4>\n<p>Three parts: the boot record (sizes and layout), the FAT (two copies), and the directory entries plus data.</p>\n<ul>\n<li>A <b>directory entry</b> stores the name, extension, size, times, and the <b>first</b> cluster only</li>\n<li>The <b>FAT</b> chains the rest: cluster 5 → 6 → 9 → end. 0 = free, 0x?FFFFFFF = end of file.</li>\n<li>Times are stored in <b>local time</b> with no time zone, and only the date is kept for \"last accessed\"</li>\n</ul>\n<p><b>Deleting a file on FAT32:</b></p>\n<ul>\n<li>the first letter of its name is replaced with <b>0xE5</b> (tools show _ILE.TXT)</li>\n<li>its whole cluster chain in the FAT is <b>zeroed</b></li>\n</ul>\n<p>You still know where it started and how big it was, so you assume it was stored in one piece. If it was fragmented, recovery mostly fails. That's why NTFS recovery is easier: it keeps the full cluster runs.</p>\n\n<h4>File signatures and carving</h4>\n<p>The first bytes of a file show what it really is, whatever the name says:</p>\n<ul>\n<li>JPEG <code>FF D8 FF</code> (ends <code>FF D9</code>)</li>\n<li>PNG <code>89 50 4E 47</code></li>\n<li>PDF <code>25 50 44 46</code> (%PDF)</li>\n<li>ZIP, DOCX, XLSX <code>50 4B 03 04</code> (PK)</li>\n<li>Windows programs <code>4D 5A</code> (MZ)</li>\n</ul>\n<p><b>Carving</b> scans free space for these headers (and footers) and cuts out the bytes in between. It works even when the file system has forgotten the file, but struggles with fragmented files and SSDs.</p>\n\n<h4>The Sleuth Kit (TSK) commands</h4>\n<ul>\n<li><code>img_stat</code>: info about the image</li>\n<li><code>mmls</code>: the partition table and each partition's start sector</li>\n<li><code>fsstat -o &lt;start&gt;</code>: file system details (cluster size, where the MFT is)</li>\n<li><code>fls -o &lt;start&gt;</code>: list files, including deleted ones (<code>-r</code> = recursive, <code>-d</code> = deleted only)</li>\n<li><code>istat -o &lt;start&gt; image &lt;record&gt;</code>: one file's MFT record, with $SI and $FN times and cluster runs</li>\n<li><code>icat -o &lt;start&gt; image &lt;record&gt;</code>: output the file's contents</li>\n</ul>\n<p>The <code>-o</code> value is the partition's start sector from <code>mmls</code>. Autopsy is the point-and-click version of TSK.</p>\n\n<h4>Other file systems</h4>\n<ul>\n<li><b>Linux (ext2/3/4):</b> well documented</li>\n<li><b>Mac (HFS+, APFS):</b> less documented, so tool support is weaker</li>\n</ul>\n<p>Either way, deleted-file recovery often comes down to carving.</p>\n\n<h4>Applying it in Autopsy</h4>\n<p>Autopsy is the point-and-click version of The Sleuth Kit. The typical flow:</p>\n<ul>\n<li><b>Set the time zone first</b> (Tools → Options → View). Otherwise every time is shown in your own computer's zone.</li>\n<li><b>Add the data source:</b> the disk image (.E01 or .dd). Autopsy checks the image's stored hash if there is one.</li>\n<li><b>Pick ingest modules</b> (the automatic analysers): Hash Lookup, File Type Identification, Extension Mismatch Detector, Recent Activity, EXIF Parser, Embedded File Extractor, Keyword Search, PhotoRec Carver, Encryption Detection.</li>\n<li><b>Browse the tree:</b> Data Sources → the image → one entry per volume.</li>\n</ul>\n\n<h4>Reading the volume list</h4>\n<p>Under the image, Autopsy lists each volume with its start and length, e.g.:</p>\n<ul>\n<li><code>vol1 (Unallocated: 0-2047)</code>: the MBR and the normal 1 MB gap before the first partition</li>\n<li><code>vol2 (NTFS / exFAT (0x07): 2048-…)</code>: the main partition</li>\n<li>an <b>Unallocated</b> volume <i>between</i> or <i>after</i> partitions = <b>unpartitioned space</b>. A small one is normal; a large one is worth carving and keyword-searching.</li>\n</ul>\n\n<h4>Special folders Autopsy shows (not visible in Windows Explorer)</h4>\n<ul>\n<li><b>$MFT, $Bitmap, $LogFile, $Extend/$UsnJrnl:</b> NTFS's own system files</li>\n<li><b>$OrphanFiles:</b> deleted files whose parent folder no longer exists, so their path is lost</li>\n<li><b>$Unalloc:</b> all the free space, grouped into chunks you can search or carve</li>\n<li><b>$CarvedFiles:</b> files recovered by signature from free space (names like <code>f0012345.jpg</code>, made up from where they were found)</li>\n<li><b>name-slack:</b> Autopsy shows each file's slack as its own item, e.g. <code>report.docx-slack</code></li>\n<li><b>$Recycle.Bin:</b> deleted-to-bin files, as $I (original path, size, deletion time) and $R (the content) pairs, in a folder named after the user's SID</li>\n</ul>\n\n<h4>Useful columns in the file list</h4>\n<ul>\n<li><b>Modified / Change / Access / Created:</b> the MACB times (Change = the record changed, e.g. renamed)</li>\n<li><b>Flags (Meta):</b> \"Allocated\" = live file; \"Unallocated\" = deleted</li>\n<li><b>Size, MD5, MIME type, Extension</b></li>\n<li>A red ✕ on the icon = deleted</li>\n</ul>\n<p>Views → File Types sorts everything by real type (from signatures), and Views → Deleted Files lists every deleted file in one place.</p>\n\n<h4>If you see this, it means…</h4>\n<table>\n<tr><th>You see</th><th>It means</th><th>What to do next</th></tr>\n<tr><td>A FAT name starting with <code>_</code> or <code>?</code>, e.g. <code>_ECRET.TXT</code></td><td>Deleted FAT32 file; the first letter was overwritten with 0xE5</td><td>Work out the letter from context; recover from the start cluster + size, assuming one piece</td></tr>\n<tr><td>A deleted FAT file that opens as garbage or is cut off</td><td>It was fragmented (the chain is wiped) or its clusters were reused</td><td>Carve the free space for its signature instead</td></tr>\n<tr><td>A deleted NTFS file that opens perfectly</td><td>The MFT record still had its cluster runs and the clusters weren't overwritten</td><td>Extract it, hash it, note it was deleted</td></tr>\n<tr><td>File in $OrphanFiles</td><td>Deleted, and its parent folder's record is gone</td><td>Use its MFT record number and times; the path may show up in LNK files or ShellBags</td></tr>\n<tr><td><code>f0012345.jpg</code> in $CarvedFiles</td><td>Found by signature in free space: no original name, times or path</td><td>Use EXIF and content; check whether it matches a known file's hash</td></tr>\n<tr><td>Extension Mismatch hit (e.g. a .dll that's a JPEG)</td><td>Renamed, possibly to hide it</td><td>Check the hex header; open it as its real type</td></tr>\n<tr><td>Hash Set hit marked \"Notable\"</td><td>Matches a known-bad hash list</td><td>Same file even if renamed or moved; note the hash set used</td></tr>\n<tr><td><code>file.txt:Zone.Identifier</code></td><td>An ADS Windows adds to downloads</td><td>Read it: ZoneId=3 means internet, and it may include the download URL</td></tr>\n<tr><td>Text in a <code>-slack</code> item</td><td>Leftovers of an older file in drive slack</td><td>Keyword-search it; it has no times of its own</td></tr>\n<tr><td>Created time later than Modified time (NTFS)</td><td>The file was copied: a copy keeps Modified but gets a new Created</td><td>Look for the source (USB, download, email)</td></tr>\n<tr><td>$SI times earlier than $FN, or ending .0000000</td><td>Timestamps faked (timestomping) or extracted from an archive</td><td>Trust $FN more; look for the archive or tool</td></tr>\n<tr><td>FAT Accessed time showing 00:00:00</td><td>FAT only stores the access date</td><td>Don't claim an access time</td></tr>\n<tr><td>FAT times that look hours off</td><td>FAT stores local time with no zone</td><td>Find which zone the writing computer used</td></tr>\n<tr><td>A large Unallocated volume between partitions</td><td>Unpartitioned space, possibly a deleted or hidden partition</td><td>Scan for a VBR signature; carve; keyword-search</td></tr>\n<tr><td>Partition says it's bigger than the image</td><td>Fake-capacity USB, or a damaged or edited partition table</td><td>Compare claimed size vs real size (sectors × 512)</td></tr>\n<tr><td>Encryption Detection hit (high entropy, no signature)</td><td>Possibly an encrypted container</td><td>Note it; look for the encryption program and passwords</td></tr>\n</table>\n\n<h4>Common questions and where to look</h4>\n<ul>\n<li><b>\"What was deleted?\"</b> Views → Deleted Files, $OrphanFiles, $Recycle.Bin, FAT names starting with _</li>\n<li><b>\"Can you recover it?\"</b> Right-click → Extract File, then check it opens and hash it. If not, carve.</li>\n<li><b>\"What is this file really?\"</b> the MIME type column, or the Hex tab: the first bytes are the signature</li>\n<li><b>\"Is anything hidden?\"</b> volume gaps, slack, ADS, extension mismatches, encryption hits, carved files</li>\n<li><b>\"When did it happen?\"</b> the MACB columns, or Tools → Timeline. Check the time zone first.</li>\n<li><b>\"Was this file on that USB?\"</b> the USB volume's serial number, matched against LNK files on the computer</li>\n<li><b>\"How big is X?\"</b> sectors × 512, or the Size column</li>\n</ul>\n\n<h4>The same jobs from the command line (TSK)</h4>\n<ul>\n<li>Partitions and gaps: <code>mmls image.E01</code></li>\n<li>File system details (cluster size, volume serial): <code>fsstat -o &lt;start&gt; image.E01</code></li>\n<li>Deleted files: <code>fls -r -d -o &lt;start&gt; image.E01</code></li>\n<li>One file's record and times: <code>istat -o &lt;start&gt; image.E01 &lt;record&gt;</code></li>\n<li>Extract a file: <code>icat -o &lt;start&gt; image.E01 &lt;record&gt; &gt; out</code></li>\n<li>Free space only: <code>blkls -o &lt;start&gt; image.E01 &gt; unalloc.bin</code>, then carve or <code>strings</code> it</li>\n</ul>",
    "cards": [
      [
        "Disk as a notebook: what are sectors, partitions, the file system and clusters?",
        "<b>Sectors</b> = numbered pages (512 B). <b>Partitions</b> = chapters (start + length in the MBR). <b>File system</b> = a chapter's index (NTFS or FAT32). <b>Clusters</b> = the minimum booking of pages handed to a file."
      ],
      [
        "Where would you typically meet NTFS vs FAT32 in an investigation?",
        "<b>NTFS:</b> a Windows laptop's C: drive. <b>FAT32:</b> USB sticks, SD cards, cameras (compatible everywhere, 4 GB file limit)."
      ],
      [
        "A 10,000-byte file on a disk with 4 KB clusters: how many clusters, and how much slack?",
        "10,000 ÷ 4,096 = 2.44 → <b>3 clusters</b> = 12,288 bytes booked. Slack = 12,288 − 10,000 = <b>2,288 bytes</b>."
      ],
      [
        "In Autopsy, what does a volume listed as \"Unallocated\" between two partitions mean?",
        "<b>Unpartitioned space</b>: sectors outside any partition. Small gaps are normal; a large one could be a deleted or hidden partition, so carve and keyword-search it."
      ],
      [
        "What's in Autopsy's $OrphanFiles, $Unalloc and $CarvedFiles?",
        "<b>$OrphanFiles:</b> deleted files whose parent folder is gone. <b>$Unalloc:</b> the free space. <b>$CarvedFiles:</b> files recovered by signature, with no original name or times."
      ],
      [
        "You see _ECRET.TXT on a USB image. What happened, and how do you recover it?",
        "A <b>deleted FAT32 file</b>: the first letter became 0xE5. The entry still has the <b>start cluster and size</b>, so assume it's in one piece and read that many clusters. If it's garbage, carve instead."
      ],
      [
        "Why do deleted NTFS files usually recover better than deleted FAT32 files?",
        "NTFS keeps the full <b>cluster runs</b> in the deleted MFT record. FAT32 <b>wipes the cluster chain</b>, so only the first cluster is known and fragmented files are lost."
      ],
      [
        "A file's Created time is later than its Modified time. What does it suggest?",
        "It was <b>copied</b>: a copy keeps the original Modified time but gets a new Created time."
      ],
      [
        "A FAT file shows Accessed 00:00:00. Can you say when it was opened?",
        "<b>No.</b> FAT stores only the access <b>date</b>. Also remember FAT times are local time with no time zone."
      ],
      [
        "What does a file.txt:Zone.Identifier item tell you?",
        "It's an <b>ADS</b> Windows adds to downloads. ZoneId=3 means it came from the internet, and it may record the download URL."
      ],
      [
        "Where does Autopsy show a file's slack, and what's in it?",
        "As a separate <b>name-slack</b> item. It can hold leftovers of older files (drive slack) and has no timestamps of its own."
      ],
      [
        "What should you set in Autopsy before reading any times?",
        "The <b>time zone</b> (Tools → Options → View). Otherwise times show in your own computer's zone."
      ],
      [
        "How do you prove a file was opened from a particular USB without the USB?",
        "Match the USB volume's <b>serial number</b> (from fsstat or the registry) with the volume serial stored in <b>LNK files</b> on the computer."
      ],
      [
        "Platter drive structure: sector sizes and addressing.",
        "Platters → tracks → <b>sectors</b>, the smallest addressable unit: <b>512 B</b> (old) or <b>4096 B</b> (new). Addressed sequentially by <b>LBA</b> (Logical Block Addressing); CHS is obsolete. Contiguous files read faster and are <b>easier to carve</b>."
      ],
      [
        "SSDs: why is carving hard?",
        "NAND flash; <b>wear levelling</b> spreads writes almost randomly so cells don't wear out. Files end up scattered, so <b>carving anything but small files is very hard</b>. (TRIM may also erase deleted data.)"
      ],
      [
        "Logical structure from top to bottom.",
        "<b>MBR/GPT</b> (the directory) → <b>partitions/volumes</b> (a volume can be empty) → <b>file system</b> → <b>clusters</b> (groups of sectors; files get whole clusters) → <b>unpartitioned space</b> (sectors in no partition)."
      ],
      [
        "MBR: where is it, what's in it, and what are its limits?",
        "<b>LBA 0</b>. Bootstrap code + a <b>64-byte partition table (4 × 16 B)</b>. Limits: <b>4 primary partitions</b>, about <b>2 TB</b> (32-bit LBA × 512 B)."
      ],
      [
        "MBR partition entry layout (16 bytes). Which fields matter?",
        "Active flag (1, e.g. 80h) · start CHS (3) · <b>type</b> (1, 07h = NTFS) · end CHS (3) · <b>start LBA (4)</b> · <b>number of sectors (4)</b>. Start + count matter: gaps between partitions might hide data."
      ],
      [
        "GPT basics.",
        "GUID Partition Table: <b>protective MBR at LBA 0 (type 0xEE)</b> so old tools don't wipe it; up to <b>128 partitions</b>, about <b>18 EB</b>; the table occupies at least LBA 2–34."
      ],
      [
        "A partition-table entry is zeroed. What happens to the data, and how do you find it?",
        "The data <b>still exists</b>; the OS just sees unpartitioned space. <b>Restore the table</b>, or <b>scan for VBR signatures</b> and read the clusters directly. An encrypted hidden partition still leaves a <b>suspicious gap</b>."
      ],
      [
        "Unpartitioned-space calculation: P1 starts at 2,048 for 50,000 sectors; P2 starts at 60,000 for 900,000 sectors.",
        "P1 ends at 2,048 + 50,000 − 1 = 52,047. P2 starts at 60,000, so there's a <b>gap from LBA 52,048 to 59,999</b>: 7,952 sectors × 512 = <b>4,071,424 bytes (about 3.9 MB)</b>. Method: <b>start + length vs next start</b>, and <b>sum of partitions (+ MBR/GPT) vs total sectors</b>."
      ],
      [
        "Volume slack: definition and worked example.",
        "Leftover sectors at the end of a partition, <b>too few for a whole cluster</b>. A 1,003-sector partition with 8 sectors per cluster = 125 clusters (1,000 sectors), <b>3 sectors left</b> × 512 = <b>1,536 bytes</b>. Formula: (partition sectors mod sectors-per-cluster) × sector size."
      ],
      [
        "Data-hiding places covered so far.",
        "<b>Unpartitioned space</b>, deleted or hidden partitions, <b>volume slack</b>, <b>file slack</b>, <b>HPA/DCO</b>, <b>ADS</b>, NTFS resident remnants."
      ],
      [
        "Physical vs logical vs LEF images.",
        "<ul><li><b>Physical:</b> whole device (<code>\\\\.\\PhysicalDrive1</code>, /dev/sda), all areas. <b>Preferred.</b> E01.</li><li><b>Logical:</b> one partition (C:), some slack, <b>no unpartitioned space</b>. Common for servers. E01.</li><li><b>LEF:</b> selected files/folders, <b>no slack</b>; formats <b>L01/AD1</b>.</li></ul>"
      ],
      [
        "RAID levels.",
        "<b>RAID 0</b> striping (one disk dies = all lost); <b>RAID 1</b> mirroring; <b>RAID 5</b> striping + parity (survives 1 failure); <b>RAID 10</b> a stripe of mirrors."
      ],
      [
        "RAID forensic challenges, and the storage needed.",
        "Image <b>all</b> disks, <b>record their order</b>; controller logic can be vendor-specific. Storage for a physical image = all the disks added up: 3 × 4 TB RAID 0 = <b>12 TB</b>; 4 × 3 TB RAID 5 = <b>12 TB</b>; 6 × 2 TB RAID 10 = <b>12 TB</b> physical (6 TB usable)."
      ],
      [
        "Three RAID acquisition options.",
        "<ul><li><b>Logical reconstruction:</b> image every disk, rebuild in software (depends on support)</li><li><b>Physical reconstruction:</b> restore images to drives on a matching controller (most time-consuming, <b>last resort</b>)</li><li><b>Live logical/LEF:</b> image the running volume (fastest; <b>no slack</b>; needs great care with integrity)</li></ul>"
      ],
      [
        "Cloud disks: options and the integrity concern.",
        "A: <b>download the VHD/VMDK</b> from the console; B: <b>live acquisition</b> (last resort, bandwidth). A downloaded VHD can be modified by anyone who mounts it, so <b>hash it immediately</b>, wrap it in an LEF or image, journal it, keep two copies. Consider <b>data sovereignty</b>."
      ],
      [
        "Cluster size trade-off.",
        "Bigger clusters: <b>less fragmentation</b> and fewer clusters to track, but <b>more slack (wasted space)</b> per small file."
      ],
      [
        "NTFS basics: everything is a file. What's in the VBR?",
        "Since Windows NT 3.1; features include sparse files, quotas, reparse points, EFS. The VBR holds a jump instruction, OEM ID \"NTFS\", geometry, the <b>$MFT cluster</b> and the <b>$MFTMirr</b> cluster."
      ],
      [
        "$MFT vs $Bitmap.",
        "<b>$MFT:</b> one <b>1,024-byte FILE record</b> (\"FILE0\") per file or folder, with metadata and data location. <b>$Bitmap:</b> <b>one bit per cluster</b> (used/free); unlike the FAT it <b>doesn't track the next cluster</b>. The MFT has its own entry bitmap."
      ],
      [
        "Key MFT attributes.",
        "<b>$STANDARD_INFORMATION</b> (MACB, user-changeable), <b>$FILE_NAME</b> (name, parent, its own MACB; can be two, 8.3 and long), <b>$DATA</b> (content or cluster runs; more than one = <b>ADS</b>)."
      ],
      [
        "Resident vs non-resident data; resident remnants.",
        "<b>Resident:</b> small content (under about 700 B) inside the MFT record. <b>Non-resident:</b> the record stores <b>cluster runs</b>. When a file grows out of the record, the old resident data <b>isn't zeroed</b>, and attributes never become resident again, so <b>remnants survive</b>."
      ],
      [
        "Decode these cluster runs: 11 20 40 | 21 08 00 02 | 00",
        "Run 1: header 0x11 → 1-byte length 0x20, 1-byte offset 0x40 → <b>0x20 clusters from 0x40</b>. Run 2: header 0x21 → length 0x08, 2-byte offset 0x0200 (little-endian 00 02) <b>relative to 0x40 = 0x240</b> → <b>0x08 clusters from 0x240</b>. 0x00 = end. (Low nibble = number of length bytes, high nibble = number of offset bytes.)"
      ],
      [
        "ADS: create, open and reveal.",
        "<code>echo secret &gt; normal.txt:secret.txt</code>; <code>notepad normal.txt:secret.txt</code>; reveal with <code>dir /r</code>. Hidden from Explorer. Windows adds <b>Zone.Identifier</b> to downloaded files."
      ],
      [
        "What happens when NTFS deletes a file?",
        "1. The MFT record is <b>marked available</b><br>2. Its clusters are <b>freed in $Bitmap</b><br>3. <b>Nothing is wiped</b><br>The record still holds the full cluster runs (start <b>and</b> length), so recovery is reliable until it's overwritten. Tools compare runs with the $Bitmap to detect overwriting."
      ],
      [
        "File slack vs RAM slack. Which does Windows zero?",
        "Files get whole clusters and are written in whole sectors. <b>RAM slack</b> = the unused end of the last written sector: <b>Windows zeros it</b>. <b>Drive slack</b> = the remaining unused sectors of the cluster: <b>untouched</b>, so it may hold old data."
      ],
      [
        "Slack example: a 1,300-byte file in a 4,096-byte cluster (512-byte sectors).",
        "Sectors 1–2 are full (1,024 B). Sector 3 holds 276 B, so <b>RAM slack = 236 B</b> (zeroed). Sectors 4–8 = <b>2,560 B drive slack</b> (old data possible). Total slack 2,796 B = 4,096 − 1,300."
      ],
      [
        "Unallocated space and file carving.",
        "Unallocated = clusters assigned to no file (often old data). <b>Carving</b> scans it for <b>headers (and footers)</b> such as JPEG FF D8 FF … FF D9 and cuts out the bytes in between. Works without metadata; the course tool is <b>Scalpel</b>."
      ],
      [
        "TSK naming: img_, mm, fs, i, f, blk.",
        "<b>img_</b> = image; <b>mm</b> = partitions (media management); <b>fs</b> = file system; <b>i</b> = inode/MFT entry; <b>f</b> = file names; <b>blk</b> = data blocks. <code>-o</code> = partition offset in sectors. Autopsy is a GUI over TSK."
      ],
      [
        "What does each do: img_stat, mmls, fsstat, istat, icat?",
        "<b>img_stat:</b> image info (type, size, hash). <b>mmls:</b> partition table plus <b>start offsets</b>. <b>fsstat -o:</b> file-system details (MFT cluster, cluster size). <b>istat:</b> one MFT entry with <b>$SI and $FN times and runs</b>. <b>icat:</b> dump file content by inode."
      ],
      [
        "FAT32: three components.",
        "1. <b>Boot record/VBR</b> with the <b>BPB</b> (bytes per sector, sectors per cluster, number of FATs, root dir usually <b>cluster 2</b>, label, \"FAT32\")<br>2. <b>FAT</b> (two copies)<br>3. <b>Directory entries</b> + data area"
      ],
      [
        "FAT32 directory entry fields.",
        "Name, extension, attributes, create time/date, <b>last access date</b>, <b>first cluster</b> (high and low halves), modified time/date, <b>file size</b>. Little-endian. Only the <b>first</b> cluster is stored."
      ],
      [
        "FAT entry values, and following a chain.",
        "<b>0x?0000000 = free</b>; 0x?0000002–0x?FFFFFEF = next cluster; <b>0x?FFFFFFF = EOF</b>. E.g. start 5: FAT[5]=6, FAT[6]=9, FAT[9]=EOF → clusters 5 → 6 → 9."
      ],
      [
        "What happens when FAT32 deletes a file?",
        "1. First filename character becomes <b>0xE5</b> (shown _ILE.TXT)<br>2. Its FAT chain is <b>zeroed</b><br>The entry keeps the <b>start cluster and size</b>, so assume contiguity. <b>Fragmented files are almost impossible to recover.</b> NTFS is easier (keeps full runs)."
      ],
      [
        "Linux and Mac file systems.",
        "Linux <b>ext2/3/4</b> (open, well documented); Mac <b>HFS/HFS+/APFS</b> (proprietary, reverse-engineered; APFS support still improving). Deleted data is harder to recover, so <b>carving</b> is often the go-to."
      ]
    ]
  }
};