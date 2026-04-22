"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  className?: string;
  scrambleClassName?: string;
}

const CHARS = "!<>-_/[]{}—=+*^?#ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

export function ScrambleText({
  text,
  duration = 800,
  className,
  scrambleClassName = "scramble-purple",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [scrambling, setScrambling] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot bailout for reduced motion
      setDisplay(text);
      setScrambling(false);
      return;
    }

    let rafId: number;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const revealCount = Math.floor(progress * text.length);

      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < revealCount || ch === " " || ch === "\n") {
          out += ch;
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(out);

      if (progress < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        setDisplay(text);
        setScrambling(false);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [text, duration]);

  return (
    <span
      className={cn(className, scrambling && scrambleClassName)}
      aria-label={text}
    >
      <span aria-hidden={scrambling ? "true" : undefined}>{display}</span>
    </span>
  );
}
