//src/components/ui/SignUpStickyButton.tsx

"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SignUpButton } from "./SignUpButton";

export default function SignUpStickyButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const observer = new MutationObserver(() => {
      const mobileMenu = document.querySelector("[data-mobile-nav]");
      setIsMobileMenuOpen(!!mobileMenu);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
