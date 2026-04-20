import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
  {
    // Clerk user who created the listing
    ownerId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },

    // Business name
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // SEO-friendly URL slug
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    logoUrl: {
      type: String,
      required: true,
      trim: true,
    },

    shopFrontImageUrl: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    services: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "At least one service is required.",
      },
    },
  },
  { timestamps: true }
);

// IMPORTANT: clear old cached model so ownerId field is picked up
if (mongoose.models.Business) {
  delete mongoose.models.Business;
}

const Business = mongoose.model("Business", BusinessSchema);

export default Business;