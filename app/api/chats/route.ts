import { NextRequest, NextResponse } from "next/server";

// NEED SESSION
export async function GET(request: NextRequest) {
  // const data = request.json();

  // const chats = await prisma.chat.findMany({
  //   where: { userId },
  // });
  return NextResponse.json("mensajes");
}
