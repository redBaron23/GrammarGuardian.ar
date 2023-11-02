import { NextRequest, NextResponse } from "next/server";
import { MessageType } from "@/lib/validations/MessageValidation";
import { prisma } from "@/lib/prisma";
import { ApiParams } from "@/types/ApiTypes";

export async function GET(_: NextRequest, { params: { chatId } }: ApiParams) {
  const chat = await prisma.message.findMany({
    where: { chatId },
  });
  return NextResponse.json(chat);
}

// NEED SESSION
// export async function POST(request: NextRequest) {
//   const parsedRequest = await request.json();
//   console.log(parsedRequest);

//   return NextResponse.json(MESSAGES);
// }
