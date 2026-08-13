import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TIER_LIST_DATA } from '@/data/wikiData';
import { Award, Zap, Shield, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: "Destined Rivals Tier List (2026) - Meta Character & Weapon Rankings",
  description: "Ultimate Destined Rivals tier list ranking all characters, cards, and weapons from S+ to C tier for August 2026 meta raids and PvP.",
  keywords: ["destined rivals tier list", "destined rivals character rankings", "destined rivals meta weapon tier list", "best cards destined rivals"]
};

export default function TierListPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Banner */}
        <section className="glass-panel rounded-3xl p-8 border border-amber-500/20 text-center space-y-4 gold-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Award className="w-4 h-4 text-amber-400" />
            <span>2026 META RANKINGS • AUGUST UPDATE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Destined Rivals <span className="text-amber-400">Meta Tier List</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Evaluated by top endgame raid players. Character damage, speed multipliers, and utility ratings analyzed.
          </p>
        </section>

        {/* Tier List Grid */}
        <section className="space-y-6">
          {(['S+', 'S', 'A', 'B', 'C'] as const).map((tierTier) => {
            const tierItems = TIER_LIST_DATA.filter((i) => i.tier === tierTier);
            if (tierItems.length === 0) return null;

            return (
              <div key={tierTier} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-xl text-sm font-black tracking-wider ${
                      tierTier === 'S+'
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg'
                        : tierTier === 'S'
                        ? 'bg-purple-600 text-white'
                        : tierTier === 'A'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {tierTier} TIER
                  </span>
                  <div className="h-[1px] flex-1 bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tierItems.map((item) => (
                    <div key={item.id} className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-white">{item.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                          {item.category} • {item.element}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-[11px]">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>Power Score:</span>
                          <span className="font-mono text-purple-400 font-bold">{item.stats.power} / 100</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${item.stats.power}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
