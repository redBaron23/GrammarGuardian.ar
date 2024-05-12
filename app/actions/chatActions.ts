"use server";

import { prisma } from "@/lib/prisma";

interface MessagesInput {
  userId?: string;
  chatId?: string;
}

export const addMessage = async (
  { userId, chatId }: MessagesInput,
  formData: FormData
) => {
  const text = formData.get("text") as string;

  if (!text || !userId) {
    return "A text is required";
  }

  const chat = await prisma.chat.create({
    data: {
      userId,
      id: chatId,
      messages: {
        create: {
          text,
          senderId: userId,
        },
      },
    },
  });

  return chat;
};

export const getMessages = async ({ userId, chatId }: MessagesInput) => {
  if (!chatId) {
    return [];
  }

  const messages = await prisma.message.findMany({
    where: {
      chatId,
      senderId: userId,
    },
  });

  return messages;
};
