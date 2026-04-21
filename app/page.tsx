"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
import { MapPin, Search, Star, Phone, Store, Utensils, Smartphone, Scissors } from "lucide-react";
// import { connectDB } from "@/lib/db";
// import Business from "@/models/Business";

//export const revalidate = 300;

// export const metadata = {
//   title: "LocalBiz - Find Trusted Local Businesses Near You",
//   description:
//     "Discover restaurants, salons, gift shops, mobile repair services and more in your city. Search trusted local businesses near you.",
// };

const categories = [
  {
    name: "Gift Shops",
    slug: "gift-shop",
    count: "125+ Businesses",
    icon: Store,
  },
  {
    name: "Restaurants",
    slug: "restaurant",
    count: "340+ Businesses",
    icon: Utensils,
  },
  {
    name: "Mobile Repair",
    slug: "mobile-repair",
    count: "95+ Businesses",
    icon: Smartphone,
  },
  {
    name: "Salons",
    slug: "salon",
    count: "180+ Businesses",
    icon: Scissors,
  },
];

const popularCities = ["Houston", "Dallas", "Austin", "San Antonio", "Chicago", "New York"];

export default function HomePage() {

  const router = useRouter();
const [keyword, setKeyword] = useState("");
const [city, setCity] = useState("");

const [businesses, setBusinesses] = useState<any[]>([]);

useEffect(() => {
  const fetchBusinesses = async () => {
    try {
      const res = await fetch("/api/home-businesses");
      const data = await res.json();
      setBusinesses(data);
    } catch (error) {
      console.error("Failed to load businesses", error);
    }
  };

  fetchBusinesses();
}, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I find local businesses near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the LocalBiz search bar to search by business type and city to discover trusted local businesses near you.",
        },
      },
      {
        "@type": "Question",
        name: "How can I add my business to LocalBiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click the Add Your Business button and submit your business information to create your listing.",
        },
      },
      {
        "@type": "Question",
        name: "Is listing a business on LocalBiz free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, businesses can create a basic business listing on LocalBiz for free.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-gray-50 text-gray-900">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
            <div className="mx-auto max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur-sm border border-white/20">
                2,500+ Trusted Businesses Listed
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                Find Trusted Local Businesses in Your City
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-green-50 md:text-xl">
                Search restaurants, salons, gift shops, mobile repair services and more across top cities.
              </p>

              {/* Search Form */}
              <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-white p-4 shadow-2xl">
                

                <form
  onSubmit={(e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }

    if (city.trim()) {
      params.set("city", city.trim());
    }

    router.push(`/businesses?${params.toString()}`);
  }}
  className="grid gap-3 md:grid-cols-[2fr_1fr_auto]"
>
  <div className="relative">
    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

    <input
      type="text"
      aria-label="Search businesses or categories"
      placeholder="What are you looking for?"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
    />
  </div>

  <div className="relative">
    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

    <input
      type="text"
      aria-label="Search city"
      placeholder="City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
    />
  </div>

  <button
    type="submit"
    className="h-14 rounded-2xl bg-[#FFA02E] px-8 font-semibold text-white transition hover:bg-[#f28c12] focus:outline-none focus:ring-4 focus:ring-orange-200"
  >
    Search
  </button>
