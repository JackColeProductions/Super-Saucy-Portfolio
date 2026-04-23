import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { BackgroundLayer } from "@/components/effects/BackgroundLayer";
import { PageVeil } from "@/components/ui/PageVeil";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://videoproductionplus.com";
const TITLE = "Video Production+ — YouTube Content Sprint for Industry Experts";
const DESCRIPTION =
  "We help industry experts build a YouTube search monopoly and dominate their niche. Ideation, production, strategy, and systems — fully managed, with less than one hour of your time per week.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Video Production+",
  },
  description: DESCRIPTION,
  applicationName: "Video Production+",
  authors: [{ name: "Video Production+" }],
  creator: "Video Production+",
  keywords: [
    "YouTube content sprint",
    "YouTube lead generation",
    "YouTube SEO agency",
    "YouTube authority",
    "niche YouTube growth",
    "video marketing for experts",
    "industry expert YouTube",
    "YouTube agency",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Video Production+",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@videoproductionplus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0612",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-white overflow-x-hidden">
        <BackgroundLayer />
        <ScrollProgress />
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
        <PageVeil />
      </body>
    </html>
  );
}
