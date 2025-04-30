import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log(req);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api/trpc)(.*)'],
};
