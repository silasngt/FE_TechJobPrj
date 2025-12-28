import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieHeader = request.headers.get('cookie') || '';

  // chỉ cần tồn tại token
  const hasToken = cookieHeader.includes('token=');

  if (!hasToken) {
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
