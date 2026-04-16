import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Star, Store } from "lucide-react";
import { connectDB } from "@/lib/db";
import Business from "@/models/Business";

export const dynamic = "force-dynamic";

export default async function BusinessesPage() {
  await connectDB();

  const businesses = await Business.find()
    .select(
      "name slug description city phone category logoUrl shopFrontImageUrl rating reviewCount"
    )
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-center text-3xl md:text-5xl font-bold text-[#468432]">
          All Businesses
        </h1>

        <p className="mb-10 text-center text-gray-600">
          Discover trusted and recently added businesses.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {businesses.map((biz) => (
            <Link
              key={biz._id.toString()}
              href={`/${biz.slug}`}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 bg-gradient-to-br from-green-100 to-green-200">
                {biz.shopFrontImageUrl ? (
                  <Image
                    src={biz.shopFrontImageUrl}
                    alt={biz.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : biz.logoUrl ? (
                  <div className="flex h-full items-center justify-center bg-white p-6">
                    <Image
                      src={biz.logoUrl}
                      alt={`${biz.name} logo`}
                      width={140}
                      height={140}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-[#468432]">
                    <Store className="h-16 w-16" />
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Logo + Title */}
                <div className="flex items-start gap-4">
                  {biz.logoUrl && (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white p-2 shadow-sm">
                      <Image
                        src={biz.logoUrl}
                        alt={`${biz.name} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-[#468432]">
                      {biz.category || "Local Business"}
                    </span>

                    <h2 className="mt-3 text-2xl font-bold text-gray-900 transition group-hover:text-[#468432] line-clamp-2">
                      {biz.name}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
                  {biz.description || "No description available."}
                </p>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-2 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold text-gray-900">
                    {biz.rating || "4.8"}
                  </span>
                  <span className="text-gray-500">
                    ({biz.reviewCount || "24"} reviews)
                  </span>
                </div>

                {/* Location + Phone */}
                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#468432]" />
                    <span>{biz.city || "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#468432]" />
                    <span>{biz.phone || "N/A"}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 inline-flex items-center font-semibold text-[#468432] transition group-hover:translate-x-1">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

