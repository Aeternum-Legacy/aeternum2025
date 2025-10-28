"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from "@/lib/utils";

const lastUpdated = " 2025-10-28";
const sections = [
  "Overview",
  "Scope",
  "Access & Transfer",
  "Consent",
  "Executor Responsibilities",
  "Limitation of Liability",
];

export default function DigitalInheritancePage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="DIGITAL INHERITANCE POLICY"
          lastUpdated={lastUpdated}
          paragraphs={[
            "This Digital Inheritance Policy explains how Aeternum handles digital assets and user instructions related to inheritance and posthumous data handling.",
            "Please review this policy together with our Terms of Service and Privacy Policy. By using the platform, you agree to these policies.",
            <>
              If you have questions, contact us at{" "}
              <a
                href="mailto:info@aeternumproject.com"
                className="text-teal-700 hover:underline"
              >
                info@aeternumproject.com
              </a>
              .
            </>,
          ]}
        />

        <SectionLinkList sections={sections} toId={toId} />

        <div className="flex flex-col gap-12 mt-12 text-left items-start">
          <SectionBlock
            id="overview"
            title="01 OVERVIEW"
            intro="Aeternum provides mechanisms for users to specify how their digital assets should be handled in the event of incapacity or death. This policy describes those mechanisms and the responsibilities of Aeternum and designated executors."
          />

          <SectionBlock
            id="scope"
            title="02 SCOPE"
            intro="This policy applies to all digital assets stored on Aeternum, including but not limited to photos, videos, audio, documents, messages and profile data."
          />

          <SectionBlock
            id="access-and-transfer"
            title="03 ACCESS & TRANSFER"
            intro="Users may designate beneficiaries or executors and provide instructions for transfer or deletion of data. Any transfer will comply with applicable laws and Aeternum’s verification procedures."
          />

          <div className="border-t border-black my-12" />

          <div className="flex justify-center items-center">
            <Notification
              title="Digital Inheritance"
              text="Designate your digital executor and review your legacy settings regularly."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
