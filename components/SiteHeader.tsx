"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#home", label: "Home", activePath: "/" },
  { href: "/#services", label: "Services", activePath: "" },
  { href: "/#technologies", label: "Technologies", activePath: "" },
  { href: "/#solutions", label: "Solutions", activePath: "" },
  { href: "/about", label: "About Us", activePath: "/about" },
  { href: "/careers", label: "Careers", activePath: "/careers" },
  { href: "/#contact", label: "Contact", activePath: "" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="logo" aria-label="TechUpwards home">
          <img src="/assets/logo.png" alt="TechUpwards Logo" />
          <h2>
            Tech<span>Upwards</span>
          </h2>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={item.activePath === pathname ? "active-link" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="menu-btn" type="button" aria-label="Toggle navigation" aria-expanded="false">
          ☰
        </button>

        <Link href="/#contact" className="nav-btn">
          Get Started
        </Link>
      </nav>
    </header>
  );
}
