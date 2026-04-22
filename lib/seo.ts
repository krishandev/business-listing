import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function generateSEO({
  title,
  description,
  path = "",
  image = "/og-default.jpg",
}: SEOProps): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "LocalBiz",
      type: "website",
      images: [
        {
          url: `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
  };
}