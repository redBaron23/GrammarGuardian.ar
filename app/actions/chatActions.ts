"use server";

import { DEFAULT_ERROR_MESSAGE } from "@/constants/global";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { askGuardian } from "@/lib/guardian";

interface MessagesInput {
  chatId?: string;
}

const addGuardianMessage = async (message: string, chatId: string) => {
  try {
    const guardianMessage = await askGuardian(message);

    await prisma.chat.update({
      where: { id: chatId },
      data: {
        messages: {
          create: {
            text: guardianMessage,
            senderId: "0",
          },
        },
      },
    });

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

    await addGuardianMessage(text, chatId);

    return { error: null, chat };
  } catch (e) {
    console.log(e);
    return { error: DEFAULT_ERROR_MESSAGE };
  }
};

export const removeChat = async ({ chatId }: MessagesInput) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return;
  }

  try {
    await prisma.chat.delete({
      where: {
        userId,
        id: chatId,
      },
    });

    revalidateTag("/chats");
  } catch (e) {
    console.log(`Error deleting ${chatId} from user ${userId}: ${e}`);
  }
};
