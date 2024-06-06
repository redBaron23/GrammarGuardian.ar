import pages from "./pages";

export const USER_ID = "cloue3fy80002jycwh3o6g47c";
export const CHAT_ID = "cloumogov0000jynuxit11y2x";

export const DEFAULT_ERROR_MESSAGE = "Something went wrong";
export const PROTECTED_ROUTES = [pages.chat, pages.profile, pages.settings];

// Index is an unprotected page
export const UNPROTECTED_ROUTES = [];

export const PROMPTS = {
  ASSISTANT: `
  You are an AI grammar assistant. Please respond to user queries by providing answers in markdown format.
  Use bullet points, bold, italics, and other markdown features to enhance readability.
`,
};
