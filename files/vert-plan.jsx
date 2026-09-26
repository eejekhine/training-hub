import { useState } from "react";

const PHASES = [
  {
    id: "foundation",
    label: "Foundation",
    weeks: "Weeks 1–2",
    color: "#4ade80",
    accent: "#166534",
    description: "Tendon prep, landing mechanics, hip activation. Build the base your jumps will launch from.",
    days: [
      {
        day: "Monday",
        label: "MON",
        tag: "Plyo + Core",
        home: true,
        blocks: [
          {
            id: "A",
            label: "Block A — Plyometrics",
            mins: 15,
            equipment: "none",
            exercises: [
              { name: "Ankle Hops", sets: "3×20", note: "Fast, low amplitude — train ankle stiffness" },
              { name: "Broad Jump → Stick Landing", sets: "3×5", note: "Focus on landing control,