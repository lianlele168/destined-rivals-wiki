import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Destined Rivals Codes & Tier List (August 2026) - Active Redeem Codes",
  description: "Get the latest working Destined Rivals redeem codes for free gems, secret booster packs, and rewards. Explore 2026 character & weapon tier lists and pack simulator.",
  keywords: [
    "destined rivals codes",
    "codes for destined rivals",
    "destined rivals tier list",
    "destined rivals redeem codes 2026",
    "destined rivals cards",
    "destined rivals wiki",
    "destined rivals weapon tier list"
  ],
  authors: [{ name: "Destined Rivals Wiki Team" }],
  openGraph: {
    title: "Destined Rivals Codes & Tier List (August 2026)",
    description: "Daily updated active redeem codes, meta tier lists, and pack simulator for Destined Rivals.",
    type: "website",
    locale: "en_US",
  },
  verification: {
    google: "K0YFUdYGQH2cucEllkbzoEcKAZoFJ7rGguAERbz2ZGM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
