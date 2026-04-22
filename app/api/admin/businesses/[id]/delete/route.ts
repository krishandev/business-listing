import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db";
import Business from "@/models/Business";
import { isAdmin } from "@/lib/admin";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();

  if (!isAdmin(userId)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  await connectDB();

  await Business.findByIdAndDelete(id);

  return NextResponse.redirect(new URL("/admin", req.url));
}