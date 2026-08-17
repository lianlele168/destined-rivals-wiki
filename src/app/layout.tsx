import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://destined-rivals-wiki.vercel.app'),
  alternates: {
    canonical: '/',
  },
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
    url: "https://destined-rivals-wiki.vercel.app",
    siteName: "Destined Rivals Wiki",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: '/favicon.svg',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Destined Rivals Wiki',
    url: 'https://destined-rivals-wiki.vercel.app',
    description: 'The ultimate Destined Rivals community database with redeem codes, tier lists, and pack simulator.',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

