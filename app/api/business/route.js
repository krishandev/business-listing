import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Business from "@/models/Business";
import slugify from "slugify";

// Generate unique slug
const generateSlug = async (name) => {
  let base = slugify(name, { lower: true, strict: true });
  let slug = base;
  let count = 1;

  while (await Business.findOne({ slug })) {
    slug = `${base}-${count}`;
    count++;
  }

  return slug;
};

export async function POST(req) {
  try {
    const body = await req.json();

    // Connect DB
    await connectDB();

    // Basic validation
    if (!body.name) {
      return NextResponse.json(
        { error: "Business name is required" },
        { status: 400 }
      );
    }

    // Generate slug
    const slug = await generateSlug(body.name);

    // Create business
    const business = await Business.create({
      name: body.name,
      slug,
      email: body.email || "",
      phone: body.phone || "",
      address: body.address || "",
      city: body.city || "",
      website: body.website || "",
      category: body.category || "",
      description: body.description || "",
      services: body.services || [],
    });

    return NextResponse.json(
      {
        success: true,
        message: "Business created successfully",
        data: business,
        slug: business.slug,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}