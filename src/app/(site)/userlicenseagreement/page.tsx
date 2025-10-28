"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from "@/lib/utils";

const lastUpdated = " 2025-10-28";
const sections = [
  "License Grant",
  "Restrictions",
  "User Responsibilities",
  "Termination",
  "Limitation of Liability",
];

export default function UserLicenseAgreementPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="USER LICENSE AGREEMENT"
          lastUpdated={lastUpdated}
          paragraphs={[
            "This User License Agreement (ULA) governs your use of Aeternum’s platform and services. By using our services, you accept the terms of this ULA.",
            "The ULA should be read together with our Terms of Service and Privacy Policy.",
            <>
              For questions about this agreement, contact us at{" "}
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
            id="license-grant"
            title="01 LICENSE GRANT"
            intro="Subject to your compliance with this ULA, Aeternum grants you a limited, non-exclusive, non-transferable license to access and use the Service."
          />

          <SectionBlock
            id="restrictions"
            title="02 RESTRICTIONS"
            intro="You agree not to misuse the Service or attempt to access areas of the Service for which you are not authorized."
          />

          <SectionBlock
            id="termination"
            title="03 TERMINATION"
            intro="Aeternum may suspend or terminate your access for violations of the ULA or Terms of Service."
          />

          <div className="border-t border-black my-12" />

          <div className="flex justify-center items-center">
            <Notification
              title="User License Agreement"
              text="Review your account and contact support if you have questions about permitted use."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
