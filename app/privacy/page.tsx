import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | LocalBiz",
  description:
    "Read the privacy policy for LocalBiz and learn how we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Learn how LocalBiz collects, uses and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm text-gray-500">
            Last Updated: April 2026
          </p>

          <div className="mt-8 space-y-10 text-gray-700 leading-8">
            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                We may collect personal information such as your name, email
                address, phone number, business information, website URL,
                business location, and any other details you submit while using
                LocalBiz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use your information to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Create and manage your business listings</li>
                <li>Improve the user experience on LocalBiz</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send important updates related to your account</li>
                <li>Prevent spam, fraud, or misuse of the platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                3. Business Listings
              </h2>
              <p className="mt-3">
                Any information you add to your business listing, including
                business name, address, phone number, website, logo, and
                description, may be publicly visible to users browsing the
                platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                4. Cookies
              </h2>
              <p className="mt-3">
                LocalBiz may use cookies and similar technologies to improve
                site performance, remember user preferences, and analyze website
                traffic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                5. Third-Party Services
              </h2>
              <p className="mt-3">
                We may use third-party tools and services such as analytics,
                authentication providers, payment processors, and hosting
                services. These third parties may collect certain information in
                accordance with their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                6. Data Security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect your information from
                unauthorized access, misuse, or disclosure. However, no method
                of data transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                7. Your Rights
              </h2>
              <p className="mt-3">
                You may request to update, edit, or delete your account and
                business information at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                8. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                9. Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>

              <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-5">
                <p>
                  <strong>Email:</strong> support@localbiz.com
                </p>
                
                
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/terms"
              className="rounded-xl bg-[#356B27] px-6 py-3 font-medium text-white transition hover:bg-[#2d5b22]"
            >
              View Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#356B27] px-6 py-3 font-medium text-[#356B27] transition hover:bg-green-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}