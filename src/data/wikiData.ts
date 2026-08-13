export interface Code {
  code: string;
  rewards: string;
  status: 'Active' | 'Expired';
  addedDate: string;
  isNew?: boolean;
}

export interface TierItem {
  id: string;
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B' | 'C';
  category: 'Character' | 'Card' | 'Weapon';
  element: 'Fire' | 'Water' | 'Lightning' | 'Dark' | 'Light';
  description: string;
  stats: {
    power: number;
    speed: number;
    utility: number;
  };
}

export interface CardPackItem {
  name: string;
  rarity: 'Secret Ultra' | 'Ultra Rare' | 'Super Rare' | 'Rare' | 'Common';
  chance: string;
  color: string;
  imageIcon: string;
}

export const ACTIVE_CODES: Code[] = [
  {
    code: "RIVALS2026",
    rewards: "5,000 Free Gems + 10x Secret Booster Packs",
    status: "Active",
    addedDate: "August 2026",
    isNew: true
  },
  {
    code: "DESTINED50K",
    rewards: "50,000 Gold + Exclusive Legendary Avatar Frame",
    status: "Active",
    addedDate: "August 2026",
    isNew: true
  },
  {
    code: "SUMMERUPDATE",
    rewards: "3x Ultra Rare Summon Tickets + 2,500 Gems",
    status: "Active",
    addedDate: "July 2026",
    isNew: false
  },
  {
    code: "FREEPACKS99",
    rewards: "5x Destined Booster Packs",
    status: "Active",
    addedDate: "July 2026",
    isNew: false
  },
  {
    code: "RELEASE2026",
    rewards: "1,000 Gems + 10,000 Coins Starter Pack",
    status: "Active",
    addedDate: "June 2026",
    isNew: false
  }
];

export const EXPIRED_CODES: Code[] = [
  {
    code: "BETA100K",
    rewards: "1,000 Coins",
    status: "Expired",
    addedDate: "May 2026"
  },
  {
    code: "LAUNCHDAY",
    rewards: "500 Gems",
    status: "Expired",
    addedDate: "April 2026"
  }
];

export const TIER_LIST_DATA: TierItem[] = [
  {
    id: "dr-01",
    name: "Draconic Ignis (Secret Ultra)",
    tier: "S+",
    category: "Character",
    element: "Fire",
    description: "Supreme AoE burst damage. Clears entire waves with Inferno Nova strike.",
    stats: { power: 99, speed: 88, utility: 92 }
  },
  {
    id: "dr-02",
    name: "Aetherial Valkyrie",
    tier: "S+",
    category: "Character",
    element: "Light",
    description: "Unrivaled support & high single-target DPS. Grants 50% damage buff to all allies.",
    stats: { power: 94, speed: 95, utility: 98 }
  },
  {
    id: "dr-03",
    name: "Shadowblade Shinobi",
    tier: "S",
    category: "Character",
    element: "Dark",
    description: "Insane critical hit rate with instant teleport assassination skills.",
    stats: { power: 92, speed: 99, utility: 82 }
  },
  {
    id: "dr-04",
    name: "Celestial Barrier Shield",
    tier: "S",
    category: "Card",
    element: "Light",
    description: "Negates 80% incoming damage for 3 turns. Essential for endgame boss raids.",
    stats: { power: 75, speed: 80, utility: 97 }
  },
  {
    id: "dr-05",
    name: "Stormlord Mjolnir",
    tier: "S",
    category: "Weapon",
    element: "Lightning",
    description: "High chain-lightning damage with a 40% chance to stun targets on hit.",
    stats: { power: 90, speed: 85, utility: 88 }
  },
  {
    id: "dr-06",
    name: "Frostbite Empress",
    tier: "A",
    category: "Character",
    element: "Water",
    description: "Excellent crowd control. Freezes enemies in place for 4 seconds.",
    stats: { power: 84, speed: 80, utility: 90 }
  },
  {
    id: "dr-07",
    name: "Abyssal Scythe",
    tier: "A",
    category: "Weapon",
    element: "Dark",
    description: "Lifesteal weapon that restores HP equal to 25% of damage dealt.",
    stats: { power: 86, speed: 82, utility: 85 }
  },
  {
    id: "dr-08",
    name: "Solar Flare Amulet",
    tier: "B",
    category: "Card",
    element: "Fire",
    description: "Increases burn damage by 30%. Good for early-game boss fights.",
    stats: { power: 78, speed: 70, utility: 75 }
  },
  {
    id: "dr-09",
    name: "Iron Vanguard Guardian",
    tier: "B",
    category: "Character",
    element: "Water",
    description: "Solid starter tank character with decent taunt capabilities.",
    stats: { power: 70, speed: 65, utility: 80 }
  },
  {
    id: "dr-10",
    name: "Novice Claymore",
    tier: "C",
    category: "Weapon",
    element: "Fire",
    description: "Basic starter weapon. Recommended to replace after reaching Chapter 2.",
    stats: { power: 55, speed: 50, utility: 50 }
  }
];

export const PACK_SIMULATOR_ITEMS: CardPackItem[] = [
  { name: "Draconic Ignis (Secret Ultra)", rarity: "Secret Ultra", chance: "0.5%", color: "text-amber-400 border-amber-500 bg-amber-950/40", imageIcon: "🔥" },
  { name: "Aetherial Valkyrie", rarity: "Ultra Rare", chance: "2.5%", color: "text-purple-400 border-purple-500 bg-purple-950/40", imageIcon: "✨" },
  { name: "Stormlord Mjolnir", rarity: "Super Rare", chance: "12.0%", color: "text-blue-400 border-blue-500 bg-blue-950/40", imageIcon: "⚡" },
  { name: "Frostbite Empress", rarity: "Super Rare", chance: "15.0%", color: "text-cyan-400 border-cyan-500 bg-cyan-950/40", imageIcon: "❄️" },
  { name: "Solar Flare Amulet", rarity: "Rare", chance: "30.0%", color: "text-emerald-400 border-emerald-500 bg-emerald-950/40", imageIcon: "🛡️" },
  { name: "Novice Claymore", rarity: "Common", chance: "40.0%", color: "text-slate-400 border-slate-600 bg-slate-900/40", imageIcon: "⚔️" }
];

export const FAQS = [
  {
    question: "How do I redeem Destined Rivals codes?",
    answer: "Open Destined Rivals > Click the Settings (Gear icon) or Shop icon > Navigate to the Codes tab > Type in the active code exactly as shown > Click Redeem to claim your instant rewards!"
  },
  {
    question: "Where can I find new Destined Rivals codes?",
    answer: "We update this page daily with official codes released on the game's Discord, Twitter, and milestone announcements. Bookmark this page to never miss free gems!"
  },
  {
    question: "Why is my Destined Rivals code not working?",
    answer: "Codes are case-sensitive! Ensure there are no trailing spaces. Also check if the code has expired. Expired codes are moved to our Expired Codes section."
  },
  {
    question: "What is the best character card in Destined Rivals?",
    answer: "Draconic Ignis and Aetherial Valkyrie currently dominate the S+ Tier in the latest 2026 meta due to their incredible AoE damage and team attack buffs."
  }
];
