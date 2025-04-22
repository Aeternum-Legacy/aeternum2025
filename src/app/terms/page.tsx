"use client";

import SectionBlock from "@/components/ui/SectionBlock";

const toId = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

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
    <section className="text-center tracking-wide bg-pattern">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: <span className="font-semibold">{lastUpdated}</span>
        </p>

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
        id="use-of-the-website"
        title="USE OF THE WEBSITE"
        intro="You are responsible for how you use the Website. You must not:"
        bullets={[
          "Modify, distribute, copy, or exploit Website content without written permission.",
          "Use automated tools such as bots or scrapers to collect information.",
          "Interfere with the security or functionality of the Website.",
          "Reverse-engineer or decompile any part of the Website.",
          "Post or transmit harmful content such as malware, viruses, or misleading information.",
          "Violate any laws, regulations, or third-party rights.",
        ]}
        outro="We reserve the right to restrict, suspend, or terminate access to the Website at our discretion."
      />
      <SectionBlock
        id="intellectual-property"
        title="INTELLECTUAL PROPERTY"
        intro="All content on the Website, including text, images, trademarks, and software, is owned by Aeternum or its licensors. You may not use any Aeternum trademarks or copyrighted materials without permission."
      />
      <SectionBlock
        id="limitation-of-liability"
        title="LIMITATION OF LIABILITY"
        intro='The Website and its content are provided "as is" without warranties of any kind. Aeternum is not liable for any errors, omissions, or interruptions on the Website. To the maximum extent permitted by law, Aeternum is not responsible for any direct, indirect, incidental, or consequential damages resulting from your use of the Website.'
      />
      <SectionBlock
        id="indemnification"
        title="INDEMNIFICATION"
        intro="You agree to indemnify and hold Aeternum, its affiliates, employees, and agents harmless from any claims, damages, or expenses arising from your use of the Website or violation of these Terms."
      />
      <SectionBlock
        id="links-to-third-party-websites"
        title="LINKS TO THIRD-PARTY WEBSITES"
        intro="The Website may contain links to external sites that are not operated by Aeternum. We are not responsible for their content or privacy practices."
      />
      <SectionBlock
        id="governing-law-&-dispute-resolution"
        title="GOVERNING LAW & DISPUTE RESOLUTION"
        intro="These Terms are governed by the laws of the Province of Alberta, Canada. Any disputes shall be resolved in the courts of Edmonton or through arbitration, as determined by Aeternum."
      />

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-10 md:px-20">
        <div className="border-t border-black" />
      </div>

      <div className="bg-[#E6F3F1] rounded-xl px-6 py-4 text-sm text-gray-800 max-w-4xl mx-auto my-16 tracking-widest">
        <p>
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions will remain in effect.
        </p>
        <p className="mt-2">
          For <span className="font-bold">any questions</span> regarding these
          Terms & Conditions, contact us at{" "}
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
