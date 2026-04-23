"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Check, Clock, Video } from "lucide-react";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { SparkleField } from "@/components/effects/SparkleField";
import { Pill } from "@/components/ui/Pill";

const CALENDLY_URL =
  "https://calendly.com/videoproductionplus/jack-cole-youtube-content-sprint-clone";

const EMBED_PARAMS = new URLSearchParams({
  hide_landing_page_details: "1",
  hide_gdpr_banner: "1",
  background_color: "0a0612",
  text_color: "ffffff",
  primary_color: "a855f7",
});

const AGENDA = [
  "Map the undervalued, high-intent topics in your niche",
  "Walk through what a Content Sprint looks like for your channel",
  "Get an honest read on whether we're a fit — both ways",
  "Leave with at least one actionable insight, even if we never work together",
];

export function BookCall() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center mb-12 sm:mb-14"
        >
          <Pill>BOOK A CALL</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05] max-w-2xl">
            Book Your Content Sprint Discovery Call
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            Grab a free 20-minute call. We&apos;ll map the undervalued topics
            in your niche, show you what a Content Sprint would look like
            for your channel, and see if we&apos;re a fit &mdash; no pitch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative w-full"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-[2.75rem] bg-primary/25 blur-[100px] pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-[2.75rem] bg-accent/15 blur-[120px] pointer-events-none"
          />

          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-surface-elevated/70 backdrop-blur-xl shadow-glow-md">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
              <LeftPanel />
              <RightPanel />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeftPanel() {
  return (
    <div className="relative overflow-hidden flex flex-col gap-7 sm:gap-8 p-8 sm:p-10 lg:p-12 min-h-[520px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(150deg, #1a0a35 0%, #2a1050 45%, #0d0818 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary/45 blur-[90px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-accent/35 blur-[90px] pointer-events-none"
      />

      <SparkleField
        count={9}
        spawnInterval={[450, 800]}
        sizeRange={[6, 14]}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      <FilmGrain opacity={0.16} blendMode="overlay" />

      <div className="relative z-10 flex flex-col gap-7 sm:gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <Pill>WHAT TO EXPECT</Pill>
          <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-white leading-tight">
            20 minutes.{" "}
            <span className="text-gradient">No pitch. Real strategy.</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <Clock className="w-3.5 h-3.5 text-primary-light" />
            20 min
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <Video className="w-3.5 h-3.5 text-primary-light" />
            Google Meet
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
            <CalendarCheck className="w-3.5 h-3.5 text-primary-light" />
            Free
          </span>
        </div>

        <ul className="flex flex-col gap-3.5">
          {AGENDA.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-text-secondary leading-relaxed"
            >
              <span className="shrink-0 mt-0.5 inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary/20 border border-primary/40">
                <Check
                  className="w-3.5 h-3.5 text-primary-light"
                  strokeWidth={3}
                />
              </span>
              <span className="text-sm sm:text-[0.95rem]">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-3.5">
          <span
            aria-hidden="true"
            className="relative inline-flex w-12 h-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow-sm font-display font-semibold text-base text-white ring-2 ring-white/10"
          >
            JC
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              You&apos;ll meet Jack Cole
            </span>
            <span className="text-xs text-text-muted">
              Founder, Video Production+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="relative bg-background lg:border-l border-white/10">
      <FilmGrain
        opacity={0.06}
        blendMode="overlay"
        className="z-30 pointer-events-none"
      />
      <iframe
        title="Book a strategy call"
        src={`${CALENDLY_URL}?${EMBED_PARAMS.toString()}`}
        className="relative z-10 w-full block"
        style={{ height: 720, border: "none", colorScheme: "dark" }}
        loading="lazy"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
