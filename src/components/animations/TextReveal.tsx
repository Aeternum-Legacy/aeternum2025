"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  toColorClass?: string;
  backgroundImageUrl?: string;
  backgroundWidth?: string; 
  backgroundHeight?: string; 
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  toColorClass = "text-teal-700",
  backgroundImageUrl = "/images/bg.jpg",
  backgroundWidth,
  backgroundHeight,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ").map((word) => {
    const isAnimated = word.startsWith("**") && word.endsWith("**");
    const cleanWord = isAnimated ? word.slice(2, -2) : word;
    return { text: cleanWord, animated: isAnimated };
  });

  const backgroundSize =
    backgroundWidth && backgroundHeight
      ? `${backgroundWidth} ${backgroundHeight}`
      : "cover";

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative z-0 h-[200vh] bg-fixed bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize,
      }}
    >
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
        <span className="flex flex-wrap p-5 text-2xl font-bold text-gray-400 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return word.animated ? (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                toColorClass={toColorClass}
              >
                {word.text}
              </Word>
            ) : (
              <span key={i} className="mx-1 lg:mx-1.5 text-gray-400">
                {word.text}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  toColorClass: string;
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#9CA3AF", "#0F766E"]);
  return (
    <motion.span style={{ color }} className="mx-1 lg:mx-1.5 font-bold">
      {children}
    </motion.span>
  );
};
