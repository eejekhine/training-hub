import { useState } from "react";

const sv = { width: "100%", height: 100, display: "block" };

const StretchVisual = ({ type }) => {
  const visuals = {
    "Hip Flexor Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="0" cy="-40" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-33" x2="0" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="-16" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="16" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="-16" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-16" y1="8" x2="-18" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="16" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="16" y1="8" x2="14" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <text x="4" y="0" fontSize="9" fill="#e2b96b" opacity="0.8">↑</text>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Lunge stance — tuck pelvis forward</text>
      </svg>
    ),
    "Couch Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="-10" cy="-38" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-10" y1="-31" x2="-8" y2="-8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-8" y1="-20" x2="-28" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-8" y1="-20" x2="8" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-8" y1="-8" x2="-20" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-20" y1="8" x2="-22" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-8" y1="-8" x2="10" y2="6" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="10" y1="6" x2="22" y2="-10" stroke="#e2b96b" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="16" y="-18" width="18" height="12" rx="3" fill="#333" stroke="#555" strokeWidth="1"/>
          <text x="25" y="-10" fontSize="7" fill="#888" textAnchor="middle">sofa</text>
          <line x1="-40" y1="22" x2="15" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Rear foot on sofa — sink hips down</text>
      </svg>
    ),
    "Pigeon Pose": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,50)">
          <circle cx="0" cy="-38" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-31" x2="0" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-20" x2="-22" y2="2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-20" x2="22" y2="2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="-18" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-18" y1="8" x2="10" y2="8" stroke="#e2b96b" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="0" y1="-10" x2="28" y2="10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="28" y1="10" x2="32" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#666">Front shin across — back leg straight</text>
      </svg>
    ),
    "90/90 Hip Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,50)">
          <circle cx="0" cy="-38" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-31" x2="0" y2="-5" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-20" x2="-18" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-20" x2="18" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-5" x2="-20" y2="5" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-20" y1="5" x2="-20" y2="20" stroke="#e2b96b" strokeWidth="2.5"/>
          <line x1="0" y1="-5" x2="20" y2="5" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="20" y1="5" x2="35" y2="5" stroke="#e2b96b" strokeWidth="2.5"/>
          <text x="-28" y="24" fontSize="8" fill="#e2b96b" opacity="0.7">90°</text>
          <text x="20" y="0" fontSize="8" fill="#e2b96b" opacity="0.7">90°</text>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#666">Both knees at 90° — sit tall</text>
      </svg>
    ),
    "Deep Squat Hold": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,55)">
          <circle cx="0" cy="-42" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-35" x2="0" y2="-18" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-26" x2="-22" y2="-18" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-26" x2="22" y2="-18" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-18" x2="-18" y2="2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-18" x2="18" y2="2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-18" y1="2" x2="-22" y2="20" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="18" y1="2" x2="22" y2="20" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-26" y1="20" x2="-16" y2="20" stroke="#e2b96b" strokeWidth="3" strokeLinecap="round"/>
          <line x1="16" y1="20" x2="26" y2="20" stroke="#e2b96b" strokeWidth="3" strokeLinecap="round"/>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Heels flat — chest up — hold doorframe</text>
      </svg>
    ),
    "Calf Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,50)">
          <circle cx="0" cy="-40" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-33" x2="-5" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-5" y1="-20" x2="-28" y2="-28" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-5" y1="-20" x2="-28" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-32" y1="-35" x2="-32" y2="22" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
          <line x1="-5" y1="-10" x2="-12" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-12" y1="8" x2="-14" y2="20" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-5" y1="-10" x2="14" y2="8" stroke="#e2b96b" strokeWidth="2.5"/>
          <line x1="14" y1="8" x2="16" y2="20" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#666">Back leg straight — heel flat on floor</text>
      </svg>
    ),
    "Standing Quad Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="0" cy="-42" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-35" x2="0" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="-20" y2="-16" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="20" y2="-16" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="-8" y2="12" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-8" y1="12" x2="-10" y2="24" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="12" y2="4" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="12" y1="4" x2="8" y2="-14" stroke="#e2b96b" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="0" y1="-22" x2="10" y2="-12" stroke="#e2b96b" strokeWidth="1.5" strokeDasharray="3,2"/>
          <circle cx="8" cy="-14" r="3" fill="#e2b96b" opacity="0.5"/>
          <line x1="-35" y1="24" x2="35" y2="24" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Hold ankle behind — stand tall</text>
      </svg>
    ),
    "Child's Pose": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,55)">
          <circle cx="-28" cy="10" r="6" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-22" y1="8" x2="5" y2="2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-10" y1="4" x2="-38" y2="-2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-10" y1="4" x2="-36" y2="6" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="5" y1="2" x2="14" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="14" y1="-10" x2="22" y2="14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="5" y1="2" x2="20" y2="14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-42" y1="18" x2="35" y2="18" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="95" textAnchor="middle" fontSize="9" fill="#666">Arms forward — sink hips to heels</text>
      </svg>
    ),
    "Ankle Dorsiflexion Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="-5" cy="-40" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-5" y1="-33" x2="-3" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-3" y1="-22" x2="-30" y2="-26" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-34" y1="-35" x2="-34" y2="24" stroke="#555" strokeWidth="3"/>
          <line x1="-3" y1="-10" x2="-18" y2="8" stroke="#e2b96b" strokeWidth="2.5"/>
          <line x1="-18" y1="8" x2="-20" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <text x="-8" y="16" fontSize="9" fill="#e2b96b" opacity="0.8">←</text>
          <line x1="-3" y1="-10" x2="16" y2="10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="16" y1="10" x2="18" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-40" y1="24" x2="38" y2="24" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Knee past toe — heel flat — feel the ankle</text>
      </svg>
    ),
    "Supine Twist": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="-30" cy="-8" r="6" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-24" y1="-8" x2="10" y2="-8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-10" y1="-8" x2="-10" y2="-26" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-10" y1="-8" x2="28" y2="-12" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="10" y1="-8" x2="26" y2="-2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="10" y1="-8" x2="-2" y2="14" stroke="#e2b96b" strokeWidth="2.5"/>
          <line x1="-2" y1="14" x2="-16" y2="16" stroke="#e2b96b" strokeWidth="2"/>
          <text x="5" y="6" fontSize="11" fill="#e2b96b" opacity="0.7">↙</text>
          <line x1="-42" y1="22" x2="38" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="96" textAnchor="middle" fontSize="9" fill="#666">Shoulders flat — knee drops across body</text>
      </svg>
    ),
    "Lying Hamstring Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,55)">
          <circle cx="-32" cy="-2" r="6" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-26" y1="-2" x2="8" y2="-2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-2" x2="-4" y2="-30" stroke="#e2b96b" strokeWidth="2.5"/>
          <line x1="-8" y1="-8" x2="-6" y2="-22" stroke="#e2b96b" strokeWidth="2" strokeDasharray="3,2"/>
          <line x1="-2" y1="-8" x2="-2" y2="-22" stroke="#e2b96b" strokeWidth="2" strokeDasharray="3,2"/>
          <line x1="0" y1="-2" x2="32" y2="-2" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-42" y1="14" x2="40" y2="14" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="96" textAnchor="middle" fontSize="9" fill="#666">Pull leg toward you — keep it straight</text>
      </svg>
    ),
    "Standing Hip Flexor Stretch": (
      <svg viewBox="0 0 120 100" style={sv}>
        <g transform="translate(60,52)">
          <circle cx="0" cy="-40" r="7" fill="none" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-33" x2="0" y2="-10" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="-16" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-22" x2="16" y2="-14" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="-16" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="-16" y1="8" x2="-18" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="0" y1="-10" x2="16" y2="8" stroke="#e2b96b" strokeWidth="2"/>
          <line x1="16" y1="8" x2="14" y2="22" stroke="#e2b96b" strokeWidth="2"/>
          <text x="4" y="0" fontSize="9" fill="#e2b96b" opacity="0.8">↑</text>
          <line x1="-40" y1="22" x2="40" y2="22" stroke="#333" strokeWidth="1.5"/>
        </g>
        <text x="60" y="98" textAnchor="middle" fontSize="9" fill="#666">Lunge stance — tuck pelvis under</text>
      </svg>
    ),
  };
  return visuals[type] || null;
};

