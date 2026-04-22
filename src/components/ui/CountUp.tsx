"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  format: (value: number) => string;
  duration?: number;
  className?: string;
}

export function CountUp({
  to,
  format,
  duration = 1500,
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot bailout for reduced motion
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            observer.disconnect();

            const start = performance.now();
            let rafId: number;

            const frame = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(to * eased);
              if (t < 1) {
                rafId = requestAnimationFrame(frame);
              } else {
                setValue(to);
              }
            };

            rafId = requestAnimationFrame(frame);

            return () => cancelAnimationFrame(rafId);
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
