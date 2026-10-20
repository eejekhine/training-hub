MH.reg({
"id": "drums",
"place": [
{
"q": "In a basic rock beat, which drum usually plays on beats 2 and 4?",
"o": [
"Kick",
"Snare",
"Floor tom",
"Crash"
],
"a": 1,
"w": "Kick on 1 and 3, snare on 2 and 4, hi-hat on every eighth note."
},
{
"q": "What is a single stroke roll?",
"o": [
"Both hands hit together",
"Alternating hands: R L R L",
"Two hits per hand",
"A hit with a grace note"
],
"a": 1,
"w": "Single strokes alternate hands."
},
{
"q": "What is the sticking of a single paradiddle?",
"o": [
"R L R L",
"R L R R L R L L",
"R R L L",
"R L L R"
],
"a": 1,
"w": "RLRR LRLL."
},
{
"q": "Which hand plays the hi-hat in a standard beat for a right-handed player?",
"o": [
"Left",
"Right",
"Either, it does not matter",
"Neither"
],
"a": 1,
"w": "Right hand on hi-hat, left on snare."
},
{
"q": "If you rush the tempo, what is the best fix?",
"o": [
"Play louder",
"Practise with a metronome and slow down",
"Play more notes",
"Use heavier sticks"
],
"a": 1,
"w": "A metronome shows you where the beat really is."
},
{
"q": "Can you play a basic rock beat (kick, snare, hi-hat) without stopping for one minute?",
"o": [
"No",
"Slowly",
"Yes, steadily"
],
"pts": [
0,
0.5,
1
]
},
{
"q": "Can you play a paradiddle at 80 bpm?",
"o": [
"No",
"Slowly",
"Yes"
],
"pts": [
0,
0.5,
1
]
},
{
"q": "Can you play along with a song for its full length?",
"o": [
"No",
"Part of one",
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
"who": "Never played",
"lessons": [
{
"id": "d1",
"title": "Seat, grip and kit layout",
"mins": 35,
"parts": {
"what": {
"p": "<p>Before you play, set up the kit so you are comfortable. Hold sticks loosely with a pivot point between your thumb and first finger.</p>",
"d": "<p>Matched grip: hold the stick about a third of the way up from the butt end, with the thumb and index finger forming a fulcrum. The other fingers wrap lightly so the stick can rebound.</p>"
},
"why": {
"p": "<p>Good setup prevents injury and lets you play without fighting the kit. In a booth you often must set it up from scratch.</p>",
"d": "<p>Throne height: thighs roughly parallel to the floor or slightly downward. Snare at a height where forearms angle slightly down to the head. Hi-hat and toms at comfortable reach.</p>"
},
"how": {
"p": "<p>Adjust the throne and snare until you are comfortable. Hit the snare with each hand, letting the stick bounce.</p>",
"d": "<p>Let the stick rebound off the head rather than pushing it down; keep your wrists loose; aim for equal volume in each hand.</p>"
},
"ex": {
"p": "<p>Spend 5 minutes hitting the snare with alternating hands at a slow, steady pace, listening for equal volume.</p>",
"d": "<p>Then set a metronome to 60 bpm and play quarter notes with each hand.</p>"
}
},
"check": {
"ticks": [
"I adjusted the throne and snare to feel comfortable",
"Both hands rebound off the head",
"The volume in each hand is even"
]
},
"res": [
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
},
{
"id": "prt",
"title": "5 essential drum rudiments for beginners (Pirate)",
"url": "https://pirate.com/en/blog/drum-tips/5-most-essential-drum-rudiments/",
"what": "Single stroke, double stroke, paradiddle, three-stroke, flam.",
"type": "Article"
}
]
},
{
"id": "d2",
"title": "Single and double strokes",
"mins": 35,
"parts": {
"what": {
"p": "<p>Two basic movements: single strokes (alternate hands) and double strokes (two hits per hand).</p>",
"d": "<p>Single stroke: R L R L. Double stroke: RR LL RR LL. Double strokes use one throw and one rebound.</p>"
},
"why": {
"p": "<p>These are the building blocks of everything on the drums, including fills and speed.</p>",
"d": "<p>Practise slow to fast and back to slow. Rudiments are a long-term practice habit.</p>"
},
"how": {
"p": "<p>On a snare or pad, play single strokes then double strokes at 60 bpm with a metronome, eighth notes.</p>",
"d": "<p>Increase tempo by 4 bpm once you can play a minute evenly.</p>"
},
"ex": {
"p": "<p>Play single and double strokes evenly for 2 minutes each at 60 bpm.</p>",
"d": "<p>Record your fastest clean tempo.</p>"
}
},
"check": {
"ticks": [
"Single strokes are even in volume",
"Double strokes sound like two equal hits",
"I used a metronome"
],
"num": {
"label": "Fastest clean double stroke tempo (bpm, eighth notes)",
"ph": "e.g. 60",
"op": "ge",
"val": 60,
"none": "Type your fastest clean tempo.",
"soft": "{v} bpm is slower than the target. Keep practising at 60 bpm.",
"ok": "{v} bpm. Good enough to move on."
}
},
"res": [
{
"id": "pas",
"title": "International drum rudiments (Percussive Arts Society)",
"url": "https://pas.org/resources/rudiments/",
"what": "The 40 rudiments. Practise slow to fast to slow.",
"type": "Article"
},
{
"id": "prt",
"title": "5 essential drum rudiments for beginners (Pirate)",
"url": "https://pirate.com/en/blog/drum-tips/5-most-essential-drum-rudiments/",
"what": "Single stroke, double stroke, paradiddle, three-stroke, flam.",
"type": "Article"
}
]
},
{
"id": "d3",
"title": "Your first groove",
"mins": 40,
"parts": {
"what": {
"p": "<p>A groove is a repeating pattern. The basic rock beat is hi-hat on every eighth note, kick on 1 and 3, snare on 2 and 4.</p>",
"d": "<p>Count '1 & 2 & 3 & 4 &'. Hi-hat on every number and '&'. Kick on 1 and 3. Snare on 2 and 4.</p>"
},
"why": {
"p": "<p>Almost every song starts with a basic groove. If you can play it steadily, you can play along with many songs.</p>",
"d": "<p>Learn each limb separately, then together.</p>"
},
"how": {
"p": "<p>Play hi-hat alone, add snare, then add kick. Go very slowly.</p>",
"d": "<p>Use 60 bpm, then 70, then 80.</p>"
},
"ex": {
"p": "<p>Play a basic rock beat without stopping for one minute at 70 bpm.</p>",
"d": "<p>Record and listen for steadiness.</p>"
}
},
"check": {
"ticks": [
"I played the beat without stopping for one minute",
"The hi-hat stayed steady",
"I used a metronome"
]
},
"res": [
{
"id": "dnb",
"title": "15 basic drum beats for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/basic-drum-beats-for-beginners/",
"what": "Fifteen first grooves. Notation is in images on the page.",
"type": "Article"
},
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
}
]
},
{
"id": "d4",
"title": "Kick variations",
"mins": 35,
"parts": {
"what": {
"p": "<p>The basic beat has the kick on beats 1 and 3. Move or add kick hits and the groove changes completely while the hi-hat and snare stay exactly the same.</p>",
"d": "<p>In 4/4 with eighth-note hi-hats, count 1 & 2 & 3 & 4 &. Variations: kick on 1 and the '&' of 3; kick on 1, the '&' of 2 and 3; kick on 1 and 3 plus the '&' of 4.</p>"
},
"why": {
"p": "<p>Most songs use a handful of small kick changes. Being able to change only the kick while the hands keep going is the start of limb independence.</p>",
"d": "<p>Practise the hands alone until automatic. Add the kick one place at a time. If your hands start to change, slow down by 10 to 20 bpm. Say the count out loud as you play.</p>"
},
"how": {
"p": "<p>Play hi-hat on every eighth and snare on 2 and 4. Add kick on 1 and 3. Then change the kick to 1 and the '&' of 3. Then 1, the '&' of 2, and 3. Do four bars of each at 60 bpm.</p>",
"d": "<p>Use the Drum Ninja beat list for notated versions of these patterns. Work: 4 bars of the standard beat, 4 bars of each variation, no stopping between. Metronome 60 bpm, then 70, then 80 when you can do the whole cycle twice without a mistake.</p>"
},
"ex": {
"p": "<p>Play the standard beat and two kick variations in a row, four bars each, without stopping.</p>",
"d": "<p>Record it and listen for the hi-hat staying even when the kick changes.</p>"
}
},
"check": {
"ticks": [
"I played the standard beat and two kick variations without stopping",
"The hi-hat stayed even when the kick moved",
"I stayed in time with a metronome"
]
},
"res": [
{
"id": "dnb",
"title": "15 basic drum beats for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/basic-drum-beats-for-beginners/",
"what": "Fifteen first grooves. Notation is in images on the page.",
"type": "Article"
},
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
}
]
},
{
"id": "d5",
"title": "Your first fill",
"mins": 35,
"parts": {
"what": {
"p": "<p>A fill is a short break from the groove, usually in the last beat or bar of a phrase. It tells everyone the next section is coming.</p>",
"d": "<p>A simple fill: after three bars of groove, in bar 4 play the first two beats of groove then four eighth-notes around the toms on beats 3 and 4, then crash and kick on 1 of the next bar.</p>"
},
"why": {
"p": "<p>Without fills a song feels flat. With fills, the listener knows where they are in the song. Church drumming especially uses clear fills to lead into choruses.</p>",
"d": "<p>The key to a good fill is landing on the next downbeat exactly. Practise the fill alone, then in the context of the groove. Use single strokes alternating hands: R L R L around snare, high tom, floor tom.</p>"
},
"how": {
"p": "<p>Set a metronome to 60 bpm. Play three bars of the basic beat, then in bar 4 play beats 1 and 2 of the beat followed by four eighth-note strokes on snare, high tom, floor tom, floor tom. Land with a crash and kick on 1.</p>",
"d": "<p>Count the fill: 3 & 4 &. Sticking R L R L. Loop four-bar phrases for two minutes. Speed up by 4 bpm per session.</p>"
},
"ex": {
"p": "<p>Play four-bar phrases with a fill every fourth bar for two minutes without losing time.</p>",
"d": "<p>Record and check the crash lands exactly on the click.</p>"
}
},
"check": {
"ticks": [
"I played groove and fill in a loop for two minutes",
"The beat stayed steady through the fill",
"The crash landed on 1"
]
},
"res": [
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
},
{
"id": "dnb",
"title": "15 basic drum beats for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/basic-drum-beats-for-beginners/",
"what": "Fifteen first grooves. Notation is in images on the page.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Foundations gate",
"text": "Play a basic rock beat and a fill steadily with a click, and have a starter song started.",
"checks": [
"Beat plays for a minute with a click",
"A fill lands on 1",
"A starter song is started"
]
}
},
{
"id": "w",
"name": "Working",
"who": "Plays a little",
"lessons": [
{
"id": "dw1",
"title": "Paradiddles",
"mins": 35,
"parts": {
"what": {
"p": "<p>The single paradiddle is a four-note sticking: right left right right, left right left left (RLRR LRLL). It looks odd at first but it flips which hand leads.</p>",
"d": "<p>Single paradiddle = R L R R | L R L L. Accent the first note of each group. It is one of the 40 PAS rudiments and the basis for many fills and grooves.</p>"
},
"why": {
"p": "<p>Paradiddles build control, and they give you flexible fills: you can move them across the toms while the other hand keeps a steady pulse.</p>",
"d": "<p>Play it on a pad or snare at 60 bpm in eighth notes first, then sixteenths. Keep the unaccented notes quiet (about half the volume).</p>"
},
"how": {
"p": "<p>Play paradiddles on one surface at 60 bpm, eighth notes, accenting the first note of each group. Do 2 minutes. Then move the right-hand notes of the first group to the hi-hat and the left to the snare, as a groove.</p>",
"d": "<p>Use the Drum Ninja and Pirate guides for sticking and practice tips. Metronome up in 4 bpm steps: 60, 64, 68, 72 and so on. Once clean, play the paradiddle as sixteenths at 60 bpm.</p>"
},
"ex": {
"p": "<p>Play paradiddles evenly for 2 minutes and record your fastest clean tempo.</p>",
"d": "<p>Then play one bar of paradiddles around the toms as a fill and land on the crash.</p>"
}
},
"check": {
"ticks": [
"The first note of each group is clearly accented",
"The pattern is even with no stumbling",
"I used a metronome the whole time"
],
"num": {
"label": "Fastest clean paradiddle tempo (bpm, eighth notes)",
"ph": "e.g. 80",
"op": "ge",
"val": 70,
"none": "Type your fastest clean tempo.",
"soft": "{v} bpm. Keep going until you can play 70 bpm cleanly.",
"ok": "{v} bpm clean. Good."
}
},
"res": [
{
"id": "dnp",
"title": "How to play a paradiddle for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/how-to-play-a-paradiddle-for-beginners/",
"what": "Sticking and metronome practice.",
"type": "Article"
},
{
"id": "prt",
"title": "5 essential drum rudiments for beginners (Pirate)",
"url": "https://pirate.com/en/blog/drum-tips/5-most-essential-drum-rudiments/",
"what": "Single stroke, double stroke, paradiddle, three-stroke, flam.",
"type": "Article"
},
{
"id": "pas",
"title": "International drum rudiments (Percussive Arts Society)",
"url": "https://pas.org/resources/rudiments/",
"what": "The 40 rudiments. Practise slow to fast to slow.",
"type": "Article"
}
]
},
{
"id": "dw2",
"title": "Sixteenth-note hi-hat grooves",
"mins": 40,
"parts": {
"what": {
"p": "<p>A sixteenth-note hi-hat plays four notes per beat instead of two. It sounds busier and smoother, and many R&B and pop grooves use it.</p>",
"d": "<p>Count 1 e & a 2 e & a 3 e & a 4 e & a. Hi-hat on every syllable. Snare on 2 and 4 (on the number). Kick on 1 and wherever the groove needs it.</p>"
},
"why": {
"p": "<p>R&B drumming usually sits on a continuous hi-hat. If you can keep the hi-hat steady while the kick and snare move, you can play along to many songs on your list.</p>",
"d": "<p>Keep the hi-hat hand relaxed and light, with the wrist doing the work. Accent the main beats slightly and keep the other notes quiet. Practise at 50 to 60 bpm first because sixteenth notes feel twice as busy.</p>"
},
"how": {
"p": "<p>Play sixteenth-note hi-hats alone at 50 bpm for a minute, alternating hands (R L R L) or just the right hand. Then add snare on 2 and 4. Then add kick on 1.</p>",
"d": "<p>Metronome 50 bpm. Use right hand only if alternating is too hard. After a clean minute, move to 60 bpm. Add a second kick on the 'a' of 2 for a funk-style shape.</p>"
},
"ex": {
"p": "<p>Play a sixteenth-note groove with kick and snare for one minute at 60 bpm.</p>",
"d": "<p>Record and listen for an even hi-hat.</p>"
}
},
"check": {
"ticks": [
"The hi-hat stayed even for the whole minute",
"Kick and snare landed on the right counts",
"I used a metronome"
]
},
"res": [
{
"id": "dnb",
"title": "15 basic drum beats for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/basic-drum-beats-for-beginners/",
"what": "Fifteen first grooves. Notation is in images on the page.",
"type": "Article"
},
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
}
]
},
{
"id": "dw3",
"title": "Ghost notes and pocket",
"mins": 40,
"parts": {
"what": {
"p": "<p>Ghost notes are very soft snare notes between the main snare hits. They make a groove feel relaxed and alive, which is the heart of R&B drumming.</p>",
"d": "<p>A ghost note is played with a low stick height (about 1 to 2 cm) while the backbeat is played from higher. Pattern: a ghost note on the 'e' or 'a' before the backbeat.</p>"
},
"why": {
"p": "<p>A straight beat can sound like a machine. Ghost notes and dynamic differences give it a human pocket.</p>",
"d": "<p>Keep the backbeat strong and the ghost notes just audible. The hi-hat stays steady. The feel often sits slightly behind the click.</p>"
},
"how": {
"p": "<p>Play a basic beat with sixteenth-note hi-hats. Add one soft snare note on the 'a' of 1 before the backbeat on 2. Keep it very quiet. Loop at 60 bpm.</p>",
"d": "<p>Add more ghost notes one at a time: the 'e' of 2, the 'a' of 3. Record yourself and check ghost notes are about a third of the volume of the backbeat.</p>"
},
"ex": {
"p": "<p>Play a groove with ghost notes for 2 minutes with a clear difference in volume.</p>",
"d": "<p>Record it and listen for the pocket.</p>"
}
},
"check": {
"ticks": [
"The ghost notes are clearly quieter than the backbeat",
"The hi-hat stayed steady",
"The groove felt relaxed rather than rushed"
]
},
"res": [
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
},
{
"id": "dnb",
"title": "15 basic drum beats for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/basic-drum-beats-for-beginners/",
"what": "Fifteen first grooves. Notation is in images on the page.",
"type": "Article"
}
]
},
{
"id": "dw4",
"title": "Fills around the kit",
"mins": 40,
"parts": {
"what": {
"p": "<p>Longer fills move across the toms and cymbals. They use the same stickings (singles, doubles, paradiddles) but across different drums.</p>",
"d": "<p>Plan the fill before you play it. Examples: sixteenth notes on snare, then toms, ending on the crash; a paradiddle fill starting on snare moving to the toms.</p>"
},
"why": {
"p": "<p>A good fill leads into the next section and sets up the energy. Planning stops you panicking in the moment.</p>",
"d": "<p>Fills should match the song. For worship songs keep fills simple and short; for R&B use fewer, more rhythmic fills.</p>"
},
"how": {
"p": "<p>Write down three fills (one beat, two beats, and one bar). Play each in a four-bar groove. Land on the next bar's 1.</p>",
"d": "<p>Practise each fill alone, then with the groove, at 60 bpm. Then rotate them without thinking.</p>"
},
"ex": {
"p": "<p>Play groove and three different fills in rotation without losing time.</p>",
"d": "<p>Record and check that each fill lands on 1.</p>"
}
},
"check": {
"ticks": [
"I played three different fills",
"The tempo stayed steady through the fills",
"Each fill landed on 1"
]
},
"res": [
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
},
{
"id": "dnp",
"title": "How to play a paradiddle for beginners (Drum Ninja)",
"url": "https://thedrumninja.com/how-to-play-a-paradiddle-for-beginners/",
"what": "Sticking and metronome practice.",
"type": "Article"
}
]
},
{
"id": "dw5",
"title": "Playing with a click and recording yourself",
"mins": 40,
"parts": {
"what": {
"p": "<p>Playing with a click means a metronome keeps the time while you play. Recording yourself shows you what you actually do, which is often different from what you think.</p>",
"d": "<p>Record a groove on your phone while playing with a click. Listen back and mark where you rush (get ahead) or drag (fall behind), usually at fills or section changes.</p>"
},
"why": {
"p": "<p>Rushing and dragging are the two biggest timing problems. The click and a recording fix them faster than anything else.</p>",
"d": "<p>Small differences matter: rushing 5 bpm over 8 bars is easy to hear. Compare week to week.</p>"
},
"how": {
"p": "<p>Play a four-minute groove practice with a click and record it. Listen back and mark every place you rush or drag. Fix one and re-record.</p>",
"d": "<p>Use a click at 70 bpm. If the click disappears behind your playing, you are in time. If you hear it separately, you are off.</p>"
},
"ex": {
"p": "<p>Record a minute of groove and write the one thing to fix. Re-record.</p>",
"d": "<p>Compare the two recordings.</p>"
}
},
"check": {
"ticks": [
"I recorded with a click",
"I found one place I rush or drag",
"I re-recorded after fixing it"
]
},
"res": []
}
],
"gate": {
"title": "Working gate",
"text": "Play 16th-note grooves with ghost notes and paradiddle fills, and play one song with a click.",
"checks": [
"A groove with ghost notes",
"Paradiddle fills",
"One song with a click"
]
}
},
{
"id": "p",
"name": "Pro",
"who": "Plays well",
"lessons": [
{
"id": "dp1",
"title": "Shuffle and 6/8",
"mins": 40,
"parts": {
"what": {
"p": "<p>A shuffle and a 6/8 feel are triplet-based. Instead of dividing the beat in two, you divide it in three. Many gospel and worship songs use this.</p>",
"d": "<p>Count triplets as 1 trip let, 2 trip let. A shuffle plays the first and third of each triplet. 6/8 has two big beats with three eighth-notes each: ONE two three FOUR five six.</p>"
},
"why": {
"p": "<p>Triplet feel is very common in slower worship and soul songs. If you can only play straight beats, you will sound stiff on these.</p>",
"d": "<p>In 6/8, the kick is often on 1, the snare on 4, and the hi-hat plays all six eighths. Keep the pulse in 2, not in 6.</p>"
},
"how": {
"p": "<p>Practise counting 1 trip let 2 trip let at 60 bpm. Then play a hi-hat on all triplets, snare on 2 and 4, kick on 1. Then play the shuffle by leaving out the middle note.</p>",
"d": "<p>For 6/8 set a click at 60 bpm per dotted quarter (two clicks per bar). Hi-hat on all six eighths, kick on 1, snare on 4.</p>"
},
"ex": {
"p": "<p>Play a shuffle and a 6/8 groove for one minute each.</p>",
"d": "<p>Record and check the triplets are even.</p>"
}
},
"check": {
"ticks": [
"I played a shuffle in time",
"I played a 6/8 groove in time",
"The triplets were even"
]
},
"res": [
{
"id": "drb",
"title": "The Beat (Drumeo)",
"url": "https://www.drumeo.com/beat/",
"what": "Free drumming magazine: beats, fills, technique, rudiments.",
"type": "Article"
}
]
},
{
"id": "dp2",
"title": "Dynamics and builds",
"mins": 40,
"parts": {
"what": {
"p": "<p>Worship songs build from quiet to loud. The drums control that build with volume, cymbals and fills.</p>",
"d": "<p>Typical build: verse on closed hi-hat or rim, pre-chorus adds snare and kick, chorus on ride or open hi-hat with crashes, bridge builds to the loudest.</p>"
},
"why": {
"p": "<p>A drummer who only plays loud can overpower a song. Dynamics let the singer and the congregation lead.</p>",
"d": "<p>Dynamic control comes from stick height. Practise at three heights: low (piano), medium, high (forte).</p>"
},
"how": {
"p": "<p>Play a 16-bar build: 4 bars quiet on hi-hat, 4 bars add snare and kick, 4 bars on ride, 4 bars crash on every downbeat. Keep the tempo the same.</p>",
"d": "<p>Use stick heights of about 3 cm, 10 cm and 20 cm. Count aloud. Record and check that the volume steps are clear.</p>"
},
"ex": {
"p": "<p>Play a 16-bar build and record it.</p>",
"d": "<p>Check each section is clearly louder than the one before.</p>"
}
},
"check": {
"ticks": [
"Each section is clearly louder than the one before",
"The tempo stayed steady through the build",
"I recorded and listened back"
]
},
"res": []
},
{
"id": "dp3",
"title": "Playing a full song",
"mins": 60,
"parts": {
"what": {
"p": "<p>Play along with a full song from start to finish, following its structure.</p>",
"d": "<p>Learn the structure first: intro, verse, pre-chorus, chorus, bridge, outro. Mark where the fills and builds are.</p>"
},
"why": {
"p": "<p>This is the main goal: playing a song, not exercises.</p>",
"d": "<p>Start with the recording at 85% speed if possible, then at full speed.</p>"
},
"how": {
"p": "<p>Choose a song from your Songs list. Listen and write the structure with bar counts. Play along section by section, then the whole song.</p>",
"d": "<p>Use the stages in the Songs tab. Use headphones in the booth if allowed.</p>"
},
"ex": {
"p": "<p>Play a song through with the recording and mark it in the Songs tab.</p>",
"d": "<p>Record it and list three fixes.</p>"
}
},
"check": {
"ticks": [
"I played a full song with the track",
"I marked it in the Songs tab",
"I recorded it and wrote three fixes"
]
},
"res": []
},
{
"id": "dp4",
"title": "Recording yourself in Logic",
"mins": 45,
"parts": {
"what": {
"p": "<p>Record your drumming into Logic and look at the waveform. You can see exactly how steady you are.</p>",
"d": "<p>Record with a click. Zoom in and compare each hit to the grid lines.</p>"
},
"why": {
"p": "<p>It shows rushing and dragging clearly.</p>",
"d": "<p>Check the snare hits on 2 and 4 and the kick on 1.</p>"
},
"how": {
"p": "<p>Record a minute of groove with a click. Look at the waveform and mark early and late hits.</p>",
"d": "<p>If you can, record from a phone or a mic in the booth and import the file.</p>"
},
"ex": {
"p": "<p>Record, view and note two fixes. Re-record.</p>",
"d": "<p>Compare the two takes.</p>"
}
},
"check": {
"ticks": [
"I recorded with a click",
"I checked my hits against the grid",
"I made two fixes and re-recorded"
]
},
"res": [
{
"id": "alg",
"title": "Logic Pro User Guide for Mac (Apple)",
"url": "https://support.apple.com/guide/logicpro/",
"what": "Use its search box for Step Sequencer, Drum Machine Designer and Piano Roll.",
"type": "Apple guide"
}
]
}
],
"gate": {
"title": "Pro gate",
"text": "Play three songs through including a shuffle and a build.",
"checks": [
"Three songs play through",
"A shuffle",
"A build over 16 bars"
]
}
}
]
});
