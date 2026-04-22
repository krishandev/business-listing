import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { connectDB } from "@/lib/db";
import Business from "@/models/Business";
import { isAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { userId } = await auth();

  // Only admin can access this page
  if (!isAdmin(userId)) {
    redirect("/");
  }

  await connectDB();

  const businesses = await Business.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#468432]">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage all business listings from one place.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-[#468432] px-5 py-3 font-semibold text-white transition hover:bg-[#356B27]"
          >
            Back to Website
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Businesses
            </p>

            <p className="mt-2 text-4xl font-bold text-[#468432]">
              {businesses.length}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Categories
            </p>

            <p className="mt-2 text-4xl font-bold text-[#468432]">
              {
                new Set(
                  businesses.map((business: any) => business.category)
                ).size
              }
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Cities
            </p>

            <p className="mt-2 text-4xl font-bold text-[#468432]">
              {
                new Set(
                  businesses.map((business: any) => business.city)
                ).size
              }
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#468432] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Business
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    City
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Owner ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Created
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {businesses.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No businesses found.
                    </td>
                  </tr>
                ) : (
                  businesses.map((business: any) => (
                    <tr
                      key={business._id.toString()}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      {/* Business */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {business.logoUrl ? (
                            <img
                              src={business.logoUrl}
                              alt={business.name}
                              className="h-12 w-12 rounded-xl border object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-sm font-bold text-gray-500">
                              {business.name?.charAt(0)}
                            </div>
                          )}

                          <div>
                            <p className="font-semibold text-gray-900">
                              {business.name}
                            </p>

                            <p className="text-sm text-gray-500">
                              {business.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-5 text-gray-700">
                        {business.category || "-"}
                      </td>

                      {/* City */}
                      <td className="px-6 py-5 text-gray-700">
                        {business.city || "-"}
                      </td>

                      {/* Owner */}
                      <td className="px-6 py-5 text-sm text-gray-500">
                        {business.ownerId}
                      </td>

                      {/* Created */}
                      <td className="px-6 py-5 text-sm text-gray-500">
                        {new Date(business.createdAt).toLocaleDateString()}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/${business.slug}`}
                            className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
                          >
                            View
                          </Link>

                          <Link
                            href={`/my-businesses/${business._id}/edit`}
                            className="rounded-lg bg-yellow-100 px-3 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-200"
                          >
                            Edit
                          </Link>

                          <form
                            action={`/api/admin/businesses/${business._id}/delete`}
                            method="POST"
                          >
                            <button
  type="submit"
  className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-200"
>
  Delete
</button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}