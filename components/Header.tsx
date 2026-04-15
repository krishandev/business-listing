"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#468432] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">LocalBiz</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-[#FFEF91]">Home</Link>
          <Link href="/categories" className="hover:text-[#FFEF91]">Categories</Link>
          <Link href="/cities" className="hover:text-[#FFEF91]">Cities</Link>
          <Link href="/businesses" className="hover:text-[#FFEF91]">Businesses</Link>
          <Link href="/about" className="hover:text-[#FFEF91]">About</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search businesses..."
            className="px-3 py-1 rounded-md text-black outline-none"
          />

          {/* CTA */}
          <Link href="/create-business">
            <button className="bg-[#FFA02E] px-4 py-1 rounded-md font-semibold hover:opacity-90">
              Add Business
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#9AD872] text-black px-4 py-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/categories" className="block">Categories</Link>
          <Link href="/cities" className="block">Cities</Link>
          <Link href="/businesses" className="block">Businesses</Link>
          <Link href="/about" className="block">About</Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search businesses..."
            className="w-full px-3 py-2 rounded-md border"
          />

          {/* CTA */}
          <Link href="/create-business">
            <button className="w-full bg-[#FFA02E] py-2 rounded-md font-semibold">
              Add Business
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}