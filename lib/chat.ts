import { auth } from "./auth";
import { prisma } from "./prisma";

export const getMessages = async (chatId?: string) => {
  if (!chatId) {
    return [];
  }

  try {
    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getChats = async () => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return [];
  }

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userId,
      },
      include: {
        messages: true,
      },
    });

    return chats;
  } catch (e) {
    console.error(e);
    return [];
  }
};
