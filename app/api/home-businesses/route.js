import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Business from "@/models/Business";

export async function GET() {
  await connectDB();

  const businesses = await Business.find()
    .select(
      "name slug description city phone category logoUrl shopFrontImageUrl"
    )
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return NextResponse.json(businesses);
}