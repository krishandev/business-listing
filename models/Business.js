import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },

    description: String,
    phone: String,
    email: String,
    address: String,
    website: String,
    logoUrl: String,
    shopFrontImageUrl: String,

    category: String,
    city: String,

    services: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Business ||
  mongoose.model("Business", BusinessSchema);