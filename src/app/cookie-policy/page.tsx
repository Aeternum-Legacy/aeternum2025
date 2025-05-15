"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import { toId } from '@/lib/utils';
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import SectionLinkList from "@/components/ui/SectionLinkList";
import Notification from "@/components/ui/Notification";

const lastUpdated = "May 14th, 2025";
const sections = ["What Are Cookies?", "Types of Cookies We Use"];

export default function CookiePolicyPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper">
        <LegalSectionTitle
          title="Cookie Policy"
          lastUpdated={lastUpdated}
          paragraphs={[
            "This Cookie Policy explains how we use cookies and similar technologies to provide and improve our website experience.",
            "By continuing to browse our site, you agree to the use of cookies as outlined in this policy.",
          ]}
        />
      </div>

      <div className="content-wrapper">
        <SectionLinkList sections={sections} toId={toId} />
      </div>

      <div className="section-wrapper">
        <div className="content-wrapper flex flex-col gap-12">
          <SectionBlock
            id="what-are-cookies?"
            title="01 WHAT ARE COOKIES?"
            intro="Cookies are small text files stored on your device when you visit a website. They help websites function correctly, remember user preferences, and improve user experience. Some cookies are necessary for website operation, while others are used for analytics or advertising."
          />
          <SectionBlock
            id="types-of-cookies-we-use"
            title="02 TYPES OF COOKIES WE USE"
            intro="We only use basic essential cookies that are necessary for the website to function properly. These do not require user consent and include:"
            bullets={[
              "Session cookies to maintain login and security settings.",
              "Payment-related cookies for secure transactions and fraud prevention.",
              "Functional cookies to remember user preferences (e.g., language selection).",
            ]}
            outro="If we introduce Non-Essential Cookies, we will update this page and ask for your consent before enabling them. Please check back regularly for any changes."
          />
          <div className="border-t border-black my-12" />
          <div className="flex justify-center items-center">
            <Notification
              title="Cookie Policy"
              text="We use cookies to enhance your experience, analyze site traffic, and serve targeted content. (next line) By continuing to use this Website, you consent to the use of cookies in accordance with this Cookie Policy."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
