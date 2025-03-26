"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import NavButton from "../ui/nav-button";
import { ChevronDown } from "lucide-react";

export default function NavigationMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isOutside = Object.values(menuRefs.current).every(
        (ref) => ref && !ref.contains(e.target as Node)
      );
      if (isOutside) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
      ],
    },
    {
      title: "Product",
      links: [
        { href: "/pricing", label: "Pricing Information" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    {
      title: "Updates",
      links: [
        { href: "/news", label: "News" },
        { href: "/development", label: "Development Progress" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/signup", label: "Sign Up" },
      ],
    },
  ];

  return (
    <nav className="bg-black text-white px-6 py-2 rounded-full w-full mx-auto">
      <ul className="flex items-center justify-between space-x-6">
        {/* Logo */}
        <li>
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Aeternum" className="h-6 w-auto" />
          </Link>
        </li>

        {/* Navigation Links */}
        <div className="flex items-center space-x-16">
          {navItems.map(({ title, links }) => (
            <li
              key={title}
              className="relative"
              ref={(el) => {
                menuRefs.current[title] = el;
              }}
            >
              {/* Dropdown Toggle */}
              <button
                onClick={() =>
                  setOpenMenu((prev) => (prev === title ? null : title))
                }
                className="inline-flex items-center text-sm"
              >
                {title}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    openMenu === title ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu - always rendered for animation */}
              <div
                className={`
                  absolute left-0 top-full mt-3 w-40 bg-black text-white rounded-md shadow-md z-50 p-2
                  transition-all duration-300 ease-in-out transform
                  ${
                    openMenu === title
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none invisible"
                  }
                `}
              >
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2 text-sm rounded hover:bg-white hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </div>

        {/* CTA Button */}
        <li>
          <NavButton />
        </li>
      </ul>
    </nav>
  );
}
