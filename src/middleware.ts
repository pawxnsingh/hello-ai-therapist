
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export function middleware(request: NextRequest) {
  const { userId } = getAuth(request);
  
  // If the user is not signed in and is trying to access a protected route
  if (!userId && request.nextUrl.pathname !== '/') {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }
  
  // If the user is signed in and is trying to access the public route
  if (userId && request.nextUrl.pathname === '/') {
    const chatUrl = new URL('/chat', request.url);
    return NextResponse.redirect(chatUrl);
  }
  
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
