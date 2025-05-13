import React from "react";
import Image from "next/image";

interface LogoLabelProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function LogoLabel({
  src,
  alt,
  text,
  className = "",
  iconClassName = "w-8 md:w-12",
  textClassName = "font-bold leading-relaxed tracking-[0.25em] text-[#186E68] text-xs md:text-sm",
}: LogoLabelProps) {
  return (
    <div className={`flex flex-col items-center gap-2 mb-10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className={iconClassName}
      />
      <p className={textClassName}>{text}</p>
    </div>
  );
}
