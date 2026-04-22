"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { useInViewport } from "@/lib/useInViewport";
import { cn } from "@/lib/utils";
import { PlatformBadge, type Platform } from "./PlatformBadge";

export type VideoExample = {
  id: string;
  title: string;
  client: string;
  views: string;
  likes: string;
  category: "long-form" | "shorts" | "brand";
  platform: Platform;
  gradient: string;
  videoSrc?: string;
};

interface Props {
  video: VideoExample;
}

export function VideoExampleCard({ video }: Props) {
  const [rootRef, inView] = useInViewport<HTMLElement>("300px");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const el = videoRef.current;
    if (el) {
      el.play().catch(() => {
        /* silently ignore — placeholder src may not resolve */
      });
    }
  };

  const handleLeave = () => {
    setHovered(false);
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <article
      ref={rootRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08]",
        "bg-surface/40 backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "aspect-video md:aspect-[9/16]",
        hovered &&
          "scale-[1.03] border-primary/50 shadow-glow-md -translate-y-1"
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: video.gradient }}
      />

      {video.videoSrc && inView && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
          src={video.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,6,18,0.0) 40%, rgba(10,6,18,0.9) 100%)",
        }}
      />

      <div className="absolute top-3 left-3 z-10">
        <PlatformBadge platform={video.platform} />
      </div>

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none",
          "transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow-md">
          <Play
            className="w-6 h-6 text-white fill-white translate-x-0.5"
            strokeWidth={1.5}
          />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2">
            {video.title}
          </h3>
          <span className="text-xs text-text-muted">{video.client}</span>
        </div>

        <div
          className={cn(
            "flex items-center gap-3 text-[11px] text-text-secondary",
            "transition-all duration-300",
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <span className="inline-flex items-center gap-1">
            <span className="text-white font-medium">{video.views}</span>
            <span className="text-text-muted">views</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="inline-flex items-center gap-1">
            <span className="text-white font-medium">{video.likes}</span>
            <span className="text-text-muted">likes</span>
          </span>
        </div>
      </div>
    </article>
  );
}
