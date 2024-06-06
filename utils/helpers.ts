import { PROTECTED_ROUTES, UNPROTECTED_ROUTES } from "@/constants/global";
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

const parseGuardianMessage = (message: string): [string, string] => {
  const parts = message.split("{{");
  const originalText = parts[0].trim();
  const improvedText =
    parts.length > 1 ? parts[1].replace("}}", "").trim() : "";

  return [originalText, improvedText];
};

export { isProtectedRoute, isUnprotectedRoute, parseGuardianMessage };
