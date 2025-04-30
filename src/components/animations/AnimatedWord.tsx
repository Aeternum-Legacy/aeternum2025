"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedWord({ word }: { word: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.7 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`transition-colors duration-[3000ms] ease-in-out
        ${isVisible ? "text-teal-700" : "text-gray-500/40"}
      `}
    >
      {word}
    </span>
  );
}
