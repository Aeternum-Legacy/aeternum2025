"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary:
        "bg-[var(--btn-primary)] text-white hover:bg-[var(--btn-primary-hover)] focus:ring-[var(--btn-primary)]",
      secondary:
        "bg-[var(--btn-secondary)] text-black hover:bg-[var(--btn-secondary-hover)] focus:ring-[var(--btn-secondary)]",
      outline:
        "border border-[var(--btn-outline)] text-black hover:bg-[var(--btn-outline-hover)]",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";
