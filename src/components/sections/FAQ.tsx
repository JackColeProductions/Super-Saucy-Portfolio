"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

type FAQItemData = { q: string; a: string };

const FAQS: FAQItemData[] = [
  {
    q: "What types of videos do you edit?",
    a: "Long-form YouTube (podcasts, vlogs, docs), short-form (TikTok, Reels, Shorts), brand films, and ad creative. If it has a hook, a story, and a reason for existing, we're probably the right fit.",
  },
  {
    q: "How long does a typical project take?",
    a: "Short-form turnaround is usually 24-48 hours. Long-form runs 3-5 business days depending on footage volume and revision rounds. Brand films are scoped individually, but we always lock a delivery date before we start.",
  },
  {
    q: "Do I need to provide raw footage?",
    a: "Yes — raw footage, audio, and any b-roll or assets you'd like incorporated. We can also source stock, motion graphics, and sound design on our end, and we'll send a simple upload link once we kick off.",
  },
  {
    q: "What's your pricing structure?",
    a: "Two options: per-project pricing for one-off edits, or a monthly retainer for ongoing work (the better deal if you're publishing weekly). Every quote is flat-rate — no hourly surprises. Exact numbers come out of the discovery call.",
  },
  {
    q: "How many revisions are included?",
    a: "Two rounds of revisions on every project. 95% of clients land it in round one. If you need more rounds for a specific project, we'll scope it upfront so nothing feels surprise-billed.",
  },
  {
    q: "Can you handle ongoing monthly work?",
    a: "That's where we do our best work. Retainers include a set volume of long-form and short-form per month, a shared asset library, and a dedicated Slack or Notion channel so you're never chasing updates.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes. If you're not happy with the first cut, we'll rework it until you are — that's what the revision rounds are for. If we ever genuinely can't land it, you get a refund. We've never had to issue one, but the policy stands.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="about"
      className="relative px-6 py-16 sm:py-24 md:py-32 flex justify-center"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:sticky lg:top-28"
        >
          <Pill>FAQ</Pill>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-gradient leading-[1.05]">
            Questions, Answered
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md">
            Everything you need to know before we hop on a call.
          </p>
          <div className="pt-2">
            <Magnetic>
              <Button size="lg" className="gap-2">
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: FAQItemData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={cn(
        "rounded-xl border bg-surface/40 backdrop-blur-xl overflow-hidden",
        "transition-colors duration-300",
        open
          ? "border-primary/40 shadow-glow-sm"
          : "border-white/[0.08] hover:border-white/20"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
      >
        <span className="text-base sm:text-lg font-medium text-white leading-tight">
          {item.q}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300",
            open
              ? "bg-gradient-primary border-transparent text-white shadow-glow-sm"
              : "border-white/15 text-white/80"
          )}
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 text-text-secondary leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
