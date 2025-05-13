"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => (
    <motion.div
      ref={scope}
      className="flex flex-wrap justify-center text-balance"
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-white text-black opacity-0 whitespace-pre-wrap break-words"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={className}>
      <h1
        className={cn(
          "text-[2.441rem] md:text-[5.61rem] leading-tight tracking-wide text-center break-words",
          className
        )}
      >
        {renderWords()}
      </h1>
    </div>
  );
};
