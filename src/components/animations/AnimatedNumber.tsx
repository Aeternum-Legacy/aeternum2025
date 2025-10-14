"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({
  from,
  to,
  duration = 1,
  prefix = "$",
  formatter,
  className,
}: {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  formatter?: (n: number) => string;
  className?: string;
}) {
  const formatValue = (val: number) => {
    if (formatter) return formatter(val);
    return val.toFixed(2);
  };

  const [display, setDisplay] = useState(formatValue(from));

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setDisplay(formatValue(value));
      },
    });
    return () => controls.stop();
  }, [from, to, duration, formatter]);

  return (
    <p
      className={className ?? "text-3xl font-bold leading-none text-[#186E68]"}
    >
      {formatter ? (
        display
      ) : (
        <>
          {prefix}
          {display}
        </>
      )}
    </p>
  );
}
