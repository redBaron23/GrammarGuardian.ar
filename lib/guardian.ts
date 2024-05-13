import OpenAI from "openai";

interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
    index: number;
  }[];
}

const url = "https://api.openai.com/v1/chat/completions";

export async function askGuardian(prompt: string): Promise<string> {
  const modelId = "gpt-3.5-turbo";

  try {
    const openai = new OpenAI();

    const generatedText = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: modelId,
    });

    console.log({ generatedText });

    return "generatedText";
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to get response from ChatGPT API");
  }
}
