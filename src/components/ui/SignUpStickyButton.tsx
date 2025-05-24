"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMobileNav } from "@/context/MobileNavContext";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "./MovingBorder";

export default function SignUpStickyButton() {
  const { isMobileMenuOpen } = useMobileNav();
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const footer = document.querySelector("footer");
    const button = document.getElementById("sticky-signup-btn");
    const hero = document.getElementById("hero-mobile");

    if (!footer || !button || !hero) return;

    const handleScroll = () => {
      const footerRect = footer.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();

      const isOverlappingFooter = footerRect.top < window.innerHeight;
      const isHeroVisible =
        heroRect.bottom > 0 && heroRect.top < window.innerHeight;

      setIsVisible(!isOverlappingFooter && !isHeroVisible && !isMobileMenuOpen);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
      className={`group fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        id="sticky-signup-btn"
        onClick={handleClick}
      >
        <Button
          borderRadius="1.75rem"
          className="bg-[#186E68] hover:bg-[#1a4f49] text-white border border-white/20 shadow-[0_0_0_2px_white/20] transition duration-300"
        >
          <span className="group-hover:translate-x-32 opacity-100 group-hover:opacity-0 transition-all duration-500 tracking-wider">
            Join Early Access
          </span>

          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Image
              src="/icons/aeternum-logo.svg"
              alt="Aeternum logo"
              width={100}
              height={100}
              className="w-25 h-25 object-contain"
            />
          </span>
        </Button>
      </motion.div>
    </div>
  );
}
