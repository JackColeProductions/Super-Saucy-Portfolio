"use client";

import { motion } from "framer-motion";

type Orb = {
  color: string;
  size: number;
  top: string;
  left: string;
  opacity: number;
  duration: number;
  path: { x: string[]; y: string[] };
};

const orbs: Orb[] = [
  {
    color: "#a855f7",
    size: 820,
    top: "32%",
    left: "20%",
    opacity: 0.3,
    duration: 24,
    path: {
      x: ["-50%", "-30%", "-55%", "-70%", "-50%"],
      y: ["-50%", "-35%", "-60%", "-40%", "-50%"],
    },
  },
  {
    color: "#c026d3",
    size: 700,
    top: "55%",
    left: "70%",
    opacity: 0.26,
    duration: 28,
    path: {
      x: ["-50%", "-65%", "-40%", "-55%", "-50%"],
      y: ["-50%", "-65%", "-45%", "-60%", "-50%"],
    },
  },
  {
    color: "#7c3aed",
    size: 900,
    top: "80%",
    left: "30%",
    opacity: 0.28,
    duration: 30,
    path: {
      x: ["-50%", "-40%", "-60%", "-35%", "-50%"],
      y: ["-50%", "-60%", "-40%", "-55%", "-50%"],
    },
  },
];

export function AuroraGlow() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            backgroundColor: orb.color,
            opacity: orb.opacity,
            willChange: "transform",
          }}
          initial={{ x: "-50%", y: "-50%" }}
          animate={{ x: orb.path.x, y: orb.path.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
    </div>
  );
}
