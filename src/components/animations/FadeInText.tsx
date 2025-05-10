"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  className,
  duration = 0.8,
  delay = 0,
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={cn(
        "text-center break-words font-semibold md:font-normal",
        className
      )}
    >
      {text}
    </motion.h1>
  );
};
