import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);
  return NextResponse.json(request);
}
