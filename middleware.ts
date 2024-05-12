import {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PROTECTED_ROUTES = ["/chat", "/profile", "/settings"];
const UNPROTECTED_ROUTES = ["/"];

const withAuthRedirect = async (req: NextRequestWithAuth) => {
  const token = await getToken({
    req,
    cookieName: "next-auth.session-token",
  });

  const currentRoute = req.nextUrl.pathname;

  if (!token && currentRoute.startsWith("/api/chat")) {
    console.log(`1Redirecting from ${currentRoute} to /`);
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && UNPROTECTED_ROUTES.includes(currentRoute)) {
    console.log(`2Redirecting from ${currentRoute} to /chat`);

    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (
    !token &&
    PROTECTED_ROUTES.find((route) => currentRoute.startsWith(route))
  ) {
    console.log(`3Redirecting from ${currentRoute} to /`);

    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

const middleware: NextMiddlewareWithAuth = withAuthRedirect;

export default middleware;
