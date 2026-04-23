const GRID_MASK =
  "radial-gradient(ellipse 70% 60% at 50% 38%, #000 0%, rgba(0,0,0,0.55) 55%, transparent 95%)";

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(192, 132, 252, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(192, 132, 252, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "62px 62px",
          backgroundPosition: "center center",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 32%, rgba(168, 85, 247, 0.32) 0%, rgba(168, 85, 247, 0.14) 32%, transparent 72%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 22%, rgba(192, 132, 252, 0.22) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 38%, rgba(10, 6, 18, 0.55) 78%, rgba(10, 6, 18, 0.85) 100%)",
        }}
      />
    </div>
  );
}
