'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import PackSimulator from '@/components/PackSimulator';
import { ACTIVE_CODES, EXPIRED_CODES, TIER_LIST_DATA, FAQS, TierItem } from '@/data/wikiData';
import { Gift, Award, Sparkles, HelpCircle, CheckCircle2, AlertCircle, Search, Filter, ShieldCheck, ChevronDown, Flame } from 'lucide-react';

export default function Home() {
  const [codeSearch, setCodeSearch] = useState('');
  const [tierCategory, setTierCategory] = useState<'All' | 'Character' | 'Card' | 'Weapon'>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [showExpired, setShowExpired] = useState(false);

  // Filter Active Codes
  const filteredActiveCodes = ACTIVE_CODES.filter(
    (c) =>
      c.code.toLowerCase().includes(codeSearch.toLowerCase()) ||
      c.rewards.toLowerCase().includes(codeSearch.toLowerCase())
  );

  // Filter Tier List Data
  const filteredTierList = TIER_LIST_DATA.filter((item) => {
    const matchCat = tierCategory === 'All' || item.category === tierCategory;
    const matchTier = selectedTier === 'All' || item.tier === selectedTier;
    return matchCat && matchTier;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-12">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden glass-panel rounded-3xl p-8 sm:p-12 border border-purple-500/20 text-center space-y-6 purple-glow">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DAILY VERIFIED • AUGUST 2026 UPDATE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Destined Rivals <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">Codes & Tier List</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Get instant access to working <strong className="text-white font-semibold">Destined Rivals redeem codes</strong> for free gems, secret booster packs, and legendary rewards. Check our 2026 character & weapon meta tier rankings.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-2xl font-black text-purple-400">{ACTIVE_CODES.length}</div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Active Codes</div>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-2xl font-black text-amber-400">S+ Tier</div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Meta Characters</div>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Free Rewards</div>
            </div>
          </div>
        </section>

        {/* ACTIVE CODES SECTION */}
        <section id="codes" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-extrabold text-white">Active Destined Rivals Codes</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Click the <strong className="text-purple-300">COPY</strong> button next to any code to copy it directly to your clipboard.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search codes or rewards..."
                value={codeSearch}
                onChange={(e) => setCodeSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 focus:border-purple-500 focus:outline-none text-slate-100 placeholder-slate-500"
              />
            </div>
          </div>

          {/* Active Codes List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredActiveCodes.map((c, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between space-y-4 border border-purple-500/10"
              >
                {c.isNew && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Flame className="w-3 h-3 text-slate-950" /> NEW
                  </span>
                )}

                <div className="space-y-2 pr-12">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-lg text-purple-300 tracking-wider">
                      {c.code}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{c.rewards}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span>Added: {c.addedDate}</span>
                  <CopyButton textToCopy={c.code} />
                </div>
              </div>
            ))}
          </div>

          {/* Expired Codes Toggle */}
          <div className="pt-4">
            <button
              onClick={() => setShowExpired(!showExpired)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>{showExpired ? 'Hide' : 'Show'} Expired Codes ({EXPIRED_CODES.length})</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showExpired ? 'rotate-180' : ''}`} />
            </button>

            {showExpired && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-60">
                {EXPIRED_CODES.map((c, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono line-through font-bold text-slate-400">{c.code}</span>
                      <p className="text-[11px] text-slate-500">{c.rewards}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Expired</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* TIER LIST SECTION */}
        <section id="tier-list" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-extrabold text-white">Destined Rivals Tier List (2026 Meta)</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Character, Card, and Weapon strength rankings based on damage, speed, and endgame raid utility.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Category Filter */}
              <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-semibold">
                {(['All', 'Character', 'Card', 'Weapon'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setTierCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      tierCategory === cat ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Tier Filter */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 focus:outline-none"
              >
                <option value="All">All Tiers</option>
                <option value="S+">S+ Tier</option>
                <option value="S">S Tier</option>
                <option value="A">A Tier</option>
                <option value="B">B Tier</option>
                <option value="C">C Tier</option>
              </select>
            </div>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTierList.map((item) => (
              <div key={item.id} className="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-wider ${
                        item.tier === 'S+'
                          ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg shadow-amber-900/30'
                          : item.tier === 'S'
                          ? 'bg-purple-600 text-white'
                          : item.tier === 'A'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      {item.tier} TIER
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                      {item.category} • {item.element}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white pt-1">{item.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>

                {/* Stat Bars */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80 text-[11px]">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Power:</span>
                    <span className="font-mono text-purple-400 font-bold">{item.stats.power}</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${item.stats.power}%` }} />
                  </div>

                  <div className="flex items-center justify-between text-slate-400 pt-1">
                    <span>Speed:</span>
                    <span className="font-mono text-amber-400 font-bold">{item.stats.speed}</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${item.stats.speed}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PACK SIMULATOR SECTION */}
        <section id="pack-simulator" className="scroll-mt-20">
          <PackSimulator />
        </section>

        {/* REDEEM GUIDE SECTION */}
        <section id="redeem-guide" className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6 scroll-mt-20">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-extrabold text-white">How to Redeem Destined Rivals Codes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 font-black flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-sm text-white">Launch the Game</h3>
              <p className="text-xs text-slate-400">Open Destined Rivals on your platform and enter the main lobby menu.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-600/30 border border-amber-500/40 text-amber-300 font-black flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-sm text-white">Find Codes Menu</h3>
              <p className="text-xs text-slate-400">Click on the Settings (Gear) icon or the Twitter/Shop button on your HUD.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-black flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-sm text-white">Paste Code & Redeem</h3>
              <p className="text-xs text-slate-400">Paste your active code into the text box and press Redeem for instant gems!</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
                <h3 className="font-bold text-sm text-purple-300">{faq.question}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
