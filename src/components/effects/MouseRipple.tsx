"use client";

import { useEffect, useRef } from "react";

const SIZE = 400;
const LERP = 0.14;

export function MouseRipple() {
  const rippleRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hasPointer = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = rippleRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!hasPointer.current) {
        current.current.x = e.clientX;
        current.current.y = e.clientY;
        hasPointer.current = true;
        el.style.opacity = "1";
      }
    };

    const handleLeave = () => {
      hasPointer.current = false;
      el.style.opacity = "0";
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      el.style.transform = `translate3d(${current.current.x - SIZE / 2}px, ${
        current.current.y - SIZE / 2
      }px, 0)`;
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={rippleRef}
      aria-hidden="true"
      className="fixed left-0 top-0 pointer-events-none"
      style={{
        width: SIZE,
        height: SIZE,
        zIndex: 1,
        opacity: 0,
        transition: "opacity 300ms ease-out",
        background:
          "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(168,85,247,0.18) 32%, rgba(168,85,247,0) 70%)",
        mixBlendMode: "screen",
        willChange: "transform, opacity",
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    />
  );
}
