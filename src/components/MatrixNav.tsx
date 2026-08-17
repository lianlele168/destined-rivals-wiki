import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const MATRIX_SITES = [
  { name: 'Destined Rivals', url: 'https://destined-rivals-wiki.vercel.app', icon: '🗡️', active: true },
  { name: 'Jujutsu Infinite', url: 'https://jujutsu-infinite-wiki.vercel.app', icon: '⚡' },
  { name: 'Anime Defenders', url: 'https://anime-defenders-wiki.vercel.app', icon: '🛡️' },
  { name: 'Fisch Wiki', url: 'https://fisch-wiki.vercel.app', icon: '🎣' },
  { name: 'Dress to Impress', url: 'https://dti-wiki.vercel.app', icon: '👑' },
  { name: 'Blade Ball', url: 'https://blade-ball-wiki.vercel.app', icon: '⚔️' },
  { name: 'Type Soul', url: 'https://type-soul-wiki.vercel.app', icon: '🔮' }
];

export const MatrixNav = () => {
  return (
    <div className="bg-amber-950/40 border-b border-amber-800/30 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-amber-300 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Roblox Wiki Network Matrix (7 Sites):</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {MATRIX_SITES.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-1 transition-colors ${
                site.active
                  ? 'text-amber-300 font-bold underline decoration-amber-500'
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              <span>{site.icon}</span>
              <span>{site.name}</span>
              {!site.active && <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatrixNav;
