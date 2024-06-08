"use server";

import { DEFAULT_ERROR_MESSAGE, GRAMMAR_GUARDIAN_ID } from "@/constants";
import { auth } from "@/lib/auth";
import { revalidateTag } from "next/cache";
import { askGuardian } from "@/lib/guardian";
import {
  deleteChat,
  updateChatWithMessage,
  upsertChatMessage,
} from "@/lib/prisma/chat";

interface MessagesInput {
  chatId?: string;
}

const addGuardianMessage = async (message: string, chatId: string) => {
  try {
    const guardianMessage = await askGuardian(message);
    await updateChatWithMessage(chatId, guardianMessage, GRAMMAR_GUARDIAN_ID);

    revalidateTag("/messages");
  } catch (e) {
    console.log(`addGuardianMessage error: ${e}`);
  }
};

export const addMessage = async (
  { chatId }: MessagesInput,
  formData: FormData
) => {
  const session = await auth();
  const userId = session?.user?.id;
  const text = formData.get("text") as string;

  if (!text || !userId) {
    return { error: "A text is required" };
  }

  try {
    const chat = await upsertChatMessage(chatId, text, userId);
    const currentChatId = chatId ?? chat.id;
    await addGuardianMessage(text, currentChatId);

    return { error: null, chat };
  } catch (e) {
    console.log(e);
    return { error: DEFAULT_ERROR_MESSAGE };
  }
};

export const removeChat = async ({ chatId }: MessagesInput) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId || !chatId) {
    return;
  }

  try {
    await deleteChat(chatId, userId);
    revalidateTag("/chats");
  } catch (e) {
    console.log(`Error deleting ${chatId} from user ${userId}: ${e}`);
  }
};