const sessions = {
  15: [
    {
      id: "15a", title: "Explosive Primer", focus: "Plyometrics", tag: "🔥 Explosive", location: "Home",
      blocks: [
        { name: "Warm-Up", duration: "3 min", exercises: [
          { name: "Ankle Circles", detail: "10 each direction, each foot" },
          { name: "Leg Swings", detail: "10 forward/back, 10 lateral each leg" },
          { name: "Hip Circles", detail: "10 each direction" },
        ]},
        { name: "Plyometric Circuit", duration: "10 min", exercises: [
          { name: "Ankle Hops", detail: "3×15 — minimal knee bend, fast ground contact, focus on stiffness" },
          { name: "Squat Jumps", detail: "3×8 — full depth, explode up, land soft" },
          { name: "Broad Jumps", detail: "3×5 — max horizontal distance, stick every landing 2 sec" },
          { name: "Depth Drop → Freeze", detail: "3×5 — step off a step, absorb landing, hold 2 sec" },
        ]},
        { name: "Cool-Down Stretches", duration: "2 min", isStretch: true, exercises: [
          { name: "Standing Quad Stretch", detail: "30 sec each leg" },
          { name: "Calf Stretch", detail: "30 sec each leg against a wall" },
        ]},
      ],
    },
    {
      id: "15b", title: "Core Ignition", focus: "Core", tag: "💪 Core", location: "Home",
      blocks: [
        { name: "Activation", duration: "2 min", exercises: [
          { name: "Dead Bug", detail: "5 slow reps each side — brace hard, lower back stays flat" },
          { name: "Glute Bridge", detail: "10 reps — squeeze at top, 1 sec hold" },
        ]},
        { name: "Core Circuit", duration: "11 min", exercises: [
          { name: "Hollow Body Hold", detail: "3×20 sec — lower back glued to floor, legs low" },
          { name: "V-Ups", detail: "3×10 — controlled, full range" },
          { name: "Plank Shoulder Taps", detail: "3×20 — hips still, no rotation" },
          { name: "Single-Leg Glute Bridge", detail: "3×10 each — full extension, pause at top" },
        ]},
        { name: "Cool-Down Stretches", duration: "2 min", isStretch: true, exercises: [
          { name: "Child's Pose", detail: "60 sec" },
          { name: "Supine Twist", detail: "30 sec each side" },
        ]},
      ],
    },
    {
      id: "15c", title: "Mobility Reset", focus: "Mobility", tag: "🧘 Mobility", location: "Home",
      blocks: [
        { name: "Hip & Ankle Flow", duration: "15 min", isStretch: true, exercises: [
          { name: "90/90 Hip Stretch", detail: "90 sec each side — sit tall, don't collapse spine" },
          { name: "Couch Stretch", detail: "90 sec each side — hip flexor + quad opener" },
          { name: "Deep Squat Hold", detail: "2×60 sec — heels flat, chest up, use a doorframe for balance" },
          { name: "Ankle Dorsiflexion Stretch", detail: "60 sec each — knee over toe, heel flat on floor" },
          { name: "Pigeon Pose", detail: "90 sec each side" },
          { name: "Standing Hip Flexor Stretch", detail: "60 sec each — lunge position, tuck pelvis under" },
        ]},
      ],
    },
  ],
  30: [
    {
      id: "30a", title: "Jump Power Session", focus: "Plyometrics + Isometrics", tag: "🔥 Explosive", location: "Home",
      blocks: [
        { name: "Warm-Up", duration: "5 min", exercises: [
          { name: "Jumping Jacks", detail: "60 sec" },
          { name: "Leg Swings", detail: "10 each direction, each leg" },
          { name: "Hip Circles", detail: "10 each direction" },
          { name: "Ankle Hops", detail: "2×10 — light, easy" },
        ]},
        { name: "Plyometric Block", duration: "15 min", exercises: [
          { name: "Max Vertical Jumps", detail: "4×6 — full effort each rep, 90 sec rest between sets" },
          { name: "Single-Leg Hops", detail: "3×8 each leg — hop forward, land and hold 2 sec" },
          { name: "Tuck Jumps", detail: "3×8 — knees to chest, fast and explosive" },
          { name: "Lateral Bounds", detail: "3×8 each side — wide, stick every landing" },
          { name: "Approach Jump Practice", detail: "5 reps — 3-step approach, max effort, imagine touching rim" },
        ]},
        { name: "Isometric Block", duration: "7 min", exercises: [
          { name: "Wall Sit", detail: "3×45 sec — thighs parallel, back flat, no sliding" },
          { name: "Bulgarian Split Squat Hold", detail: "3×30 sec each leg — rear foot elevated on sofa/step" },
          { name: "Isometric Calf Raise Hold", detail: "3×30 sec — on a step, raised position, single leg" },
        ]},
        { name: "Cool-Down Stretches", duration: "3 min", isStretch: true, exercises: [
          { name: "Hip Flexor Stretch", detail: "60 sec each" },
          { name: "Calf Stretch", detail: "30 sec each" },
          { name: "Standing Quad Stretch", detail: "30 sec each" },
        ]},
      ],
    },
    {
      id: "30b", title: "Core & Stability", focus: "Core + Mobility", tag: "💪 Core", location: "Home",
      blocks: [
        { name: "Warm-Up", duration: "4 min", exercises: [
          { name: "Cat-Cow", detail: "10 slow reps" },
          { name: "Bird Dog", detail: "5 each side" },
          { name: "Glute Bridge", detail: "10 reps" },
        ]},
        { name: "Core Strength Block", duration: "14 min", exercises: [
          { name: "Hollow Body Hold", detail: "4×25 sec — lower back pinned, legs straight and low" },
          { name: "L-Sit (on floor)", detail: "3×15 sec — hands beside hips, lift legs, maintain compression" },
          { name: "Copenhagen Plank", detail: "3×20 sec each — side plank, top foot on chair/sofa" },
          { name: "Dragon Flag Negatives", detail: "3×5 — slow lower from hollow position on floor" },
          { name: "Ab Wheel (use towel on floor)", detail: "3×8 — slow, controlled, brace hard" },
        ]},
        { name: "Mobility Block", duration: "9 min", isStretch: true, exercises: [
          { name: "90/90 Hip Stretch", detail: "5 reps each side — transition slowly between positions" },
          { name: "Deep Squat Hold", detail: "10 deep breaths — expand ribcage, relax into depth" },
          { name: "Couch Stretch", detail: "90 sec each leg" },
          { name: "Supine Twist", detail: "30 sec each side" },
        ]},
      ],
    },
  ],
  45: [
    {
      id: "45a", title: "Full Vert Home Session", focus: "Plyos + Core + Mobility", tag: "🔥 Full Power", location: "Home",
      blocks: [
        { name: "Warm-Up", duration: "6 min", exercises: [
          { name: "Jump Rope Simulation", detail: "2 min — same motion, no rope" },
          { name: "Leg Swings", detail: "10 forward/back + 10 lateral, each leg" },
          { name: "Hip Circles", detail: "10 each way" },
          { name: "Ankle Hops", detail: "2×15 — easy, just warming tendons" },
          { name: "Inchworms", detail: "5 reps — walk hands out, push-up position, walk back" },
        ]},
        { name: "Plyometric Block", duration: "18 min", exercises: [
          { name: "Max Vertical Jumps", detail: "4×6 — full effort, 90 sec rest. These are your money reps." },
          { name: "Depth Drop → Vertical Jump", detail: "3×6 — step off step, land and immediately jump max" },
          { name: "Single-Leg Squat Jumps", detail: "3×6 each — pistol-ish depth, explode up single leg" },
          { name: "Tuck Jumps", detail: "3×8 — knees high, fast" },
          { name: "Approach Jump Practice", detail: "6 reps — 3-step run-up, reach max" },
          { name: "Lateral Bounds", detail: "3×8 each — wide, stick landing" },
        ]},
        { name: "Isometric Block", duration: "8 min", exercises: [
          { name: "Wall Sit", detail: "3×45 sec — parallel thighs, 15 sec rest only" },
          { name: "Bulgarian Split Squat Hold", detail: "3×30 sec each — rear foot on sofa" },
          { name: "Single-Leg Calf Raise Hold", detail: "3×30 sec — on edge of step, elevated" },
        ]},
        { name: "Core Block", duration: "8 min", exercises: [
          { name: "Hollow Body Hold", detail: "3×25 sec" },
          { name: "V-Ups", detail: "3×12" },
          { name: "Plank Shoulder Taps", detail: "3×20" },
          { name: "Single-Leg Glute Bridge", detail: "3×10 each" },
        ]},
        { name: "Cool-Down Stretches", duration: "5 min", isStretch: true, exercises: [
          { name: "Hip Flexor Stretch", detail: "90 sec each" },
          { name: "Pigeon Pose", detail: "60 sec each" },
          { name: "Calf Stretch", detail: "45 sec each" },
          { name: "Child's Pose", detail: "60 sec" },
        ]},
      ],
    },
    {
      id: "45b", title: "Strength-Endurance Home", focus: "Isometrics + Core + Plyos", tag: "⚡ Grind", location: "Home",
      blocks: [
        { name: "Warm-Up", duration: "5 min", exercises: [
          { name: "High Knees", detail: "45 sec" },
          { name: "Glute Bridges", detail: "15 reps" },
          { name: "Hip Flexor March", detail: "10 each leg — standing, drive knee up" },
          { name: "Ankle Hops", detail: "2×15" },
        ]},
        { name: "Isometric Strength Block", duration: "15 min", exercises: [
          { name: "Wall Sit", detail: "4×60 sec — thighs parallel, breathe steadily" },
          { name: "Bulgarian Split Squat Hold", detail: "4×40 sec each" },
          { name: "Isometric Hamstring Curl (on floor)", detail: "3×30 sec each — lie face down, press heel into floor hard" },
          { name: "Isometric Calf Hold", detail: "3×45 sec — raised position, single leg on step edge" },
        ]},
        { name: "Core Block", duration: "12 min", exercises: [
          { name: "Dead Bug", detail: "3×10 each side — slow, deliberate" },
          { name: "Copenhagen Plank", detail: "3×25 sec each" },
          { name: "Hollow Body → Arch Rock", detail: "3×10 reps — rock between hollow and arch, maintain tension" },
        ]},
        { name: "Plyo Finisher", duration: "8 min", exercises: [
          { name: "Squat Jumps", detail: "3×8 — full effort" },
          { name: "Approach Jumps", detail: "5 max effort — reach as high as you can" },
        ]},
        { name: "Cool-Down Stretches", duration: "5 min", isStretch: true, exercises: [
          { name: "Couch Stretch", detail: "90 sec each" },
          { name: "90/90 Hip Stretch", detail: "60 sec each" },
          { name: "Supine Twist", detail: "30 sec each side" },
        ]},
      ],
    },
  ],
  60: [
    {
      id: "60a", title: "Gym Power Session", focus: "Strength + Plyos + Upper", tag: "🏋️ Gym", location: "Gym",
      blocks: [
        { name: "Warm-Up", duration: "7 min", exercises: [
          { name: "Stationary Bike or Treadmill Jog", detail: "3 min easy" },
          { name: "Leg Swings + Hip Circles", detail: "10 each direction, each leg" },
          { name: "Ankle Hops", detail: "2×15" },
          { name: "Box Jumps (light)", detail: "2×5 — low box, easy warm-up" },
        ]},
        { name: "Lower Body Strength", duration: "18 min", exercises: [
          { name: "Trap Bar Deadlift (or Barbell)", detail: "4×4 — heavy, 80-85% max. Rest 2 min. Primary strength driver." },
          { name: "Bulgarian Split Squat", detail: "3×6 each — loaded with dumbbells, full depth" },
          { name: "Romanian Deadlift", detail: "3×8 — hamstring focus, control the descent" },
        ]},
        { name: "Upper Body Block", duration: "18 min", exercises: [
          { name: "Pull-Ups or Lat Pulldown", detail: "4×6 — weighted if possible. Back strength powers arm swing on jumps." },
          { name: "Dumbbell Shoulder Press", detail: "3×10 — overhead strength = more reach at peak jump" },
          { name: "Barbell or DB Row", detail: "3×8 — retract scapula at top, strong controlled pull" },
          { name: "Face Pulls", detail: "3×15 — rear delt health, posture, shoulder longevity" },
        ]},
        { name: "Plyo Finisher", duration: "10 min", exercises: [
          { name: "Depth Jump → Max Vertical", detail: "3×5 — step off box, land and immediately jump max. 90 sec rest." },
          { name: "Approach Jump Practice", detail: "6 reps — full run-up, reach highest point you can" },
        ]},
        { name: "Cool-Down Stretches", duration: "7 min", isStretch: true, exercises: [
          { name: "Hip Flexor Stretch", detail: "90 sec each" },
          { name: "Pigeon Pose", detail: "60 sec each" },
          { name: "Lying Hamstring Stretch", detail: "45 sec each" },
        ]},
      ],
    },
    {
      id: "60b", title: "Gym Posterior + Pull", focus: "Hamstrings + Back + Shoulders", tag: "🏋️ Gym", location: "Gym",
      blocks: [
        { name: "Warm-Up", duration: "7 min", exercises: [
          { name: "Treadmill Jog", detail: "3 min" },
          { name: "Hip Circles + Leg Swings", detail: "10 each" },
          { name: "Glute Bridges", detail: "15 reps" },
          { name: "Nordic Curl Negatives (light)", detail: "2×3 — slow lower only" },
        ]},
        { name: "Posterior Chain Strength", duration: "18 min", exercises: [
          { name: "Romanian Deadlift", detail: "4×6 — heavy, feel hamstring load at bottom, drive hips through" },
          { name: "Nordic Hamstring Curl", detail: "3×5 — 4 count slow eccentric. Best exercise for jumping power." },
          { name: "Hip Thrust (barbell)", detail: "4×8 — full extension at top, pause 1 sec" },
        ]},
        { name: "Upper Body Block", duration: "18 min", exercises: [
          { name: "Weighted Pull-Ups", detail: "4×5 — belt or hold DB between feet. Arm swing = free inches on your jump." },
          { name: "Incline Dumbbell Press", detail: "3×10 — chest and anterior delt" },
          { name: "Lateral Raises", detail: "3×12 — slow controlled, shoulder width + aesthetics" },
          { name: "Bicep Curl", detail: "3×10 — work toward your 27kg goal, strict form" },
          { name: "Tricep Pushdown", detail: "3×12 — cable or band, full extension" },
        ]},
        { name: "Plyo Finisher", duration: "10 min", exercises: [
          { name: "Max Vertical Jumps", detail: "3×5 — full effort, 90 sec rest" },
          { name: "Approach Jumps", detail: "5 reps — full run-up, max reach" },
        ]},
        { name: "Cool-Down Stretches", duration: "7 min", isStretch: true, exercises: [
          { name: "Pigeon Pose", detail: "90 sec each" },
          { name: "Lying Hamstring Stretch", detail: "60 sec each" },
          { name: "Child's Pose", detail: "60 sec" },
        ]},
      ],
    },
  ],
  75: [
    {
      id: "75a", title: "Gym Full Power Block", focus: "Strength + Plyos + Full Upper", tag: "🏋️ Gym", location: "Gym",
      blocks: [
        { name: "Warm-Up", duration: "8 min", exercises: [
          { name: "Rowing Machine or Bike", detail: "3 min easy" },
          { name: "Dynamic Mobility Flow", detail: "Leg swings, hip circles, inchworms — 2 min" },
          { name: "Box Jumps (warm-up)", detail: "3×4 — low box, light and easy" },
          { name: "Ankle Hops", detail: "2×15" },
        ]},
        { name: "Lower Body Strength", duration: "22 min", exercises: [
          { name: "Barbell Back Squat", detail: "4×4 — heavy, 80-85% max. 2 min rest." },
          { name: "Trap Bar Deadlift", detail: "3×4 — max intent, same heavy loading" },
          { name: "Bulgarian Split Squat", detail: "3×6 each — dumbbells, full depth" },
          { name: "Romanian Deadlift", detail: "3×8 — hamstring stretch, controlled" },
        ]},
        { name: "Plyometric Block", duration: "12 min", exercises: [
          { name: "Depth Jump → Max Vertical", detail: "4×5 — 40-50cm box, reactive, minimal ground time. 2 min rest." },
          { name: "Approach Jump Practice", detail: "8 reps — full run-up, reach absolute max every rep" },
        ]},
        { name: "Upper Body Block", duration: "22 min", exercises: [
          { name: "Weighted Pull-Ups", detail: "4×5 — add weight via belt or hold DB between legs" },
          { name: "Overhead Press (barbell or DB)", detail: "4×8 — standing, full lockout overhead" },
          { name: "Pendlay Row", detail: "3×8 — explosive pull, bar to lower chest" },
          { name: "Lateral Raises", detail: "3×12 — slow, no swinging" },
          { name: "Face Pulls", detail: "3×15 — external rotation, shoulder health" },
          { name: "Bicep Curl", detail: "3×8-10 — strict, work toward 27kg goal" },
        ]},
        { name: "Cool-Down Stretches", duration: "6 min", isStretch: true, exercises: [
          { name: "Hip Flexor Stretch", detail: "90 sec each" },
          { name: "Pigeon Pose", detail: "60 sec each" },
          { name: "Child's Pose", detail: "60 sec" },
        ]},
      ],
    },
  ],
  90: [
    {
      id: "90a", title: "Full Athlete Gym Day", focus: "Strength + Plyos + Upper + Core", tag: "🏋️ Complete", location: "Gym",
      blocks: [
        { name: "Warm-Up", duration: "10 min", exercises: [
          { name: "Treadmill Progressive Jog", detail: "4 min — start easy, ramp to 60% effort" },
          { name: "Dynamic Mobility Flow", detail: "Leg swings, hip circles, world's greatest stretch, inchworms — 3 min" },
          { name: "Box Jumps (warm-up)", detail: "3×4 low box, light and reactive" },
          { name: "Ankle Hops + Calf March", detail: "2×15 + 2×10" },
        ]},
        { name: "Max Strength Block", duration: "22 min", exercises: [
          { name: "Barbell Back Squat", detail: "5×4 — 80-87% max, 2 min rest." },
          { name: "Trap Bar Deadlift", detail: "4×4 — heavy, explosive intent" },
          { name: "Bulgarian Split Squat", detail: "3×6 each — dumbbells, slow down, explode up" },
          { name: "Nordic Hamstring Curl", detail: "3×5 — 4 count eccentric. Injury prevention + hamstring power." },
        ]},
        { name: "Plyometric Block", duration: "18 min", exercises: [
          { name: "Depth Jump → Max Vertical", detail: "5×5 — 45cm box. Rest 2 min between sets." },
          { name: "Weighted Jump Squat", detail: "3×5 — 20-25% BW, absolute max effort" },
          { name: "Single-Leg Depth Jumps", detail: "3×4 each leg" },
          { name: "Approach Jump Practice", detail: "10-12 reps — full run-up every time" },
        ]},
        { name: "Upper Body Block", duration: "22 min", exercises: [
          { name: "Weighted Pull-Ups", detail: "4×5 — belt or DB between legs. Arm swing = free inches." },
          { name: "Overhead Press (barbell)", detail: "4×6 — standing, strict. Reach strength at top of your jump." },
          { name: "Pendlay Row", detail: "4×6 — explosive pull, bar to lower chest" },
          { name: "Incline DB Press", detail: "3×10 — chest development" },
          { name: "Lateral Raises", detail: "3×12 — slow eccentric" },
          { name: "Hammer Curl", detail: "3×10 — forearm + brachialis, carries over to curl goal" },
          { name: "Tricep Pushdown", detail: "3×12 — cable or band" },
        ]},
        { name: "Core Block", duration: "8 min", exercises: [
          { name: "Hanging Leg Raises", detail: "4×12 — straight legs, no swing" },
          { name: "Ab Wheel Rollout", detail: "3×10 — full extension" },
          { name: "Dragon Flag Negatives", detail: "3×5 — 5 sec lowering phase" },
        ]},
        { name: "Mobility & Recovery", duration: "10 min", isStretch: true, exercises: [
          { name: "Hip Flexor Stretch", detail: "90 sec each — essential after heavy squatting" },
          { name: "Pigeon Pose", detail: "90 sec each" },
          { name: "Lying Hamstring Stretch", detail: "60 sec each" },
          { name: "Child's Pose", detail: "60 sec" },
        ]},
      ],
    },
  ],
};

