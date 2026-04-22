"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#356B27]/90 via-[#468432]/85 to-[#6AB04C]/80" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            2,500+ Trusted Businesses Listed
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Find Trusted Local Businesses in Your City
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-50 md:text-xl">
            Search restaurants, salons, gift shops, mobile repair services and
            more across top cities.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[30px] bg-white p-4 shadow-2xl">
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
              {/* Keyword */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* City */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="h-14 rounded-2xl bg-[#FFA02E] px-8 font-semibold text-white transition hover:bg-[#f28c12] focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Search
              </button>
            </form>

            {/* Popular Searches */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Popular:</span>

              <Link
                href="/businesses?keyword=Restaurant&city=Houston"
                className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200"
              >
                Restaurants in Houston
              </Link>

              <Link
                href="/businesses?keyword=Salon&city=Dallas"
                className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200"
              >
                Salons in Dallas
              </Link>

              <Link
                href="/businesses?keyword=Mobile Repair&city=Austin"
                className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200"
              >
                Mobile Repair in Austin
              </Link>
            </div>
          </div>

          {/* Buttons */}
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
  );
}