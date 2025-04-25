"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems } from "./NavigationBar";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed top-4 right-4 z-50">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.button
            key="close"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <img src="/icons/close.png" alt="Close" className="w-10 h-10" />
          </motion.button>
        ) : (
          <motion.button
            key="hamburger"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <img
              src="/icons/hamburger.png"
              alt="Hamburger Menu"
              className="w-10 h-10"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="absolute top-12 right-0 w-[300px] bg-white border border-gray-200 rounded-lg shadow-xl py-3 px-5 space-y-2"
        >
          {/* Home Button */}
          <div className="flex justify-center mt-2 border-b-2">
            <Link
              href="/"
              className="block px-6 py-2 rounded-full transition-colors duration-200 mb-4"
            >
              <img src="/icons/aeternum-logo4.svg" alt="" className="w-30" />
            </Link>
          </div>
          <div className="mt-4 ml-2">
            {navItems.map((section, sectionIdx) => (
              <div key={section.title} className="space-y-1 ">
                <h3 className="text-gray-800 font-semibold text-xl">
                  {section.title}
                </h3>
                <ul className="space-y-1 pl-2 flex flex-col">
                  {section.links.map((link, linkIdx) => {
                    const isLast =
                      sectionIdx === navItems.length - 1 &&
                      linkIdx === section.links.length - 1;

                    const linkElement = (
                      <Link
                        href={link.href}
                        className={`block text-lg transition-all duration-300
          ${
            isLast
              ? "bg-teal-700 text-white font-semibold hover:bg-gray-800 text-center px-6 py-2 rounded-full w-2/3"
              : "text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-1 rounded-full"
          }
        `}
                      >
                        {link.label}
                      </Link>
                    );

                    return (
                      <li key={link.href}>
                        {isLast ? (
                          <div className="flex justify-center mt-3">
                            {linkElement}
                          </div>
                        ) : (
                          linkElement
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
