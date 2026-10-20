MH.reg({
"id": "mixing",
"place": [
{
"q": "What does 0 dBFS mean in a DAW?",
"o": [
"The quietest sound it can store",
"The loudest level digital audio can represent before it clips",
"The average loudness of a song",
"A speaker reference level"
],
"a": 1,
"w": "0 dBFS is the digital ceiling. Everything is measured below it, so levels are negative numbers."
},
{
"q": "A reference track is about 3 dB louder than your mix. What do you do before comparing?",
"o": [
"Nothing, louder is the target",
"Match the levels, then compare",
"Add a limiter to your mix",
"Turn your mix down to half"
],
"a": 1,
"w": "Louder almost always sounds better, so an unmatched comparison tells you nothing."
},
{
"q": "A vocal sounds boomy and muddy. Where do you start looking?",
"o": [
"Boost 10 kHz",
"Cut around 200 to 400 Hz",
"Add reverb",
"Pan it left"
],
"a": 1,
"w": "The low mids build up mud. A gentle cut there is the usual first move."
},
{
"q": "What does the threshold on a compressor do?",
"o": [
"Sets how loud the output is",
"Sets the level above which compression starts",
"Sets how fast it reacts",
"Sets how much high end is cut"
],
"a": 1,
"w": "Only signal above the threshold is turned down."
},
{
"q": "Why send several tracks to one shared reverb aux?",
"o": [
"It is the only way to get reverb",
"They share one consistent space and you adjust it in one place",
"It makes them louder",
"It removes the need for EQ"
],
"a": 1,
"w": "One reverb for many tracks sounds like one room, and saves CPU."
},
{
"q": "Why high-pass filter instruments that are not bass or kick?",
"o": [
"To make them brighter",
"To remove low rumble that clutters the low end",
"To make them louder",
"To add stereo width"
],
"a": 1,
"w": "Low energy you cannot hear well still eats headroom and blurs the bass."
},
{
"q": "What is parallel compression?",
"o": [
"Compressing two songs together",
"Blending a heavily compressed copy with the untouched original",
"Using two compressors in a row",
"Compressing only the left and right sides"
],
"a": 1,
"w": "You keep the natural transients and add the weight of the squashed copy underneath."
},
{
"q": "You boost 3 to 4 kHz by 4 dB and it sounds better. What should you check?",
"o": [
"Nothing, it is better",
"That it is not simply louder by 4 dB: level match the before and after",
"That the plug-in is stock",
"The sample rate"
],
"a": 1,
"w": "A louder signal sounds more present. Match the level, then judge."
},
{
"q": "How many full songs have you mixed from start to finish?",
"o": [
"None",
"One to three",
"Four or more"
],
"pts": [
0,
0.5,
1
]
},
{
"q": "How often do you compare a mix with a commercial track at matched volume?",
"o": [
"Never",
"Sometimes",
"Almost every time"
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
"who": "Never done it",
"lessons": [
{
"id": "f1",
"title": "Gain staging: set your levels before you mix",
"mins": 30,
"parts": {
"what": {
"p": "<p>Gain staging means setting how loud each track is <b>before</b> you start processing. Every track starts with room to spare so nothing is squashed against the ceiling.</p>",
"d": "<p>Digital audio has a hard ceiling called 0 dBFS. Gain staging is keeping every track and the final output well under it. Logic works internally in floating point, so tracks do not clip inside the mixer, but the output and any plug-in that models hardware still care.</p>"
},
"why": {
"p": "<p>If the output channel goes red, the mix is clipping and sounds harsh. Starting quiet and sensible also means your faders sit near the middle, where you can move them in both directions.</p>",
"d": "<p>Plug-ins are designed for a certain input level. Compressors and saturators react to what you feed them, so a hot signal changes how they sound. Rule of thumb: loudest source peaks between -18 and -12 dBFS, channel peaks around -8 to -10, finished mix peaking about -6 dBFS. -18 dBFS RMS is roughly 0 VU.</p>"
},
"how": {
"p": "<p>Reset every fader to 0 dB (Option-click a fader). Play the loudest part of the song. Watch the number above each meter: it shows the highest peak. If a track is too loud, lower the <b>region gain</b> or the first plug-in's input, not just the fader.</p>",
"d": "<p>Play the loudest section. Peak numbers go red on the output strip and orange on others when they pass 0 dB. Fix it by lowering the fader by the amount shown. Click a peak number to clear it. For tracks, trim at the source (region gain, or a Gain plug-in first in the chain) so compressors see a sensible level.</p>"
},
"ex": {
"p": "<p>Open any multitrack session (Cambridge-MT has free ones). Reset all faders to 0 dB, bring the loudest tracks down so they peak between -18 and -12 dBFS, build a rough balance, then check the output peak at the loudest part.</p>",
"d": "<p>Same exercise, with detail: put a Gain plug-in first on each channel, set loud sources to peak around -15 dBFS, then use faders only to balance. Watch for the master peaking higher than -6 dBFS. If it does, pull every fader down by the same amount rather than the master alone.</p>"
}
},
"check": {
"ticks": [
"I did the exercise on a real project",
"The output channel never turned red",
"The loudest source peaks between -18 and -12 dBFS (or is already lower)"
],
"num": {
"label": "Highest output peak you saw (dBFS)",
"ph": "e.g. -6.5",
"op": "le",
"val": -6,
"hard": 0,
"none": "Type the highest peak number from the output channel.",
"bad": "That peaks above 0, so it clipped. Pull the faders down and run it again.",
"soft": "Your mix peaks at {v} dBFS. Aim for -6 or lower so there is room to work. Lower all the faders and check again.",
"ok": "Peak {v} dBFS. That is a safe starting level."
}
},
"res": [
{
"id": "apk",
"title": "Peak level display and signal clipping (Apple)",
"url": "https://support.apple.com/guide/logicpro/peak-level-display-and-signal-clipping-lgcp8ec1ad64/mac",
"what": "Why the meters turn red and what to do about it.",
"type": "Apple guide"
},
{
"id": "avl",
"title": "Set channel strip volume and check levels (Apple)",
"url": "https://support.apple.com/guide/logicpro/set-channel-strip-volume-and-check-levels-lgcp8ec34eec/mac",
"what": "How the fader and meters work in Logic.",
"type": "Apple guide"
},
{
"id": "sg1",
"title": "Gain staging your DAW software (Sound On Sound)",
"url": "https://www.soundonsound.com/techniques/gain-staging-your-daw-software",
"what": "Where levels can go wrong inside a DAW.",
"type": "Article"
},
{
"id": "sg2",
"title": "Should I gain stage at -6 or -18 dBFS? (Sound On Sound)",
"url": "https://www.soundonsound.com/sound-advice/q-should-gain-stage-6dbfs-or-18dbfs",
"what": "Short answer on which target to use.",
"type": "Article"
},
{
"id": "cmt",
"title": "Free entry-level multitracks (Cambridge-MT)",
"url": "https://cambridge-mt.com/ms/mtk-newbies",
"what": "Free multitrack sessions to practise on. For educational use only.",
"type": "Practice files"
}
]
},
{
"id": "f2",
"title": "Signal flow and the Logic mixer",
"mins": 35,
"parts": {
"what": {
"p": "<p>Signal flow is the path sound takes: from the track, up through its plug-ins, through the fader and pan, then out to the stereo output. Buses and aux channels let tracks share effects.</p>",
"d": "<p>In a Logic channel strip: input, audio effect inserts (run top to bottom), sends (taken after the fader unless you choose Pre), group, output, pan, fader. A send goes to a bus, and a bus feeds an aux channel strip that holds the effect. Everything ends at Stereo Out.</p>"
},
"why": {
"p": "<p>If you know the path, you can find any problem. A sound that is too loud is too loud somewhere in the chain, and knowing where saves hours.</p>",
"d": "<p>Order matters: EQ before compression means the compressor reacts to the EQ'd sound; after means it shapes the compressor's output. Sends are post-fader by default, so an effect level follows the fader, which is usually what you want for reverb.</p>"
},
"how": {
"p": "<p>Open the Mixer (press X). Follow one track: look at the order of plug-ins in the Audio FX slots, find where its output goes (bottom of the strip), and find any sends. Click a Sends slot, choose Bus 1, and Logic makes an aux for you.</p>",
"d": "<p>Read the strip top to bottom: input, inserts, sends, output. To build a send: click an empty Sends slot, choose Bus > Bus 1. Logic creates an aux with Bus 1 as its input. Put an effect on the aux, set the effect to 100% wet, and use each track's send knob to decide how much goes there.</p>"
},
"ex": {
"p": "<p>Make a reverb send. Create Bus 1, put ChromaVerb on the aux, set it to 100% wet, then send three different tracks to it at different amounts.</p>",
"d": "<p>Do the same, then change the aux's output or name it 'Verb', and listen to what happens to depth when you change the send level versus changing the track's fader. Then draw your project's signal flow on paper, from one vocal to Stereo Out, with every stop in order.</p>"
}
},
"check": {
"ticks": [
"I can say where a track goes after its fader",
"I made a bus send to an aux with an effect on it and sent three tracks to it",
"Changing the send knob changes the amount of effect without changing the dry sound"
]
},
"res": [
{
"id": "asn",
"title": "Route audio via send effects (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcp8ea0091c/mac",
"what": "How a send, a bus and an aux fit together.",
"type": "Apple guide"
},
{
"id": "aax",
"title": "Overview of aux channel strips (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcp8e7db552/mac",
"what": "What an aux is and three ways to make one.",
"type": "Apple guide"
},
{
"id": "chv",
"title": "Use ChromaVerb (Apple)",
"url": "https://support.apple.com/101842",
"what": "Logic's stock reverb: room types, decay time and damping.",
"type": "Apple guide"
}
]
},
{
"id": "f3",
"title": "What EQ does",
"mins": 40,
"parts": {
"what": {
"p": "<p>EQ turns parts of the sound up or down. Low frequencies are bass and boom, middle is body and honk, high is air and sparkle.</p>",
"d": "<p>An equaliser changes the level of chosen frequency bands. Types: high-pass and low-pass filters, shelves, and bell (peak) bands with adjustable frequency, gain and Q (width). Logic's Channel EQ has eight bands: 1 is a high-pass, 2 and 7 are shelves, 3 to 6 are bells, 8 is a low-pass.</p>"
},
"why": {
"p": "<p>Most muddy or harsh mixes are EQ problems. A few small, well-placed moves make instruments fit together.</p>",
"d": "<p>Rough ranges: 20 to 60 Hz sub, 60 to 250 Hz bass and warmth, 250 to 500 Hz mud, 500 Hz to 2 kHz body and honk, 2 to 6 kHz presence and bite, 6 to 20 kHz air. Cutting is safer than boosting: boosts add level and can make things sound thin or harsh, so cut first and boost gently.</p>"
},
"how": {
"p": "<p>Turn on the analyzer. Sweep a narrow boosted band across the sound to find ugly spots, then cut them with a small cut. Use a high-pass filter on anything that is not bass or kick, starting around 80 Hz for most instruments and checking it still sounds natural.</p>",
"d": "<p>Sweep method: boost 8 to 10 dB with a narrow Q, sweep slowly, find the frequency that sounds worst, then flip the gain to a cut of 2 to 4 dB with a wider Q. Wide Q for broad, gentle shaping; narrow only for problems. High-pass: vocals around 80 to 100 Hz, guitars 80 to 120 Hz, but always listen in the mix, not solo.</p>"
},
"ex": {
"p": "<p>Take a vocal or an acoustic guitar from a free multitrack. Add a high-pass, find one muddy spot and cut it by 2 to 3 dB, then toggle the plug-in off and on while keeping the level the same.</p>",
"d": "<p>Do it on three tracks: vocal, guitar, piano. For each, write down the frequency you cut, the amount and the Q, and the reason in one line. Level-match with the plug-in's output gain so a bypass does not just sound quieter.</p>"
}
},
"check": {
"ticks": [
"I used a high-pass on a track that is not bass or kick",
"I found a problem frequency by sweeping and cut it",
"I compared on and off at the same level"
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
"id": "yeq",
"title": "Practical EQ techniques (Yamaha)",
"url": "https://hub.yamaha.com/recording-basics-practical-eq-techniques",
"what": "Cut before you boost, high-pass filters, sweeping with a narrow bell.",
"type": "Article"
},
{
"id": "ceq",
"title": "Channel EQ parameters (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef1edc1d7/mac",
"what": "Every control on the Channel EQ.",
"type": "Apple guide"
},
{
"id": "ana",
"title": "Channel EQ Analyzer (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef1edccd9/mac",
"what": "Turn on the live curve so you can see what you hear.",
"type": "Apple guide"
}
]
},
{
"id": "f4",
"title": "What a compressor does",
"mins": 40,
"parts": {
"what": {
"p": "<p>A compressor turns the loud parts down so the sound is more even. Then you turn the whole thing up, so quiet parts are easier to hear.</p>",
"d": "<p>A compressor reduces gain when the signal goes over the threshold, by an amount set by the ratio. Attack is how quickly it reacts after the signal crosses the threshold; release is how quickly it lets go. Makeup gain brings the level back up.</p>"
},
"why": {
"p": "<p>Vocals and bass move a lot in level. A compressor keeps them steady so they do not disappear in quiet moments or jump out in loud ones.</p>",
"d": "<p>Ratio 2:1 is gentle, 4:1 firm, 10:1 and above starts to limit. A slow attack lets the start of each note through (punch); a fast attack squeezes it. A release that is too slow keeps the sound ducked, too fast and it pumps. Most vocals only need 3 to 6 dB of gain reduction.</p>"
},
"how": {
"p": "<p>Open Compressor on a vocal. Set ratio to 3:1, bring the threshold down until the gain reduction meter moves on the loud words only. Use the Auto Gain or add makeup gain so the level is the same on and off.</p>",
"d": "<p>Start: ratio 3:1 to 4:1, attack 10 to 30 ms, release 50 to 150 ms (or auto), threshold so the loudest words show 4 to 6 dB of reduction. If the sound dulls, lengthen the attack. If it pumps, shorten the release. Check by bypassing at matched level; the compressed version should sound steadier, not just louder.</p>"
},
"ex": {
"p": "<p>Compress a lead vocal (or bass). Aim for gain reduction that peaks at about 3 to 6 dB, and compare on and off at the same loudness.</p>",
"d": "<p>Do it twice: once with a fast attack, once slow. Describe the difference in a sentence. Then try one compressor model (for example Studio VCA vs Vintage Opto) and note which one you prefer for this vocal.</p>"
}
},
"check": {
"ticks": [
"The gain reduction meter moved on the loudest words, not constantly",
"I compared on and off at the same loudness",
"It sounded steadier, not just louder"
],
"num": {
"label": "Biggest gain reduction you saw (dB)",
"ph": "e.g. 4",
"op": "le",
"val": 6,
"hard": 12,
"none": "Type the biggest gain reduction number.",
"bad": "That is over 12 dB. That is heavy squashing. Raise the threshold or lower the ratio.",
"soft": "{v} dB is more than the 3 to 6 dB a first vocal compression needs. Raise the threshold a little and check again.",
"ok": "{v} dB is a sensible amount."
}
},
"res": [
{
"id": "mco",
"title": "Compression explained: threshold, ratio and knee (mastering.com)",
"url": "https://mastering.com/compression-explained-threshold-ratio-and-knee/",
"what": "Plain explanation of the main controls. Ends with a promo.",
"type": "Article"
},
{
"id": "fco",
"title": "Basic compressor controls (FabFilter)",
"url": "https://fabfilter.com/learn/compression/basic-compressor-controls",
"what": "Attack, release, threshold and ratio explained.",
"type": "Article"
},
{
"id": "aco",
"title": "Use Compressor in Logic Pro (Apple)",
"url": "https://support.apple.com/hu-hu/guide/logicpro/lgcef1bec9f3/mac",
"what": "Logic's own compressor. The menus on the page are in Hungarian; the article is in English.",
"type": "Apple guide"
}
]
},
{
"id": "f5",
"title": "Reverb and delay",
"mins": 35,
"parts": {
"what": {
"p": "<p>Reverb is the sound of a space. Delay is an echo. Both place a sound further back and make it feel real rather than flat.</p>",
"d": "<p>Reverb is a dense wash of reflections; key controls are decay time, pre-delay and damping. Delay repeats the sound; key controls are time (often synced to tempo), feedback (how many repeats) and filtering.</p>"
},
"why": {
"p": "<p>Dry tracks sit flat against the speakers. A little reverb makes a vocal feel like it is in a room. Too much makes a mix wash out.</p>",
"d": "<p>Send effects on a bus (not inserts) so the dry sound stays clean and one reverb serves many tracks. Pre-delay of 20 to 80 ms keeps the dry vocal clear before the reverb starts. High-pass and low-pass the aux so reverb does not add mud or hiss.</p>"
},
"how": {
"p": "<p>Make a reverb bus and a delay bus. Put ChromaVerb on one (100% wet) and a delay on the other (100% wet). Send the vocal a little to each. Turn the sends up until you hear them, then pull back until you only miss them when muted.</p>",
"d": "<p>Reverb aux: decay 1.0 to 2.0 s for a vocal, pre-delay 30 ms, EQ the aux with a high-pass near 300 Hz and a low-pass near 8 kHz. Delay aux: tempo-synced eighth or quarter note, feedback about 20 to 30%, filter the repeats darker. Automate the send up on phrase ends.</p>"
},
"ex": {
"p": "<p>On a vocal, find a reverb amount where it feels natural. Then pull the send down until you only miss it when you mute the aux.</p>",
"d": "<p>Do the same with a delay. Then try two different reverbs, a short room and a longer hall, on the same vocal, and write which one you would use on a ballad versus a fast song.</p>"
}
},
"check": {
"ticks": [
"The reverb and delay are on aux buses, not inserted on the track",
"I can hear the effect when I mute the aux, but it does not wash out the mix",
"I filtered the reverb return with a high-pass"
]
},
"res": [
{
"id": "chv",
"title": "Use ChromaVerb (Apple)",
"url": "https://support.apple.com/101842",
"what": "Logic's stock reverb: room types, decay time and damping.",
"type": "Apple guide"
},
{
"id": "rvd",
"title": "Reverb vs. delay: a guide to 3D mixing (mastering.com)",
"url": "https://mastering.com/?p=23569",
"what": "What each effect does and why to send both from buses.",
"type": "Article"
},
{
"id": "srd",
"title": "Using reverb and delay (Sound On Sound)",
"url": "https://www.soundonsound.com/techniques/using-reverb-delay",
"what": "Send setup, delay timing and panning for depth. Written around Cubase; the ideas carry over to Logic.",
"type": "Article"
}
]
},
{
"id": "f6",
"title": "Balance and panning",
"mins": 35,
"parts": {
"what": {
"p": "<p>Balance is how loud each part is compared with the others. Panning places them left to right.</p>",
"d": "<p>Level balance comes first and does most of the work. Panning then separates sounds that compete in the same frequency range. Lead vocal, kick, snare and bass usually stay in the centre.</p>"
},
"why": {
"p": "<p>Many mixes are 80% balance. Get the faders right and the mix already works.</p>",
"d": "<p>A common order: start with the most important element (the lead vocal), then drums and bass, then add the rest, listening each time. Panning helps clarity: two guitars at left 70 and right 70 sound wider and clearer than both in the middle.</p>"
},
"how": {
"p": "<p>Pull every fader down. Bring up the lead vocal to a comfortable level, then kick and bass, then the rest one at a time. Pan supporting parts to different sides.</p>",
"d": "<p>Keep the low end mostly mono. Pan hi-hats, guitars, keys and backing vocals; use hard pans sparingly. Check in mono (a Gain plug-in on the master with mono switched on) to see if anything disappears. Revisit the balance after every few moves.</p>"
},
"ex": {
"p": "<p>Make a balance-only mix of a free multitrack with no EQ or compression. Add panning and check it in mono.</p>",
"d": "<p>Then save the balance version and a panned version, and listen to both on headphones and on speakers. Write two things you changed after the mono check.</p>"
}
},
"check": {
"ticks": [
"I built the balance from the vocal and drums up",
"I panned supporting instruments to different places and kept the lead and bass central",
"I checked the mix in mono and nothing disappeared"
]
},
"res": [
{
"id": "ipn",
"title": "10 tips for better mixes through panning (iZotope)",
"url": "https://www.izotope.com/en/learn/10-tips-for-better-mixes-through-panning",
"what": "Where to put things and why.",
"type": "Article"
},
{
"id": "cmt",
"title": "Free entry-level multitracks (Cambridge-MT)",
"url": "https://cambridge-mt.com/ms/mtk-newbies",
"what": "Free multitrack sessions to practise on. For educational use only.",
"type": "Practice files"
}
]
},
{
"id": "f7",
"title": "Reference tracks and level matching",
"mins": 30,
"parts": {
"what": {
"p": "<p>A reference track is a finished song you compare your mix with. It tells you what your ears have got used to.</p>",
"d": "<p>Referencing means A/B comparing your mix against a commercial track at the same loudness, ideally in the same genre. Louder always sounds better, so level matching is the core skill.</p>"
},
"why": {
"p": "<p>Without a reference you cannot tell if a mix is dull, boomy or thin. It is the fastest way to find your blind spots.</p>",
"d": "<p>Match by ear using the level meter or Loudness Meter (LUFS) so the two are within about 1 dB. Compare in short 5 second clips, and take a 10 minute break before judging. Look at balance of low end, vocal level and brightness, not at whether the song is as loud.</p>"
},
"how": {
"p": "<p>Put a reference track on its own channel. Turn it down until it matches the loudness of your mix. Switch between them on the same section.</p>",
"d": "<p>Set the reference to bypass the master chain. Use the loudness meter to match integrated loudness. Compare the vocal level, the low end and the brightness one at a time. Write down three differences.</p>"
},
"ex": {
"p": "<p>Compare your balance mix to a reference at matched volume, and write three differences.</p>",
"d": "<p>Change one thing in your mix to move towards the reference, then re-compare. Note what the song's reference gave you that your ears had missed.</p>"
}
},
"check": {
"ticks": [
"I matched the level of the reference to my mix",
"I compared short sections, switching back and forth",
"I wrote down three differences"
]
},
"res": [
{
"id": "irf",
"title": "How to use reference tracks when mixing (iZotope)",
"url": "https://www.izotope.com/en/learn/13-tips-for-using-references-while-mixing",
"what": "Level matching, breaks and quick A/B. Mentions iZotope products.",
"type": "Article"
},
{
"id": "alm",
"title": "Surround MultiMeter loudness and level (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4246/mac",
"what": "The loudness meter section: how Logic reads LUFS and peaks.",
"type": "Apple guide"
}
]
},
{
"id": "f8",
"title": "Rough mix project",
"mins": 60,
"parts": {
"what": {
"p": "<p>Put it all together on one real song. This is the first full mix that counts.</p>",
"d": "<p>A rough mix is a complete, balanced mix without fine detail: gain staged, EQ'd, lightly compressed, with reverb and a decent balance.</p>"
},
"why": {
"p": "<p>This is where the lessons turn into a skill. It is also your first piece for the Mix log.</p>",
"d": "<p>The process: gain stage, balance, panning, EQ problem areas, compress vocal and bass, add reverb and delay on buses, compare with a reference, check in mono, and bounce.</p>"
},
"how": {
"p": "<p>Use a free multitrack or your own church recording. Follow the order above. Log the mix with a reference track.</p>",
"d": "<p>Take about an hour. Bounce at 24 bit. Then log it in the Log tab: reference, checklist, one thing to fix next time, rating.</p>"
},
"ex": {
"p": "<p>Finish one rough mix and log it.</p>",
"d": "<p>Come back after a day and listen with fresh ears, then write the one thing you would change.</p>"
}
},
"check": {
"ticks": [
"I finished a balanced rough mix with no clipping",
"I used a reference track at matched volume",
"I logged the mix"
]
},
"res": [
{
"id": "cmt",
"title": "Free entry-level multitracks (Cambridge-MT)",
"url": "https://cambridge-mt.com/ms/mtk-newbies",
"what": "Free multitrack sessions to practise on. For educational use only.",
"type": "Practice files"
},
{
"id": "irf",
"title": "How to use reference tracks when mixing (iZotope)",
"url": "https://www.izotope.com/en/learn/13-tips-for-using-references-while-mixing",
"what": "Level matching, breaks and quick A/B. Mentions iZotope products.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Foundations gate",
"text": "Mix one full song from a free multitrack so it is balanced, has no clipping, and you can say why you made each move.",
"checks": [
"The mix has no clipping and a balanced level",
"I used EQ, compression and reverb with a reason for each",
"I compared it with a reference at matched volume",
"I logged the mix"
]
}
},
{
"id": "w",
"name": "Working",
"who": "Done it a few times",
"lessons": [
{
"id": "w1",
"title": "EQ per instrument",
"mins": 45,
"parts": {
"what": {
"p": "<p>Every instrument has its own trouble spots, and you learn them by ear. Vocals get boomy and harsh in different places than a guitar does. This lesson gives you a short list of places to check on each, and a way to confirm by ear.</p>",
"d": "<p>Typical areas to check: lead vocal, 200 to 400 Hz for mud, 2.5 to 5 kHz for presence or harshness, 8 to 12 kHz for air. Acoustic guitar: 100 to 200 Hz boom, 2 to 4 kHz pick attack. Piano: 200 to 400 Hz clutter, 3 to 5 kHz hammer attack. Kick: 50 to 100 Hz weight, 300 to 500 Hz boxiness, 3 to 5 kHz beater click. Snare: 150 to 250 Hz body, 4 to 6 kHz crack. These are starting points; the song decides.</p>"
},
"why": {
"p": "<p>Using the same EQ on everything makes the mix sound samey, and the instruments end up fighting over the same space. Knowing where each one usually lives lets you carve room quickly, which matters when you mix a whole church service recording on a deadline.</p>",
"d": "<p>Masking is when two sounds share a frequency range and the louder one hides the other. The fix is rarely boosting the one you cannot hear. Cut a little of the competing instrument where the important one lives. Typical trade: dip guitars and keys 2 to 3 dB around 2.5 to 4 kHz so the vocal's words come through; dip the bass or high-pass the keys so the kick and bass each have their own low end.</p>"
},
"how": {
"p": "<p>Pick one song. Put Channel EQ on the lead vocal, an acoustic guitar and a piano or keys part. On each, turn on the Analyzer, boost one band by 8 dB, narrow it, and slowly sweep through the ranges above while the song plays. When something sounds worse, note the frequency. Turn the boost into a cut of 2 to 3 dB with a medium-wide Q. Then listen to the whole mix with the EQ on and off.</p>",
"d": "<p>Procedure per instrument: (1) high-pass at the lowest sensible point; (2) sweep for the worst spot and cut 2 to 4 dB at Q about 1.5 to 3; (3) only then consider a gentle boost of 1 to 2 dB with a wide Q (below 1) for character; (4) use the plug-in's output gain so on and off are the same loudness; (5) decide in the full mix, not solo. For competing parts, make the complementary move: cut in the guitar where you boosted the vocal.</p>"
},
"ex": {
"p": "<p>Using a free multitrack or your own recording, EQ three instruments as above. For each one write the frequency, the amount and the reason in one line (for example: vocal, 300 Hz, -3 dB, boxy on the low words). Finish by making one 'make room' cut on a different instrument so the vocal is clearer.</p>",
"d": "<p>Do the same, then bounce two versions: untouched and EQ'd, loudness-matched within 1 dB. Play both to someone without telling them which is which and ask which they prefer. Write down their answer and whether it matches yours.</p>"
}
},
"check": {
"ticks": [
"I EQ'd three instruments and wrote the frequency, amount and reason for each",
"I made at least one cut on another instrument so the vocal is clearer",
"I compared on and off at matched loudness and the EQ'd version was better"
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
"id": "yeq",
"title": "Practical EQ techniques (Yamaha)",
"url": "https://hub.yamaha.com/recording-basics-practical-eq-techniques",
"what": "Cut before you boost, high-pass filters, sweeping with a narrow bell.",
"type": "Article"
},
{
"id": "ceq",
"title": "Channel EQ parameters (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef1edc1d7/mac",
"what": "Every control on the Channel EQ.",
"type": "Apple guide"
},
{
"id": "ana",
"title": "Channel EQ Analyzer (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef1edccd9/mac",
"what": "Turn on the live curve so you can see what you hear.",
"type": "Apple guide"
},
{
"id": "cmt",
"title": "Free entry-level multitracks (Cambridge-MT)",
"url": "https://cambridge-mt.com/ms/mtk-newbies",
"what": "Free multitrack sessions to practise on. For educational use only.",
"type": "Practice files"
}
]
},
{
"id": "w2",
"title": "Compression per instrument",
"mins": 45,
"parts": {
"what": {
"p": "<p>Different instruments want different compression. A vocal needs to be held steady, a bass needs to be even, a snare needs its punch kept. The two controls that change the character most are attack and release.</p>",
"d": "<p>Attack decides whether the start of each note passes through before the compressor grabs it. Release decides how quickly it lets go. Typical starting points: lead vocal 3:1 to 4:1, attack 10 to 30 ms, release 80 to 150 ms or auto; bass 4:1, attack 20 to 30 ms, release 100 to 200 ms; snare 4:1, attack 20 to 40 ms (keeps the crack), release 50 to 100 ms; acoustic guitar 2:1 to 3:1, slow attack, medium release.</p>"
},
"why": {
"p": "<p>If you use the same settings on everything, you either squash the punch out of drums or fail to control the vocal. Matching attack and release to what the instrument does is most of what 'knowing compression' means.</p>",
"d": "<p>The compressor's job is also to shape the sound of the note: a long attack lets the transient through and the body gets turned down, so the sound gets more punch; a short attack catches the transient and the sound gets softer and more controlled. Release should be set so the gain reduction returns to zero before the next note starts, otherwise the level pumps or the sound feels held down.</p>"
},
"how": {
"p": "<p>Open a compressor on a snare, a bass and a vocal. Look at the gain reduction meter on each. On the snare, set the attack slow and then fast and listen to the crack. On the bass, set the release so the meter bounces back between notes. On the vocal, aim for a few dB of reduction on the loud words only.</p>",
"d": "<p>Snare: ratio 4:1, threshold set for 4 to 6 dB reduction, attack 5 ms then 30 ms, compare; with 30 ms the stick attack should be clearer. Bass: ratio 4:1, attack 20 ms, release timed to the tempo (a slower release for long notes, faster for a busy line); watch that the meter returns to 0 between notes. Vocal: ratio 3:1, auto release, 3 to 6 dB reduction; add a second gentle compressor (2:1, 2 dB) rather than one hard one.</p>"
},
"ex": {
"p": "<p>On a song, compress a snare, bass and lead vocal. Write for each one: the attack, the release, the most gain reduction and one sentence on why (control, punch or glue). Then bypass each at matched level.</p>",
"d": "<p>Add a second drum-related measurement: with the snare compressor, screenshot the gain reduction meter at the loudest hit and at a quiet hit. The difference between the two is how much you are evening out the performance; write it down.</p>"
}
},
"check": {
"ticks": [
"Each compressor has a written reason: control, punch or glue",
"The gain reduction meter returns to zero between notes on the bass or snare",
"I compared bypassed and active at matched level and the active version was better"
],
"num": {
"label": "Most gain reduction on the lead vocal (dB)",
"ph": "e.g. 5",
"op": "le",
"val": 8,
"hard": 15,
"none": "Type the most gain reduction you saw on the vocal.",
"bad": "Over 15 dB on a vocal is heavy squashing. Raise the threshold or lower the ratio.",
"soft": "{v} dB is a lot for a vocal. Ease the threshold up or use two gentler stages.",
"ok": "{v} dB on the vocal is controlled."
}
},
"res": [
{
"id": "fco",
"title": "Basic compressor controls (FabFilter)",
"url": "https://fabfilter.com/learn/compression/basic-compressor-controls",
"what": "Attack, release, threshold and ratio explained.",
"type": "Article"
},
{
"id": "mco",
"title": "Compression explained: threshold, ratio and knee (mastering.com)",
"url": "https://mastering.com/compression-explained-threshold-ratio-and-knee/",
"what": "Plain explanation of the main controls. Ends with a promo.",
"type": "Article"
},
{
"id": "aco",
"title": "Use Compressor in Logic Pro (Apple)",
"url": "https://support.apple.com/hu-hu/guide/logicpro/lgcef1bec9f3/mac",
"what": "Logic's own compressor. The menus on the page are in Hungarian; the article is in English.",
"type": "Apple guide"
}
]
},
{
"id": "w3",
"title": "Buses, subgroups and parallel compression",
"mins": 50,
"parts": {
"what": {
"p": "<p>A bus lets several tracks travel together. Send all the drums to one drum bus and you can EQ, compress and set the level of the whole kit with one control. Parallel compression is a second path with a heavily squashed copy that you blend in underneath.</p>",
"d": "<p>Subgroup: tracks' outputs go to an aux strip fed by a bus (in Logic, choose the track's output as Bus 1, or use Create mix subgroups). The aux carries its own plug-ins and fader. Parallel compression: send from each drum track (or from the drum bus) to a second aux with a hard-working compressor, then blend that aux in or use the Mix control on Compressor.</p>"
},
"why": {
"p": "<p>Without buses a session of 32 channels is hard to manage. Subgroups make a mix easier to move and make a group of instruments sound like one thing. Parallel compression gives weight and sustain without losing the natural hits.</p>",
"d": "<p>Bus compression of 1 to 3 dB at 2:1 to 4:1 with a slower attack (30 ms) and short release glues drums. Parallel compression: ratio 8:1 or higher, fast attack, release 100 ms, 10 to 15 dB of reduction; blend it so it adds weight without making the level jump when you toggle it. Check for phase problems if you also use a compressor with lookahead.</p>"
},
"how": {
"p": "<p>Put kick, snare, overheads and toms on a drum bus. Add a gentle compressor to the bus. Then make a parallel aux: send the drum bus to Bus 2, put a hard compressor on it, and blend it under the drum bus until the kit feels bigger. Mute and unmute it a few times.</p>",
"d": "<p>Drum bus: ratio 3:1, attack 30 ms, release auto or 100 ms, 2 dB reduction. Parallel aux: ratio 10:1, attack 1 to 5 ms, release 100 ms, threshold for 10 to 15 dB reduction, then EQ a little low end and top boost. Set the aux fader 8 to 12 dB below the dry bus and bring it up to taste; match the level of 'on' and 'off' using the aux's output so you are not fooled by loudness.</p>"
},
"ex": {
"p": "<p>Build a drum bus and a parallel aux in a session. Compare the drums with the bus compression off, on, and with parallel on.</p>",
"d": "<p>Write down the three settings (bus, parallel threshold and parallel level) and what you heard change in the low mids and the sustain of the snare.</p>"
}
},
"check": {
"ticks": [
"The drums go to a bus with its own compressor",
"A parallel aux adds weight without losing the hits",
"I can explain the difference between a subgroup and a parallel send"
]
},
"res": [
{
"id": "asb",
"title": "Create mix subgroups (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcp8e8310ed/mac",
"what": "Send several tracks to one aux so you can control them together.",
"type": "Apple guide"
},
{
"id": "asn",
"title": "Route audio via send effects (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcp8ea0091c/mac",
"what": "How a send, a bus and an aux fit together.",
"type": "Apple guide"
},
{
"id": "mpc",
"title": "Parallel compression (mastering.com)",
"url": "https://mastering.com/parallel-compression/",
"what": "Dry and crushed copies blended together.",
"type": "Article"
}
]
},
{
"id": "w4",
"title": "Automation",
"mins": 45,
"parts": {
"what": {
"p": "<p>Automation means the fader (or any control) moves by itself as the song plays. You record the moves once, and Logic repeats them. It is how a mix stays clear all the way through the song.</p>",
"d": "<p>In Logic press A to show automation on the tracks. Choose a parameter from the pop-up (Volume, Pan, a send or a plug-in setting). Modes: Read plays what is stored; Touch writes while you hold a control and then returns; Latch writes and holds the last value; Write overwrites everything while playing.</p>"
},
"why": {
"p": "<p>A static mix has the same balance in the verse and chorus. Real songs change, and the mix must follow: a vocal that is clear in the verse can sink in the chorus.</p>",
"d": "<p>Typical rides: vocal 1 to 3 dB to stay readable, delay or reverb send up at phrase ends, a guitar down 1 to 2 dB under the vocal, a filter or volume lift into the chorus. Keep moves small and smooth; a rule is that you should hear the song, not the automation.</p>"
},
"how": {
"p": "<p>Switch the vocal track to Touch, press play and ride the vocal fader through one verse and chorus. Then show the automation and tidy any bumps. Add a send automation: raise the reverb send on the last word of each line.</p>",
"d": "<p>Use Touch while moving the fader with a mouse or a control surface. Afterwards zoom in and remove extra points. Use the Region/Track automation view to draw a gentle 1.5 dB lift in the chorus. Set mode back to Read before bouncing. Check by switching the track to Off to hear the unautomated version.</p>"
},
"ex": {
"p": "<p>Automate a lead vocal level and one send on a song. A/B with automation off.</p>",
"d": "<p>Do it for two sections of a song and describe in one sentence what each ride fixed.</p>"
}
},
"check": {
"ticks": [
"I automated the vocal level and it stays clear in the chorus",
"I automated one send or plug-in setting",
"I compared the mix with automation on and off"
]
},
"res": []
},
{
"id": "w5",
"title": "Stereo width and depth",
"mins": 45,
"parts": {
"what": {
"p": "<p>Width is left to right. Depth is how far away something feels. A flat mix has everything at the same distance; a good mix has a clear front, middle and back.</p>",
"d": "<p>Depth tools: level, reverb amount, EQ (brighter is nearer, duller is farther), and pre-delay (a longer pre-delay keeps a sound close even with reverb). Width tools: panning, stereo recordings, stereo delays and double-tracking.</p>"
},
"why": {
"p": "<p>Depth gives your mix a three-dimensional feel and stops it sounding like a wall. Width gives instruments their own space so they do not mask each other.</p>",
"d": "<p>Keep the lead vocal, kick, snare and bass in the centre. Balance the sides: if you pan one guitar 60% left, put a similar-weight part on the right. Check that wide effects do not cancel in mono using a correlation meter; negative correlation means phase problems.</p>"
},
"how": {
"p": "<p>Pick four instruments and place them: one near, one middle, one far, one at the back. Use only level, reverb send and a high shelf. Then check the correlation meter in MultiMeter and check the mix in mono.</p>",
"d": "<p>Near: dry, bright, short pre-delay of 30 to 60 ms if you add reverb. Far: more reverb, longer decay, high shelf -3 to -6 dB at 6 kHz. Open the MultiMeter Goniometer and Correlation: the correlation should stay mostly positive; if it dips to negative values, find which stereo effect causes it.</p>"
},
"ex": {
"p": "<p>Make a front-to-back layout of four instruments in one song and verify it in mono and on the correlation meter.</p>",
"d": "<p>Write the placement of each one (distance and pan) and what you used to achieve it.</p>"
}
},
"check": {
"ticks": [
"Two instruments clearly sit at different distances",
"The correlation meter stays mostly positive",
"The mix still works in mono"
]
},
"res": [
{
"id": "amm",
"title": "MultiMeter (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4a02/mac",
"what": "Analyzer, goniometer, level and loudness meters in one window.",
"type": "Apple guide"
},
{
"id": "ipn",
"title": "10 tips for better mixes through panning (iZotope)",
"url": "https://www.izotope.com/en/learn/10-tips-for-better-mixes-through-panning",
"what": "Where to put things and why.",
"type": "Article"
},
{
"id": "rvd",
"title": "Reverb vs. delay: a guide to 3D mixing (mastering.com)",
"url": "https://mastering.com/?p=23569",
"what": "What each effect does and why to send both from buses.",
"type": "Article"
}
]
},
{
"id": "w6",
"title": "Matching a reference with the analyser",
"mins": 45,
"parts": {
"what": {
"p": "<p>A spectrum analyser draws your mix as a shape from low to high frequencies. Put a reference song next to your mix and the shapes should be in the same family. Big differences tell you where to listen.</p>",
"d": "<p>An analyser shows level by frequency. Logic's MultiMeter has an Analyzer; Channel EQ has its own. Use averaged, slow readings and match loudness first so the comparison is fair. A mix usually slopes downward to the right (about -3 dB per octave when pink noise is flat on a typical analyser).</p>"
},
"why": {
"p": "<p>Your ears adapt to your room and monitors. The analyser gives you an independent opinion so you don't mix thin or boomy without knowing.</p>",
"d": "<p>Treat it as a guide, not a rule: the reference song has its own arrangement. If there is a large gap (more than 3 to 4 dB across a whole region) check by ear. Use broad moves: a low shelf, a wide bell, on the mix bus or the right subgroup.</p>"
},
"how": {
"p": "<p>Load a reference and your mix in the same session (the reference on its own channel, outside your master bus processing). Level-match them. Open MultiMeter's Analyzer on the output, play a section of each, and note where they differ.</p>",
"d": "<p>Match integrated loudness within 1 dB with the Loudness Meter. Compare the same type of section (chorus vs chorus). Write where your mix is more than 3 dB above or below the reference: low (below 150 Hz), low mids (200 to 500 Hz), presence (2 to 5 kHz), air (above 10 kHz). Fix one region with a broad move of 1 to 2 dB and re-check by ear.</p>"
},
"ex": {
"p": "<p>Compare your last mix with a reference on the analyser, change one broad thing, and check by ear.</p>",
"d": "<p>Log the reference and the single fix in the Log tab.</p>"
}
},
"check": {
"ticks": [
"I compared my mix and a reference on the analyser at matched level",
"I fixed one tonal difference with a broad move",
"I checked the change by ear, not just the analyser"
]
},
"res": [
{
"id": "amm",
"title": "MultiMeter (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4a02/mac",
"what": "Analyzer, goniometer, level and loudness meters in one window.",
"type": "Apple guide"
},
{
"id": "alm",
"title": "Surround MultiMeter loudness and level (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4246/mac",
"what": "The loudness meter section: how Logic reads LUFS and peaks.",
"type": "Apple guide"
},
{
"id": "irf",
"title": "How to use reference tracks when mixing (iZotope)",
"url": "https://www.izotope.com/en/learn/13-tips-for-using-references-while-mixing",
"what": "Level matching, breaks and quick A/B. Mentions iZotope products.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Working gate",
"text": "Mix a full multitrack so it sits near a reference in balance and tone.",
"checks": [
"Balance and tone sit near the reference",
"I used buses and automation",
"I checked the mix in mono",
"I logged it with one fix"
]
}
},
{
"id": "p",
"name": "Pro",
"who": "Mixes for others",
"lessons": [
{
"id": "p1",
"title": "Mixing worship and church music",
"mins": 50,
"parts": {
"what": {
"p": "<p>Worship mixes have a few clear priorities: the words must be understood, the congregation must be able to sing, and the band must feel like it is lifting the song rather than performing on top of it. The lead vocal is always the main character.</p>",
"d": "<p>In polished live-worship records the lead vocal sits clearly in front; acoustic and keys fill the middle; drums are tight and not too loud; electric guitars sit behind with delay; the room (congregation and ambience mics) is blended in for the chorus, and reverb is long but filtered so it does not cloud the words.</p>"
},
"why": {
"p": "<p>This is the music you actually mix. Learning the conventions means your mixes sound at home next to the records your church listens to.</p>",
"d": "<p>A typical build across a song: verse sparse (vocal, keys or acoustic, light drums), chorus fuller (all guitars, bass, full drums, room mics up), bridge with the biggest swell. Automate section levels and the congregation mic so the arrangement's energy is carried by the mix.</p>"
},
"how": {
"p": "<p>Listen to two worship references (for example the ones suggested in the Log tab) and write, for each: vocal level compared with the band, how long the reverb feels, how loud the drums are, how much room is audible. Then mix a worship song or a church recording with those choices.</p>",
"d": "<p>Make a table for each reference with: vocal vs band (dB estimate), reverb tail (short, medium, long), snare level, room mic presence at the chorus. Mix a song with automation that lifts the room and the band by 1 to 2 dB at each chorus while keeping the vocal at the same distance in front.</p>"
},
"ex": {
"p": "<p>Mix one worship song, compare it with a reference at matched loudness, and write down three differences.</p>",
"d": "<p>Log the reference and the one fix for next time.</p>"
}
},
"check": {
"ticks": [
"I wrote down vocal level, reverb length and drum level for two references",
"The words are clear in the loudest chorus of my mix",
"I logged the mix with a reference and one fix"
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
"id": "irf",
"title": "How to use reference tracks when mixing (iZotope)",
"url": "https://www.izotope.com/en/learn/13-tips-for-using-references-while-mixing",
"what": "Level matching, breaks and quick A/B. Mentions iZotope products.",
"type": "Article"
},
{
"id": "rvd",
"title": "Reverb vs. delay: a guide to 3D mixing (mastering.com)",
"url": "https://mastering.com/?p=23569",
"what": "What each effect does and why to send both from buses.",
"type": "Article"
}
]
},
{
"id": "p2",
"title": "Mix bus processing",
"mins": 45,
"parts": {
"what": {
"p": "<p>The mix bus is the channel everything goes through before the output. Light processing here makes the mix feel glued together. Heavy processing here hides problems instead of fixing them.</p>",
"d": "<p>A typical chain: a gentle bus compressor (2:1, slow attack 30 ms, auto release, 1 to 2 dB reduction), a subtle EQ (small shelf moves of 1 dB), and sometimes a limiter or clipper to catch peaks. Mix into it from the start so the balance accounts for it.</p>"
},
"why": {
"p": "<p>Because everything passes through it, a small mistake on the bus affects the whole mix. A light touch adds cohesion; a heavy one removes the dynamics you built.</p>",
"d": "<p>Keep bus gain reduction under 2 dB on a dynamic mix. Use level-matched bypass to prove it improves the sound. If the compressor pumps when the kick hits, lengthen the attack or add a high-pass sidechain filter. Do not use the bus to 'make it loud': that belongs to mastering.</p>"
},
"how": {
"p": "<p>Add a stock compressor to your Stereo Out. Set 2:1, attack 30 ms, release auto, and lower the threshold until the meter shows 1 to 2 dB on the loudest parts. Match the output gain and toggle it on and off a few times.</p>",
"d": "<p>Check how the drums, vocal and bass respond when it is on. If the vocal ducks, loosen the settings. Try one small shelf boost at the top end (1 dB at 10 kHz) and one tiny cut around 300 Hz; confirm with the level-matched comparison.</p>"
},
"ex": {
"p": "<p>Apply bus processing to one mix and prove with a level-matched A/B that it helps. If it does not, remove it.</p>",
"d": "<p>Write down the compressor's settings and the final gain reduction.</p>"
}
},
"check": {
"ticks": [
"Bus gain reduction stays at 2 dB or less",
"I compared on and off at matched loudness",
"It helped, or I removed it"
],
"num": {
"label": "Most gain reduction on the mix bus (dB)",
"ph": "e.g. 1.5",
"op": "le",
"val": 2,
"hard": 6,
"none": "Type the most gain reduction on the bus.",
"bad": "Over 6 dB on a mix bus is heavy. Raise the threshold.",
"soft": "{v} dB is more than a light glue. Ease off to 2 dB or less.",
"ok": "{v} dB is a gentle amount of glue."
}
},
"res": [
{
"id": "ibs",
"title": "Essential tips for mix bus processing (iZotope)",
"url": "https://www.izotope.com/en/learn/tips-for-mix-bus-processing",
"what": "What belongs on the mix bus, and how subtle it should be. Promotes iZotope products.",
"type": "Article"
},
{
"id": "aco",
"title": "Use Compressor in Logic Pro (Apple)",
"url": "https://support.apple.com/hu-hu/guide/logicpro/lgcef1bec9f3/mac",
"what": "Logic's own compressor. The menus on the page are in Hungarian; the article is in English.",
"type": "Apple guide"
}
]
},
{
"id": "p3",
"title": "Loudness and delivery",
"mins": 40,
"parts": {
"what": {
"p": "<p>Streaming services turn loud songs down to a common level, so squashing a mix to be louder gains nothing. They measure loudness in LUFS. You deliver a file with enough headroom and a sensible loudness.</p>",
"d": "<p>Integrated loudness is measured in LUFS over the whole track. The streaming reference is about -14 LUFS integrated, with a true peak ceiling around -1 dBTP. Quieter tracks are not always turned up, but louder ones are turned down.</p>"
},
"why": {
"p": "<p>Over-limiting costs punch and clarity. Knowing the numbers lets you decide on purpose instead of chasing loudness.</p>",
"d": "<p>For a mix going to a mastering engineer keep peaks around -6 dBFS and leave out the final limiter. For self-mastered release check integrated loudness around -14 to -9 LUFS depending on genre, true peak under -1 dBTP, and dither when exporting to 16 bit.</p>"
},
"how": {
"p": "<p>Bounce your latest mix (File > Bounce > Project or Section) and play the whole thing through the Loudness Meter in MultiMeter. Note integrated LUFS and true peak. Do the same with a reference song.</p>",
"d": "<p>Insert the Loudness Meter on Stereo Out, reset it, play the entire song and read the integrated value. Repeat for the reference. Compare the difference in LU. If your mix is much quieter, ask whether the dynamics are the reason (they should be) before adding limiting.</p>"
},
"ex": {
"p": "<p>Measure your mix and a reference and write both integrated loudness values.</p>",
"d": "<p>Decide whether to leave your mix as is or change it, and say why.</p>"
}
},
"check": {
"ticks": [
"I measured integrated LUFS and true peak for my mix",
"I measured a reference as well",
"I know what streaming normalisation does to a loud track"
],
"num": {
"label": "Integrated loudness of your mix (LUFS)",
"ph": "e.g. -16",
"op": "le",
"val": -8,
"hard": -2,
"none": "Type the integrated LUFS value from the meter.",
"bad": "That is extremely loud. Check the meter again.",
"soft": "{v} LUFS is very loud. Streaming will turn it down. Give the mix more room.",
"ok": "{v} LUFS recorded."
}
},
"res": [
{
"id": "lfs",
"title": "LUFS explained: loudness standards for music streaming (Boris FX)",
"url": "https://borisfx.com/blog/lufs-explained-loudness-standards-for-streaming/",
"what": "What LUFS is, streaming targets and true peak.",
"type": "Article"
},
{
"id": "alm",
"title": "Surround MultiMeter loudness and level (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4246/mac",
"what": "The loudness meter section: how Logic reads LUFS and peaks.",
"type": "Apple guide"
},
{
"id": "amm",
"title": "MultiMeter (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4a02/mac",
"what": "Analyzer, goniometer, level and loudness meters in one window.",
"type": "Apple guide"
}
]
},
{
"id": "p4",
"title": "Handling revision notes",
"mins": 35,
"parts": {
"what": {
"p": "<p>Revision notes are changes someone asks for after hearing your mix. A calm routine means you can make the changes quickly and keep the good parts.</p>",
"d": "<p>Routine: save the current mix as a new version, turn each note into a specific action, do one change at a time, compare each against the previous version, and keep a list of what was done.</p>"
},
"why": {
"p": "<p>Revisions are where trust is won or lost. Clear, quick changes show you can deliver.</p>",
"d": "<p>Vague notes need translating: 'more energy' may mean brighter vocal, faster delay or louder drums; 'muddy' usually means low mids; 'thin' means missing low end or too much high-pass. Ask a question when you are not sure.</p>"
},
"how": {
"p": "<p>Take a mix of yours and invent three revision notes (or ask a friend for them). Write a specific action for each one, make them one at a time, and bounce each version with a clear name.</p>",
"d": "<p>Name versions v1, v2 and so on. After each change, bounce and compare with the previous one at matched level. Record the change and the result in a list. Check afterwards that earlier notes still hold.</p>"
},
"ex": {
"p": "<p>Make a revision from three notes and list the specific change for each.</p>",
"d": "<p>Log the revision as a mix in the Log tab and note the one change that helped most.</p>"
}
},
"check": {
"ticks": [
"Each note became a specific action",
"I saved and named each version",
"I compared each version with the one before"
]
},
"res": []
},
{
"id": "p5",
"title": "Mastering basics",
"mins": 40,
"parts": {
"what": {
"p": "<p>Mastering is the last polish on a finished mix: tonal balance, loudness and consistency across a set of songs. Even if you never master professionally, you should know what it does so your mixes arrive in a good state.</p>",
"d": "<p>Typical mastering steps: critical listening, small EQ moves (1 to 2 dB), light compression, limiting to a target loudness, checking true peak and sequencing songs. The mix engineer's job is to leave headroom and avoid heavy bus limiting.</p>"
},
"why": {
"p": "<p>Mixes that are already limited and loud leave a mastering engineer little to work with. A clean mix with headroom master better.</p>",
"d": "<p>Deliver 24 bit, peaks around -6 dBFS, no limiter on the master, and a note of anything special. For your own releases, aim for the loudness the platform and genre suit and check on several systems.</p>"
},
"how": {
"p": "<p>Take a finished mix, remove the master limiter, and bounce it with peaks near -6 dBFS. Then make a simple master: a light EQ, a limiter to about -14 LUFS, true peak -1 dBTP. Compare them at matched level.</p>",
"d": "<p>Use the Loudness Meter to land at your target and keep the limiter's gain reduction low (a few dB). Compare mix and master loudness-matched; if the master does not sound better, you did too much.</p>"
},
"ex": {
"p": "<p>Master one mix with small moves and write down the numbers.</p>",
"d": "<p>Describe what the master changed that you could not do in the mix.</p>"
}
},
"check": {
"ticks": [
"I only made small moves of 2 dB or less",
"I checked loudness and true peak",
"I compared the mix and master at matched level"
]
},
"res": [
{
"id": "lfs",
"title": "LUFS explained: loudness standards for music streaming (Boris FX)",
"url": "https://borisfx.com/blog/lufs-explained-loudness-standards-for-streaming/",
"what": "What LUFS is, streaming targets and true peak.",
"type": "Article"
},
{
"id": "ibs",
"title": "Essential tips for mix bus processing (iZotope)",
"url": "https://www.izotope.com/en/learn/tips-for-mix-bus-processing",
"what": "What belongs on the mix bus, and how subtle it should be. Promotes iZotope products.",
"type": "Article"
},
{
"id": "alm",
"title": "Surround MultiMeter loudness and level (Apple)",
"url": "https://support.apple.com/guide/logicpro/lgcef24f4246/mac",
"what": "The loudness meter section: how Logic reads LUFS and peaks.",
"type": "Apple guide"
}
]
},
{
"id": "p6",
"title": "Blind A/B and feedback",
"mins": 40,
"parts": {
"what": {
"p": "<p>A blind A/B means listening to two versions without knowing which is which. It removes the bias of expecting the latest change to be better. Feedback from experienced engineers finds the things you cannot hear any more.</p>",
"d": "<p>Set up two versions matched in loudness, labelled X and Y by someone else, and ask which is better and why. Do it enough times to see if your choice is consistent.</p>"
},
"why": {
"p": "<p>Mixers fool themselves: a change you just made often sounds better only because you made it. Blind tests and outside ears are the cure.</p>",
"d": "<p>Ask specific questions (is the vocal clear? is the low end tight?) rather than 'what do you think?'. Weigh the answers: several people hearing the same issue is a signal.</p>"
},
"how": {
"p": "<p>Pick two versions of a mix, loudness-match them, ask someone to label them X and Y and play them in a random order. Write which you prefer each time, then see the labels.</p>",
"d": "<p>Do five trials with randomised order. If you pick the same version at least four times, the difference is real. Then send your best mix to an experienced engineer with two specific questions and write the answers in the Log tab.</p>"
},
"ex": {
"p": "<p>Run a blind A/B on two mixes and get feedback on one from an experienced engineer.</p>",
"d": "<p>Record the changes you made after feedback.</p>"
}
},
"check": {
"ticks": [
"I ran a blind A/B with matched loudness",
"I got feedback from an experienced engineer",
"I logged what I changed afterwards"
]
},
"res": [
{
"id": "irf",
"title": "How to use reference tracks when mixing (iZotope)",
"url": "https://www.izotope.com/en/learn/13-tips-for-using-references-while-mixing",
"what": "Level matching, breaks and quick A/B. Mentions iZotope products.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Pro gate",
"text": "Three mixes that survive a blind A/B, and feedback from experienced engineers.",
"checks": [
"Three mixes survived a blind A/B",
"Experienced engineers gave feedback",
"I delivered at the right loudness"
]
}
}
]
});
