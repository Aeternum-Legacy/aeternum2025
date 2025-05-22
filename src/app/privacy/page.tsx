"use client";

import Notification from "@/components/ui/Notification";
import SectionBlock from "@/components/ui/SectionBlock";
import { toId } from "@/lib/utils";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import SectionLinkList from "@/components/ui/SectionLinkList";

const lastUpdated = "May 14th, 2025";
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
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper">
        <LegalSectionTitle
          title="Privacy Policy"
          lastUpdated={lastUpdated}
          paragraphs={[
            "Aeternum respects your privacy. By using the Website, you agree to this Privacy Policy.",
            "This Privacy Policy explains how we collect, use, and protect your personal information when you use our Website.",
          ]}
        />
        <SectionLinkList sections={sections} toId={toId} />
        <div className="content-wrapper gap-12 mt-12 text-left items-start">
          <SectionBlock
            id="information-we-collect"
            title="01 INFORMATION WE COLLECT"
            intro="We may collect the following types of information:"
            bullets={[
              "Personal Information: Name, email address, and any details you provide through contact forms.",
              "Usage Data: Information about how you interact with the Website, such as IP address, browser type, and device information.",
              "Cookies & Tracking Data: We use cookies to enhance your experience and analyze site traffic. You can manage cookie preferences in your browser settings.",
            ]}
          />

          <SectionBlock
            id="how-we-use-your-information"
            title="02 HOW WE USE YOUR INFORMATION"
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
            title="03 HOW WE PROTECT YOUR INFORMATION"
            intro="We implement security measures to protect your personal data. However, no method of online transmission is 100% secure, and we cannot guarantee absolute security."
          />

          <SectionBlock
            id="sharing-your-information"
            title="04 SHARING YOUR INFORMATION"
            intro="We do not sell your personal data. We may share it with:"
            bullets={[
              "Service providers assisting with Website operations.",
              "Legal authorities if required by law.",
            ]}
          />

          <SectionBlock
            id="your-rights"
            title="05 YOUR RIGHTS"
            intro="Depending on your location, you may have rights to:"
            bullets={[
              "Access, update, or delete your personal data.",
              "Request a copy of your information.",
              "Withdraw consent for data processing.",
            ]}
            outro={
              <span>
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:info@aeternumproject.com"
                  className="underline font-medium"
                >
                  info@aeternumproject.com
                </a>
                .
              </span>
            }
          />

          <SectionBlock
            id="third-party-links"
            title="06 THIRD-PARTY LINKS"
            intro="Our Website may contain links to third-party websites. We are not responsible for their privacy policies or practices."
          />
        </div>
        <div className="border-t border-black my-12" />
        <div className="flex justify-center items-center">
          <Notification
            title="Privacy Policy"
            text="We may update this Privacy Policy at any time.  (next line) Changes will be posted on this page, and your continued use of the Website will indicate acceptance."
          />
        </div>
      </div>
    </section>
  );
}
