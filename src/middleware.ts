import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    try {
      analytics.track("pageview", {
        page: "/",
        country: request.geo?.country,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
