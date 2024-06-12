import { detectLanguage } from "@/utils/helpers";
import { prisma } from ".";

export const createChat = async (userId: string, text: string) => {
  const language = await detectLanguage(text);

  return prisma.chat.create({
    data: {
      userId,
      messages: {
        create: {
          text,
          senderId: userId,
        },
      },
      language,
    },
    include: {
      messages: true,
    },
  });
};

export const updateChatWithMessage = async (
  chatId: string,
  text: string,
  senderId: string
) => {
  return prisma.chat.update({
    where: { id: chatId },
    data: {
      messages: {
        create: {
          text,
          senderId,
        },
      },
    },
  });
};

export const upsertChatMessage = (
  chatId: string | undefined,
  text: string,
  senderId: string
) => {
  if (!chatId) {
    return createChat(senderId, text);
  }

  return updateChatWithMessage(chatId, text, senderId);
};

export const deleteChat = (chatId: string, userId: string) => {
  return prisma.chat.delete({
    where: {
      userId,
      id: chatId,
    },
  });
};
