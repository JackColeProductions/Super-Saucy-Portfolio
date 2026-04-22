"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { SparkleField } from "@/components/effects/SparkleField";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Pill } from "@/components/ui/Pill";
import { ScrambleText } from "@/components/ui/ScrambleText";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroOffer() {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 px-6 flex justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl w-full text-center flex flex-col items-center gap-8"
      >
        <SparkleField
          count={18}
          spawnInterval={[220, 420]}
          sizeRange={[8, 20]}
          className="absolute inset-0 -inset-x-10 pointer-events-none overflow-visible"
        />

        <motion.div variants={item} className="relative z-10">
          <Pill>VIDEO EDITING FOR CREATORS</Pill>
        </motion.div>

        <motion.h1
          variants={item}
          className="relative z-10 font-display font-semibold tracking-tight text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02]"
        >
          <ScrambleText
            text="Your Story. Edited Into Something Unforgettable."
            duration={900}
          />
        </motion.h1>

        <motion.p
          variants={item}
          className="relative z-10 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          Premium video editing for creators, founders, and agencies who want
          to stop losing viewers in the first 3 seconds.
        </motion.p>

        <motion.div
          variants={item}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2"
        >
          <Magnetic>
            <Button size="lg" variant="primary" className="gap-2">
              Book a Call
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Magnetic>
          <Button size="lg" variant="secondary" className="gap-2">
            <Play className="w-4 h-4 fill-white" />
            Watch Reel
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
