import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BEGINNER_GUIDES } from '@/data/wikiData';
import { BookOpen, CheckCircle, Flame, ShieldAlert, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Destined Rivals Beginner's Guide (2026) - Deck Building & Counter Strategy",
  description: "Comprehensive beginner guide for Destined Rivals. Learn elemental counter advantages, optimal 5-card deck compositions, and fast gem farming strategies.",
  keywords: ["destined rivals guide", "destined rivals beginners guide", "destined rivals deck build strategy", "destined rivals elemental counter"]
};

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Banner */}
        <section className="glass-panel rounded-3xl p-8 border border-emerald-500/20 text-center space-y-4 green-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>STARTING STRATEGY & DECK BUILD</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Destined Rivals <span className="text-emerald-400">Beginner&apos;s Guide</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Everything you need to master early game progression, optimize your card synergies, and dominate PvP raids.
          </p>
        </section>

        {/* Guides Breakdown */}
        <section className="space-y-6">
          {BEGINNER_GUIDES.map((g, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <h2 className="text-lg font-bold text-emerald-300">{g.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">{g.summary}</p>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Takeaways</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {g.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pro Tip Callout */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 flex items-start gap-4">
          <Zap className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
          <div className="space-y-1 text-xs">
            <h3 className="font-bold text-white text-sm">Pro Tip for Chapter 2 Raid Bosses</h3>
            <p className="text-slate-300 leading-relaxed">
              Always pair <strong className="text-amber-300">Aetherial Valkyrie</strong> with a Crowd Control unit like <strong className="text-cyan-300">Frostbite Empress</strong>. Freeze the boss right before popping Valkyrie&apos;s 50% damage boost skill for maximum DPS burst!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
