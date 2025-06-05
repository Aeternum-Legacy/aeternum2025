// components/AnimatedNumber.tsx
"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({
  from,
  to,
  duration = 1,
  prefix = "$",
}: {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
}) {
  const [display, setDisplay] = useState(from.toFixed(2));

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setDisplay(value.toFixed(2));
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return (
    <p className="text-3xl font-bold leading-none text-[#186E68]">
      {prefix}
      {display}
    </p>
  );
}
