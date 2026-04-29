import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'weed-coin-public',
    hasOpenRouterKey: Boolean(process.env.OPENROUTER_API_KEY),
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    timestamp: new Date().toISOString(),
  });
}
