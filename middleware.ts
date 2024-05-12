import {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PROTECTED_ROUTES = ["/chat"];
const UNPROTECTED_ROUTES = ["/"];

const withAuthRedirect = async (req: NextRequestWithAuth) => {
  const token = await getToken({
    req,
    cookieName: "next-auth.session-token",
  });

  const currentRoute = req.nextUrl.pathname;

  if (!token && currentRoute.startsWith("/api/chats")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && UNPROTECTED_ROUTES.includes(currentRoute)) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (!token && PROTECTED_ROUTES.includes(currentRoute)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

const middleware: NextMiddlewareWithAuth = withAuthRedirect;

export default middleware;

export const config = {
  matcher: ["/", "/chat", "/api/chats/:path*"],
};
