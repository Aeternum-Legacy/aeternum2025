"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "./MovingBorder";

export default function SignUpStickyButton() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const button = document.getElementById("sticky-signup-btn");
      if (!footer || !button) return;

      const footerRect = footer.getBoundingClientRect();
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
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <span className="group-hover:translate-x-32 opacity-100 group-hover:opacity-0 transition-all duration-500 tracking-wide">
            Sign Up
          </span>

          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Image
              src="/icons/aeternum-logo4.svg"
              alt="Aeternum logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
          </span>
        </Button>
      </motion.div>
    </div>
  );
}
