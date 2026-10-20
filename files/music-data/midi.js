MH.reg({
"id": "midi",
"place": [
{
"q": "What does a MIDI note contain?",
"o": [
"A recording of a sound",
"Which note, how hard and how long, but no sound itself",
"A mixed song",
"A compressed audio file"
],
"a": 1,
"w": "MIDI is instructions. A software instrument turns them into sound."
},
{
"q": "What does velocity control?",
"o": [
"The tempo",
"How hard a note is played, usually its loudness",
"The pitch",
"The length of the note"
],
"a": 1,
"w": "Velocity is how hard the key was hit, from 1 to 127."
},
{
"q": "What does quantize do?",
"o": [
"Changes the key",
"Moves notes onto the nearest grid position",
"Deletes quiet notes",
"Adds reverb"
],
"a": 1,
"w": "It snaps timing to a grid, which can make a part sound stiff if overused."
},
{
"q": "What is swing?",
"o": [
"A stereo effect",
"Delaying the off-beat notes to give a shuffled, relaxed feel",
"A louder snare",
"A type of reverb"
],
"a": 1,
"w": "Swing pushes every second subdivision a little late."
},
{
"q": "Have you made a drum pattern in a DAW?",
"o": [
"Never",
"Once or twice",
"Many times"
],
"pts": [
0,
0.5,
1
]
},
{
"q": "Have you built a bass line and chords under a drum beat?",
"o": [
"Never",
"Once",
"Many times"
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
"who": "Never made beats",
"lessons": [
{
"id": "m1",
"title": "Software instruments and the piano roll",
"mins": 40,
"parts": {
"what": {
"p": "<p>In Logic, a software instrument makes sound from MIDI notes. The piano roll is a grid where each note is a bar: higher up is a higher pitch, longer is a longer note.</p>",
"d": "<p>MIDI carries note on and off, pitch, velocity and controller data. A software instrument (such as Alchemy, Retro Synth or Sampler) turns it into audio. The piano roll lets you edit each note's pitch, start, length and velocity.</p>"
},
"why": {
"p": "<p>Everything you do with beats starts here. If you can put notes where you want, you can build drums, bass, chords and melodies without owning a keyboard.</p>",
"d": "<p>You can enter notes by clicking in the piano roll with the Pencil tool, by playing a connected MIDI keyboard, or with Musical Typing (Window > Show Musical Typing). The grid snaps to a division (1/16, for example) which you set at the top.</p>"
},
"how": {
"p": "<p>Create a software instrument track. Open the piano roll, set the grid to 1/8 or 1/16, and click in an eight-note melody. Play it back. Then change the length of three notes and the velocity of three notes in the velocity lane.</p>",
"d": "<p>Use Musical Typing if you have no keyboard: press Cmd+K to show it, then play notes with the A to L keys. Record a few bars and see how the timing looks. Compare with notes entered by clicking.</p>"
},
"ex": {
"p": "<p>Make an eight-note melody in the piano roll, edit the velocity of three notes and loop it.</p>",
"d": "<p>Describe in one sentence how the velocity changes the sound for the instrument you chose.</p>"
}
},
"check": {
"ticks": [
"I created a software instrument track and entered notes",
"I changed note lengths",
"I changed velocities and heard the difference"
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
},
{
"id": "m2",
"title": "A drum pattern in the step sequencer",
"mins": 40,
"parts": {
"what": {
"p": "<p>Step Sequencer is a grid where each row is a drum sound and each column is a step in the bar. You click steps to make a pattern. It is the fastest way to build a beat.</p>",
"d": "<p>A bar of 4/4 with 16 steps gives each step a sixteenth note. Kick on steps 1 and 9, snare on 5 and 13, closed hi-hat on every second step is a basic beat. Each step can have its own velocity.</p>"
},
"why": {
"p": "<p>Drum patterns are the backbone of a beat. If your drums are weak, the rest of the beat will not hold up.</p>",
"d": "<p>Use accents: make the hi-hat louder on the downbeats and softer between them. Leave space. A busy pattern with everything on every step sounds flat.</p>"
},
"how": {
"p": "<p>Create a drum track with a kit (Drum Machine Designer or a Drum Kit Designer kit). Open Step Sequencer and program a basic beat. Then vary the hi-hat velocity and add one extra kick. Loop it for eight bars.</p>",
"d": "<p>Pattern for 16 steps: kick 1, 7, 11; snare 5, 13; hi-hat on all odd steps with alternating velocities (100, 60). Copy the pattern for eight bars, then change bar 4 and bar 8 with a small fill.</p>"
},
"ex": {
"p": "<p>Make a one-bar beat, loop it for eight bars and add a fill at bar 8.</p>",
"d": "<p>Play it back and check that it stays interesting for the whole loop.</p>"
}
},
"check": {
"ticks": [
"I programmed kick, snare and hi-hat",
"I varied the hi-hat velocities",
"The loop lasted eight bars with a fill"
]
},
"res": [
{
"id": "alg",
"title": "Logic Pro User Guide for Mac (Apple)",
"url": "https://support.apple.com/guide/logicpro/",
"what": "Use its search box for Step Sequencer, Drum Machine Designer and Piano Roll.",
"type": "Apple guide"
},
{
"id": "amp",
"title": "Drum programming basics (Amped Studio)",
"url": "https://ampedstudio.com/blog/online-drum-programming/",
"what": "Step sequencer, quantize, swing, velocity. Promotes their app.",
"type": "Article"
}
]
},
{
"id": "m3",
"title": "Bass line and chords",
"mins": 45,
"parts": {
"what": {
"p": "<p>A bass line plays the root notes of the chords, usually low down. Chords sit above it. Together with drums they make a full backing track.</p>",
"d": "<p>Use a four-chord progression (for example vi IV I V in C: Am F C G). Bass notes: A1, F1, C2, G1. Chord voicings in the middle octave (C3 to C4). Bass rhythm locks with the kick.</p>"
},
"why": {
"p": "<p>A bass and chord loop shows you whether your drums feel right. It also gives you something to sing or play over.</p>",
"d": "<p>Keep bass notes short or long to match the kick drum. Voice leading in the chords (small movements) sounds smoother than big jumps.</p>"
},
"how": {
"p": "<p>Add a bass track and a piano or pad track to your drum loop. Write the bass notes on the kick hits. Add chords that last one bar each.</p>",
"d": "<p>Start with one-bar chords and bass roots. Then add a rhythm: bass plays root on beat 1 and the 'and' of 2. Chords play on beats 1 and 3.</p>"
},
"ex": {
"p": "<p>Build eight bars of drums, bass and chords and listen for clashes.</p>",
"d": "<p>Fix any note that sounds out of key by checking the scale.</p>"
}
},
"check": {
"ticks": [
"The bass plays the chord roots",
"The bass rhythm lines up with the kick",
"I made eight bars"
]
},
"res": [
{
"id": "alg",
"title": "Logic Pro User Guide for Mac (Apple)",
"url": "https://support.apple.com/guide/logicpro/",
"what": "Use its search box for Step Sequencer, Drum Machine Designer and Piano Roll.",
"type": "Apple guide"
},
{
"id": "mtl",
"title": "musictheory.net lessons",
"url": "https://www.musictheory.net/lessons",
"what": "Free theory lessons, in order from the basics.",
"type": "Article"
}
]
},
{
"id": "m4",
"title": "Quantize, velocity and swing",
"mins": 40,
"parts": {
"what": {
"p": "<p>Quantize snaps notes to the grid. Velocity changes how hard they sound. Swing delays the off-beats a bit. Used well, these make programmed music feel human.</p>",
"d": "<p>Swing is often set between 52% and 62%. Humanise by changing velocity by 10 to 20 points between notes, and by moving some notes slightly early or late (a few ticks).</p>"
},
"why": {
"p": "<p>A beat with every note at the same volume and exactly on the grid sounds like a machine. Listeners can tell, even if they cannot say why.</p>",
"d": "<p>Swing hats more than kick and snare. Nudge ghost notes slightly late. Keep the kick and snare tight and let the hi-hat breathe.</p>"
},
"how": {
"p": "<p>Take your beat from m2 and make two versions: one stiff, with all velocities the same and no swing, and one humanised. Compare.</p>",
"d": "<p>In the piano roll or Drum Machine Designer, use the Quantize swing setting for the hi-hat, then vary velocities by hand. Bounce both at the same level and compare.</p>"
},
"ex": {
"p": "<p>Make a stiff and a humanised version of your beat and decide which is better and why.</p>",
"d": "<p>Write down the swing percentage and velocity range you used.</p>"
}
},
"check": {
"ticks": [
"I made a stiff and a humanised version",
"I used swing on the hi-hat",
"I can say why the better one sounds better"
]
},
"res": [
{
"id": "grv",
"title": "How to add groove and swing to a beat (Violet Recording)",
"url": "https://violetrecording.com/how-to-add-groove-to-a-beat/",
"what": "Swing, micro-timing and velocity. Has affiliate links.",
"type": "Article"
},
{
"id": "amp",
"title": "Drum programming basics (Amped Studio)",
"url": "https://ampedstudio.com/blog/online-drum-programming/",
"what": "Step sequencer, quantize, swing, velocity. Promotes their app.",
"type": "Article"
}
]
}
],
"gate": {
"title": "Foundations gate",
"text": "Make an eight-bar beat with drums, bass and chords, and humanise it.",
"checks": [
"Eight bars with drums, bass and chords",
"Hi-hat velocities and swing used",
"I bounced it"
]
}
},
{
"id": "w",
"name": "Working",
"who": "Made a few beats",
"lessons": [
{
"id": "mw1",
"title": "Layering drums",
"mins": 40,
"parts": {
"what": {
"p": "<p>Layering means playing two sounds together to get one bigger sound. A kick might have a punchy click on top of a deep sub.</p>",
"d": "<p>Layer for different frequency ranges: a kick with a sub layer (40 to 80 Hz) and a click layer (2 to 5 kHz). A snare with a clap or a room layer.</p>"
},
"why": {
"p": "<p>Single samples often sound thin. Layers give weight and character.</p>",
"d": "<p>Check phase between layers: if the layers cancel, flip polarity on one. High-pass the top layer and low-pass the bottom so they share the spectrum.</p>"
},
"how": {
"p": "<p>Layer two kick samples and two snare samples in your beat. High-pass the top layer, low-pass the bottom, and balance them.</p>",
"d": "<p>Zoom in on the waveforms to see whether the layers start at the same time. Use a Gain plug-in with the Phase Invert button to test polarity.</p>"
},
"ex": {
"p": "<p>Make a layered kick and snare and compare them with single samples at matched level.</p>",
"d": "<p>Check in mono.</p>"
}
},
"check": {
"ticks": [
"I layered a kick and a snare",
"I checked polarity or phase",
"I compared against single samples"
]
},
"res": [
{
"id": "amp",
"title": "Drum programming basics (Amped Studio)",
"url": "https://ampedstudio.com/blog/online-drum-programming/",
"what": "Step sequencer, quantize, swing, velocity. Promotes their app.",
"type": "Article"
}
]
},
{
"id": "mw2",
"title": "Groove templates and feel",
"mins": 40,
"parts": {
"what": {
"p": "<p>Feel is the small timing differences that make a beat groove. Hip-hop and R&B often sit slightly behind the beat.</p>",
"d": "<p>Techniques: swing, shifting the snare a few ticks late, shifting the hi-hat slightly early, and varying velocity in patterns of accent and ghost.</p>"
},
"why": {
"p": "<p>Feel is what separates a beat that sounds professional from one that sounds like a demo.</p>",
"d": "<p>Move only a little: 5 to 20 ticks is plenty. Listen on loop for a while before deciding.</p>"
},
"how": {
"p": "<p>Take your beat and shift the snare 10 ticks late, then 20, then 30. Listen to how the feel changes. Keep the one that feels best.</p>",
"d": "<p>Use the piano roll or the region inspector's Delay (ms) setting for the snare track. Record the value.</p>"
},
"ex": {
"p": "<p>Make three versions with different snare timings and choose one.</p>",
"d": "<p>Log which timing you chose.</p>"
}
},
"check": {
"ticks": [
"I tried three snare timings",
"I chose one and can say why",
"I logged the value"
]
},
"res": [
{
"id": "grv",
"title": "How to add groove and swing to a beat (Violet Recording)",
"url": "https://violetrecording.com/how-to-add-groove-to-a-beat/",
"what": "Swing, micro-timing and velocity. Has affiliate links.",
"type": "Article"
}
]
},
{
"id": "mw3",
"title": "R&B chords and voicings",
"mins": 45,
"parts": {
"what": {
"p": "<p>R&B progressions use seventh and ninth chords, which have a richer sound than plain triads.</p>",
"d": "<p>Common: maj7, m7, dominant 7 and add9. A smooth progression is ii7 V7 Imaj7 or Imaj7 vi7 ii7 V7.</p>"
},
"why": {
"p": "<p>The chords carry the mood of the song. Knowing them lets you write your own.</p>",
"d": "<p>Voice-lead each chord: keep common tones and move others by step. Leave out the root if the bass plays it.</p>"
},
"how": {
"p": "<p>Build an eight-bar progression with seventh chords. Play the bass on the roots. Make the chords last one bar each.</p>",
"d": "<p>Use the notes of C major: Cmaj7, Am7, Dm7, G7. Voice lead so the top note moves by a step each change.</p>"
},
"ex": {
"p": "<p>Make an eight-bar R&B chord progression with bass and drums.</p>",
"d": "<p>Listen on loop and fix any chord that jumps.</p>"
}
},
"check": {
"ticks": [
"The progression uses seventh chords",
"The chords move smoothly",
"It sits with the bass and drums"
]
},
"res": [
{
"id": "mtl",
"title": "musictheory.net lessons",
"url": "https://www.musictheory.net/lessons",
"what": "Free theory lessons, in order from the basics.",
"type": "Article"
},
{
"id": "mte",
"title": "musictheory.net exercises",
"url": "https://www.musictheory.net/exercises",
"what": "Free drills: staff, keyboard, fretboard and ear training.",
"type": "Practice"
}
]
},
{
"id": "mw4",
"title": "Arrangement",
"mins": 45,
"parts": {
"what": {
"p": "<p>Arrangement is how a beat changes over time: intro, verse, chorus and so on. Adding and removing parts keeps it interesting.</p>",
"d": "<p>Typical form: 4-bar intro, 16-bar verse, 8-bar chorus, repeat, 8-bar bridge, final chorus. Change by adding or removing layers at section changes.</p>"
},
"why": {
"p": "<p>A loop on repeat gets boring. Arrangement turns a loop into a song.</p>",
"d": "<p>Use contrast: remove drums for a bar before the chorus, add a new sound in the chorus.</p>"
},
"how": {
"p": "<p>Take your 8-bar loop and arrange it into 32 bars with a clear intro, verse and chorus. Mark each section with a marker in Logic.</p>",
"d": "<p>Create markers (Option+' to add a marker) and name them. Add or remove at least one element at each section change.</p>"
},
"ex": {
"p": "<p>Arrange a 32-bar beat with at least three sections.</p>",
"d": "<p>Bounce it and listen from start to finish.</p>"
}
},
"check": {
"ticks": [
"I made a 32-bar arrangement with three sections",
"Something changes at each section",
"I bounced and listened"
]
},
"res": []
}
],
"gate": {
"title": "Working gate",
"text": "Arrange a 32-bar R&B beat with seventh chords, layered drums and a chosen feel.",
"checks": [
"32 bars arranged",
"Seventh chords used",
"Layered drums with checked phase"
]
}
},
{
"id": "p",
"name": "Pro",
"who": "Makes beats",
"lessons": [
{
"id": "mp1",
"title": "A full beat in 90 minutes",
"mins": 90,
"parts": {
"what": {
"p": "<p>Build a complete beat start to finish with a timer. A limit forces you to make decisions and finish.</p>",
"d": "<p>Plan: 10 minutes drums, 15 minutes bass and chords, 15 minutes melody or hook, 30 minutes arrangement, 20 minutes basic mix and bounce.</p>"
},
"why": {
"p": "<p>Finishing is a skill. Many producers collect unfinished loops. Finishing beats builds speed and confidence.</p>",
"d": "<p>Resist fixing small details until the arrangement is done. Use references for the feel.</p>"
},
"how": {
"p": "<p>Set a 90-minute timer. Start with drums, then bass and chords, then a hook, then arrange and bounce.</p>",
"d": "<p>Save the project at each stage so you can see progress. Log the finished beat in the Log tab.</p>"
},
"ex": {
"p": "<p>Finish one beat in 90 minutes and bounce it.</p>",
"d": "<p>Write down which stage ran over.</p>"
}
},
"check": {
"ticks": [
"I finished a beat in 90 minutes",
"I bounced it",
"I logged it"
]
},
"res": []
},
{
"id": "mp2",
"title": "Tightening recorded drums",
"mins": 45,
"parts": {
"what": {
"p": "<p>If you record real drums in a booth, you can edit the timing to line up with the grid while keeping feel.</p>",
"d": "<p>Methods: Flex Time and Smart Tempo, manual nudging of hits, or quantizing audio to the grid with a strength below 100%.</p>"
},
"why": {
"p": "<p>Cleaner timing makes it easier to mix and to add layers on top.</p>",
"d": "<p>Keep some of the human feel: use a quantize strength of 50 to 80%.</p>"
},
"how": {
"p": "<p>Record a short drum take with a click. Use Flex Time to tighten the worst hits and leave the rest.</p>",
"d": "<p>Compare the edited take with the original. Count how many hits you moved and by how much.</p>"
},
"ex": {
"p": "<p>Edit one drum take, tighten it and compare it with the original.</p>",
"d": "<p>Write down the quantize strength you used.</p>"
}
},
"check": {
"ticks": [
"I recorded a take with a click",
"I tightened the worst hits",
"I kept some feel"
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
},
{
"id": "mp3",
"title": "Exporting stems",
"mins": 30,
"parts": {
"what": {
"p": "<p>A stem is a bounced audio file of one part of a song, such as all the drums. Stems let others mix your beat.</p>",
"d": "<p>In Logic use File > Export > All Tracks as Audio Files, or bounce each group from the mixer. Make sure all stems start at the same point.</p>"
},
"why": {
"p": "<p>Stems are how you hand over a beat to a singer, or take one to another project.</p>",
"d": "<p>Name files clearly (song_bpm_key_drums.wav) and export at the same sample rate and bit depth as the project.</p>"
},
"how": {
"p": "<p>Export stems for your 90-minute beat: drums, bass, chords, melody. Import them into a new project and check they line up.</p>",
"d": "<p>Check the stems sum to the same sound as the original bounce.</p>"
},
"ex": {
"p": "<p>Export stems and rebuild the beat from them.</p>",
"d": "<p>Check nothing is missing.</p>"
}
},
"check": {
"ticks": [
"I exported stems that start at the same point",
"The rebuilt beat sounds like the original",
"Files are named clearly"
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
"text": "Finish three beats, including one in 90 minutes, and export stems for one.",
"checks": [
"Three finished beats",
"One built in 90 minutes",
"Stems exported and checked"
]
}
}
]
});
