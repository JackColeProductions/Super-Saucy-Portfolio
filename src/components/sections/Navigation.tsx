"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-3">
          <motion.nav
            animate={{
              paddingLeft: scrolled ? 12 : 20,
              paddingRight: scrolled ? 12 : 20,
              paddingTop: scrolled ? 6 : 10,
              paddingBottom: scrolled ? 6 : 10,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "flex items-center gap-2 sm:gap-3 rounded-full border transition-colors duration-300",
              scrolled
                ? "bg-surface/70 border-white/10 backdrop-blur-2xl shadow-glow-sm"
                : "bg-surface/40 border-white/[0.08] backdrop-blur-xl"
            )}
          >
            <Logo />

            <ul className="hidden md:flex items-center gap-1 px-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm text-text-secondary hover:text-white transition-colors duration-200 rounded-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </motion.nav>

          <div className="hidden sm:block">
            <Button size="sm" className="gap-1.5">
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden bg-background/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 pt-6">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="text-3xl font-display text-gradient"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10">
              <Button size="lg" className="w-full gap-2">
                Book a Call
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 pl-1">
      <span className="relative inline-flex w-8 h-8 items-center justify-center rounded-full bg-gradient-primary shadow-glow-sm">
        <Sparkles className="w-4 h-4 text-white" strokeWidth={2.25} />
      </span>
      <span className="hidden sm:inline font-display font-semibold text-sm tracking-tight">
        YOUR NAME
      </span>
    </a>
  );
}
