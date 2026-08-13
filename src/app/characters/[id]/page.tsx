import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TIER_LIST_DATA } from '@/data/wikiData';
import { notFound } from 'next/navigation';
import { Shield, Zap, Sparkles, Award, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TIER_LIST_DATA.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = TIER_LIST_DATA.find((i) => i.id === id);

  if (!item) {
    return { title: 'Unit Not Found - Destined Rivals Wiki' };
  }

  return {
    title: `${item.name} Guide - Destined Rivals Stats, Build & Tier Ranking`,
    description: `Detailed guide for ${item.name} in Destined Rivals. View stats, ${item.element} element counters, best card pairings, and tier score.`,
    keywords: [`${item.name} destined rivals`, `destined rivals ${item.name} stats`, `${item.name} build guide`]
  };
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = TIER_LIST_DATA.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 space-y-8">
        {/* Back Link */}
        <Link href="/tier-list" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Tier List</span>
        </Link>

        {/* Hero Card */}
        <section className="glass-panel rounded-3xl p-8 border border-purple-500/20 space-y-6 purple-glow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-xl text-sm font-black tracking-wider ${
                    item.tier === 'S+'
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white'
                      : item.tier === 'S'
                      ? 'bg-purple-600 text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {item.tier} TIER
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 uppercase">
                  {item.category} • {item.element} ELEMENT
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white">{item.name}</h1>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
        </section>

        {/* STATS & METRICS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Base Attributes</span>
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Attack Power</span>
                  <span className="font-mono text-purple-400 font-bold">{item.stats.power} / 100</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${item.stats.power}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Movement & Action Speed</span>
                  <span className="font-mono text-amber-400 font-bold">{item.stats.speed} / 100</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${item.stats.speed}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-400 mb-1">
                  <span>Raid Support Utility</span>
                  <span className="font-mono text-emerald-400 font-bold">{item.stats.utility} / 100</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${item.stats.utility}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Elemental Counters & Synergy</span>
            </h2>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Deals <strong>+50% bonus damage</strong> against opposite element targets.</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pair with same element units for <strong>+15% Elemental Resonance</strong>.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Team Build */}
        <section className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Recommended Synergies</span>
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            To maximize {item.name}&apos;s potential, pair this unit with an S-Tier Crowd Control character or an AoE barrier card in the <Link href="/team-builder" className="text-pink-400 hover:underline font-bold">Team Builder</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
