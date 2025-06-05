import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirects: Record<string, string> = {
    "/home": "/",
    "/aeternumfeatures/messagesthattranscendtime": "/features",
    "/developmentprogress": "/development",
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url),
      301
    );
  }

  return NextResponse.next();
}
