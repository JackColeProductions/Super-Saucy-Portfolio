const GRID_MASK =
  "radial-gradient(ellipse 95% 55% at 50% 20%, #000 0%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.12) 82%, transparent 100%)";

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[130vh] pointer-events-none"
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
            "radial-gradient(ellipse 80% 45% at 50% 18%, rgba(168, 85, 247, 0.30) 0%, rgba(168, 85, 247, 0.12) 35%, rgba(168, 85, 247, 0.04) 60%, transparent 85%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 48% 22% at 50% 14%, rgba(192, 132, 252, 0.22) 0%, rgba(192, 132, 252, 0.06) 45%, transparent 75%)",
        }}
      />
    </div>
  );
}
