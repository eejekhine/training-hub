MH.reg({
"id": "live",
"place": [
{
"q": "On a mixing desk, what does the gain (trim) knob set?",
"o": [
"The fader volume",
"The level of the signal coming into the channel",
"The speaker volume",
"The amount of reverb"
],
"a": 1,
"w": "Gain sets the input level at the preamp. Set it first, then use the fader."
},
{
"q": "What causes feedback?",
"o": [
"A faulty cable",
"A microphone picking up the sound from a speaker, which loops and builds",
"Too much reverb",
"A bad guitar"
],
"a": 1,
"w": "The loop between speaker and mic builds up at one frequency until it howls."
},
{
"q": "What does a high-pass filter do?",
"o": [
"Removes high frequencies",
"Removes low frequencies below a chosen point",
"Boosts the bass",
"Adds reverb"
],
"a": 1,
"w": "It cuts rumble and stage noise from channels that have no real low end."
},
{
"q": "What is the purpose of a sound check?",
"o": [
"To record the band",
"To test and set every channel and monitor before people arrive",
"To mix the final song",
"To clean the equipment"
],
"a": 1,
"w": "You set gain and levels while the band plays as they will in the service."
},
{
"q": "Have you mixed live sound (a service or band) as the sound operator?",
"o": [
"Never",
"A few times",
"Regularly"
],
"pts": [
0,
0.5,
1
]
},
{
"q": "Have you set up monitor mixes and rung out a stage monitor?",
"o": [
"Never",
"Once",
"Yes"
],
"pts": [
0,
0.5,
1
]
}
],
"levels": [
{
"id": "f",
"name": "Foundations",
"who": "Never mixed live",
"lessons": [
{
"id": "l1",
"title": "The signal chain",
"mins": 35,
"parts": {
"what": {
"p": "<p>Every sound in a live system follows the same path: microphone, cable, mixer input (preamp), EQ, fader, main mix, amplifier, speakers. If you can name each stop, you can find any fault.</p>",
"d": "<p>Mic or DI box, stage box or cable, preamp (gain), high-pass and EQ, compressor, fader, group or main bus, system processor, power amplifier, loudspeaker. Monitors take a separate path from auxiliary sends.</p>"
},
"why": {
"p": "<p>Live sound faults happen with everyone watching. Knowing the chain lets you check it from the source to the speaker and fix the problem quickly instead of guessing.</p>",
"d": "<p>The usual fault finding order is: is the source making sound, is the cable good, is the mute on, is the gain up, is the fader up, is the main output on, is the amp on. Check one stage at a time.</p>"
},
"how": {
"p": "<p>Pick one channel in your church system. Trace it from the mic to the speaker and write every stop. If you have access to the desk, find the gain, EQ, fader and routing for that channel.</p>",
"d": "<p>Draw the chain for the vocal mic and the keyboard DI. Mark where each would be muted, level-adjusted and EQ'd. Note any stop you could not find.</p>"
},
"ex": {
"p": "<p>Draw the signal chain of your church system for two sources.</p>",
"d": "<p>Ask someone who knows the system to check your drawing.</p>"
}
},
"check": {
"ticks": [
"I traced a channel from mic to speaker",
"I named each stage",
"I drew the chain for two sources"
]
},
"res": [
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
}
]
},
{
"id": "l2",
"title": "Gain structure and sound check",
"mins": 35,
"parts": {
"what": {
"p": "<p>Gain is how loud the signal is when it first enters the desk. Set it right before you touch the fader so the signal is clean and has room to spare.</p>",
"d": "<p>Set gain with the performer playing or singing at their loudest, so the peaks sit well below the clip light and the meter is healthy, then set the fader near its normal working position. Different engineers use slightly different methods; what matters is a clean signal.</p>"
},
"why": {
"p": "<p>If the gain is too low you hear noise when you turn up the fader. If it is too high, the channel clips and distorts. Good gain structure is what makes everything else easier.</p>",
"d": "<p>Digital desks show levels in dBFS; aim for peaks around -12 to -6 dBFS on the channel meter. Analogue desks aim for around 0 VU on the average with peaks not lighting the clip LED.</p>"
},
"how": {
"p": "<p>At the next sound check, set the gain on each channel while the performer plays or sings at performance level. Write down the gain value for each channel.</p>",
"d": "<p>Ask the performer to play the loudest part. Adjust gain until the meter peaks in the safe area. Then set fader positions for a rough balance. Save the settings if the desk allows.</p>"
},
"ex": {
"p": "<p>Complete a sound check where every channel's gain is set by you.</p>",
"d": "<p>Note the three channels that needed the biggest change.</p>"
}
},
"check": {
"ticks": [
"I set the gain on every channel with the performer playing",
"Peaks were well below clipping",
"I wrote down the settings"
]
},
"res": [
{
"id": "sgg",
"title": "Gain without the pain (SoundGirls)",
"url": "https://soundgirls.org/gain-without-the-pain/",
"what": "Live gain structure: gain first, then fader.",
"type": "Article"
},
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
}
]
},
{
"id": "l3",
"title": "Feedback and ringing out",
"mins": 35,
"parts": {
"what": {
"p": "<p>Feedback is the howl when a microphone hears its own speaker. It builds at one pitch until it is painfully loud. The fix is placement first, then a small EQ cut.</p>",
"d": "<p>Feedback happens when the loop gain from mic to speaker and back exceeds 1 at some frequency. Reduce it by moving mics away from speakers, using directional mics pointed at the performer, lowering gain, and cutting the ringing frequency narrowly.</p>"
},
"why": {
"p": "<p>A feedback squeal in the middle of a prayer is the fastest way to lose trust. Preventing it is part of your job.</p>",
"d": "<p>Ringing out: with the band off, raise the channel or monitor level until it starts to ring, identify the frequency, cut it with a narrow EQ band by 3 to 6 dB, then continue until you gain a few dB. Do not cut more than four or five frequencies.</p>"
},
"how": {
"p": "<p>With permission, ring out one stage monitor. Raise its level slowly until the first ring starts, find the frequency and cut it. Repeat for the next ring. Stop after three.</p>",
"d": "<p>Use a graphic or parametric EQ on the monitor output. Note each frequency and the cut. Test with a vocal mic at performance level.</p>"
},
"ex": {
"p": "<p>Ring out one monitor or main and write down the frequencies you cut.</p>",
"d": "<p>Check the vocal is still clear.</p>"
}
},
"check": {
"ticks": [
"I found the first feedback frequency",
"I cut it narrowly",
"The monitor now has more level before feedback"
]
},
"res": [
{
"id": "sfb",
"title": "How to control feedback in a sound system (Shure)",
"url": "https://www.shure.com/en-us/insights/how-to-control-feedback-in-a-sound-system/",
"what": "Why feedback happens and how to stop it.",
"type": "Article"
}
]
},
{
"id": "l4",
"title": "A basic front-of-house mix",
"mins": 45,
"parts": {
"what": {
"p": "<p>Front of house is the sound the congregation hears. Your first priority is that they can understand the words. Everything else supports that.</p>",
"d": "<p>Start with the lead vocal, then add the rhythm section (drums, bass), then chords (keys, guitars). High-pass every channel except kick and bass guitar. Leave headroom. Listen from several places in the room.</p>"
},
"why": {
"p": "<p>The mix you hear at the desk is not what the room hears. Walking the room is the only way to know.</p>",
"d": "<p>Compare against a familiar recording played through the system. Use the vocal as the anchor: if you cannot hear the words, nothing else matters.</p>"
},
"how": {
"p": "<p>During a run-through, build a mix: vocal first, then bass and kick, then the rest. High-pass the vocal at about 100 Hz and guitars at 80 to 100 Hz. Walk to the back and the sides of the room and note what changes.</p>",
"d": "<p>Use the high-pass filters on the desk. Take notes from three places in the room. Adjust one thing at a time.</p>"
},
"ex": {
"p": "<p>Mix a full run-through, walk the room and write three changes you would make.</p>",
"d": "<p>Apply the changes the next time.</p>"
}
},
"check": {
"ticks": [
"The lead vocal is clear",
"I used high-pass filters on non-bass channels",
"I walked the room and noted changes"
]
},
"res": [
{
"id": "shc",
"title": "Professional mixing tips for church sound (Shure)",
"url": "https://www.shure.com/en-us/insights/professional-mixing-tips-for-church-sound",
"what": "A church engineer on soloing, frequency ranges and practising with recordings. Has Shure product links.",
"type": "Article"
},
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
}
]
}
],
"gate": {
"title": "Foundations gate",
"text": "Mix a short run-through with a clear lead vocal and no feedback.",
"checks": [
"No feedback during the run-through",
"The vocal is clear from the back of the room",
"I set gain on every channel"
]
}
},
{
"id": "w",
"name": "Working",
"who": "Mixed a few times",
"lessons": [
{
"id": "lw1",
"title": "Monitor mixes",
"mins": 40,
"parts": {
"what": {
"p": "<p>Monitors let musicians hear themselves on stage. Each person usually needs a slightly different mix.</p>",
"d": "<p>Monitor mixes come from auxiliary sends on the desk. Each aux feeds one monitor wedge or in-ear mix. Pre-fader sends keep the monitor mix independent of the main faders.</p>"
},
"why": {
"p": "<p>Musicians who cannot hear themselves play worse and play louder, which pushes stage volume up and makes the front-of-house mix harder.</p>",
"d": "<p>Ask each musician what they need: 'more me' is the most common request. Give them their own source first, then the click or the vocal. Keep monitors as quiet as they can accept.</p>"
},
"how": {
"p": "<p>Set up a monitor mix for the vocalist. Send the vocal, keys and guitar a little, and ask what they want more of. Change one thing at a time.</p>",
"d": "<p>Use pre-fader aux sends. Ring out the monitor first. Ask questions, listen, adjust, repeat.</p>"
},
"ex": {
"p": "<p>Set up two different monitor mixes in a rehearsal.</p>",
"d": "<p>Ask each musician if they could hear everything they need.</p>"
}
},
"check": {
"ticks": [
"I made a monitor mix for a musician",
"I asked what they needed and adjusted one thing at a time",
"The monitor did not feed back"
]
},
"res": [
{
"id": "sfb",
"title": "How to control feedback in a sound system (Shure)",
"url": "https://www.shure.com/en-us/insights/how-to-control-feedback-in-a-sound-system/",
"what": "Why feedback happens and how to stop it.",
"type": "Article"
},
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
}
]
},
{
"id": "lw2",
"title": "Groups and effects",
"mins": 40,
"parts": {
"what": {
"p": "<p>Groups put several channels on one fader. Effects like reverb are shared by all the channels that use them.</p>",
"d": "<p>Route drums to a drum group, backing vocals to a vocal group. Use a reverb on an aux send, with a high-pass and low-pass on the return.</p>"
},
"why": {
"p": "<p>With groups you can control a whole section with one fader, which matters when things change quickly in a service.</p>",
"d": "<p>Keep reverb subtle in a church because the room already adds reverb. Use a short plate or room.</p>"
},
"how": {
"p": "<p>Group the drums and backing vocals. Add a small reverb to the lead vocal on an aux send and listen from the back.</p>",
"d": "<p>Set the reverb return level so it adds depth without hurting clarity in the room.</p>"
},
"ex": {
"p": "<p>Mix a run-through using groups and one reverb.</p>",
"d": "<p>Note any problems with clarity.</p>"
}
},
"check": {
"ticks": [
"I used groups for drums and backing vocals",
"I added a small reverb without losing clarity",
"I listened from the back"
]
},
"res": [
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
}
]
},
{
"id": "lw3",
"title": "Controlling stage volume",
"mins": 35,
"parts": {
"what": {
"p": "<p>If the stage is loud, the front-of-house mix is hard. Controlling the stage makes your job easier.</p>",
"d": "<p>Ways to reduce stage volume: turn guitar amps toward the players and off the floor, use in-ear monitors, use shields on drums, and keep monitor volume low.</p>"
},
"why": {
"p": "<p>Loud stages leak into the vocal mics and fight your mix.</p>",
"d": "<p>Talk to the band before the service. Agree levels at the sound check.</p>"
},
"how": {
"p": "<p>At the next rehearsal, ask the band to play with stage volume lower. Notice how the mix changes.</p>",
"d": "<p>Compare the room sound with the amps loud and with them lowered.</p>"
},
"ex": {
"p": "<p>Reduce stage volume with the band's agreement and write what improved.</p>",
"d": "<p>Report the result to the band.</p>"
}
},
"check": {
"ticks": [
"I discussed stage volume with the band",
"I compared loud and quiet stage levels",
"The mix improved"
]
},
"res": [
{
"id": "shc",
"title": "Professional mixing tips for church sound (Shure)",
"url": "https://www.shure.com/en-us/insights/professional-mixing-tips-for-church-sound",
"what": "A church engineer on soloing, frequency ranges and practising with recordings. Has Shure product links.",
"type": "Article"
}
]
},
{
"id": "lw4",
"title": "EQ the room",
"mins": 40,
"parts": {
"what": {
"p": "<p>Rooms add their own sound. Some frequencies boom, some are weak. EQ on the main output can reduce the worst problems.</p>",
"d": "<p>Use a graphic EQ on the main output. Cut narrow problem frequencies by 3 to 6 dB. Do not boost much.</p>"
},
"why": {
"p": "<p>A room that booms at 125 Hz muddies every mix. Fixing the room helps all songs.</p>",
"d": "<p>Play a familiar recording and walk the room. Listen for boom and harshness.</p>"
},
"how": {
"p": "<p>Play a familiar recording through the main system and walk the room. Note any boomy or harsh frequency, then cut it a little on the output EQ.</p>",
"d": "<p>Use pink noise or music. Compare before and after, keeping the same level.</p>"
},
"ex": {
"p": "<p>EQ the room output and compare with a recording before and after.</p>",
"d": "<p>Write the changes.</p>"
}
},
"check": {
"ticks": [
"I found a problem frequency by listening",
"I cut it narrowly",
"The recording sounds better in the room"
]
},
"res": [
{
"id": "sfq",
"title": "What's The Frequency? (Sound On Sound)",
"url": "https://www.soundonsound.com/techniques/whats-frequency",
"what": "What each frequency range sounds like and how EQ works.",
"type": "Article"
},
{
"id": "shc",
"title": "Professional mixing tips for church sound (Shure)",
"url": "https://www.shure.com/en-us/insights/professional-mixing-tips-for-church-sound",
"what": "A church engineer on soloing, frequency ranges and practising with recordings. Has Shure product links.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Working gate",
"text": "Run monitors, groups and stage volume for a full rehearsal.",
"checks": [
"Monitor mixes were made and rung out",
"Groups and a reverb were used",
"Stage volume was agreed with the band"
]
}
},
{
"id": "p",
"name": "Pro",
"who": "Runs services",
"lessons": [
{
"id": "lp1",
"title": "Running a service",
"mins": 60,
"parts": {
"what": {
"p": "<p>Running the sound for a whole service means setup, sound check, mixing the service and packing down. Preparation makes it calm.</p>",
"d": "<p>Make a checklist: power on in the right order, line check, gain and levels, monitors, ring out, record, mix, mute unused channels, power off.</p>"
},
"why": {
"p": "<p>In a real service you cannot stop and fix things. A checklist and a routine keep you calm.</p>",
"d": "<p>Write down the order of service and who needs which mic when. Mute channels not in use to reduce noise and feedback.</p>"
},
"how": {
"p": "<p>Write the checklist, arrive early, and run the sound for a service. Afterwards write what worked and what did not.</p>",
"d": "<p>Take notes during the service on anything you would change. Review them within a day.</p>"
},
"ex": {
"p": "<p>Run one service with a checklist and write a short review.</p>",
"d": "<p>Do it a second time and compare.</p>"
}
},
"check": {
"ticks": [
"I used a checklist from setup to pack-down",
"I ran a whole service",
"I wrote a review afterwards"
]
},
"res": [
{
"id": "shc",
"title": "Professional mixing tips for church sound (Shure)",
"url": "https://www.shure.com/en-us/insights/professional-mixing-tips-for-church-sound",
"what": "A church engineer on soloing, frequency ranges and practising with recordings. Has Shure product links.",
"type": "Article"
}
]
},
{
"id": "lp2",
"title": "Troubleshooting",
"mins": 40,
"parts": {
"what": {
"p": "<p>When something fails you need a calm routine. Work from the source along the signal chain.</p>",
"d": "<p>Common faults: dead mic (battery, cable, mute, gain), buzz (ground loop, bad cable), feedback (mic placement, gain), distortion (clipping gain or output).</p>"
},
"why": {
"p": "<p>Faults will happen. The engineer who stays calm and fixes them quickly is the one people trust.</p>",
"d": "<p>Know what you can swap fast: spare cables, spare mic, spare batteries, spare DI.</p>"
},
"how": {
"p": "<p>Write a one-page troubleshooting card for your church system with the ten most likely faults and the first thing to check.</p>",
"d": "<p>Test it by creating a fault (mute a channel, unplug a cable) and fixing it using the card.</p>"
},
"ex": {
"p": "<p>Write and test a troubleshooting card.</p>",
"d": "<p>Share it with another operator.</p>"
}
},
"check": {
"ticks": [
"I wrote a one-page card of ten faults",
"I tested it on a real fault",
"I shared it"
]
},
"res": [
{
"id": "yvo",
"title": "10 essential tips for volunteer audio mixers (Yamaha)",
"url": "https://www.yamaha.com/US/houseofworship/downloadables/Audio-System-How-to-Guides/10-Essential-Tips-for-Volunteer-Audio-Mixers.pdf",
"what": "Signal flow, gain, sound checks, high-pass filters, grouping.",
"type": "PDF"
},
{
"id": "sfb",
"title": "How to control feedback in a sound system (Shure)",
"url": "https://www.shure.com/en-us/insights/how-to-control-feedback-in-a-sound-system/",
"what": "Why feedback happens and how to stop it.",
"type": "Article"
}
]
},
{
"id": "lp3",
"title": "Virtual sound check",
"mins": 40,
"parts": {
"what": {
"p": "<p>A virtual sound check means recording the band during a rehearsal or service and mixing the recording later, with the band absent.</p>",
"d": "<p>Record every channel to a multitrack recorder or DAW. Replay it through the desk or mix it in Logic.</p>"
},
"why": {
"p": "<p>It lets you practise mixing the real band as often as you like.</p>",
"d": "<p>Shure's church-sound advice recommends practising with recorded sessions during downtime.</p>"
},
"how": {
"p": "<p>Record a rehearsal or service as a multitrack. Mix it in Logic and compare it with the live mix.</p>",
"d": "<p>Log the mix in the Log tab.</p>"
},
"ex": {
"p": "<p>Record and mix a multitrack of your church band.</p>",
"d": "<p>Note the three biggest differences between your live and recorded mixes.</p>"
}
},
"check": {
"ticks": [
"I recorded a multitrack",
"I mixed it in Logic",
"I logged it and compared with the live mix"
]
},
"res": [
{
"id": "shc",
"title": "Professional mixing tips for church sound (Shure)",
"url": "https://www.shure.com/en-us/insights/professional-mixing-tips-for-church-sound",
"what": "A church engineer on soloing, frequency ranges and practising with recordings. Has Shure product links.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Pro gate",
"text": "Run three services with a checklist, a troubleshooting card and one virtual sound check.",
"checks": [
"Three services run with a checklist",
"Troubleshooting card tested",
"One virtual sound check mixed"
]
}
}
]
});
