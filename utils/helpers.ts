import { PROTECTED_ROUTES, UNPROTECTED_ROUTES } from "@/constants/Global";

const isPathOnArray = (currentPath: string, array: string[]): boolean => {
  return array.some((route) => currentPath.startsWith(route));
};

const isIndexRoute = (currentPath: string): boolean => currentPath === "/";

const isProtectedRoute = (currentPath: string): boolean =>
  isPathOnArray(currentPath, PROTECTED_ROUTES);

const isUnprotectedRoute = (currentPath: string): boolean =>
  isPathOnArray(currentPath, UNPROTECTED_ROUTES) || isIndexRoute(currentPath);

export { isProtectedRoute, isUnprotectedRoute };
