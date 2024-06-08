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

const extractCodeBlock = (input: string): [string, string] => {
  const codeBlockRegex = /```([\s\S]*?)```/g;
  let match;
  let codeBlockContent = "";
  let textWithoutCodeBlock = input;

  // Extract content inside "```" blocks
  while ((match = codeBlockRegex.exec(input)) !== null) {
    codeBlockContent += match[1].trim() + "\n";
  }
  codeBlockContent = codeBlockContent.trim();

  // Remove "```" blocks from the input string
  textWithoutCodeBlock = textWithoutCodeBlock
    .replace(codeBlockRegex, "")
    .trim();

  return [textWithoutCodeBlock, codeBlockContent];
};

const getGuardianDisplayMessage = (message: string) => {
  const [cleanText, codeContent] = extractCodeBlock(message);
  console.log({ codeContent });
  const grammarAnswer = `${codeContent} \n ${cleanText}`;

  return grammarAnswer;
};

const getMessageToCopy = (message: string): string => {
  // Remove bold formatting (**text**) from the message
  const messageWithoutBold = message.replace(/\*\*(.*?)\*\*/g, "$1");
  return messageWithoutBold;
};

export {
  isProtectedRoute,
  isUnprotectedRoute,
  getGuardianDisplayMessage,
  getMessageToCopy,
};
