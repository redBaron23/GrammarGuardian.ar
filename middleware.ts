import {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { isUnprotectedRoute, isProtectedRoute } from "./utils/helpers";

const withAuthRedirect = async (req: NextRequestWithAuth) => {
  const isAuthenticated = !!(await getToken({
    req,
    cookieName: "next-auth.session-token",
  }));

  const currentPath = req.nextUrl.pathname;

  if (isAuthenticated && isUnprotectedRoute(currentPath)) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  if (!isAuthenticated && isProtectedRoute(currentPath)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

const middleware: NextMiddlewareWithAuth = withAuthRedirect;

export default middleware;
