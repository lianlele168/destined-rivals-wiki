'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TIER_LIST_DATA, TierItem } from '@/data/wikiData';
import { Layers, Plus, Trash2, Zap, Shield, Sparkles, Share2, Check } from 'lucide-react';
import Link from 'next/link';

export default function TeamBuilderPage() {
  const [team, setTeam] = useState<TierItem[]>([]);
  const [copied, setCopied] = useState(false);

  const addToTeam = (item: TierItem) => {
    if (team.length >= 5) return;
    if (team.some((t) => t.id === item.id)) return;
    setTeam([...team, item]);
  };

  const removeFromTeam = (id: string) => {
    setTeam(team.filter((t) => t.id !== id));
  };

  const clearTeam = () => {
    setTeam([]);
  };

  // Calculate Synergy & Metrics
  const totalPower = team.reduce((sum, item) => sum + item.stats.power, 0);
  const avgSpeed = team.length > 0 ? Math.round(team.reduce((sum, item) => sum + item.stats.speed, 0) / team.length) : 0;
  
  // Element Synergies
  const elementCounts = team.reduce((acc, item) => {
    acc[item.element] = (acc[item.element] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const activeSynergies = Object.entries(elementCounts).filter(([_, count]) => count >= 2);

  const handleShare = () => {
    const buildNames = team.map(t => t.name).join(' + ');
    const shareText = `Check out my Destined Rivals Team Build: [ ${buildNames} ] Total Power: ${totalPower}!`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Hero Banner */}
        <section className="glass-panel rounded-3xl p-8 border border-pink-500/20 text-center space-y-4 purple-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-500/40 text-pink-300 text-xs font-semibold">
            <Layers className="w-4 h-4 text-pink-400" />
            <span>INTERACTIVE TEAM PLANNER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Destined Rivals <span className="text-pink-400">Team Builder</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Assemble your 5-card squad, test elemental resonance synergies, and calculate your total combat score for PvP and Boss Raids.
          </p>
        </section>

        {/* ACTIVE TEAM SLOTS */}
        <section className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Your Squad Slots ({team.length}/5)</h2>
            </div>
            {team.length > 0 && (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED LINK' : 'SHARE BUILD'}</span>
                </button>
                <button
                  onClick={clearTeam}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-900/40 text-slate-400 hover:text-red-300 text-xs font-semibold transition-colors"
                >
                  CLEAR
                </button>
              </div>
            )}
          </div>

          {/* 5 Slots Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[0, 1, 2, 3, 4].map((slotIdx) => {
              const item = team[slotIdx];

              return (
                <div
                  key={slotIdx}
                  className={`min-h-[130px] rounded-2xl border p-3 flex flex-col justify-between transition-all ${
                    item
                      ? 'glass-card border-purple-500/40 bg-purple-950/20'
                      : 'border-dashed border-slate-800 bg-slate-900/30 flex items-center justify-center'
                  }`}
                >
                  {item ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-600 text-white">
                          {item.tier}
                        </span>
                        <button
                          onClick={() => removeFromTeam(item.id)}
                          className="p-1 rounded bg-slate-800 hover:bg-red-950 text-slate-400 hover:text-red-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="my-2">
                        <div className="text-xs font-bold text-white truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.element} • {item.category}</div>
                      </div>
                      <div className="text-[10px] font-mono text-purple-300 font-bold">PWR: {item.stats.power}</div>
                    </>
                  ) : (
                    <div className="text-center text-slate-600 space-y-1">
                      <Plus className="w-5 h-5 mx-auto" />
                      <div className="text-[11px] font-medium">Slot {slotIdx + 1} Empty</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Team Metrics Summary */}
          {team.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-slate-400">Total Combat Power</div>
                <div className="text-2xl font-black text-purple-400">{totalPower} <span className="text-xs text-slate-500">PWR</span></div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">Average Speed Rating</div>
                <div className="text-2xl font-black text-amber-400">{avgSpeed} <span className="text-xs text-slate-500">SPD</span></div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium">Elemental Resonance</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {activeSynergies.length > 0 ? (
                    activeSynergies.map(([elem, count]) => (
                      <span key={elem} className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                        {elem} Resonance x{count} (+15% Dmg)
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500">Add 2 same element units for +15% Boost!</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* CHARACTER & ITEM SELECTION POOL */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-white">Select Units to Add</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TIER_LIST_DATA.map((item) => {
              const inTeam = team.some((t) => t.id === item.id);

              return (
                <div
                  key={item.id}
                  className={`glass-card rounded-2xl p-4 border flex items-center justify-between transition-all ${
                    inTeam ? 'border-purple-500/50 opacity-50 bg-slate-900/50' : 'border-slate-800 hover:border-pink-500/40'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-400">{item.tier}</span>
                      <Link href={`/characters/${item.id}`} className="text-xs font-bold text-white hover:text-pink-300 underline underline-offset-2 truncate">
                        {item.name}
                      </Link>
                    </div>
                    <div className="text-[10px] text-slate-400">{item.category} • {item.element} • PWR: {item.stats.power}</div>
                  </div>

                  <button
                    disabled={inTeam || team.length >= 5}
                    onClick={() => addToTeam(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                      inTeam
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-md'
                    }`}
                  >
                    {inTeam ? 'ADDED' : 'ADD'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