const DURATION_ORDER = [15, 30, 45, 60, 75, 90];
const tagColors = {
  "🔥 Explosive": { bg: "#fff1e6", text: "#c2410c", border: "#fed7aa" },
  "💪 Core": { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  "🧘 Mobility": { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  "🔥 Full Power": { bg: "#fff7ed", text: "#9a3412", border: "#fdba74" },
  "⚡ Grind": { bg: "#faf5ff", text: "#6d28d9", border: "#ddd6fe" },
  "🏋️ Gym": { bg: "#1a1a2e", text: "#e2b96b", border: "#3d3d5c" },
  "🏋️ Complete": { bg: "#0f0f1a", text: "#f0c060", border: "#2a2a4a" },
};

export default function App() {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [expandedBlocks, setExpandedBlocks] = useState({});
  const [stretchView, setStretchView] = useState({});
  const isGym = selectedDuration >= 60;

  const toggleBlock = (i) => setExpandedBlocks(p => ({ ...p, [i]: !p[i] }));
  const toggleStretch = (k) => setStretchView(p => ({ ...p, [k]: !p[k] }));

  const handleDuration = (d) => { setSelectedDuration(d); setSelectedSession(null); setExpandedBlocks({}); setStretchView({}); };
  const handleSession = (s) => {
    setSelectedSession(s);
    const all = {};
    s.blocks.forEach((_, i) => (all[i] = true));
    setExpandedBlocks(all);
  };
  const handleBack = () => {
    if (selectedSession) { setSelectedSession(null); setExpandedBlocks({}); }
    else setSelectedDuration(null);
  };

  return (
    <div style={S.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#333;border-radius:2px}
        .db:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.4)}.db{transition:transform .15s,box-shadow .15s}
        .sc:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,.35)}.sc{transition:transform .15s,box-shadow .15s;cursor:pointer}
        .bb:hover{opacity:.85}.bb{transition:opacity .15s}
        .bk:hover{opacity:.7}.bk{transition:opacity .15s}
        .vb:hover{background:#2a2a2a!important}.vb{transition:background .15s}
      `}</style>

      <div style={S.header}>
        <div style={S.hInner}>
          <div>
            <div style={S.eyebrow}>GRAB RIM BY JUNE</div>
            <div style={S.title}>VERT LAB</div>
          </div>
          <div style={S.hsub}>Pick your time. Do the work.</div>
        </div>
      </div>

      <div style={S.content}>
        {selectedDuration && (
          <button onClick={handleBack} className="bk" style={S.back}>
            ← {selectedSession ? "Back to sessions" : "Back"}
          </button>
        )}

        {!selectedDuration && (
          <div>
            <div style={S.label}>HOW MUCH TIME DO YOU HAVE?</div>
            <div style={S.dGrid}>
              {DURATION_ORDER.map(d => {
                const gym = d >= 60;
                return (
                  <button key={d} className="db" onClick={() => handleDuration(d)} style={{
                    ...S.dBtn,
                    background: gym ? "linear-gradient(135deg,#1a1a2e,#16213e)" : "linear-gradient(135deg,#1c1c1c,#2a2a2a)",
                    border: gym ? "1px solid #e2b96b44" : "1px solid #ffffff18",
                  }}>
                    <div style={{ ...S.dMins, color: gym ? "#e2b96b" : "#fff" }}>{d}</div>
                    <div style={S.dLabel}>MIN</div>
                    <div style={{ ...S.dTag, background: gym ? "#e2b96b22" : "#ffffff11", color: gym ? "#e2b96b" : "#aaa" }}>
                      {gym ? "🏋️ Gym" : "🏠 Home"}
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={S.legend}>
              <span style={S.lItem}><span style={{ ...S.lDot, background: "#555" }} />Home — no equipment</span>
              <span style={S.lItem}><span style={{ ...S.lDot, background: "#e2b96b" }} />Gym — equipment needed</span>
            </div>
          </div>
        )}

        {selectedDuration && !selectedSession && (
          <div>
            <div style={S.label}>{selectedDuration} MIN — CHOOSE YOUR SESSION</div>
            <div style={S.sGrid}>
              {(sessions[selectedDuration] || []).map(s => {
                const tc = tagColors[s.tag] || {};
                return (
                  <div key={s.id} className="sc" onClick={() => handleSession(s)} style={{
                    ...S.sCard,
                    background: isGym ? "linear-gradient(135deg,#12121f,#1a1a2e)" : "#1c1c1c",
                    border: isGym ? "1px solid #e2b96b33" : "1px solid #2e2e2e",
                  }}>
                    <div style={{ ...S.sTag, background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>{s.tag}</div>
                    <div style={S.sTitle}>{s.title}</div>
                    <div style={S.sFocus}>{s.focus}</div>
                    <div style={S.sBc}>{s.blocks.length} blocks</div>
                    <div style={S.sArrow}>START →</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {selectedSession && (
          <div>
            <div style={S.sesHdr}>
              <div style={S.sesTtl}>{selectedSession.title}</div>
              <div style={S.sesMeta}>{selectedDuration} min · {selectedSession.focus}</div>
            </div>
            <div style={S.bList}>
              {selectedSession.blocks.map((block, idx) => {
                const open = expandedBlocks[idx];
                return (
                  <div key={idx} style={S.bCard}>
                    <button className="bb" onClick={() => toggleBlock(idx)} style={S.bHdr}>
                      <div style={S.bLeft}>
                        <div style={S.bNum}>{String(idx + 1).padStart(2, "0")}</div>
                        <div>
                          <div style={S.bName}>{block.name}</div>
                          <div style={S.bDur}>{block.duration}{block.isStretch ? " · tap exercises for visual" : ""}</div>
                        </div>
                      </div>
                      <div style={S.bChev}>{open ? "▲" : "▼"}</div>
                    </button>
                    {open && (
                      <div style={S.exList}>
                        {block.exercises.map((ex, ei) => {
                          const vk = `${idx}-${ei}`;
                          const viz = StretchVisual({ type: ex.name });
                          const show = stretchView[vk];
                          return (
                            <div key={ei} style={S.ex}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div style={{ flex: 1 }}>
                                  <div style={S.exN}>{ex.name}</div>
                                  <div style={S.exD}>{ex.detail}</div>
                                </div>
                                {block.isStretch && viz && (
                                  <button className="vb" onClick={() => toggleStretch(vk)} style={S.vizBtn}>
                                    {show ? "hide" : "show"}
                                  </button>
                                )}
                              </div>
                              {show && viz && <div style={S.vizBox}>{viz}</div>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={S.tip}>
              <div style={S.tipT}>💡 Remember</div>
              <div style={S.tipB}>Every max jump rep should be 100% effort. Quality over quantity — if you're not jumping your absolute highest, stop and rest more.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const S = {
  root: { minHeight: "100vh", background: "#111", color: "#fff", fontFamily: "'DM Sans',sans-serif" },
  header: { background: "linear-gradient(135deg,#0a0a0a,#1a1a1a)", borderBottom: "1px solid #2a2a2a", padding: "28px 24px 22px" },
  hInner: { maxWidth: 600, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
  eyebrow: { fontSize: 10, letterSpacing: 3, color: "#e2b96b", marginBottom: 4, fontWeight: 600 },
  title: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, lineHeight: 1, letterSpacing: 2 },
  hsub: { fontSize: 13, color: "#666", fontWeight: 500 },
  content: { maxWidth: 600, margin: "0 auto", padding: "28px 20px 60px" },
  label: { fontSize: 10, letterSpacing: 3, color: "#555", marginBottom: 20, fontWeight: 600 },
  dGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 24 },
  dBtn: { border: "none", borderRadius: 12, padding: "22px 12px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 },
  dMins: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 42, lineHeight: 1 },
  dLabel: { fontSize: 11, color: "#666", letterSpacing: 2, fontWeight: 600 },
  dTag: { marginTop: 10, fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 500 },
  legend: { display: "flex", gap: 20, flexWrap: "wrap" },
  lItem: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#555" },
  lDot: { width: 8, height: 8, borderRadius: "50%", display: "inline-block" },
  back: { background: "none", border: "none", color: "#666", fontSize: 13, cursor: "pointer", padding: "0 0 20px 0", display: "block", fontFamily: "'DM Sans',sans-serif" },
  sGrid: { display: "flex", flexDirection: "column", gap: 14 },
  sCard: { borderRadius: 14, padding: "22px 20px", position: "relative" },
  sTag: { display: "inline-block", fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 600, marginBottom: 12 },
  sTitle: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, letterSpacing: 1, marginBottom: 4 },
  sFocus: { fontSize: 13, color: "#888", marginBottom: 16 },
  sBc: { fontSize: 12, color: "#555" },
  sArrow: { position: "absolute", right: 20, bottom: 22, fontSize: 12, color: "#444", letterSpacing: 2, fontWeight: 600 },
  sesHdr: { marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid #222" },
  sesTtl: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 36, letterSpacing: 1, marginBottom: 4 },
  sesMeta: { fontSize: 13, color: "#666" },
  bList: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 },
  bCard: { background: "#1a1a1a", borderRadius: 12, overflow: "hidden", border: "1px solid #252525" },
  bHdr: { width: "100%", background: "none", border: "none", padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: "#fff", fontFamily: "'DM Sans',sans-serif", textAlign: "left" },
  bLeft: { display: "flex", alignItems: "center", gap: 14 },
  bNum: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: "#333", lineHeight: 1, minWidth: 28 },
  bName: { fontSize: 15, fontWeight: 600 },
  bDur: { fontSize: 12, color: "#555", marginTop: 2 },
  bChev: { fontSize: 10, color: "#444" },
  exList: { padding: "14px 18px 16px 60px", display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #222" },
  ex: { display: "flex", flexDirection: "column", gap: 4 },
  exN: { fontSize: 14, fontWeight: 600, color: "#e8e8e8" },
  exD: { fontSize: 12, color: "#777", lineHeight: 1.5 },
  vizBtn: { background: "#222", border: "1px solid #333", color: "#e2b96b", fontSize: 10, padding: "3px 8px", borderRadius: 6, cursor: "pointer", marginLeft: 10, whiteSpace: "nowrap", fontFamily: "'DM Sans',sans-serif", letterSpacing: 1 },
  vizBox: { background: "#141414", border: "1px solid #2a2a2a", borderRadius: 10, padding: "12px 8px 4px", marginTop: 6 },
  tip: { background: "#161616", border: "1px solid #2a2a2a", borderRadius: 12, padding: "16px 18px" },
  tipT: { fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#e2b96b" },
  tipB: { fontSize: 13, color: "#666", lineHeight: 1.6 },
};
