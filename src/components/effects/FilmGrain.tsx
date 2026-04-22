import { cn } from "@/lib/utils";

type BlendMode =
  | "overlay"
  | "soft-light"
  | "screen"
  | "multiply"
  | "normal";

interface FilmGrainProps {
  className?: string;
  opacity?: number;
  animated?: boolean;
  blendMode?: BlendMode;
}

const NOISE_DATA_URI = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch' seed='7'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>`;

export function FilmGrain({
  className,
  opacity = 0.14,
  animated = true,
  blendMode = "overlay",
}: FilmGrainProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-[5%] overflow-hidden",
        animated && "film-grain-animated",
        className
      )}
      style={{
        opacity,
        mixBlendMode: blendMode,
        backgroundImage: `url("${NOISE_DATA_URI}")`,
        backgroundSize: "240px 240px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
