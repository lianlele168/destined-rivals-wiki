import React from 'react';
import { Network, ExternalLink } from 'lucide-react';

const MATRIX_SITES = [
  { name: 'Anime Defenders Wiki', url: 'https://anime-defenders-wiki.vercel.app', desc: 'Codes & Secret Units', current: false },
  { name: 'Blade Ball Wiki', url: 'https://blade-ball-wiki.vercel.app', desc: 'Abilities & Sword Values', current: false },
  { name: 'Destined Rivals Wiki', url: 'https://destined-rivals-wiki.vercel.app', desc: 'Codes & Character Tier List', current: true },
  { name: 'Dress To Impress (DTI) Wiki', url: 'https://dti-wiki.vercel.app', desc: 'Codes & Pose Tier List', current: false },
  { name: 'Fisch Wiki', url: 'https://fisch-wiki.vercel.app', desc: 'Fish Values & Rod Tier List', current: false },
  { name: 'Type Soul Wiki', url: 'https://type-soul-wiki.vercel.app', desc: 'Bankai Guide & Clan List', current: false },
];

export default function MatrixNav() {
  return (
    <div className="w-full bg-slate-950/80 border-y border-amber-900/30 py-6 px-4 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Network className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Roblox Gaming Wiki Network
          </h3>
          <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
            Updated August 2026
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {MATRIX_SITES.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target={site.current ? '_self' : '_blank'}
              rel={site.current ? '' : 'noopener noreferrer'}
              className={`p-3 rounded-lg border text-left transition-all group ${
                site.current
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 ring-1 ring-amber-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-amber-500/30 hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center justify-between font-semibold text-xs mb-1">
                <span className="truncate group-hover:text-amber-300 transition-colors">{site.name}</span>
                {!site.current && <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 flex-shrink-0 ml-1 text-amber-400" />}
              </div>
              <p className="text-[10px] text-slate-400 truncate">{site.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
