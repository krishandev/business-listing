import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/db";
import Business from "@/models/Business";

export const dynamic = "force-dynamic";

// GET single business
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    await connectDB();

    const business = await Business.findOne({
      _id: new mongoose.Types.ObjectId(id),
      ownerId: userId,
    }).lean();

    if (!business) {
      return NextResponse.json(
        { error: "Business not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(business);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// PUT update business
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await req.json();

    await connectDB();

    const business = await Business.findOne({
      _id: new mongoose.Types.ObjectId(id),
      ownerId: userId,
    });

    if (!business) {
      return NextResponse.json(
        { error: "Business not found" },
        { status: 404 }
      );
    }

    business.name = body.name?.trim();
    business.email = body.email?.trim();
    business.phone = body.phone?.trim();
    business.website = body.website?.trim();
    business.logoUrl = body.logoUrl?.split(",")[0]?.trim();
    business.shopFrontImageUrl = body.shopFrontImageUrl
      ?.split(",")[0]
      ?.trim()
      ?.split(" ")[0];
    business.address = body.address?.trim();
    business.city = body.city?.trim();
    business.category = body.category?.trim();
    business.description = body.description?.trim();
    business.services = body.services || [];

    await business.save();

    return NextResponse.json({
      success: true,
      message: "Business updated successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update business" },
      { status: 500 }
    );
  }
}

// DELETE business
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    await connectDB();

    const business = await Business.findOne({
      _id: new mongoose.Types.ObjectId(id),
      ownerId: userId,
    });

    if (!business) {
      return NextResponse.json(
        { error: "Business not found" },
        { status: 404 }
      );
    }

    await Business.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
      ownerId: userId,
    });

    return NextResponse.json({
      success: true,
      message: "Business deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete business" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs/server";
// import { connectDB } from "@/lib/db";
// import Business from "@/models/Business";

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { userId } = await auth();

//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized. Please sign in." },
//         { status: 401 }
//       );
//     }

//     await connectDB();

//     const business = await Business.findOne({
//       _id: params.id,
//       ownerId: userId,
//     });

//     if (!business) {
//       return NextResponse.json(
//         { error: "Business not found or you do not have permission." },
//         { status: 404 }
//       );
//     }

//     await Business.deleteOne({ _id: params.id });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Business deleted successfully.",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("DELETE /api/my-businesses/[id] error:", error);

//     return NextResponse.json(
//       { error: "Something went wrong while deleting the business." },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { userId } = await auth();

//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized. Please sign in." },
//         { status: 401 }
//       );
//     }

//     const body = await req.json();

//     await connectDB();

//     const business = await Business.findOne({
//       _id: params.id,
//       ownerId: userId,
//     });

//     if (!business) {
//       return NextResponse.json(
//         { error: "Business not found or you do not have permission." },
//         { status: 404 }
//       );
//     }

//     // Duplicate business name check (exclude current business)
//     const existingName = await Business.findOne({
//       _id: { $ne: params.id },
//       name: {
//         $regex: new RegExp(`^${body.name.trim()}$`, "i"),
//       },
//     });

//     if (existingName) {
//       return NextResponse.json(
//         {
//           error: "Another business already exists with this name.",
//         },
//         { status: 409 }
//       );
//     }

//     // Duplicate website check (exclude current business)
//     const normalizedWebsite = body.website
//       .trim()
//       .replace(/^https?:\/\//, "")
//       .replace(/^www\./, "")
//       .replace(/\/$/, "")
//       .toLowerCase();

//     const existingBusinesses = await Business.find({
//       _id: { $ne: params.id },
//       website: { $exists: true, $ne: null },
//     }).select("website");

//     const duplicateWebsite = existingBusinesses.find((b) => {
//       const existingWebsite = (b.website || "")
//         .replace(/^https?:\/\//, "")
//         .replace(/^www\./, "")
//         .replace(/\/$/, "")
//         .toLowerCase();

//       return existingWebsite === normalizedWebsite;
//     });

//     if (duplicateWebsite) {
//       return NextResponse.json(
//         {
//           error: "Another business already exists with this website.",
//         },
//         { status: 409 }
//       );
//     }

//     business.name = body.name.trim();
//     business.email = body.email.trim();
//     business.phone = body.phone.trim();
//     business.address = body.address.trim();
//     business.city = body.city.trim();
//     business.website = body.website.trim();
//     business.logoUrl = body.logoUrl.trim();
//     business.shopFrontImageUrl = body.shopFrontImageUrl.trim();
//     business.category = body.category.trim();
//     business.description = body.description.trim();
//     business.services = body.services
//       .map((service: string) => service.trim())
//       .filter(Boolean);

//     await business.save();

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Business updated successfully.",
//         business,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("PUT /api/my-businesses/[id] error:", error);

//     return NextResponse.json(
//       { error: "Something went wrong while updating the business." },
//       { status: 500 }
//     );
//   }
// }