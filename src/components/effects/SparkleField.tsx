"use client";

import { useEffect, useRef, useState } from "react";

type Shape = "plus" | "star";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  shape: Shape;
  duration: number;
};

interface SparkleFieldProps {
  count?: number;
  className?: string;
  spawnInterval?: [number, number];
  sizeRange?: [number, number];
}

export function SparkleField({
  count = 12,
  className = "fixed inset-0 pointer-events-none overflow-hidden",
  spawnInterval = [500, 800],
  sizeRange = [10, 24],
}: SparkleFieldProps = {}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const timeouts = new Set<ReturnType<typeof setTimeout>>();
    const [minSize, maxSize] = sizeRange;
    const [minDelay, maxDelay] = spawnInterval;
    const initialCount = Math.max(1, Math.floor(count * 0.8));

    const spawn = () => {
      const id = nextId.current++;
      const duration = 2.4 + Math.random() * 1.2;
      const sparkle: Sparkle = {
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color: Math.random() < 0.5 ? "#c084fc" : "#ffffff",
        shape: Math.random() < 0.5 ? "plus" : "star",
        duration,
      };
      setSparkles((prev) => {
        const trimmed =
          prev.length >= count ? prev.slice(prev.length - count + 1) : prev;
        return [...trimmed, sparkle];
      });

      const cleanup = setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
        timeouts.delete(cleanup);
      }, duration * 1000);
      timeouts.add(cleanup);
    };

    for (let i = 0; i < initialCount; i++) {
      const t = setTimeout(spawn, i * 220);
      timeouts.add(t);
    }

    const schedule = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      const t = setTimeout(() => {
        spawn();
        schedule();
      }, delay);
      timeouts.add(t);
    };
    schedule();

    return () => {
      timeouts.forEach(clearTimeout);
      timeouts.clear();
    };
  }, [count, spawnInterval, sizeRange]);

  return (
    <div aria-hidden="true" className={className} style={{ zIndex: 0 }}>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute sparkle-pop"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            color: s.color,
            animationDuration: `${s.duration}s`,
            filter:
              s.color === "#c084fc"
                ? "drop-shadow(0 0 4px rgba(192,132,252,0.7))"
                : "drop-shadow(0 0 3px rgba(255,255,255,0.5))",
          }}
        >
          {s.shape === "plus" ? <PlusShape /> : <StarShape />}
        </span>
      ))}
    </div>
  );
}

function PlusShape() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11 0h2v9h9v2h-9v13h-2V11H0V9h11z" />
    </svg>
  );
}

function StarShape() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
    </svg>
  );
}
