"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: 1 | 2 | 3;
  purple: boolean;
  duration: number;
  delay: number;
};

const STAR_COUNT = 180;

export function StarfieldBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: STAR_COUNT }, (_, i) => {
      const r = Math.random();
      const size: 1 | 2 | 3 = r < 0.6 ? 1 : r < 0.9 ? 2 : 3;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        purple: Math.random() < 0.22,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 4,
      };
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only random stars, must populate after mount to avoid hydration mismatch
    setStars(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {stars.map((star) => {
        const color = star.purple ? "#c084fc" : "#ffffff";
        const glow =
          star.size === 3
            ? star.purple
              ? "0 0 6px rgba(192, 132, 252, 0.9)"
              : "0 0 6px rgba(255, 255, 255, 0.85)"
            : undefined;
        return (
          <span
            key={star.id}
            className="absolute rounded-full star-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: color,
              boxShadow: glow,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
