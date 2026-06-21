import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";
import "./reviews-carousel.css";
import "./process-section.css";
import "./dna-journey.css";
import "./momentum-impact-theme.css";
import "./motion-stability.css";
import "./business-solutions.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techupwardss.com"),
  title: {
    default: "TechUpwards | B2B & B2C Digital Growth Solutions",
    template: "%s | TechUpwards",
  },
  description:
    "TechUpwards helps businesses grow online with B2B, B2C, branding, web development, SEO, digital marketing, automation, and scalable digital solutions.",
  keywords: [
    "TechUpwards",
    "B2B services",
    "B2C services",
    "website development",
    "digital agency",
    "SEO",
    "digital growth",
    "business solutions",
  ],
  authors: [{ name: "TechUpwards" }],
  openGraph: {
    title: "TechUpwards | B2B & B2C Digital Growth Solutions",
    description: "Helping businesses scale digitally with premium online solutions.",
    url: "https://techupwardss.com/",
    siteName: "TechUpwards",
    images: ["/assets/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechUpwards | B2B & B2C Digital Growth Solutions",
    description: "Helping businesses scale digitally with premium online solutions.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechUpwards",
    url: "https://techupwardss.com/",
    logo: "https://techupwardss.com/assets/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/techupwardss",
      "https://www.facebook.com/techupwardss",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@techupwardss.com",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <Script
          id="organization-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
