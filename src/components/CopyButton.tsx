'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 shadow-sm ${
        copied
          ? 'bg-emerald-600 text-white border border-emerald-400 shadow-emerald-900/50'
          : 'bg-purple-600/80 hover:bg-purple-600 text-white border border-purple-400/40 hover:border-purple-400 shadow-purple-950/50'
      }`}
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-white animate-bounce" />
          <span>COPIED!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>COPY</span>
        </>
      )}
    </button>
  );
}
