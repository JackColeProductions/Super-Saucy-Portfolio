"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { SparkleField } from "@/components/effects/SparkleField";
import { Magnetic } from "@/components/ui/Magnetic";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const auroraY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const auroraY2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex justify-center"
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/60 backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #0a0612 0%, #1a0a35 50%, #0a0612 100%)",
          }}
        />

        <motion.div
          aria-hidden="true"
          style={{ y: auroraY }}
          className="absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full bg-primary/50 blur-[120px] pointer-events-none"
        />
        <motion.div
          aria-hidden="true"
          style={{ y: auroraY2 }}
          className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-accent/40 blur-[120px] pointer-events-none"
        />

        <SparkleField
          count={14}
          spawnInterval={[300, 600]}
          sizeRange={[8, 18]}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        />

        <FilmGrain opacity={0.18} blendMode="overlay" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center gap-7 px-6 sm:px-10 py-20 sm:py-28 md:py-32"
        >
          <Pill>READY WHEN YOU ARE</Pill>

          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight text-gradient leading-[1.05] max-w-3xl">
            Ready to Own Your Niche on YouTube?
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            Book a free 20-minute Content Sprint discovery call. No pitch
            &mdash; just a look at the undervalued topics your audience is
            already searching for.
          </p>

          <div className="pt-3">
            <Magnetic maxOffset={14}>
              <motion.button
                type="button"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 bg-gradient-primary",
                    hovered ? "opacity-80" : "opacity-40"
                  )}
                />
                <span
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full bg-gradient-primary text-white",
                    "px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium tracking-tight cursor-pointer",
                    "transition-all duration-300 ease-out shadow-glow-md",
                    hovered && "shadow-glow-lg scale-[1.03]"
                  )}
                >
                  Book Your Call
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
