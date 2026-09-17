import React from 'react';
import type { Metadata } from 'next';
import TeamBuilderClient from './TeamBuilderClient';

export const metadata: Metadata = {
  title: 'Destined Rivals Team Builder & Synergy Calculator (September 2026)',
  description: 'Construct your ideal 5-character team for Destined Rivals. Calculate total team power, elemental synergies, and average speed.',
  alternates: {
    canonical: '/team-builder',
  },
  keywords: ['destined rivals team builder', 'destined rivals synergy calculator', 'destined rivals deck builder'],
};

export default function TeamBuilderPage() {
  return <TeamBuilderClient />;
}
