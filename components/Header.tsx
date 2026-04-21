"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#468432] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          LocalBiz
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="hover:text-[#FFEF91]">
            Home
          </Link>

          <Link href="/categories" className="hover:text-[#FFEF91]">
            Categories
          </Link>

          <Link href="/cities" className="hover:text-[#FFEF91]">
            Cities
          </Link>

          <Link href="/businesses" className="hover:text-[#FFEF91]">
            Businesses
          </Link>

          <Link href="/about" className="hover:text-[#FFEF91]">
            About
          </Link>
        </nav>

       
        <div className="hidden items-center gap-3 md:flex">
        
          {/* <input
            type="text"
            placeholder="Search businesses..."
            className="rounded-md px-3 py-1 text-black outline-none"
          /> */}

          {/* Add Business */}
          <Link href="/create-business">
            <button className="rounded-md bg-[#FFA02E] px-4 py-2 font-semibold hover:opacity-90">
              Add Business
            </button>
          </Link>

          <ClerkLoading>
            <div className="h-10 w-24 animate-pulse rounded-md bg-white/20" />
          </ClerkLoading>

          <ClerkLoaded>
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="rounded-md border border-white px-4 py-2 font-medium hover:bg-white hover:text-[#468432]">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="rounded-md bg-white px-4 py-2 font-semibold text-[#468432] hover:bg-[#FFEF91]">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Link
                  href="/my-businesses"
                  className="rounded-md border border-white px-4 py-2 font-medium hover:bg-white hover:text-[#468432]"
                >
                  My Businesses
                </Link>

                <UserButton>
  <UserButton.MenuItems>
    <UserButton.Action label="manageAccount" />
    <UserButton.Action label="signOut" />
  </UserButton.MenuItems>
</UserButton>
              </>
            )}
          </ClerkLoaded>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-3 bg-[#9AD872] px-4 py-4 text-black md:hidden">
          <Link href="/" className="block">
            Home
          </Link>

          <Link href="/categories" className="block">
            Categories
          </Link>

          <Link href="/cities" className="block">
            Cities
          </Link>

          <Link href="/businesses" className="block">
            Businesses
          </Link>

          <Link href="/about" className="block">
            About
          </Link>

          {/* Mobile Search */}
          {/* <input
            type="text"
            placeholder="Search businesses..."
            className="w-full rounded-md border px-3 py-2"
          /> */}

          {/* Add Business */}
          <Link href="/create-business">
            <button className="w-full rounded-md bg-[#FFA02E] py-2 font-semibold text-white">
              Add Business
            </button>
          </Link>

          <ClerkLoading>
            <div className="h-10 w-full animate-pulse rounded-md bg-black/10" />
          </ClerkLoading>

          <ClerkLoaded>
            {!isSignedIn ? (
              <div className="flex gap-2">
                <SignInButton mode="modal">
                  <button className="flex-1 rounded-md border border-black py-2 font-medium">
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="flex-1 rounded-md bg-[#468432] py-2 font-semibold text-white">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            ) : (
              <div className="space-y-3">
                <Link href="/my-businesses">
                  <button className="w-full rounded-md border border-black py-2 font-medium">
                    My Businesses
                  </button>
                </Link>

                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            )}
          </ClerkLoaded>
        </div>
      )}
    </header>
  );
}