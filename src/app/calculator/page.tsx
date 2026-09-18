import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Destined Rivals Weapon DPS Calculator & Stat Optimizer ',
  description: 'Interactive DPS and Time-to-Kill (TTK) calculator for Destined Rivals. Calculate effective weapon damage, crit multipliers, and headshot factors.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['destined rivals dps calculator', 'destined rivals weapon damage', 'destined rivals stat calculator'],
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
