'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Gift, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-white group-hover:text-purple-400 transition-colors">
              DESTINED<span className="text-amber-400">RIVALS</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
              Wiki 2026
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-4 text-xs font-semibold">
          <Link
            href="/codes"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Gift className="w-3.5 h-3.5 text-purple-400" />
            <span>Codes</span>
          </Link>
          <Link
            href="/tier-list"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Tier List</span>
          </Link>
          <Link
            href="/team-builder"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-pink-400" />
            <span>Team Builder</span>
          </Link>
          <Link
            href="/pack-simulator"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Simulator</span>
          </Link>
          <Link
            href="/beginners-guide"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guide</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
