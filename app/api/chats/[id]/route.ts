import { NextRequest, NextResponse } from "next/server";
import { MessageType } from "@/libs/validations/MessageValidation";
import { prisma } from "@/libs/prisma";

const MESSAGES = [
  {
    id: "1",
    senderId: "1",
    text: "Hola que haces",
    timestamp: new Date().getDate(),
  },
  {
    id: "2",
    senderId: "2",
    text: "Nada",
    timestamp: new Date().getDate(),
  },
] as MessageType[];

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json(MESSAGES);
}

export async function POST(request: NextRequest) {
  const parsedRequest = await request.json();
  console.log(parsedRequest);

  return NextResponse.json(MESSAGES);
}
