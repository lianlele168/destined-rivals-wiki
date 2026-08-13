'use client';

import React, { useState } from 'react';
import { Sparkles, Dices, RotateCcw, Award } from 'lucide-react';
import { PACK_SIMULATOR_ITEMS, CardPackItem } from '@/data/wikiData';

export default function PackSimulator() {
  const [pulledCards, setPulledCards] = useState<CardPackItem[]>([]);
  const [totalPulls, setTotalPulls] = useState<number>(0);
  const [secretUltras, setSecretUltras] = useState<number>(0);

  const simulatePull = (count: number) => {
    const newPulls: CardPackItem[] = [];
    let secretCount = secretUltras;

    for (let i = 0; i < count; i++) {
      const rand = Math.random() * 100;
      let cumulative = 0;
      let selectedItem = PACK_SIMULATOR_ITEMS[PACK_SIMULATOR_ITEMS.length - 1];

      for (const item of PACK_SIMULATOR_ITEMS) {
        const chanceNum = parseFloat(item.chance.replace('%', ''));
        cumulative += chanceNum;
        if (rand <= cumulative) {
          selectedItem = item;
          break;
        }
      }

      if (selectedItem.rarity === 'Secret Ultra') {
        secretCount += 1;
      }
      newPulls.push(selectedItem);
    }

    setPulledCards((prev) => [...newPulls, ...prev].slice(0, 20)); // Keep recent 20
    setTotalPulls((prev) => prev + count);
    setSecretUltras(secretCount);
  };

  const handleReset = () => {
    setPulledCards([]);
    setTotalPulls(0);
    setSecretUltras(0);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <h3 className="text-xl font-extrabold text-white tracking-wide">
              Destined Rivals Booster Pack Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Test your luck before spending in-game gems! Simulates official pull rates.
          </p>
        </div>

        {/* Counter Badges */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
            Pulls: <span className="text-purple-400 font-bold text-sm">{totalPulls}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-xs font-semibold text-amber-300">
            Secret Ultra: <span className="text-amber-400 font-bold text-sm">{secretUltras}</span>
          </div>
          {totalPulls > 0 && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => simulatePull(1)}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-900/30 transition-all active:scale-95"
        >
          <Dices className="w-4 h-4" />
          <span>Summon 1 Pack</span>
        </button>

        <button
          onClick={() => simulatePull(10)}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-900/30 transition-all active:scale-95 border border-amber-400/30"
        >
          <Award className="w-4 h-4" />
          <span>Summon 10x Pack (Multi)</span>
        </button>
      </div>

      {/* Results Display Grid */}
      {pulledCards.length > 0 ? (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Recent Pack Pulls ({pulledCards.length} displayed)
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {pulledCards.map((card, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${card.color} ${
                  idx === 0 ? 'scale-105 ring-2 ring-purple-400 shadow-xl' : ''
                }`}
              >
                <div className="flex items-center justify-between text-lg">
                  <span>{card.imageIcon}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white">
                    {card.chance}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs font-bold truncate text-white">{card.name}</div>
                  <div className="text-[10px] opacity-80 font-medium">{card.rarity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center rounded-xl border border-dashed border-slate-800 bg-slate-900/20 text-slate-500 text-sm">
          Click <span className="text-purple-400 font-semibold">Summon Pack</span> to test your drop rates and discover secret ultra cards!
        </div>
      )}
    </div>
  );
}
