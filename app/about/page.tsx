import Link from "next/link";
import {
  Search,
  Building2,
  Users,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Us | LocalBiz",
  description:
    "Learn more about LocalBiz, our mission, and how we help people discover trusted local businesses near them.",
  path: "/about",
  image: "/og-about.jpg",
});

const stats = [
  {
    number: "2,500+",
    label: "Businesses Listed",
  },
  {
    number: "50+",
    label: "Cities Covered",
  },
  {
    number: "10,000+",
    label: "Monthly Searches",
  },
  {
    number: "500+",
    label: "Business Owners Joined",
  },
];

const values = [
  {
    title: "Trusted Listings",
    description:
      "We help people discover verified and trusted local businesses in their city.",
    icon: Building2,
  },
  {
    title: "Easy Search",
    description:
      "Users can quickly search by category and city to find the right business.",
    icon: Search,
  },
  {
    title: "Support Local",
    description:
      "Our mission is to help local businesses grow and reach more customers.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            About LocalBiz
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Helping People Discover Trusted Local Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
            LocalBiz is a local business directory designed to help people find
            trusted restaurants, salons, repair shops, gift stores and more in
            their city.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#468432]">
              Our Mission
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-5xl">
              Connecting Local Customers with Local Businesses
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We created LocalBiz to make it easier for people to discover the
              best local businesses in their city. Whether someone is searching
              for a restaurant, salon, mobile repair shop or gift store, our
              platform helps them find trusted options quickly.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              At the same time, we help business owners increase their online
              visibility and attract more local customers through business
              listings, category pages and city pages.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
                >
                  <h3 className="text-4xl font-bold text-[#468432]">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose LocalBiz?
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              We make it easier for people to discover businesses and for
              businesses to grow online.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-[#468432]">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How LocalBiz Works
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Discover or promote a business in just a few simple steps.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-lg font-bold text-[#468432]">
                1
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Search by Category or City
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Browse businesses by category or city to find the services you
                need.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-lg font-bold text-[#468432]">
                2
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Explore Business Profiles
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                View business details, contact information, services and photos.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-lg font-bold text-[#468432]">
                3
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Add Your Business
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Business owners can create a listing and start getting found by
                more local customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#468432] to-[#6AB04C] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
            <Star className="h-10 w-10" />
          </div>

          <h2 className="mt-8 text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Join LocalBiz today and make it easier for local customers to
            discover your business.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/create-business"
              className="inline-flex items-center rounded-2xl bg-[#FFA02E] px-8 py-4 font-semibold text-white transition hover:bg-[#f28c12]"
            >
              Add Your Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/businesses"
              className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse Businesses
              <MapPin className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}