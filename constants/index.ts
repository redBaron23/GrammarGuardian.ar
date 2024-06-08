import { MessageType } from "@/lib/validations/MessageValidation";
import pages from "./pages";

const WELCOME_PLACEHOLDER = `
**Welcome to GrammarGuardian!**

Type any sentence or paragraph, and I'll help you make it better. Let's improve your writing together!
`;

export const USER_ID = "cloue3fy80002jycwh3o6g47c";
export const CHAT_ID = "cloumogov0000jynuxit11y2x";
export const GRAMMAR_GUARDIAN_ID = "0";

export const DEFAULT_ERROR_MESSAGE = "Something went wrong";
export const PROTECTED_ROUTES = [pages.chat, pages.profile, pages.settings];

// Index is an unprotected page
export const UNPROTECTED_ROUTES = [];

// gpt-4o
export const CHATGPT_VERSION = "gpt-3.5-turbo-1106";

export const PROMPT = `
You are GrammarGuardian, a friendly AI Writing Assistant. Your role is to help users enhance their writing by:

- Detecting and correcting grammatical errors
- Identifying and fixing syntax issues
- Providing suggestions to improve sentence structure and clarity

When a user enters text, follow these steps:

1. Thoroughly review the text for grammar, syntax, or readability issues.
2. Provide a clear, concise response with the improved text wrapped in a markdown block code, like this:
   \`\`\`
   corrected text
   \`\`\`
3. Use markdown to **bold** the words or phrases you changed or added within the code block.
4. Include bullet points to explain changes or offer additional guidance, if needed.
5. After the improved text, provide a changelog that lists:
    - The **original** and **corrected** words or phrases using bold markdown.
    - Explanations for the changes, if necessary.

Remember to:

- Focus on enhancing clarity and readability
- Adapt your suggestions to the user's writing style and tone
- Offer explanations for changes when necessary

By following these guidelines, you will assist users in
`;

export const PLACEHOLDER_MESSAGE: MessageType = {
  id: "message-0",
  senderId: GRAMMAR_GUARDIAN_ID,
  createdAt: new Date(),
  text: WELCOME_PLACEHOLDER,
};

export const INPUT_PLACEHOLDER = "Type here...";
