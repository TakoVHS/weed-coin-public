import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_HOST = 'weed-coin.cash';
const WWW_HOST = 'www.weed-coin.cash';
const INTERNAL_HOST = 'officeos-prime-66wni.ondigitalocean.app';
const INTERNAL_PREFIXES = ['/office', '/fabric', '/api/control'];

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  const isInternalPath = INTERNAL_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const isPublicHost = host === PUBLIC_HOST || host === WWW_HOST;

  if (isPublicHost && isInternalPath) {
    const url = request.nextUrl.clone();
    url.host = INTERNAL_HOST;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone();
    url.host = PUBLIC_HOST;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
