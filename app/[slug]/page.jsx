export const dynamic = "force-dynamic";

import Image from "next/image";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/db";
import Business from "@/models/Business";

export async function generateMetadata({ params }) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  await connectDB();

  const { slug } = await params;

  const business = await Business.findOne({ slug }).lean();

  if (!business) {
    return {
      title: "Business Not Found | LocalBiz",
      description: "The requested business listing could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${business.name} in ${business.city} | ${business.category} | LocalBiz`;

  const description =
    business.description?.slice(0, 155) ||
    `Find ${business.name} in ${business.city}. View phone number, website, address and services.`;

  return {
    title,
    description,

    alternates: {
      canonical: `${siteUrl}/${business.slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: `${siteUrl}/${business.slug}`,
      siteName: "LocalBiz",
      type: "website",
      images: business.shopFrontImageUrl
        ? [
            {
              url: business.shopFrontImageUrl,
              width: 1200,
              height: 630,
              alt: business.name,
            },
          ]
        : [
            {
              url: `${siteUrl}/og-default.jpg`,
              width: 1200,
              height: 630,
              alt: business.name,
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: business.shopFrontImageUrl
        ? [business.shopFrontImageUrl]
        : [`${siteUrl}/og-default.jpg`],
    },
  };
}

export default async function Page({ params }) {
  await connectDB();

  const { slug } = await params;

  // Prevent static pages from being treated as business slugs
  const reservedSlugs = [
    "create-business",
    "my-businesses",
    "businesses",
    "categories",
    "cities",
    "about",
    "contact",
    "privacy",
    "terms",
    "admin",
    "sign-in",
    "sign-up",
  ];

  if (reservedSlugs.includes(slug)) {
    notFound();
  }

  const business = await Business.findOne({ slug }).lean();

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600">
            Business Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The business page you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Shop Front Image */}
        {business.shopFrontImageUrl && (
          <div className="relative w-full h-[260px] md:h-[380px]">
            <Image
              src={business.shopFrontImageUrl}
              alt={`${business.name} shop front`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo */}
            <div className="shrink-0">
              {business.logoUrl ? (
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border bg-white shadow">
                  <Image
                    src={business.logoUrl}
                    alt={`${business.name} logo`}
                    fill
                    sizes="112px"
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-[#468432] text-white flex items-center justify-center text-3xl font-bold shadow">
                  {business.name?.charAt(0)?.toUpperCase()}
                </div>
              )}
            </div>

            {/* Business Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#468432]">
                {business.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
                {business.category && (
                  <span className="bg-[#9AD872] text-black px-3 py-1 rounded-full font-medium">
                    {business.category}
                  </span>
                )}

                {business.city && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    📍 {business.city}
                  </span>
                )}
              </div>

              {business.description && (
                <p className="mt-5 text-gray-700 leading-7">
                  {business.description}
                </p>
              )}
            </div>
          </div>

          {/* Contact / Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="font-semibold text-gray-800">
                {business.phone || "N/A"}
              </p>
            </div>

            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-semibold text-gray-800 break-all">
                {business.email || "N/A"}
              </p>
            </div>

            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">Website</p>

              {business.website ? (
                <a
                  href={
                    business.website.startsWith("http")
                      ? business.website
                      : `https://${business.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline break-all"
                >
                  {business.website}
                </a>
              ) : (
                <p className="font-semibold text-gray-800">N/A</p>
              )}
            </div>

            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">Address</p>
              <p className="font-semibold text-gray-800">
                {business.address || "N/A"}
              </p>
            </div>
          </div>

          {/* Services */}
          {business.services?.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#468432] mb-4">
                Services
              </h2>

              <div className="flex flex-wrap gap-3">
                {business.services.map((service, i) => (
                  <span
                    key={i}
                    className="bg-[#9AD872] text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {service.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// export const dynamic = "force-dynamic";

// import Image from "next/image";
// import { connectDB } from "@/lib/db";
// import Business from "@/models/Business";

// export default async function Page({ params }) {
//   await connectDB();

//   const { slug } = await params;

//   const business = await Business.findOne({ slug }).lean();

//   if (!business) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//         <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
//           <h1 className="text-2xl font-bold text-red-600">
//             Business Not Found
//           </h1>
//           <p className="text-gray-600 mt-2">
//             The business page you are looking for does not exist.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10">
//       <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
//         {/* Shop Front Image */}
//         {business.shopFrontImageUrl && (
//           <div className="relative w-full h-[260px] md:h-[380px]">
//             <Image
//               src={business.shopFrontImageUrl}
//               alt={`${business.name} shop front`}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         )}

//         <div className="p-6 md:p-8">
          
//           {/* Header Section */}
//           <div className="flex flex-col md:flex-row md:items-start gap-6">
            
//             {/* Logo */}
//             <div className="shrink-0">
//               {business.logoUrl ? (
//                 <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border bg-white shadow">
//                   <Image
//                     src={business.logoUrl}
//                     alt={`${business.name} logo`}
//                     fill
//                     className="object-contain p-2"
//                   />
//                 </div>
//               ) : (
//                 <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-[#468432] text-white flex items-center justify-center text-3xl font-bold shadow">
//                   {business.name?.charAt(0)?.toUpperCase()}
//                 </div>
//               )}
//             </div>

//             {/* Business Info */}
//             <div className="flex-1">
//               <h1 className="text-3xl md:text-4xl font-bold text-[#468432]">
//                 {business.name}
//               </h1>

//               <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
//                 {business.category && (
//                   <span className="bg-[#9AD872] text-black px-3 py-1 rounded-full font-medium">
//                     {business.category}
//                   </span>
//                 )}

//                 {business.city && (
//                   <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
//                     📍 {business.city}
//                   </span>
//                 )}
//               </div>

//               {business.description && (
//                 <p className="mt-5 text-gray-700 leading-7">
//                   {business.description}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Contact / Business Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            
//             <div className="bg-gray-50 border rounded-xl p-5">
//               <p className="text-sm text-gray-500 mb-1">Phone</p>
//               <p className="font-semibold text-gray-800">
//                 {business.phone || "N/A"}
//               </p>
//             </div>

//             <div className="bg-gray-50 border rounded-xl p-5">
//               <p className="text-sm text-gray-500 mb-1">Email</p>
//               <p className="font-semibold text-gray-800 break-all">
//                 {business.email || "N/A"}
//               </p>
//             </div>

//             <div className="bg-gray-50 border rounded-xl p-5">
//               <p className="text-sm text-gray-500 mb-1">Website</p>

//               {business.website ? (
//                 <a
//                   href={
//                     business.website.startsWith("http")
//                       ? business.website
//                       : `https://${business.website}`
//                   }
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-semibold text-blue-600 hover:underline break-all"
//                 >
//                   {business.website}
//                 </a>
//               ) : (
//                 <p className="font-semibold text-gray-800">N/A</p>
//               )}
//             </div>

//             <div className="bg-gray-50 border rounded-xl p-5">
//               <p className="text-sm text-gray-500 mb-1">Address</p>
//               <p className="font-semibold text-gray-800">
//                 {business.address || "N/A"}
//               </p>
//             </div>
//           </div>

//           {/* Services */}
//           {business.services?.length > 0 && (
//             <div className="mt-10">
//               <h2 className="text-2xl font-bold text-[#468432] mb-4">
//                 Services
//               </h2>

//               <div className="flex flex-wrap gap-3">
//                 {business.services.map((service, i) => (
//                   <span
//                     key={i}
//                     className="bg-[#9AD872] text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm"
//                   >
//                     {service.trim()}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

