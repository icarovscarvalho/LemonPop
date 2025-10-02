import { NextResponse } from "next/server";

import { musicListsData } from "../../utils/musicListsData"; 

export async function GET() {
  return NextResponse.json(musicListsData)
}