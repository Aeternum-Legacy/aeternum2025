"use client";

import SectionBlock from "@/components/ui/SectionBlock";

const toId = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

const lastUpdated = "March 5th, 2025";
const sections = ["What Are Cookies?", "Types of Cookies We Use"];

export default function CookiePolicyPage() {
  return (
    <section className="text-center tracking-wide bg-pattern">
      <div className="max-w-4xl mx-auto px-6 py-5 md:py-14">
        <h1 className="text-4xl md:text-5xl mb-2">Cookie Policy</h1>
        <p className=" text-gray-500 mb-8">
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </p>

        <div className="text-gray-700 text-xs md:text-sm leading-relaxed space-y-2 mb-12 text-center">
          <p>
            This Cookie Policy explains how we use cookies and similar
            technologies to provide and improve our website experience.
          </p>
          <p>
            By continuing to browse our site, you agree to the use of cookies as
            outlined in this policy.
          </p>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-10 md:px-20">
        <div className="border-t border-black" />

        {sections.map((title, index) => {
          const id = toId(title);
          return (
            <a key={id} href={`#${id}`} className="block">
              <div className="flex justify-between items-stretch border-b border-black group hover:bg-[#09B285]/5 h-16">
                <div className="flex-shrink-0 relative w-auto sm:w-96 md:overflow-hidden flex items-center md:items-end justify-center sm:justify-start">
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
            </a>
          );
        })}
      </div>

      <SectionBlock
        id="what-are-cookies?"
        title="WHAT ARE COOKIES?"
        intro="Cookies are small text files stored on your device when you visit a website. They help websites function correctly, remember user preferences, and improve user experience. Some cookies are necessary for website operation, while others are used for analytics or advertising."
      />

      <SectionBlock
        id="types-of-cookies-we-use"
        title="TYPES OF COOKIES WE USE"
        intro="We only use basic essential cookies that are necessary for the website to function properly. These do not require user consent and include:"
        bullets={[
          "Session cookies to maintain login and security settings.",
          "Payment-related cookies for secure transactions and fraud prevention.",
          "Functional cookies to remember user preferences (e.g., language selection).",
        ]}
        outro="If we introduce Non-Essential Cookies, we will update this page and ask for your consent before enabling them. Please check back regularly for any changes."
      />
    </section>
  );
}
