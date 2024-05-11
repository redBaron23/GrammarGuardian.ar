import { NextMiddlewareWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // Import to fetch JWT token

const PROTECTED_ROUTES = ["/chat"]; // Routes requiring authentication
const UNPROTECTED_ROUTES = ["/"]; // Routes accessible without authentication

/**
 * This middleware function handles access control for protected routes in the application.
 * It utilizes NextAuth.js to check for a valid JWT token in the request cookies.
 *
 * @param {NextRequest} req The incoming Next.js request object.
 *
 * @returns {NextResponse} A NextResponse object for redirection or continuing the request.
 */
const middleware: NextMiddlewareWithAuth = async (req) => {
  // Retrieve the JWT token from the request cookies
  const token = await getToken({
    req,
    cookieName: "next-auth.session-token",
  });

  const currentRoute = req.nextUrl.pathname;

  // Handle protected route access for authenticated users
  if (token && UNPROTECTED_ROUTES.includes(currentRoute)) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  // Handle unauthorized access to protected routes
  if (!token && PROTECTED_ROUTES.includes(currentRoute)) {
    // Redirect unauthorized users to the login page
    return NextResponse.redirect(new URL("/", req.url));
  }

  // No redirection needed, continue with the request
  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/", "/chat"],
};
