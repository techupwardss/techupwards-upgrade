import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers | TechUpwards - Join Our Digital Growth Team",
  description:
    "Explore career and internship opportunities at TechUpwards. Build the future of B2B & B2C digital growth with us.",
  keywords: [
    "TechUpwards careers",
    "tech internships",
    "software engineer jobs",
    "digital marketing careers",
    "business automation jobs",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | TechUpwards - Join Our Digital Growth Team",
    description:
      "Build the future of digital solutions with us. Explore exciting upcoming opportunities.",
    url: "https://techupwardss.com/careers",
    images: ["/assets/logo.png"],
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
