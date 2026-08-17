import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import { Gift, ShieldCheck, HelpCircle, AlertCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Destined Rivals Active Codes (August 2026) - Free Gems & Packs",
  description: "Complete list of active Destined Rivals redeem codes for August 2026. Copy verified promo codes for free gems, coins, and legendary booster packs.",
  keywords: ["destined rivals codes", "codes for destined rivals", "destined rivals redeem codes 2026", "free gems destined rivals"]
};

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Destined Rivals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open Destined Rivals, click the Settings/Codes icon on the left HUD, enter your promo code into the box, and press Submit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my Destined Rivals code invalid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Codes may be case-sensitive or already expired. Ensure you enter exact capitalization and remove trailing spaces.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often are new Destined Rivals codes released?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New codes are released during game updates, milestone likes events, and special holiday patches.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Banner */}
        <section className="glass-panel rounded-3xl p-8 border border-purple-500/20 text-center space-y-4 purple-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>VERIFIED & WORKING CODES • AUGUST 17, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Destined Rivals <span className="text-purple-400">Active Codes</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Updated daily with official promo codes released on Discord and Twitter. Click COPY to claim your rewards in seconds!
          </p>
        </section>

        {/* Active Codes List */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Active Promo Codes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACTIVE_CODES.map((c, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-purple-500/20 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-lg text-purple-300 tracking-wider">{c.code}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 font-medium">{c.rewards}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <span>Added: {c.addedDate}</span>
                  <CopyButton textToCopy={c.code} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expired Codes Section */}
        <section className="space-y-4 opacity-75">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-5 h-5 text-slate-500" />
            <h2 className="text-lg font-bold">Expired Codes Archive</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {EXPIRED_CODES.map((c, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs">
                <span className="font-mono line-through font-bold text-slate-400">{c.code}</span>
                <p className="text-[11px] text-slate-500 mt-1">{c.rewards}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting & FAQ */}
        <section className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold text-white">Why isn&apos;t my code working?</h3>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
            <li><strong>Case Sensitivity:</strong> Capital letters must be typed exactly as shown.</li>
            <li><strong>Trailing Spaces:</strong> Ensure no extra spaces are pasted at the end of the code.</li>
            <li><strong>Expiration:</strong> Some promo codes expire within 48 hours of game update announcements.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

