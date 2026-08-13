import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackSimulator from '@/components/PackSimulator';
import { PACK_SIMULATOR_ITEMS } from '@/data/wikiData';
import { Sparkles, Dices, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Destined Rivals Pack Simulator - Free Gacha Drop Rates Test",
  description: "Test your luck with our Destined Rivals booster pack simulator. Simulate official pull drop rates for secret ultra cards and legendary weapons.",
  keywords: ["destined rivals pack simulator", "destined rivals drop rates", "destined rivals gacha test", "secret ultra drop chance"]
};

export default function PackSimulatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Banner */}
        <section className="glass-panel rounded-3xl p-8 border border-indigo-500/20 text-center space-y-4 purple-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
            <Dices className="w-4 h-4 text-indigo-400 animate-spin" />
            <span>OFFICIAL DROP RATE SIMULATOR</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Booster Pack <span className="text-indigo-400">Summon Simulator</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Experience unlimited pack pulls without spending in-game gems. Check your luck for Secret Ultra card drops!
          </p>
        </section>

        {/* Simulator Component */}
        <PackSimulator />

        {/* Drop Rates Table */}
        <section className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Official Drop Rates Breakdown</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase">
                  <th className="py-2 px-3">Item Name</th>
                  <th className="py-2 px-3">Rarity</th>
                  <th className="py-2 px-3">Drop Chance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {PACK_SIMULATOR_ITEMS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-200 flex items-center gap-2">
                      <span>{item.imageIcon}</span>
                      <span>{item.name}</span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.color}`}>
                        {item.rarity}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-purple-300">{item.chance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
