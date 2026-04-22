import Link from "next/link";

import {
  Utensils,
  Scissors,
  Store,
  Smartphone,
  Wrench,
  Car,
  HeartPulse,
  GraduationCap,
  Dumbbell,
  Home,
  Briefcase,
  ShoppingBag,
  MapPin,
  Camera,
  Calendar,
} from "lucide-react";


const categories = [
  {
    name: "Restaurant",
    slug: "restaurant",
    description: "Find restaurants, cafes, fast food and dining places near you.",
    count: "340+ Businesses",
    icon: Utensils,
  },
  {
    name: "Salon",
    slug: "salon",
    description: "Browse beauty salons, hair stylists and grooming services.",
    count: "180+ Businesses",
    icon: Scissors,
  },
  {
    name: "Gift Shop",
    slug: "gift-shop",
    description: "Discover gift shops, flower stores and custom gift ideas.",
    count: "125+ Businesses",
    icon: Store,
  },
  {
    name: "Mobile Repair",
    slug: "mobile-repair",
    description: "Find trusted mobile, laptop and electronics repair services.",
    count: "95+ Businesses",
    icon: Smartphone,
  },
  {
    name: "Home Services",
    slug: "home-services",
    description: "Plumbers, electricians, painters and home repair experts.",
    count: "210+ Businesses",
    icon: Home,
  },
  {
    name: "Plumber",
    slug: "plumber",
    description: "Find plumbers for pipe repair, leakage and installation work.",
    count: "75+ Businesses",
    icon: Wrench,
  },
  {
    name: "Electrician",
    slug: "electrician",
    description: "Browse trusted electricians for wiring and repair services.",
    count: "60+ Businesses",
    icon: Wrench,
  },
  {
    name: "Painter",
    slug: "painter",
    description: "Find interior and exterior painting professionals.",
    count: "50+ Businesses",
    icon: Wrench,
  },
  {
    name: "Carpenter",
    slug: "carpenter",
    description: "Discover carpenters for furniture, doors and woodwork.",
    count: "45+ Businesses",
    icon: Wrench,
  },
  {
    name: "HVAC Service",
    slug: "hvac-service",
    description: "Find AC, heating and HVAC installation and repair services.",
    count: "40+ Businesses",
    icon: Wrench,
  },
  {
    name: "Automotive",
    slug: "automotive",
    description: "Browse car repair, detailing and automobile services.",
    count: "140+ Businesses",
    icon: Car,
  },
  {
    name: "Car Repair",
    slug: "car-repair",
    description: "Find mechanics and auto repair workshops near you.",
    count: "90+ Businesses",
    icon: Car,
  },
  {
    name: "Car Wash",
    slug: "car-wash",
    description: "Discover local car wash and detailing services.",
    count: "70+ Businesses",
    icon: Car,
  },
  {
    name: "Tyre Shop",
    slug: "tyre-shop",
    description: "Browse tyre shops for replacement and wheel alignment.",
    count: "35+ Businesses",
    icon: Car,
  },
  {
    name: "Health & Medical",
    slug: "health-medical",
    description: "Find doctors, clinics, pharmacies and healthcare services.",
    count: "160+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Doctor",
    slug: "doctor",
    description: "Search doctors and specialists in your city.",
    count: "80+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Dentist",
    slug: "dentist",
    description: "Browse dentists and dental clinics near you.",
    count: "60+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Clinic",
    slug: "clinic",
    description: "Find local health clinics and treatment centers.",
    count: "55+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Pharmacy",
    slug: "pharmacy",
    description: "Discover pharmacies and medicine stores near you.",
    count: "45+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Hospital",
    slug: "hospital",
    description: "Browse hospitals and emergency medical services.",
    count: "35+ Businesses",
    icon: HeartPulse,
  },
  {
    name: "Education",
    slug: "education",
    description: "Find schools, coaching centres and education services.",
    count: "110+ Businesses",
    icon: GraduationCap,
  },
  {
    name: "School",
    slug: "school",
    description: "Browse schools and educational institutions.",
    count: "70+ Businesses",
    icon: GraduationCap,
  },
  {
    name: "College",
    slug: "college",
    description: "Find colleges, universities and higher education centres.",
    count: "40+ Businesses",
    icon: GraduationCap,
  },
  {
    name: "Coaching Center",
    slug: "coaching-center",
    description: "Discover coaching centres and exam preparation classes.",
    count: "60+ Businesses",
    icon: GraduationCap,
  },
  {
    name: "Tutor",
    slug: "tutor",
    description: "Find private tutors and online teaching services.",
    count: "50+ Businesses",
    icon: GraduationCap,
  },
  {
    name: "Fitness",
    slug: "fitness",
    description: "Browse gyms, fitness studios and workout centres.",
    count: "85+ Businesses",
    icon: Dumbbell,
  },
  {
    name: "Gym",
    slug: "gym",
    description: "Find gyms and workout centres near you.",
    count: "65+ Businesses",
    icon: Dumbbell,
  },
  {
    name: "Yoga Studio",
    slug: "yoga-studio",
    description: "Discover yoga studios and meditation centres.",
    count: "30+ Businesses",
    icon: Dumbbell,
  },
  {
    name: "Personal Trainer",
    slug: "personal-trainer",
    description: "Find personal trainers and fitness experts.",
    count: "25+ Businesses",
    icon: Dumbbell,
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    description: "Lawyers, accountants, consultants and business experts.",
    count: "150+ Businesses",
    icon: Briefcase,
  },
  {
    name: "Other",
    slug: "other",
    description: "Explore additional local businesses and services.",
    count: "10+ Businesses",
    icon: Store,
  },
];

import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Business Categories | LocalBiz",
  description:
    "Browse business categories including restaurants, salons, gift shops and more.",
  path: "/categories",
  image: "/og-categories.jpg",
});

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Browse Business Categories
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-50 md:text-xl">
            Explore popular business categories and discover trusted local
            businesses near you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <p className="mt-3 text-gray-600">
            Select a category to explore local businesses.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/businesses?keyword=${encodeURIComponent(
                  category.name
                )}`}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-[#468432] transition group-hover:bg-[#468432] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-[#468432]">
                  {category.name}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#468432]">
                    {category.count}
                  </span>

                  <span className="font-semibold text-[#468432] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Browse Categories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Find the Right Business Faster
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Browse businesses by category to quickly discover restaurants,
            salons, mobile repair shops, gift stores, health services and more
            in your city.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#468432] to-[#6AB04C] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Want to List Your Business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Join LocalBiz today and help more customers discover your business.
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