// middleware.js — force /how -> /how-it-works at the edge
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  if (url.pathname === '/how') {
    url.pathname = '/how-it-works';
    return NextResponse.redirect(url, 308);
  }
}
export const config = { matcher: ['/how'] };
