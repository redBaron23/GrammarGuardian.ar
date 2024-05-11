import {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";
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

const withErrorHandling = (middleware: NextMiddlewareWithAuth) => {
  return async (req: NextRequestWithAuth, event: NextFetchEvent) => {
    try {
      return await middleware(req, event);
    } catch (error) {
      console.error("Error in middleware or route handler:", error);
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
  };
};

const middleware: NextMiddlewareWithAuth = async (req, event) => {
  return withErrorHandling(withAuthRedirect)(req, event);
};

export default middleware;

export const config = {
  matcher: ["/", "/chat", "/api/chats/:path*"],
};
