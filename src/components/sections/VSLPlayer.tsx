"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

const VSL_VIDEO_ID = "1_LcWSeTE86y4KFmwEJ5mQcceZ0Z3SuMU";

export function VSLPlayer() {
  return (
    <section
      id="vsl"
      className="relative px-6 pt-2 pb-12 sm:pb-16 md:pb-20 flex flex-col items-center gap-8 sm:gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[860px]"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[85%] h-[60%] rounded-[50%] bg-primary/40 blur-3xl pointer-events-none"
        />

        <div
          className="relative rounded-3xl overflow-hidden bg-black vsl-border-pulse"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            title="Video Production+ sales letter"
            src={`https://drive.google.com/file/d/${VSL_VIDEO_ID}/preview`}
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
            allow="autoplay; fullscreen"
            loading="lazy"
          />

          <FilmGrain
            opacity={0.08}
            blendMode="overlay"
            className="z-30"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
      >
        <Magnetic>
          <Button size="md" variant="primary" className="gap-2">
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Magnetic>
        <Button size="md" variant="secondary" className="gap-2">
          <Play className="w-4 h-4 fill-white" />
          Watch Reel
        </Button>
      </motion.div>
    </section>
  );
}
