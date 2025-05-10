"use client";

import React, { ElementType, useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultHighlightVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

interface AnimatedHighlightProps {
  text?: string;
  highlight: string;
  as?: ElementType;
  withScrollAnimation?: boolean;
  viewportOnce?: boolean;
  scrollDuration?: number;
  scrollDelay?: number;
  highlightAppearDelay?: number;
  highlightDisappearDelay?: number;
  mobileTextSize?: string;
  desktopTextSize?: string;
  className?: string;
}

export function AnimatedHighlight({
  text,
  highlight,
  as: Tag = "p",
  withScrollAnimation = false,
  viewportOnce = true,
  scrollDuration = 0.8,
  scrollDelay = 0,
  highlightAppearDelay = 500,
  highlightDisappearDelay = 3000,

  className,
}: AnimatedHighlightProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: viewportOnce });
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    if (inView) {
      const totalDelay = withScrollAnimation
        ? (scrollDelay + scrollDuration) * 1000 + (highlightAppearDelay ?? 0)
        : highlightAppearDelay ?? 0;

      const timerAppear = setTimeout(() => setShowHighlight(true), totalDelay);
      const timerDisappear = setTimeout(
        () => setShowHighlight(false),
        totalDelay + (highlightDisappearDelay ?? 0)
      );
      return () => {
        clearTimeout(timerAppear);
        clearTimeout(timerDisappear);
      };
    }
  }, [
    inView,
    withScrollAnimation,
    scrollDelay,
    scrollDuration,
    highlightAppearDelay,
    highlightDisappearDelay,
  ]);

  const animationProps = withScrollAnimation
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: scrollDuration, delay: scrollDelay },
        viewport: { once: viewportOnce },
      }
    : {};

  return (
    <motion.div ref={ref} {...animationProps}>
      <Tag
        className={cn(
          className,
          "relative inline-flex items-baseline gap-1 flex-wrap"
        )}
      >
        <span className="inline">{text}</span>
        <span className="relative inline-block">
          {highlight}
          <AnimatePresence>
            {showHighlight && (
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-gray-400/30"
                variants={defaultHighlightVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            )}
          </AnimatePresence>
        </span>
      </Tag>
    </motion.div>
  );
}
