import { PROMPT, CHATGPT_VERSION } from "@/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function askGuardian(prompt: string) {
  const text = await askOpenAi(prompt);

  if (!text) {
    throw new Error("Failed to get response from ChatGPT API");
  }

  return text;
}

async function askGemini(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
  } catch (e) {
    console.error(`Algo fallo ${e}`);
    return "IDK";
  }
}

const askOpenAi = async (userSentence: string) => {
  const modelId = CHATGPT_VERSION;

  const systemMessage = PROMPT;

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      project: process.env.OPENAI_PROJECT,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userSentence },
      ],
      model: modelId,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to get response from ChatGPT API");
  }
};
