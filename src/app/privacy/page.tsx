"use client";

import { SectionBlock } from "../terms/page";

const toId = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

const lastUpdated = "March 5th, 2025";
const sections = [
  "Information We Collect",
  "How We Use Your Information",
  "How We Protect Your Information",
  "Sharing Your Information",
  "Your Rights",
  "Third-Party Links",
];

export default function PrivacyPolicyPage() {
  return (
    <section className="text-center tracking-wide bg-pattern">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </p>

        <div className="text-gray-700 text-sm leading-relaxed space-y-2 mb-12 text-center">
          <p>
            Aeternum respects your privacy. By using the Website, you agree to
            this Privacy Policy.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you use our Website.
          </p>
          <p>
            We may update it from time to time, so please check regularly for
            changes.
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
                <div className="flex-shrink-0 relative w-96 overflow-hidden flex items-end">
                  <span className="text-[64px] font-light translate-y-3 block leading-none">
                    0{index + 1}
                  </span>
                  <div className="absolute bottom-0 right-0 h-12 w-px bg-gray-600 translate-y-1" />
                </div>

                <div className="flex-1 px-6 py-6 text-left flex items-center">
                  <span className="text-xl font-medium text-black">
                    {title}
                  </span>
                </div>

                <div className="flex items-center ml-auto pr-6">
                  <img
                    src="/icons/down-arrow.svg"
                    alt="Arrow Icon"
                    className="w-16 h-16 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <SectionBlock
        id="information-we-collect"
        title="INFORMATION WE COLLECT"
        intro="We may collect the following types of information:"
        bullets={[
          "Personal Information: Name, email address, and any details you provide through contact forms.",
          "Usage Data: Information about how you interact with the Website, such as IP address, browser type, and device information.",
          "Cookies & Tracking Data: We use cookies to enhance your experience and analyze site traffic. You can manage cookie preferences in your browser settings.",
        ]}
      />

      <SectionBlock
        id="how-we-use-your-information"
        title="HOW WE USE YOUR INFORMATION"
        intro="We use collected information to:"
        bullets={[
          "Provide and improve the Website.",
          "Respond to your inquiries.",
          "Monitor Website security and prevent fraud.",
          "Comply with legal obligations.",
        ]}
      />

      <SectionBlock
        id="how-we-protect-your-information"
        title="HOW WE PROTECT YOUR INFORMATION"
        intro="We implement security measures to protect your personal data. However, no method of online transmission is 100% secure, and we cannot guarantee absolute security."
      />

      <SectionBlock
        id="sharing-your-information"
        title="SHARING YOUR INFORMATION"
        intro="We do not sell your personal data. We may share it with:"
        bullets={[
          "Service providers assisting with Website operations.",
          "Legal authorities if required by law.",
        ]}
      />

      <SectionBlock
        id="your-rights"
        title="YOUR RIGHTS"
        intro="Depending on your location, you may have rights to:"
        bullets={[
          "Access, update, or delete your personal data.",
          "Request a copy of your information.",
          "Withdraw consent for data processing.",
        ]}
        outro='To exercise these rights, contact us at <a href="mailto:info@aeternumproject.com" className="underline font-medium">info@aeternumproject.com</a>.'
      />

      <SectionBlock
        id="third-party-links"
        title="THIRD-PARTY LINKS"
        intro="Our Website may contain links to third-party websites. We are not responsible for their privacy policies or practices."
      />

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-10 md:px-20">
        <div className="border-t border-black" />
      </div>

      <div className="bg-[#E6F3F1] rounded-xl px-6 py-4 text-sm text-gray-800 max-w-4xl mx-auto my-16 tracking-widest text-center">
        <p>We may update this Privacy Policy at any time.</p>
        <p className="mt-2">
          Changes will be posted on this page, and your continued use of the
          Website will indicate acceptance.
        </p>
        <p className="mt-2">
          For questions regarding this Privacy Policy, contact us at{" "}
          <a
            href="mailto:info@aeternumproject.com"
            className="underline underline-offset-2 font-medium"
          >
            info@aeternumproject.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
