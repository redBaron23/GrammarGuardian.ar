import {
  NextMiddlewareWithAuth,
  NextRequestWithAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { isUnprotectedRoute, isProtectedRoute } from "./utils/helpers";
import pages from "./constants/pages";

const withAuthRedirect = async (req: NextRequestWithAuth) => {
  const isAuthenticated = !!(await getToken({
    req,
    cookieName: "next-auth.session-token",
  }));

  const currentPath = req.nextUrl.pathname;

  console.warn("Data", {
    isAuthenticated,
    currentPath,
    unpro: isUnprotectedRoute(currentPath),
    pro: isProtectedRoute(currentPath),
  });

  console.warn(
    `Redirect from ${currentPath} to ...chat? ${
      isAuthenticated && isUnprotectedRoute(currentPath)
    } or ..... to /  ${!isAuthenticated && isProtectedRoute(currentPath)}`
  );

  if (isAuthenticated && isUnprotectedRoute(currentPath)) {
    return NextResponse.redirect(new URL(pages.chat, req.url));
  }

  if (!isAuthenticated && isProtectedRoute(currentPath)) {
    return NextResponse.redirect(new URL(pages.index, req.url));
  }

  return NextResponse.next();
};

const middleware: NextMiddlewareWithAuth = withAuthRedirect;

export default middleware;
