"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  range?: number;
  maxOffset?: number;
  className?: string;
}

export function Magnetic({
  children,
  range = 100,
  maxOffset = 10,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const distance = Math.hypot(dx, dy);

      if (distance < range) {
        const falloff = 1 - distance / range;
        const magnitude = maxOffset * falloff;
        if (distance > 0.1) {
          x.set((dx / distance) * magnitude);
          y.set((dy / distance) * magnitude);
        }
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [range, maxOffset, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-flex" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
