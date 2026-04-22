import { Heart, Sparkles } from "lucide-react";

type FooterLink = { label: string; href: string };

const MAIN_LINKS: FooterLink[] = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Free Guides", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

type Social = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const SOCIALS: Social[] = [
  { label: "YouTube", href: "#", icon: <YouTubeGlyph /> },
  { label: "Instagram", href: "#", icon: <InstagramGlyph /> },
  { label: "Twitter (X)", href: "#", icon: <XGlyph /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInGlyph /> },
  { label: "TikTok", href: "#", icon: <TikTokGlyph /> },
];

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-16 sm:pt-20 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#top" className="inline-flex items-center gap-2 w-fit">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gradient-primary shadow-glow-sm">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2.25} />
              </span>
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                YOUR NAME
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Premium video editing for creators who mean business.
            </p>
          </div>

          <FooterColumn title="Main Pages" links={MAIN_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              Social
            </h3>
            <ul className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 text-white/80">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.08]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>© 2026 YOUR NAME. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with
            <Heart
              className="w-3.5 h-3.5 fill-primary text-primary"
              strokeWidth={0}
            />
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.44 8.504L22.93 22h-6.78l-5.31-6.946L4.74 22H1.48l7.96-9.098L1.12 2h6.95l4.8 6.346L18.244 2zm-1.19 18h1.88L7.03 4H5.02l12.033 16z" />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function TikTokGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M17.5 2h-3v13.2a2.8 2.8 0 1 1-2.8-2.8v-3a5.8 5.8 0 1 0 5.8 5.8V9.3a7.1 7.1 0 0 0 4 1.3v-3a4.1 4.1 0 0 1-4-3.2V2z" />
    </svg>
  );
}
