import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiParams } from "@/types/ApiTypes";
import { getServerSideSession } from "@/lib/utils/ServerUtils";

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
  req: NextRequest,
  { params: { chatId } }: ApiParams
) {
  const { text }: MessageCreateInput = await req.json();
  // const { user } = await getServerSideSession();

  // const createdMessage = await prisma.message.create({
  //   data: {
  //     text,
  //     chatId,
  //     senderId: user.id,
  //   },
  // });

  // return NextResponse.json(createdMessage);
}
