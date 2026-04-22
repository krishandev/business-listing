import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | LocalBiz",
  description:
    "Read the terms and conditions for using LocalBiz and business listing services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Please read these terms carefully before using LocalBiz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm text-gray-500">Last Updated: April 2026</p>

          <div className="mt-8 space-y-10 text-gray-700 leading-8">
            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using LocalBiz, you agree to be bound by these
                Terms & Conditions. If you do not agree, please do not use the
                platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                2. Business Listings
              </h2>
              <p className="mt-3">
                Users may create and manage business listings on LocalBiz. You
                are responsible for ensuring that all information you provide is
                accurate, complete, and up to date.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Business names must be unique</li>
                <li>Website URLs must not duplicate existing listings</li>
                <li>
                  You may only create listings for businesses you own or manage
                </li>
                <li>
                  False, misleading, or fraudulent information is prohibited
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                3. User Accounts
              </h2>
              <p className="mt-3">
                You are responsible for maintaining the security of your
                account. Do not share your login details with others. LocalBiz
                is not responsible for unauthorized activity caused by your
                failure to protect your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                4. Prohibited Activities
              </h2>
              <p className="mt-3">
                You agree not to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Post fake or misleading business information</li>
                <li>Upload harmful, offensive, or illegal content</li>
                <li>Attempt to hack, damage, or disrupt the platform</li>
                <li>Copy or scrape data from LocalBiz without permission</li>
                <li>Use the platform for spam or fraudulent activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                5. Removal of Listings
              </h2>
              <p className="mt-3">
                LocalBiz reserves the right to remove or suspend any listing or
                account that violates these Terms & Conditions without prior
                notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                6. Third-Party Links
              </h2>
              <p className="mt-3">
                Business listings may contain links to external websites.
                LocalBiz is not responsible for the content, privacy practices,
                or availability of third-party websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                7. Disclaimer
              </h2>
              <p className="mt-3">
                LocalBiz provides business information "as is" without any
                warranties. We do not guarantee the accuracy, reliability, or
                availability of any listing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                LocalBiz shall not be liable for any direct, indirect,
                incidental, or consequential damages arising from your use of
                the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                9. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms & Conditions from time to time. Any
                changes will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#356B27]">
                10. Contact Information
              </h2>
              <p className="mt-3">
                If you have any questions about these Terms & Conditions, please
                contact us:
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
              href="/privacy"
              className="rounded-xl bg-[#356B27] px-6 py-3 font-medium text-white transition hover:bg-[#2d5b22]"
            >
              View Privacy Policy
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