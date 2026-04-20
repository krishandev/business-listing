import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { MapPin, Phone, Store } from "lucide-react";

import { connectDB } from "@/lib/db";
import Business from "@/models/Business";
import DeleteBusinessButton from "@/components/DeleteBusinessButton";

export const dynamic = "force-dynamic";

export default async function MyBusinessesPage() {
  const { userId } = await auth();

  // Redirect if not signed in
  if (!userId) {
    redirect("/sign-in");
  }

  await connectDB();

  const businesses = await Business.find({ ownerId: userId })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#468432]">
              My Businesses
            </h1>

            <p className="mt-2 text-gray-600">
              Manage all the businesses you have added.
            </p>
          </div>

          <Link
            href="/create-business"
            className="inline-flex items-center justify-center rounded-xl bg-[#FFA02E] px-5 py-3 font-semibold text-white hover:opacity-90"
          >
            + Add New Business
          </Link>
        </div>

        {/* Empty State */}
        {businesses.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-[#468432]">
              <Store className="h-10 w-10" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              No businesses yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              You have not created any business listings yet. Add your first
              business to get started.
            </p>

            <Link
              href="/create-business"
              className="mt-6 inline-flex rounded-xl bg-[#FFA02E] px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Add Your First Business
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((biz: any) => (
              <div
                key={biz._id.toString()}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-green-100 to-green-200">
                  {biz.shopFrontImageUrl ? (
                    <Image
                      src={biz.shopFrontImageUrl}
                      alt={biz.name}
                      fill
                      className="object-cover"
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
                  {/* Title */}
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

                      <h2 className="mt-3 line-clamp-2 text-2xl font-bold text-gray-900">
                        {biz.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
                    {biz.description || "No description available."}
                  </p>

                  {/* City + Phone */}
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

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/${biz.slug}`}
                      className="flex-1 rounded-xl border border-[#468432] px-4 py-2 text-center font-semibold text-[#468432] hover:bg-[#468432] hover:text-white"
                    >
                      View
                    </Link>

                    <Link
                      href={`/my-businesses/${biz._id}/edit`}
                      className="flex-1 rounded-xl bg-[#FFA02E] px-4 py-2 text-center font-semibold text-white hover:opacity-90"
                    >
                      Edit
                    </Link>

                    <DeleteBusinessButton id={biz._id.toString()} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}