import { PROTECTED_ROUTES, UNPROTECTED_ROUTES } from "@/constants";
import pages from "@/constants/pages";

const isPathOnArray = (currentPath: string, array: string[]): boolean => {
  return array.some((route) => currentPath.startsWith(route));
};

const isIndexRoute = (currentPath: string): boolean =>
  currentPath === pages.index;

const isProtectedRoute = (currentPath: string): boolean =>
  isPathOnArray(currentPath, PROTECTED_ROUTES);

const isUnprotectedRoute = (currentPath: string): boolean =>
  isPathOnArray(currentPath, UNPROTECTED_ROUTES) || isIndexRoute(currentPath);

export { isProtectedRoute, isUnprotectedRoute };
