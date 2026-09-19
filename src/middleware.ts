import { NextResponse, type NextRequest } from "next/server";

/**
 * SITE RETIRED — full-site 301 to the real RIVALS wiki.
 *
 * "Destined Rivals" is not a Roblox experience: the name belongs to a
 * Pokémon TCG expansion and a Kirby story mode. Every page here (codes,
 * characters, tier list, pack simulator, team builder) was generated from a
 * fabricated game, and the character roster plus several "active codes" were
 * AI inventions.
 *
 * The URLs are 301'd rather than deleted so they leave Google's index and any
 * residual link equity lands on rivals.robloxwikihub.com.
 *
 * Context: indexing-diagnosis/reports/codes-hallucination-screening-2026-09-19.md
 */
const TARGET = "https://rivals.robloxwikihub.com";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The /codes page was the only route backed by real (RIVALS) data.
  const target =
    pathname === "/codes" || pathname === "/codes/"
      ? `${TARGET}/codes`
      : TARGET;

  return NextResponse.redirect(target, 308);
}

export const config = {
  // Everything except build assets and files served from /public.
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|images/).*)"],
};
