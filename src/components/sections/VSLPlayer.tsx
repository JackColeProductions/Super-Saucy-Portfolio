"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function VSLPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  return (
    <section className="relative px-6 pb-32 flex justify-center">
      <div className="relative w-full max-w-[1000px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[85%] h-[60%] rounded-[50%] bg-primary/40 blur-3xl pointer-events-none"
        />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            "relative rounded-3xl overflow-hidden bg-surface-elevated",
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
              className="absolute inset-0 flex items-center justify-center group focus-visible:outline-none"
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
        </div>
      </div>
    </section>
  );
}
