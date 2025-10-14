"use client";

import React from "react";

type Currency = "USD" | "CAD";

interface Props {
  value?: Currency;
  onChange?: (c: Currency) => void;
}

export default function CurrencyToggle({ value = "USD", onChange }: Props) {
  const handleSelect = (c: Currency) => {
    if (onChange) onChange(c);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        aria-pressed={value === "USD"}
        onClick={() => handleSelect("USD")}
        className={
          "px-3 py-1 rounded-full border text-sm font-medium " +
          (value === "USD"
            ? "bg-[#186E68] text-white border-transparent"
            : "bg-white text-black border-gray-200")
        }
      >
        USD
      </button>

      <button
        type="button"
        aria-pressed={value === "CAD"}
        onClick={() => handleSelect("CAD")}
        className={
          "px-3 py-1 rounded-full border text-sm font-medium " +
          (value === "CAD"
            ? "bg-[#186E68] text-white border-transparent"
            : "bg-white text-black border-gray-200")
        }
      >
        CAD
      </button>
    </div>
  );
}
