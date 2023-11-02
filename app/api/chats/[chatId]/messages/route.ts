import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiParams } from "@/types/ApiTypes";
import { USER_ID } from "@/constants/Global";

type MessageCreateInput = {
  text: string;
  senderId: string;
};

export async function GET(_: NextRequest, { params: { chatId } }: ApiParams) {
  const messages = await prisma.message.findMany({
    where: { chatId },
  });

  return NextResponse.json(messages);
}

export async function POST(
  request: NextRequest,
  { params: { chatId } }: ApiParams
) {
  const { text, senderId }: MessageCreateInput = await request.json();

  const createdMessage = await prisma.message.create({
    data: {
      text,
      senderId: USER_ID, //  senderId
      chatId,
    },
  });

  return NextResponse.json(createdMessage);
}
