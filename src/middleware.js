

import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
async function middleware(request) {

  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/blog',
    '/profile',
    '/home'
  ],
}

export default middleware