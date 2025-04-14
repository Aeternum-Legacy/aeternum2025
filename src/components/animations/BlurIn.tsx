"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
}

const BlurIn: React.FC<BlurInProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default BlurIn;
