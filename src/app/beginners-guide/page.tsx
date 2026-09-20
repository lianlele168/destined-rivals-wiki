import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorCard from '@/components/AuthorCard';
import { BEGINNER_GUIDES } from '@/data/wikiData';
import { BookOpen, CheckCircle, Flame, ShieldAlert, Zap, Swords, Target, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginners-guide',
  },
  title: "Destined Rivals Beginner's Guide (2026) - Deck Building & Counter Strategy",
  description: "Comprehensive beginner guide for Destined Rivals on Roblox. Learn elemental counter advantages, optimal 5-card deck compositions, and fast gem farming strategies.",
  keywords: ["destined rivals guide", "destined rivals beginners guide", "destined rivals deck build strategy", "destined rivals elemental counter"]
};

const BEGINNER_FAQS = [
  {
    question: 'How do elemental affinities work in Destined Rivals combat?',
    answer: 'The combat wheel follows a strict 5-element cycle: Fire deals 1.5x to Nature/Wood, Nature counters Lightning, Lightning pierces Water, Water extinguishes Fire, and Light and Dark deal mutual +25% unmitigated critical damage to each other.',
  },
  {
    question: 'What is the fastest method to farm free Gems for booster packs?',
    answer: 'Complete the daily duelist quest board (awards 150 Gems), participate in hourly World Boss raids (drops 250 Gems plus guaranteed card packs), and redeem all active codes listed on our Codes page.',
  },
  {
    question: 'How many cards should be in an optimal loadout?',
    answer: 'Run a balanced 5-card deck consisting of 1 Primary DPS Carry, 1 Stun/Interrupter, 1 Shield/Mitigator, and 2 Utility/Energy Accelerators to sustain constant ability rotations.',
  },
  {
    question: 'Should you spend keys on basic packs or save for Secret Ultra banners?',
    answer: 'Always hoard keys for the rotating Secret Ultra banners (1 in 500 odds with 50-pull soft pity) rather than pulling standard base packs.',
  },
];

export default function BeginnersGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            author: {
              '@type': 'Person',
              name: 'Hlele',
              jobTitle: 'Editor',
            },
            mainEntity: BEGINNER_FAQS.map((faq) => ({
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

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Banner */}
        <section className="rounded-3xl p-8 border border-indigo-500/20 text-center space-y-4 bg-gradient-to-b from-[#111827] via-slate-950 to-slate-950 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>STARTING STRATEGY & DECK BUILD GUIDE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Destined Rivals <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-300">Beginner's Masterclass</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to master early game progression, optimize your card synergies, calculate combat DPS, and dominate competitive dueling ladders.
          </p>
        </section>

        <AuthorCard />

        {/* Visual Media Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl overflow-hidden border border-indigo-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/rivals-hero.webp"
              alt="Destined Rivals Competitive Arena Combat"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-52 border border-indigo-950"
              priority
            />
            <p className="text-xs text-gray-400 mt-2 text-center font-mono">
              Figure 1: Official Roblox Rivals Arena — Ranked 1v1 and 2v2 dueling colosseum.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-indigo-900/40 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/rivals-icon.webp"
              alt="Destined Rivals Official Emblem and Duelist Badges"
              width={640}
              height={360}
              className="rounded-xl object-contain w-full h-52 bg-black/50 border border-indigo-950"
            />
            <p className="text-xs text-gray-400 mt-2 text-center font-mono">
              Figure 2: Official Rivals Emblem — High-stakes duelist combat medals and rank tiers.
            </p>
          </div>
        </div>

        {/* Comprehensive Operational Walkthrough */}
        <div className="space-y-6">
          <section className="rounded-2xl p-6 sm:p-8 bg-[#0f172a] border border-indigo-900/40 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Swords className="w-5 h-5 text-indigo-400" />
              1. Fundamental Combat Mechanics & Movement Tech
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Combat in Destined Rivals blends fast-paced third-person strafing with card-based ability chaining. Winning duels against veteran players requires mastering slide-jumping to cancel sprint recovery animations, while buffering your primary elemental ability during airborne trajectory. Use our interactive <Link href="/calculator" className="text-indigo-400 hover:underline font-bold">Combat DPS Calculator</Link> to calibrate your weapon critical chance and headshot multipliers.
            </p>
          </section>

          <section className="rounded-2xl p-6 sm:p-8 bg-[#0f172a] border border-indigo-900/40 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-400" />
              2. Elemental Counter Advantage Matrix
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Never enter ranked matches with a single-element loadout. When you attack an opponent using their counter element, your abilities bypass 35% of their shield absorption and trigger additional stagger frames. Always inspect the opponent's aura glow in the pre-match lobby to counter-swap your sub-deck.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 bg-red-950/30 rounded-xl border border-red-900/40">
                <strong className="text-red-400 block mb-1">Fire &rarr; Nature:</strong>
                Burns wooden barriers and stops health regeneration passives.
              </div>
              <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-900/40">
                <strong className="text-cyan-400 block mb-1">Water &rarr; Fire:</strong>
                Extinguishes burning ticks and applies slow down freeze stacks.
              </div>
              <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-900/40">
                <strong className="text-amber-400 block mb-1">Lightning &rarr; Water:</strong>
                Chains electric shocks across adjacent team members for 200% burst.
              </div>
            </div>
          </section>

          {/* Guides Breakdown from Data */}
          {BEGINNER_GUIDES.map((g, idx) => (
            <div key={idx} className="rounded-2xl p-6 sm:p-8 bg-[#0f172a] border border-indigo-900/40 space-y-3">
              <h2 className="text-lg font-bold text-indigo-300">{g.title}</h2>
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

          {/* FAQ Section */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#0f172a] border border-indigo-900/40 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Beginner FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BEGINNER_FAQS.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/30 space-y-2">
                  <h3 className="font-bold text-white text-sm">{faq.question}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
