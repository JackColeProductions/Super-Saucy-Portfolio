"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { Pill } from "@/components/ui/Pill";

const CASE_STUDY_VIDEO_ID = "1QKcqn6l4J-uyiSyMMzOCM5HLk0b5Cjue";

type Metric = {
  to: number;
  format: (value: number) => string;
  label: string;
};

const METRICS: Metric[] = [
  {
    to: 340,
    format: (v) => `${Math.round(v)}%`,
    label: "Engagement increase",
  },
  {
    to: 12,
    format: (v) => `${v.toFixed(v >= 10 ? 0 : 1)}M+`,
    label: "Views generated",
  },
  {
    to: 48,
    format: (v) => `${Math.round(v)}hr`,
    label: "Avg. turnaround",
  },
];

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function CaseStudy() {
  return (
    <section
      id="process"
      className="relative px-6 py-16 sm:py-24 md:py-32 flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <Pill>CASE STUDY</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05] max-w-3xl">
            How We Helped [Client] 10x Their Views
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <motion.div variants={item} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-primary/30 blur-3xl opacity-60 pointer-events-none"
            />

            <div
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-black shadow-glow-md"
              style={{ aspectRatio: "4 / 5" }}
            >
              <iframe
                title="Case study video"
                src={`https://drive.google.com/file/d/${CASE_STUDY_VIDEO_ID}/preview`}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="autoplay; fullscreen"
                loading="lazy"
              />

              <FilmGrain
                opacity={0.1}
                blendMode="overlay"
                className="z-20"
              />

              <div className="absolute top-4 left-4 z-30 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light shadow-glow-sm" />
                  Case Study
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col gap-7 lg:pt-4"
          >
            <span className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Lumen Studios
            </span>

            <h3 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
              From 2k to 200k followers in 90 days
            </h3>

            <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                When Lumen came to us, their weekly uploads were strong on
                substance but bleeding viewers in the first ten seconds. We
                rebuilt their hook formula, tightened pacing across the board,
                and introduced a signature color treatment that made every
                thumbnail instantly recognizable in a crowded feed.
              </p>
              <p>
                Over the next twelve weeks, we shipped 42 long-form edits, 160
                shorts, and a full channel rebrand — working inside a
                48-hour turnaround window so nothing ever went stale. Every
                cut was reverse-engineered from the moments our analytics
                flagged as high-drop-off.
              </p>
              <p>
                The compounding effect hit fast. Their subscriber growth
                doubled inside the first month, their average view duration
                jumped by 71%, and by day ninety they had crossed 200k
                followers with a sponsorship pipeline they could finally
                choose from.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              {METRICS.map((metric) => (
                <Card
                  key={metric.label}
                  className="px-3 py-5 sm:px-5 sm:py-6 text-center flex flex-col gap-1"
                >
                  <CountUp
                    to={metric.to}
                    format={metric.format}
                    className="font-display font-semibold text-3xl sm:text-4xl text-gradient leading-none tabular-nums"
                  />
                  <span className="text-[11px] sm:text-xs text-text-muted leading-snug">
                    {metric.label}
                  </span>
                </Card>
              ))}
            </div>

            <div className="pt-2">
              <Button variant="secondary" className="gap-2">
                Read the full breakdown
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
