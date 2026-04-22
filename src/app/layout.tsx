import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { BackgroundLayer } from "@/components/effects/BackgroundLayer";
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

export const metadata: Metadata = {
  title: "YOUR NAME — Video Editor",
  description:
    "Premium video editing for creators, brands, and storytellers who refuse to blend in.",
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
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
