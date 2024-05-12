"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface MessagesInput {
  chatId?: string;
}

export const addMessage = async (
  { chatId }: MessagesInput,
  formData: FormData
) => {
  const session = await auth();
  const userId = session?.user.id;

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

export const getMessages = async ({ chatId }: MessagesInput) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!chatId || !userId) {
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
