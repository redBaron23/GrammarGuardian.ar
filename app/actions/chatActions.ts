"use server";

import { DEFAULT_ERROR_MESSAGE } from "@/constants/Global";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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
    return { error: "A text is required" };
  }

  if (!chatId) {
    const chat = await prisma.chat.create({
      data: {
        userId,
        messages: {
          create: {
            text,
            senderId: userId,
          },
        },
      },
      include: {
        messages: true,
      },
    });

    redirect(`/chat/${chat.id}`);
  }

  try {
    const chat = await prisma.chat.update({
      where: { id: chatId },
      data: {
        messages: {
          create: {
            text,
            senderId: userId,
          },
        },
      },
    });

    revalidateTag("/messages");

    return { error: null, chat };
  } catch (e) {
    console.log(e);
    return { error: DEFAULT_ERROR_MESSAGE };
  }
};

export const getMessages = async (chatId?: string) => {
  if (!chatId) {
    return [];
  }

  try {
    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
    });

    return messages;
  } catch (e) {
    console.error(e);
    return [];
  }
};
