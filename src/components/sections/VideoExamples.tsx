"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import {
  VideoExampleCard,
  type VideoExample,
} from "./VideoExampleCard";

const VIDEOS: VideoExample[] = [
  {
    id: "1",
    title: "How to Start a Coaching Business Online (7-Figure Blueprint)",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "PTVPb1gntdE",
    gradient:
      "linear-gradient(135deg, #2a1050 0%, #7c3aed 55%, #c026d3 100%)",
  },
  {
    id: "2",
    title: "Six Figure Coaching Business Blueprint (No Ads, No Following)",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "ilfZ1jUA2i8",
    gradient:
      "linear-gradient(135deg, #0f0322 0%, #a855f7 50%, #ec4899 100%)",
  },
  {
    id: "3",
    title:
      "I Spent My Last $50K to Figure Out How to Get Clients — Now Sharing This With You For Free",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "hzkRXCEalUU",
    gradient:
      "linear-gradient(135deg, #1a0833 0%, #7c3aed 40%, #f472b6 100%)",
  },
  {
    id: "4",
    title: "Will AI Replace Coaches? (4 Elements to Stay Relevant)",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "UxkA7swgCos",
    gradient:
      "linear-gradient(135deg, #140b24 0%, #6d28d9 55%, #a855f7 100%)",
  },
  {
    id: "5",
    title: "Is Starting a Life Coaching Business Worth It? (2026 Strategy)",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "beiAUzopIF4",
    gradient:
      "linear-gradient(135deg, #2a0a3d 0%, #be185d 50%, #c026d3 100%)",
  },
  {
    id: "6",
    title: "Women in Business Coaching | Why They're Winning (3 Patterns)",
    client: "Richmond Dinh",
    category: "long-form",
    platform: "youtube",
    youtubeId: "CgDAWVwBLWw",
    gradient:
      "linear-gradient(135deg, #0a0612 0%, #7c3aed 45%, #22d3ee 100%)",
  },
];

type Filter = "all" | "long-form" | "shorts" | "brand";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "long-form", label: "Long-form" },
  { id: "shorts", label: "Shorts" },
  { id: "brand", label: "Brand" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function VideoExamples() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? VIDEOS
        : VIDEOS.filter((v) => v.category === filter),
    [filter]
  );

  const availableFilters = useMemo(() => {
    const present = new Set(VIDEOS.map((v) => v.category));
    return FILTERS.filter((f) => f.id === "all" || present.has(f.id));
  }, []);

  const showFilterBar = availableFilters.length > 2;

  return (
    <section id="work" className="relative px-6 py-16 sm:py-24 md:py-32 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <Pill>PORTFOLIO</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05] max-w-3xl">
            Videos That Actually Rank
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
            A sample of recent Content Sprint videos &mdash; the kind of
            work that turns search traffic into qualified calls.
          </p>
        </motion.div>

        {showFilterBar && (
          <div
            role="tablist"
            aria-label="Filter portfolio"
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-white/[0.08] bg-surface/40 backdrop-blur-xl"
          >
            {availableFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out cursor-pointer",
                    active
                      ? "bg-gradient-primary text-white shadow-glow-sm"
                      : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        )}

        <motion.ul
          key={filter}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
        >
          {visible.map((video) => (
            <motion.li key={video.id} variants={item}>
              <VideoExampleCard video={video} />
            </motion.li>
          ))}
        </motion.ul>

        <Button variant="ghost" size="md" className="border border-white/10">
          Load more work
        </Button>
      </div>
    </section>
  );
}
