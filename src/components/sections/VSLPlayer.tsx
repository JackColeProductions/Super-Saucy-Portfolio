"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const TRAIL_EMIT_INTERVAL = 28;
const TRAIL_PARTICLE_LIFE = 780;

export function VSLPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const lastEmit = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.play().catch(() => {
      setPlaying(false);
    });
  };

  useEffect(() => {
    const card = cardRef.current;
    const trail = trailRef.current;
    if (!card || !trail) return;
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastEmit.current < TRAIL_EMIT_INTERVAL) return;
      lastEmit.current = now;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const particle = document.createElement("span");
      particle.className = "vsl-trail-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      const scale = 0.7 + Math.random() * 0.8;
      particle.style.setProperty("--trail-scale", scale.toString());
      particle.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
      trail.appendChild(particle);

      window.setTimeout(() => {
        particle.remove();
      }, TRAIL_PARTICLE_LIFE);
    };

    card.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      card.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section
      id="vsl"
      className="relative px-6 pb-16 sm:pb-24 md:pb-32 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1000px]"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[85%] h-[60%] rounded-[50%] bg-primary/40 blur-3xl pointer-events-none"
        />

        <div
          ref={cardRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            "relative rounded-3xl overflow-hidden bg-surface-elevated cursor-pointer",
            "vsl-border-pulse transition-transform duration-500 ease-out",
            hovered && "scale-[1.01]"
          )}
          style={{ aspectRatio: "16 / 9" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/vsl.mp4"
            poster="/images/vsl-poster.jpg"
            controls={playing}
            playsInline
            preload="metadata"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play sales letter"
              className="absolute inset-0 flex items-center justify-center group focus-visible:outline-none cursor-pointer"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(124,58,237,0.45) 0%, rgba(13,8,24,0.85) 70%)",
                }}
              />

              <span className="relative flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="play-ring absolute left-1/2 top-1/2 w-20 h-20 rounded-full border-2 border-primary-light"
                />
                <span
                  aria-hidden="true"
                  className="play-ring absolute left-1/2 top-1/2 w-20 h-20 rounded-full border-2 border-primary-light"
                  style={{ animationDelay: "0.9s" }}
                />
                <span
                  className={cn(
                    "relative inline-flex w-20 h-20 items-center justify-center rounded-full",
                    "bg-gradient-primary shadow-glow-md",
                    "transition-transform duration-300 ease-out",
                    hovered ? "scale-110" : "scale-100"
                  )}
                >
                  <Play
                    className="w-8 h-8 text-white fill-white translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </span>
            </button>
          )}

          <div
            ref={trailRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none overflow-hidden"
          />
        </div>
      </motion.div>
    </section>
  );
}
