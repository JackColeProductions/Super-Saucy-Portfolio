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

const SITE_URL = "https://yourname.com";
const TITLE = "YOUR NAME — Video Editor";
const DESCRIPTION =
  "Premium video editing for creators, founders, and agencies who want to stop losing viewers in the first 3 seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · YOUR NAME",
  },
  description: DESCRIPTION,
  applicationName: "YOUR NAME",
  authors: [{ name: "YOUR NAME" }],
  creator: "YOUR NAME",
  keywords: [
    "video editor",
    "video editing",
    "YouTube editor",
    "short-form editing",
    "creator editor",
    "brand video",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "YOUR NAME",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@yourname",
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
