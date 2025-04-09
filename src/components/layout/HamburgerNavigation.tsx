"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems } from "./NavigationBar";

export default function HamburgerNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed top-4 right-4 z-50" // 🔥 Sticky hamburger
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 bg-black rounded-full flex flex-col justify-center items-center gap-1 p-2"
      >
        <span className="w-5 h-0.5 bg-white" />
        <span className="w-5 h-0.5 bg-white" />
        <span className="w-5 h-0.5 bg-white" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-64 bg-white border rounded-md shadow-lg p-4">
          {navItems.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="text-gray-800 font-semibold text-sm mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black text-sm block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
