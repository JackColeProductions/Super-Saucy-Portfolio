"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarGradient: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our channel finally feels like it has a strategy. The videos we publish now actually bring in leads instead of random views from the wrong people.",
    name: "Sarah Chen",
    role: "Founder @ Lumen Studios",
    avatarGradient: "linear-gradient(135deg, #a855f7 0%, #c026d3 100%)",
  },
  {
    quote:
      "They found topics no one else in our niche was touching. We rank #1 for queries our competitors completely ignored — inbound calls have doubled every month.",
    name: "Marcus Rivera",
    role: "Founder @ Rivera Advisory",
    avatarGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
  },
  {
    quote:
      "I send my script and show up to record. They handle ideation, editing, thumbnails, SEO, the whole stack. I spend less than an hour a week on YouTube now and leads keep coming in.",
    name: "Priya Nakamura",
    role: "Head of Growth @ Northline",
    avatarGradient: "linear-gradient(135deg, #c026d3 0%, #7c3aed 100%)",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-16 sm:py-24 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center mb-14"
        >
          <Pill>WHAT CLIENTS SAY</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05] max-w-3xl">
            The Experts We&apos;ve Put on the Map
          </h2>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        >
          {TESTIMONIALS.map((t) => (
            <motion.li key={t.name} variants={item}>
              <Card interactive className="p-7 h-full flex flex-col gap-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-text-primary text-base leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                  <span
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full shrink-0 ring-1 ring-white/10"
                    style={{ background: t.avatarGradient }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {t.name}
                    </span>
                    <span className="text-xs text-text-muted">{t.role}</span>
                  </div>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
