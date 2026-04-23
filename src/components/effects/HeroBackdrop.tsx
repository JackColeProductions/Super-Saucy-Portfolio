const GRID_MASK =
  "radial-gradient(ellipse 90% 50% at 50% 22%, #000 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.22) 75%, transparent 94%)";

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[118vh] pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(192, 132, 252, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(192, 132, 252, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "62px 62px",
          backgroundPosition: "center top",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 40% at 50% 20%, rgba(168, 85, 247, 0.32) 0%, rgba(168, 85, 247, 0.13) 38%, transparent 74%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 46% 20% at 50% 15%, rgba(192, 132, 252, 0.22) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10, 6, 18, 0.45) 55%, #0a0612 100%)",
        }}
      />
    </div>
  );
}
