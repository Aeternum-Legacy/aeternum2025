"use client";

import { cn } from "@/lib/utils";

interface SignUpButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const SignUpButton = ({
  text,
  className,
  onClick,
  type = "button",
}: SignUpButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bg-[#186E68] hover:bg-[#2c4a48] text-white px-6 py-2 rounded-full text-lg tracking-wider font-medium transition-colors duration-300 flex items-center justify-center relative",
        className
      )}
    >
      {text}
    </button>
  );
};
