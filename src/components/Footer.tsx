'use client';

import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import MatrixNav from './MatrixNav';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold text-sm">
            <span>Destined Rivals Wiki & Codes Hub</span>
          </div>
          <p className="max-w-md text-slate-500">
            Unofficial community guide database for Destined Rivals. Providing active redeem codes, tier lists, and gameplay guides updated daily.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-slate-500">
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Updated for August 2026</span>
          </div>
          <p>© {new Date().getFullYear()} Destined Rivals Wiki. All rights reserved.</p>
        </div>
      </div>

      <MatrixNav />
    </footer>
  );
}

