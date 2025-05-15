"use client";

import { useCallback } from "react";

interface SectionLinkListProps {
  sections: string[];
  toId: (title: string) => string;
}

export default function SectionLinkList({
  sections,
  toId,
}: SectionLinkListProps) {
  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="content-wrapper">
      <div className="border-t border-black" />
      {sections.map((title, index) => {
        const id = toId(title);
        return (
          <button
            key={id}
            onClick={() => handleScrollTo(id)}
            className="block w-full text-left"
          >
            <div className="flex justify-between items-stretch border-b border-black group hover:bg-[#09B285]/5 h-16">
              <div className="flex-shrink-0 relative w-auto sm:w-96 md:overflow-hidden flex items-center md:items-end">
                <span className="text-[32px] sm:text-[64px] font-light sm:translate-y-3 md:block leading-none">
                  0{index + 1}
                </span>
                <div className="hidden md:block absolute bottom-0 right-0 h-12 w-px bg-gray-600 translate-y-1" />
              </div>

              <div className="flex-1 px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center">
                <span className="text-base sm:text-xl font-medium text-black">
                  {title}
                </span>
              </div>

              <div className="flex items-center ml-auto pr-4 sm:pr-6">
                <img
                  src="/icons/down-arrow.svg"
                  alt="Arrow Icon"
                  className="w-10 h-10 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
