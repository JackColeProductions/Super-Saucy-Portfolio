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
    title: "How I Built a 7-Figure Agency in 18 Months",
    client: "Lumen Studios",
    views: "2.4M",
    likes: "148K",
    category: "long-form",
    platform: "youtube",
    gradient:
      "linear-gradient(135deg, #2a1050 0%, #7c3aed 55%, #c026d3 100%)",
  },
  {
    id: "2",
    title: "The hook that 10x'd my retention",
    client: "@marcus.rivera",
    views: "980K",
    likes: "72K",
    category: "shorts",
    platform: "tiktok",
    gradient:
      "linear-gradient(135deg, #0f0322 0%, #a855f7 50%, #ec4899 100%)",
  },
  {
    id: "3",
    title: "Northline — Spring Campaign",
    client: "Northline",
    views: "5.1M",
    likes: "210K",
    category: "brand",
    platform: "instagram",
    gradient:
      "linear-gradient(135deg, #1a0833 0%, #7c3aed 40%, #f472b6 100%)",
  },
  {
    id: "4",
    title: "Why Your First 3 Seconds Decide Everything",
    client: "Creator Mode",
    views: "1.3M",
    likes: "89K",
    category: "long-form",
    platform: "youtube",
    gradient:
      "linear-gradient(135deg, #140b24 0%, #6d28d9 55%, #a855f7 100%)",
  },
  {
    id: "5",
    title: "POV: your editor actually understands the script",
    client: "@priya.n",
    views: "3.6M",
    likes: "412K",
    category: "shorts",
    platform: "instagram",
    gradient:
      "linear-gradient(135deg, #2a0a3d 0%, #be185d 50%, #c026d3 100%)",
  },
  {
    id: "6",
    title: "Halo — Product Launch Film",
    client: "Halo",
    views: "860K",
    likes: "54K",
    category: "brand",
    platform: "youtube",
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

  return (
    <section id="portfolio" className="relative px-6 py-24 sm:py-32 flex justify-center">
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
            Work That Moves People
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
            A glimpse at recent projects across YouTube, short-form, and
            brand work.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Filter portfolio"
          className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-white/[0.08] bg-surface/40 backdrop-blur-xl"
        >
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-out",
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
