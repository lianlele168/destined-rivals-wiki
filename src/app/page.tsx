import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Destined Rivals Codes & Tier List - Active Redeem Codes',
  description: 'Get the latest working Destined Rivals redeem codes for free gems, secret booster packs, and rewards. Explore 2026 character & weapon tier lists and pack simulator.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
