import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

export const metadata: Metadata = {
  title: "Ashil Rahim CK",
  description:
    "Designer and developer building clean, interactive websites and digital products that balance aesthetics with usability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="noise-overlay" />
        {children}
        <Analytics />
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-14 mask-[linear-gradient(to_top,black_20%,transparent_100%)] backdrop-blur-2xl" />
      </body>
    </html>
  );
}