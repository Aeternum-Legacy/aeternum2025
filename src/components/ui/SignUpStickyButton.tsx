"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SignUpButton } from "./SignUpButton";
import { useMobileNav } from "@/context/MobileNavContext";

export default function SignUpStickyButton() {
  const { isMobileMenuOpen } = useMobileNav();
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const button = document.getElementById("sticky-signup-btn");
      if (!footer || !button) return;

      const footerRect = footer.getBoundingClientRect();
      const isOverlapping = footerRect.top < window.innerHeight;
      setIsVisible(!isOverlapping && !isMobileMenuOpen);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleClick = () => {
    if (pathname !== "/") {
      router.push("/#signup");
    } else {
      const section = document.getElementById("signup");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="sticky-signup-btn"
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <SignUpButton
        text="Join early access"
        onClick={handleClick}
        className="shadow-lg"
      />
    </div>
  );
}
