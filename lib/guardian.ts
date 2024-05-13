import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function askGuardian(prompt: string): Promise<string> {
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}

const askOpenAi = async (prompt: string) => {
  const modelId = "gpt-3.5-turbo";

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      project: "test",
    });

    const generatedText = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: modelId,
    });

    console.log({ generatedText });

    return generatedText;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to get response from ChatGPT API");
  }
};
