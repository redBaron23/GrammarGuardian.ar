import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { MessageCreateInput } from "./[chatId]/messages/route";

// NEED SESSION
export async function GET(request: NextRequest) {
  // const data = request.json();

  // const chats = await prisma.chat.findMany({
  //   where: { userId },
  // });
  return NextResponse.json("mensajes");
}

// add middleware to reject not authenticated
export async function POST(req: NextRequest) {
  const reqPromise: Promise<MessageCreateInput> = await req.json();
  const tokenPromise = getToken({
    req,
    // nto neccessary
    // cookieName: "next-auth.session-token",
  });

  const [{ text }, token] = await Promise.all([reqPromise, tokenPromise]);

  const userId = token?.id as string;

  if (!text) {
    return NextResponse.json("A text is required", { status: 400 });
  }

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
  });

  return NextResponse.json(chat);
}
