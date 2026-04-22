const LOGOS = [
  "LUMEN",
  "NORTHLINE",
  "HALO",
  "AURORA",
  "ORBITAL",
  "VANTAGE",
  "ELEVATE",
  "PARALLAX",
  "MERIDIAN",
];

export function ClientMarquee() {
  return (
    <section className="relative px-6 py-12 sm:py-16 flex flex-col items-center gap-6">
      <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-text-muted">
        Trusted by creators and brands worldwide
      </span>

      <div
        className="marquee-container relative w-full max-w-6xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max gap-12 sm:gap-16">
          <LogoRow />
          <LogoRow aria-hidden />
        </div>
      </div>
    </section>
  );
}

function LogoRow({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean } = {}) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0"
    >
      {LOGOS.map((name, i) => (
        <li
          key={`${name}-${i}`}
          className="font-display font-semibold text-xl sm:text-2xl tracking-[0.15em] text-white/40 hover:text-white/80 transition-colors duration-300 select-none whitespace-nowrap"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
