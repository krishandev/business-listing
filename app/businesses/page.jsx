import { connectDB } from "@/lib/db";
import Business from "@/models/Business";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BusinessesPage() {
  await connectDB();

  const businesses = await Business.find().lean();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      <h1 className="text-3xl font-bold text-center text-[#468432] mb-8">
        All Businesses
      </h1>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {businesses.map((biz) => (
          <Link key={biz._id} href={`/${biz.slug}`}>
            
            <div className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-xl transition">
              
              <h2 className="text-lg font-semibold text-[#468432]">
                {biz.name}
              </h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {biz.description}
              </p>

              <p className="text-sm mt-2 text-gray-500">
                📍 {biz.city || "N/A"}
              </p>

              <p className="text-sm text-gray-500">
                📞 {biz.phone || "N/A"}
              </p>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}