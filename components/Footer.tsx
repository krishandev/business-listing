import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10">

      {/* Top CTA Section */}
      <div className="bg-[#9AD872] py-6 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Grow your business with us
        </h2>
        <Link href="/create-business">
          <button className="mt-3 bg-[#FFA02E] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
            Add Your Business
          </button>
        </Link>
      </div>

      {/* Main Footer */}
      <div className="bg-[#468432] text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-xl font-bold">LocalBiz</h2>
            <p className="mt-3 text-sm text-gray-200">
              Find the best local businesses near you. Discover trusted services easily.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#FFEF91]">Home</Link></li>
              <li><Link href="/categories" className="hover:text-[#FFEF91]">Categories</Link></li>
              <li><Link href="/cities" className="hover:text-[#FFEF91]">Cities</Link></li>
              <li><Link href="/businesses" className="hover:text-[#FFEF91]">Businesses</Link></li>
              <li><Link href="/about" className="hover:text-[#FFEF91]">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FFEF91] cursor-pointer">Gift Shops</li>
              <li className="hover:text-[#FFEF91] cursor-pointer">Restaurants</li>
              <li className="hover:text-[#FFEF91] cursor-pointer">Mobile Repair</li>
              <li className="hover:text-[#FFEF91] cursor-pointer">Salons</li>
              <li className="hover:text-[#FFEF91] cursor-pointer">More...</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm">Email: support@localbiz.com</p>
           

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <span className="cursor-pointer hover:text-[#FFEF91]">🌐</span>
              <span className="cursor-pointer hover:text-[#FFEF91]">📘</span>
              <span className="cursor-pointer hover:text-[#FFEF91]">📸</span>
              <span className="cursor-pointer hover:text-[#FFEF91]">💬</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3a6f2a] text-center text-sm text-gray-200 py-3">
        © {new Date().getFullYear()} LocalBiz. All rights reserved. |
        <Link href="/privacy" className="ml-2 hover:text-[#FFEF91]">Privacy Policy</Link> |
        <Link href="/terms" className="ml-2 hover:text-[#FFEF91]">Terms</Link>
      </div>
    </footer>
  );
}