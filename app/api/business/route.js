import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
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
    const { userId } = await auth();

    // ===== NEW: user must be logged in =====
    if (!userId) {
      return NextResponse.json(
        { error: "Please sign in first." },
        { status: 401 }
      );
    }

    const body = await req.json();

    await connectDB();

    // ===== NEW: clean values first =====
    const cleanedName = body.name?.trim();
    const cleanedEmail = body.email?.trim();
    const cleanedPhone = body.phone?.trim();
    const cleanedWebsite = body.website?.trim();
    const cleanedLogoUrl = body.logoUrl?.trim();
    const cleanedShopFrontImageUrl = body.shopFrontImageUrl?.trim();
    const cleanedAddress = body.address?.trim();
    const cleanedCity = body.city?.trim();
    const cleanedCategory = body.category?.trim();
    const cleanedDescription = body.description?.trim();

    const cleanedServices = Array.isArray(body.services)
      ? body.services.map((service) => service.trim()).filter(Boolean)
      : [];

    // Required field validation
    if (
      !cleanedName ||
      !cleanedEmail ||
      !cleanedPhone ||
      !cleanedWebsite ||
      !cleanedLogoUrl ||
      !cleanedShopFrontImageUrl ||
      !cleanedAddress ||
      !cleanedCity ||
      !cleanedCategory ||
      !cleanedDescription ||
      cleanedServices.length === 0
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Duplicate business name check
    const existingName = await Business.findOne({
      name: {
        $regex: new RegExp(`^${cleanedName}$`, "i"),
      },
    });

    if (existingName) {
      return NextResponse.json(
        {
          error: "Duplicate entry. Business already listed with this name.",
        },
        { status: 409 }
      );
    }

    // Duplicate website check
    const normalizedWebsite = cleanedWebsite
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/$/, "")
      .toLowerCase();

    const existingBusinesses = await Business.find({
      website: { $exists: true, $ne: null },
    }).select("website");

    const duplicateWebsite = existingBusinesses.find((b) => {
      const existingWebsite = (b.website || "")
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/$/, "")
        .toLowerCase();

      return existingWebsite === normalizedWebsite;
    });

    if (duplicateWebsite) {
      return NextResponse.json(
        {
          error: "Duplicate entry. Business already listed with this website.",
        },
        { status: 409 }
      );
    }

    // Generate slug
    const slug = await generateSlug(cleanedName);

    console.log("Current Clerk userId:", userId);

    console.log({
  ownerId: userId,
  name: body.name,
});

    // ===== UPDATED: ownerId now saved =====
    const business = await Business.create({
      ownerId: userId,

      name: cleanedName,
      slug,

      email: cleanedEmail,
      phone: cleanedPhone,
      address: cleanedAddress,
      city: cleanedCity,
      website: cleanedWebsite,

      logoUrl: cleanedLogoUrl,
      shopFrontImageUrl: cleanedShopFrontImageUrl,

      category: cleanedCategory,
      description: cleanedDescription,

      services: cleanedServices,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Business created successfully",
        slug: business.slug,
        business,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);

    // Mongo duplicate key fallback
    if (error.code === 11000) {
      return NextResponse.json(
        {
          error: "Duplicate entry. Business already listed.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}