"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    // Increased delay for a slower, less busy shine
    repeatDelay: 2.5,
    // Use a softer spring for gentler motion
    type: "spring" as const,
    stiffness: 10,
    damping: 30,
    mass: 3,
    // Make the scale spring slower and smoother as well
    scale: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      mass: 0.9,
    },
  },
} as const;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, buttonClassName, textClassName, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-lg backdrop-blur-xl transition duration-300 ease-in-out hover:shadow-lg transform-gpu",
        "cursor-pointer",
        "dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]",
        "px-4 py-2 text-sm",
        "md:px-6 md:py-3 md:text-base",
        buttonClassName,
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className={cn(
          "relative block size-full tracking-wide text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] text-sm md:text-base",
          textClassName
        )}
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      ></span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
