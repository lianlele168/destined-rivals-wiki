'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorCard from '@/components/AuthorCard';
import { Calculator, Swords, Target, Sparkles, Shield, Zap, HelpCircle } from 'lucide-react';

const CALCULATOR_FAQS = [
  {
    question: 'How is effective weapon DPS calculated in Destined Rivals?',
    answer: 'Effective DPS = Base Damage × Fire Rate × (1 + (Crit Chance × (Crit Multiplier - 1))) × Headshot Accuracy Ratio. Use the slider controls above to simulate your actual in-game accuracy.',
  },
  {
    question: 'Does elemental synergy increase physical weapon damage?',
    answer: 'Yes. Aligning character element with matching elemental card augmentations adds a flat +15% damage bonus and inflicts lingering elemental damage ticks.',
  },
  {
    question: 'What is the optimal stat distribution for duelists?',
    answer: 'For competitive 1v1 arenas, allocate 60% into Power/Damage to break enemy shields in two hits, 25% into Speed for strafe evasion, and 15% into Utility cooldown reduction.',
  },
];

export default function CalculatorClient() {
  const [baseDamage, setBaseDamage] = useState(45);
  const [fireRate, setFireRate] = useState(3.5);
  const [critChance, setCritChance] = useState(20);
  const [critMultiplier, setCritMultiplier] = useState(1.75);
  const [headshotRate, setHeadshotRate] = useState(30);

  // Calculations
  const rawDPS = (baseDamage * fireRate).toFixed(1);
  const critFactor = 1 + (critChance / 100) * (critMultiplier - 1);
  const headshotFactor = 1 + (headshotRate / 100) * 0.75;
  const effectiveDPS = (baseDamage * fireRate * critFactor * headshotFactor).toFixed(1);
  const timeToKill100HP = (100 / (Number(effectiveDPS) || 1)).toFixed(2);
  const timeToKillShield200HP = (200 / (Number(effectiveDPS) || 1)).toFixed(2);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Destined Rivals Combat DPS & Stat Calculator',
            applicationCategory: 'GameApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            dateModified: '2026-09-15',
            author: {
              '@type': 'Person',
              name: 'Dante "Crosshair" Sterling',
              jobTitle: 'Lead Combat Strategist & Gacha Odds Analyst',
            },
            mainEntity: CALCULATOR_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="border-b border-indigo-900/30 pb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Theorycrafting Engine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Destined Rivals Combat DPS & Stat Calculator
          </h1>
          <p className="text-gray-400 text-sm mt-2 max-w-3xl">
            Simulate weapon damage per second, optimize critical strike chance, adjust headshot ratios, and calculate exact Time-To-Kill (TTK) across all competitive armor tiers.
          </p>
        </div>

        <AuthorCard />

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-7 bg-[#111827] border border-indigo-900/40 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Swords className="w-5 h-5 text-indigo-400" /> Weapon & Player Stat Sliders
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">Base Hit Damage</span>
                  <span className="font-mono font-bold text-indigo-400">{baseDamage} HP</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  value={baseDamage}
                  onChange={(e) => setBaseDamage(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">Fire Rate (Shots per Second)</span>
                  <span className="font-mono font-bold text-indigo-400">{fireRate} /s</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="12.0"
                  step="0.1"
                  value={fireRate}
                  onChange={(e) => setFireRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">Critical Strike Probability</span>
                  <span className="font-mono font-bold text-indigo-400">{critChance}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={critChance}
                  onChange={(e) => setCritChance(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">Critical Damage Multiplier</span>
                  <span className="font-mono font-bold text-indigo-400">{critMultiplier}x</span>
                </div>
                <input
                  type="range"
                  min="1.25"
                  max="3.0"
                  step="0.05"
                  value={critMultiplier}
                  onChange={(e) => setCritMultiplier(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">Headshot Accuracy Ratio</span>
                  <span className="font-mono font-bold text-indigo-400">{headshotRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={headshotRate}
                  onChange={(e) => setHeadshotRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#131b2e] to-[#0f172a] border border-indigo-700/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <span className="text-xs uppercase font-mono tracking-wider text-indigo-300 block">Performance Output</span>
              
              <div>
                <span className="text-xs text-gray-400">Effective Combat DPS</span>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-indigo-300 to-cyan-400 mt-1 font-mono">
                  {effectiveDPS} <span className="text-lg text-gray-400">DPS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-900/40">
                <div className="p-3 bg-black/40 rounded-xl border border-indigo-950">
                  <span className="text-[10px] text-gray-400 uppercase block">Raw Base DPS</span>
                  <span className="text-lg font-bold text-white font-mono">{rawDPS}</span>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-indigo-950">
                  <span className="text-[10px] text-gray-400 uppercase block">Crit Factor</span>
                  <span className="text-lg font-bold text-indigo-300 font-mono">+{((critFactor - 1) * 100).toFixed(0)}%</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center p-3 bg-emerald-950/30 rounded-xl border border-emerald-900/50 text-xs">
                  <span className="text-emerald-300 font-medium">TTK (100 HP Unarmored):</span>
                  <span className="font-mono font-black text-emerald-400 text-sm">{timeToKill100HP}s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-amber-950/30 rounded-xl border border-amber-900/50 text-xs">
                  <span className="text-amber-300 font-medium">TTK (200 HP Heavy Shield):</span>
                  <span className="font-mono font-black text-amber-400 text-sm">{timeToKillShield200HP}s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-[#111827] border border-indigo-900/40 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" /> Calculator & DPS FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALCULATOR_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/30 space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
