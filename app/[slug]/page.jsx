export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import Business from "@/models/Business";

export default async function Page({ params }) {
  await connectDB();
  const { slug } = await params;

  const business = await Business.findOne({ slug }).lean();

  if (!business) return <div>Business Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#468432]">
          {business.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {business.category} • {business.city}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-700">
          {business.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">📞 Phone</p>
            <p>{business.phone || "N/A"}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">📧 Email</p>
            <p>{business.email || "N/A"}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">🌐 Website</p>
            <a
              href={business.website}
              target="_blank"
              className="text-blue-600 underline"
            >
              {business.website}
            </a>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">📍 Address</p>
            <p>{business.address || "N/A"}</p>
          </div>

        </div>

        {/* Services */}
        {business.services?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#468432]">
              Services
            </h2>

            <div className="flex flex-wrap gap-2 mt-3">
              {business.services.map((service, i) => (
                <span
                  key={i}
                  className="bg-[#9AD872] text-black px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}