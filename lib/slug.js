import slugify from "slugify";
import Business from "@/models/Business";

export const generateSlug = async (name) => {
  let base = slugify(name, { lower: true, strict: true });
  let slug = base;
  let count = 1;

  while (await Business.findOne({ slug })) {
    slug = `${base}-${count}`;
    count++;
  }

  return slug;
};