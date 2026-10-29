import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import { site } from "@/data/site";
import { Footer } from "@/components/Sections";
import Nav from "@/components/Nav";
import Boot from "@/components/Boot";
import Spotlight from "@/components/Spotlight";
import JumpToTop from "@/components/JumpToTop";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const title = `${site.name} | Digital marketing executive`;
const description = "Mohammed Thwayyib: digital marketing executive from Kerala, India. Meta Ads, performance marketing, Google Ads and Analytics, and short-form video.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url), title, description,
  openGraph: { title, description, type: "website", url: site.url },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#0A0B14" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><Providers><Spotlight /><Boot /><Nav />{children}<Footer /><JumpToTop /></Providers></body>
    </html>
  );
}
