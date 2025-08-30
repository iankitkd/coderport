import { NextResponse } from 'next/server';

import { auth } from '@/auth';

import { apiAuthPrefix, authRoutes, DEFAULT_SIGNIN_REDIRECT, publicRoutes } from './routes';

export default auth((req) => {
  const nextUrl = req.nextUrl;
  const { pathname } = nextUrl;

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith('/user');
  const isAuthRoute = authRoutes.includes(pathname);

  // Allow API auth endpoints
  if (isApiAuthRoute) return NextResponse.next();

  if(isLoggedIn) {
    // If logged in, redirect away from login/signup pages
    if (isAuthRoute) {
      return NextResponse.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, nextUrl));
    }
  } else {
    // If not logged in and trying to access protected routes
    if (!isPublicRoute) {
      const callbackUrl = pathname + (nextUrl.search || '');
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
