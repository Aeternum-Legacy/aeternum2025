"use client";

import { useEffect, useState } from "react";

export default function SignUpStickyButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const button = document.getElementById("sticky-signup-btn");

      if (!footer || !button) return;

      const footerRect = footer.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const isOverlapping = footerRect.top < window.innerHeight;

      setIsVisible(!isOverlapping);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const section = document.getElementById("signup");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      id="sticky-signup-btn"
      onClick={handleClick}
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-xl bg-black text-white text-sm shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      Sign Up
    </button>
  );
}
