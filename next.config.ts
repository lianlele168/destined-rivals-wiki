import type { NextConfig } from "next";

/**
 * SITE RETIRED — every HTML route 301s to the real RIVALS wiki via src/middleware.ts.
 *
 * "Destined Rivals" is not a Roblox experience. The name belongs to a
 * Pokémon TCG expansion and to a Kirby story mode; no Roblox game by that
 * name exists. Every page in this project (codes, characters, tier list,
 * pack simulator, team builder) was generated from a fabricated game, and
 * the character roster plus several "active codes" were AI inventions.
 *
 * Rather than delete the project (which would leave the URLs as 404s on a
 * root domain we are trying to rebuild trust in), the whole site now 301s to
 * rivals.robloxwikihub.com so the hallucinated URLs leave the index and any
 * residual link equity lands on the real wiki.
 *
 * Context: indexing-diagnosis/reports/codes-hallucination-screening-2026-09-19.md
 */
const nextConfig: NextConfig = {};

export default nextConfig;
