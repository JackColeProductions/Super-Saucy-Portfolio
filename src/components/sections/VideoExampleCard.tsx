"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlatformBadge, type Platform } from "./PlatformBadge";

export type VideoExample = {
  id: string;
  title: string;
  client: string;
  views?: string;
  likes?: string;
  category: "long-form" | "shorts" | "brand";
  platform: Platform;
  gradient: string;
  youtubeId?: string;
  videoSrc?: string;
};

interface Props {
  video: VideoExample;
}

export function VideoExampleCard({ video }: Props) {
  const [hovered, setHovered] = useState(false);
  const [activated, setActivated] = useState(false);

  const thumbnailUrl = video.youtubeId
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : null;

  const hasStats = Boolean(video.views || video.likes);

  const activate = () => {
    if (video.youtubeId) setActivated(true);
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08]",
        "bg-surface/40 backdrop-blur-xl aspect-video",
        "transition-all duration-500 ease-out",
        hovered &&
          !activated &&
          "scale-[1.03] border-primary/50 shadow-glow-md -translate-y-1"
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: video.gradient }}
      />

      {thumbnailUrl && (
        // eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnail served from i.ytimg.com; skipping next/image avoids configuring remotePatterns for a small static thumb
        <img
          src={thumbnailUrl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {activated && video.youtubeId && (
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          className="absolute inset-0 w-full h-full z-30"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      {!activated && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,6,18,0.15) 0%, rgba(10,6,18,0.0) 35%, rgba(10,6,18,0.0) 55%, rgba(10,6,18,0.92) 100%)",
            }}
          />

          <div className="absolute top-3 left-3 z-10">
            <PlatformBadge platform={video.platform} />
          </div>

          <button
            type="button"
            onClick={activate}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer focus-visible:outline-none"
          >
            <span
              className={cn(
                "inline-flex items-center justify-center rounded-full bg-gradient-primary shadow-glow-md",
                "transition-all duration-300 ease-out",
                hovered ? "w-16 h-16 scale-100" : "w-14 h-14 scale-95"
              )}
            >
              <Play
                className="w-6 h-6 text-white fill-white translate-x-0.5"
                strokeWidth={1.5}
              />
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col gap-2 pointer-events-none">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2">
                {video.title}
              </h3>
              <span className="text-xs text-text-muted">{video.client}</span>
            </div>

            {hasStats && (
              <div
                className={cn(
                  "flex items-center gap-3 text-[11px] text-text-secondary",
                  "transition-all duration-300",
                  hovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                )}
              >
                {video.views && (
                  <span className="inline-flex items-center gap-1">
                    <span className="text-white font-medium">
                      {video.views}
                    </span>
                    <span className="text-text-muted">views</span>
                  </span>
                )}
                {video.views && video.likes && (
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                )}
                {video.likes && (
                  <span className="inline-flex items-center gap-1">
                    <span className="text-white font-medium">
                      {video.likes}
                    </span>
                    <span className="text-text-muted">likes</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </article>
  );
}
