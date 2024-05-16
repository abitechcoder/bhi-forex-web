import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname.startsWith("/account")) {
    // profile[0]?.role === "user"
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!session && req.nextUrl.pathname.startsWith("/admin/confirm")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (session && req.nextUrl.pathname.startsWith("/admin/confirm")) {
    // console.log("ID:", session?.user.id);

    let { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session?.user.id);

    if (profile[0].role === "user") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
