import pages from "./pages";

export const USER_ID = "cloue3fy80002jycwh3o6g47c";
export const CHAT_ID = "cloumogov0000jynuxit11y2x";

export const DEFAULT_ERROR_MESSAGE = "Something went wrong";
export const PROTECTED_ROUTES = [pages.chat, pages.profile, pages.settings];

// Index is an unprotected page
export const UNPROTECTED_ROUTES = [];

export const PROMPTS = {
  ASSISTANT:
    "You are a language learning assistant. Your primary task is to help users improve their grammar in the language they are learning. Correct their sentences, explain grammar rules, and provide examples when necessary.",
};
