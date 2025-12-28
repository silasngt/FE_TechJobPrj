import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie') || '';

  if (!cookie.includes('token=')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/user-manage/:path*',
    '/company-manage/:path*',
    '/job/apply/:path*',
  ],
};
