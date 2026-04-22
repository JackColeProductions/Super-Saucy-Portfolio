"use client";

import { motion } from "framer-motion";
import { FilmGrain } from "@/components/effects/FilmGrain";
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

export function BookCall() {
  return (
    <section
      id="about"
      className="relative px-6 py-16 sm:py-24 md:py-32 flex justify-center"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center mb-12 sm:mb-14"
        >
          <Pill>BOOK A CALL</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05] max-w-2xl">
            Pick a Time That Works for You
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            Grab a free 20-minute strategy slot. We&apos;ll talk about your
            goals, your footage, and what a first month together could look
            like — no pitch.
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
            className="absolute -inset-8 rounded-[2.5rem] bg-primary/20 blur-3xl pointer-events-none"
          />

          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-surface/60 backdrop-blur-xl shadow-glow-sm">
            <FilmGrain opacity={0.08} blendMode="overlay" />
            <iframe
              title="Book a strategy call"
              src={`${CALENDLY_URL}?${EMBED_PARAMS.toString()}`}
              className="relative z-10 w-full block"
              style={{ height: 720, border: "none", colorScheme: "dark" }}
              loading="lazy"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