</form>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Popular:</span>
                  <Link href="/houston/restaurants" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">
                    Restaurants in Houston
                  </Link>
                  <Link href="/dallas/salons" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">
                    Salons in Dallas
                  </Link>
                  <Link href="/austin/mobile-repair" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">
                    Mobile Repair in Austin
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/create-business"
                  className="rounded-2xl bg-[#FFA02E] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f28c12]"
                >
                  Add Your Business
                </Link>

                <Link
                  href="/businesses"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Browse Businesses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
              <p className="mt-2 text-gray-600">
                Explore popular business categories near you.
              </p>
            </div>

            <Link href="/categories" className="hidden text-sm font-semibold text-[#468432] hover:underline md:block">
              View All Categories →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[#468432] transition group-hover:bg-[#468432] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{category.count}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* POPULAR CITIES */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-gray-900">Popular Cities</h2>
            <p className="mt-2 text-gray-600">
              Browse local businesses in the most searched cities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {popularCities.map((city) => (
                <Link
                  key={city}
                  href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 font-medium text-gray-700 transition hover:border-[#468432] hover:bg-green-50 hover:text-[#468432]"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED BUSINESSES */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Businesses</h2>
              <p className="mt-2 text-gray-600">
                Discover trusted and recently added businesses.
              </p>
            </div>

            <Link href="/businesses" className="hidden text-sm font-semibold text-[#468432] hover:underline md:block">
              View All Businesses →
            </Link>
          </div>

         <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {businesses.length === 0 ? (
    <p className="col-span-full text-center text-gray-500">
      Loading businesses...
    </p>
  ) : (
    businesses.map((biz: any) => (
      <Link
        key={biz._id.toString()}
        href={`/${biz.slug}`}
        className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="relative h-52 bg-gradient-to-br from-green-100 to-green-200">
          {biz.shopFrontImageUrl ? (
            <img
              src={biz.shopFrontImageUrl}
              alt={biz.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : biz.logoUrl ? (
            <div className="flex h-full items-center justify-center bg-white p-6">
              <img
                src={biz.logoUrl}
                alt={`${biz.name} logo`}
                className="max-h-24 max-w-[140px] object-contain"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-[#468432]">
              <Store className="h-16 w-16" />
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-[#468432]">
                {biz.category || "Local Business"}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-gray-900 transition group-hover:text-[#468432]">
                {biz.name}
              </h3>
            </div>
          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
            {biz.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold text-gray-900">
              {biz.rating || "4.8"}
            </span>
            <span className="text-gray-500">
              ({biz.reviewCount || "24"} reviews)
            </span>
          </div>

          <div className="mt-5 space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#468432]" />
              <span>{biz.city}</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#468432]" />
              <span>{biz.phone}</span>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center font-semibold text-[#468432] transition group-hover:translate-x-1">
            View Details →
          </div>
        </div>
      </Link>
    ))
  )}
</div>
        </section>

        {/* SEO CONTENT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose LocalBiz?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              LocalBiz helps people discover trusted local businesses across Houston, Dallas,
              Austin, San Antonio, Chicago, New York and more. Whether you are looking for a
              restaurant, salon, mobile repair shop or gift store, you can browse verified
              business listings, read reviews and find the best services near you.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              For business owners, LocalBiz makes it easy to create a business profile,
              increase online visibility and attract more customers through category and city
              pages.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-3 text-gray-600">
              Get your business discovered in three simple steps.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Add Your Business",
                  desc: "Submit your business details, contact information and category.",
                  number: "01",
                },
                {
                  title: "Get Discovered",
                  desc: "Appear in search results, category pages and city pages.",
                  number: "02",
                },
                {
                  title: "Grow Your Customers",
                  desc: "Increase visibility, get more calls and attract more customers.",
                  number: "03",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-lg font-bold text-[#468432]">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "How do I find the best local businesses near me?",
                  a: "Search by category and city using the LocalBiz search bar to discover trusted businesses near you.",
                },
                {
                  q: "How can I add my business to LocalBiz?",
                  a: "Click the Add Your Business button, fill out your business information and publish your listing.",
                },
                {
                  q: "Is it free to list my business?",
                  a: "Yes, you can create a basic business listing for free on LocalBiz.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-[#468432] to-[#6AB04C] py-20 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-4xl font-bold">Grow Your Business with LocalBiz</h2>
            <p className="mt-4 text-lg text-green-50">
              Join hundreds of businesses already getting found online.
            </p>

            <Link
              href="/create-business"
              className="mt-8 inline-flex rounded-2xl bg-[#FFA02E] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#f28c12]"
            >
              Create Your Business Page
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
