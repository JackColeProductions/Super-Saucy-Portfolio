"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { SparkleField } from "@/components/effects/SparkleField";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Pill } from "@/components/ui/Pill";

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
      className="relative pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 px-6 flex justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-5xl w-full text-center flex flex-col items-center gap-4 sm:gap-5"
      >
        <SparkleField
          count={18}
          spawnInterval={[220, 420]}
          sizeRange={[8, 20]}
          className="absolute inset-0 -inset-x-10 pointer-events-none overflow-visible"
        />

        <motion.div variants={item} className="relative z-10">
          <Pill>YOUTUBE CONTENT SPRINT</Pill>
        </motion.div>

        <motion.h1
          variants={item}
          className="relative z-10 font-display font-semibold tracking-tight text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] max-w-4xl"
        >
          Build a Search Monopoly. Dominate Your Niche.
        </motion.h1>

        <motion.p
          variants={item}
          className="relative z-10 max-w-xl text-sm sm:text-base text-text-secondary leading-relaxed"
        >
          We help industry experts turn underperforming YouTube channels into
          lead-generating machines &mdash; with less than one hour of your
          time per week.
        </motion.p>

        <motion.div
          variants={item}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-1"
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
      </motion.div>
    </section>
  );
}
