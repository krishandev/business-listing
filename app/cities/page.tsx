import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Houston",
    slug: "houston",
    state: "Texas",
    businesses: "340+ Businesses",
    description:
      "Discover restaurants, salons, gift shops, mobile repair and more in Houston.",
  },
  {
    name: "Dallas",
    slug: "dallas",
    state: "Texas",
    businesses: "290+ Businesses",
    description:
      "Find trusted local businesses and services across Dallas.",
  },
  {
    name: "Austin",
    slug: "austin",
    state: "Texas",
    businesses: "240+ Businesses",
    description:
      "Explore Austin businesses including restaurants, salons and repair shops.",
  },
  {
    name: "San Antonio",
    slug: "san-antonio",
    state: "Texas",
    businesses: "210+ Businesses",
    description:
      "Browse top-rated local businesses in San Antonio.",
  },
  {
    name: "Chicago",
    slug: "chicago",
    state: "Illinois",
    businesses: "310+ Businesses",
    description:
      "Search Chicago businesses by category and discover trusted services.",
  },
  {
    name: "New York",
    slug: "new-york",
    state: "New York",
    businesses: "450+ Businesses",
    description:
      "Explore restaurants, shopping, salons and more in New York City.",
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    state: "California",
    businesses: "390+ Businesses",
    description:
      "Find trusted businesses and local services in Los Angeles.",
  },
  {
    name: "Miami",
    slug: "miami",
    state: "Florida",
    businesses: "180+ Businesses",
    description:
      "Discover the best local businesses, restaurants and repair shops in Miami.",
  },
  {
    name: "Seattle",
    slug: "seattle",
    state: "Washington",
    businesses: "160+ Businesses",
    description:
      "Browse Seattle businesses across multiple categories.",
  },
  {
    name: "Phoenix",
    slug: "phoenix",
    state: "Arizona",
    businesses: "170+ Businesses",
    description:
      "Find local businesses and trusted services in Phoenix.",
  },
  {
    name: "Atlanta",
    slug: "atlanta",
    state: "Georgia",
    businesses: "220+ Businesses",
    description:
      "Explore Atlanta restaurants, salons, gift shops and more.",
  },
  {
    name: "Las Vegas",
    slug: "las-vegas",
    state: "Nevada",
    businesses: "150+ Businesses",
    description:
      "Discover businesses and services across Las Vegas.",
  },
];

import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Cities We Serve | LocalBiz",
  description:
    "Explore local businesses in top cities including New York, Los Angeles, Chicago, Houston, Dallas and more.",
  path: "/cities",
  image: "/og-cities.jpg",
});

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
            <MapPin className="h-10 w-10" />
          </div>

          <h1 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Browse Businesses by City
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-50 md:text-xl">
            Explore trusted local businesses in the most popular cities across
            the United States.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Cities
          </h2>

          <p className="mt-3 text-gray-600">
            Select your city to discover trusted local businesses near you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/businesses?city=${encodeURIComponent(city.name)}`}
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-[#468432] transition group-hover:bg-[#468432] group-hover:text-white">
                <MapPin className="h-8 w-8" />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-900 transition group-hover:text-[#468432]">
                    {city.name}
                  </h2>

                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {city.state}
                  </span>
                </div>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {city.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#468432]">
                  <Building2 className="h-4 w-4" />
                  {city.businesses}
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#468432] transition group-hover:translate-x-1">
                Explore City
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Businesses in Your City
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            LocalBiz helps people discover trusted local businesses in major
            cities like Houston, Dallas, Austin, Chicago, New York and more.
            Browse restaurants, salons, gift shops, repair services and other
            businesses near you.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Business owners can also list their business to increase visibility,
            reach local customers and grow faster in their city.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#468432] to-[#6AB04C] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Don’t See Your City?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Add your business today and help customers discover you in your city.
          </p>

          <Link
            href="/create-business"
            className="mt-8 inline-flex rounded-2xl bg-[#FFA02E] px-8 py-4 font-semibold text-white transition hover:bg-[#f28c12]"
          >
            Add Your Business
          </Link>
        </div>
      </section>
    </main>
  );
}