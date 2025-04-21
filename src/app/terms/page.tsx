"use client";

import { ChevronRight } from "lucide-react";

const lastUpdated = "March 5th, 2025";
const sections = [
  "Use of the Website",
  "Intellectual Property",
  "Limitation of Liability",
  "Indemnification",
  "Links to Third-Party Websites",
  "Governing Law & Dispute Resolution",
];

export default function TermsPage() {
  return (
    <section className="text-center tracking-wide">
      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </p>

        {/* Intro text */}
        <div className="text-gray-700 text-sm leading-relaxed space-y-2 mb-12 text-center">
          <p>
            These Terms & Conditions ("Terms") govern your access and use of the
            Aeternum website (the "Website").
          </p>
          <p>
            By using the Website, you agree to comply with these Terms. If you
            do not agree, please do not use the Website.
          </p>
          <p>
            Your continued use of the Website after changes are posted
            constitutes acceptance of the revised Terms.
          </p>
          <p>
            The Website is not intended for minors. If you are under the age of
            18, please do not provide any personal information.
          </p>
          <p>We may update these Terms at any time without notice.</p>
        </div>
      </div>

      {/* Full-width list */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-10 md:px-20">
        <div className="border-t border-black" />

        {sections.map((title, index) => (
          <div
            key={index}
            className="flex justify-between items-stretch border-b border-black group"
          >
            {/* Index number and vertical divider */}
            <div className="flex-shrink-0 relative w-24 overflow-hidden flex items-end">
              <span className="text-[64px] font-light translate-y-3 block leading-none">
                0{index + 1}
              </span>
              <div className="absolute bottom-0 right-0 h-8 w-px bg-black translate-y-3" />
            </div>

            {/* Title */}
            <div className="flex-1 px-6 py-6 text-left flex items-center">
              <span className="text-lg font-medium text-black">{title}</span>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center w-10 h-10 border border-black rounded-full mr-6 transition-transform group-hover:scale-105">
              <ChevronRight className="w-4 h-4 text-black" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
