export type Platform = "youtube" | "tiktok" | "instagram";

interface Props {
  platform: Platform;
}

const LABELS: Record<Platform, string> = {
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
};

export function PlatformBadge({ platform }: Props) {
  return (
    <span
      aria-label={LABELS[platform]}
      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-white"
    >
      {platform === "youtube" && <YouTubeGlyph />}
      {platform === "instagram" && <InstagramGlyph />}
      {platform === "tiktok" && <TikTokGlyph />}
    </span>
  );
}

function YouTubeGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
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

function TikTokGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.5 2h-3v13.2a2.8 2.8 0 1 1-2.8-2.8v-3a5.8 5.8 0 1 0 5.8 5.8V9.3a7.1 7.1 0 0 0 4 1.3v-3a4.1 4.1 0 0 1-4-3.2V2z" />
    </svg>
  );
}
