"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from "@/lib/utils";

const lastUpdated = " 2025-10-24";
const sections = [
  "Declaration of Deceased Legacy User",
  "Legacy User Veto",
  "Transfer of Assets to Digital Inheritor",
];

export default function DigitalInheritancePage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="AETERNUM DIGITAL INHERITANCE POLICY"
          lastUpdated={lastUpdated}
          paragraphs={[
            "The Aeternum Platform (the “Platform”) allows our users to manage the inheritance of their digital assets. We call this a “Digital Inheritance” policy.",
            <>
              The procedure as set out in this Digital Inheritance Policy is
              binding on our users. It is designed to work hand-in-hand with,
              and provide extra guidance to, our{" "}
              <Link href="/terms" className="text-teal-700 hover:underline">
                Terms of Service
              </Link>{" "}
              and our{" "}
              <Link
                href="/userlicenseagreement"
                className="text-teal-700 hover:underline"
              >
                User License Agreement
              </Link>
              . Please read those together closely with this Digital Inheritance
              Policy.
            </>,
            "Throughout the Platform, there may be different types of users that you may interact with, each with different terms and conditions applying to them. These are as follows:",
            <ul className="pl-6 list-disc">
              <li>
                <strong>Legacy User</strong> — a user of our Platform that has
                digital assets that they wish for another user to inherit.
              </li>
              <li>
                <strong>Digital Inheritor</strong> — a user of our Platform that
                has been designated by a Legacy User as the person the Legacy
                User wishes to inherit their digital assets.
              </li>
              <li>
                <strong>Applicant</strong> — a user of our Platform that submits
                a declaration to the Platform that a Legacy User has died.
              </li>
            </ul>,
            <>
              A given user may fall into more than one category. Regardless, all
              users of our Platform agree to be bound by our{" "}
              <Link href="/terms" className="text-teal-700 hover:underline">
                Terms of Service
              </Link>{" "}
              and our{" "}
              <Link
                href="/userlicenseagreement"
                className="text-teal-700 hover:underline"
              >
                User License Agreement
              </Link>{" "}
              and are subject to the terms and conditions applicable to all
              users under those agreements.
            </>,
          ]}
        />

        <SectionLinkList sections={sections} toId={toId} />

        <div className="flex flex-col gap-12 mt-12 text-left items-start">
          <SectionBlock
            id="declaration-of-deceased-legacy-user"
            title="1. DECLARATION OF DECEASED LEGACY USER"
            paragraphs={[
              `The Digital Inheritance process is commenced upon the submission of a “Legacy Account Transition Form” by an Applicant, which acts as a declaration by the Applicant that a Legacy User has died.`,
              `An Applicant must have an active subscription to the Platform to submit a Legacy Account Transition Form.`,
              `The Applicant must provide adequate proof to Aeternum that substantiates the death of a Legacy User, in the form, manner, and timeframe as requested by Aeternum.`,
              `The Applicant must be connected with the Legacy User on the Platform.`,
              `All information submitted to the Platform by the Applicant must be accurate, not fraudulent, and sufficient, as required by Aeternum. Additional evidence may be required by Aeternum from time to time during the transition process.`,
              `Aeternum reserves the right to prevent the Digital Inheritance from commencing at its sole discretion, including if the information provided to Aeternum is insufficient.`,
            ]}
          />

          <SectionBlock
            id="legacy-user-veto"
            title="2. LEGACY USER VETO"
            paragraphs={[
              `Once Aeternum is satisfied by the Applicant’s submission of a Legacy Account Transition Form, the Legacy User who has been declared dead shall have five (5) business days to prevent the Digital Inheritance process from commencing by submitting a veto to the Platform. In the event the Legacy User does not satisfactorily submit its veto in the prescribed timeframe and manner, the Digital Inheritance procedure shall commence.`,
            ]}
          />
          <SectionBlock
            id="transfer-of-assets-to-digital-inheritor"
            title="3. TRANSFER OF ASSETS TO DIGITAL INHERITOR"
            paragraphs={[
              `It is the Digital Inheritor’s responsibility to provide sufficient and accurate information to Aeternum such that Aeternum can successfully authenticate the identity of the Digital Inheritor to Aeternum’s satisfaction before a Legacy User’s digital assets will be transferred to their Digital Inheritor.`,
              `The Digital Inheritor will be prompted to submit to the Platform adequate identification that proves they are the Digital Inheritor as designated by the Legacy User. They will have three (3) business days to provide such authentication to the satisfaction of Aeternum.`,
              `The Digital Inheritor must be a registered active user of the Platform and must be connected to the Legacy User before they can be designated by the Legacy User as a Digital Inheritor or recognized by Aeternum as a Digital Inheritor candidate based on the Legacy User’s inheritance transfer conditions as specified on the Platform.`,
              `The Digital Inheritor will have six (6) months to accept or reject the Digital Inheritance. If the Digital Inheritor accepts the Digital Inheritance within the prescribed time, the digital assets of the Legacy User shall be transferred to the Digital Inheritor, and the Digital Inheritor assumes responsibility of such digital assets. The digital assets inherited by the Digital Inheritor are thereafter treated as the “User Content” of the Digital Inheritor under our User License Agreement.`,
              `To honor the memory of the Legacy User, the Digital Inheritor cannot use the inherited digital assets in any unauthorized way, including to impersonate a deceased user; falsify the death of any individual; access a deceased user’s direct messages; create digital assets as if they were a deceased user; edit the digital assets of a deceased user; or alter the digital inheritance conditions of a deceased user.`,
              `If the Digital Inheritor does not accept the Digital Inheritance within the prescribed time, or chooses to reject the Digital Inheritance, the Digital Inheritor forfeits their ownership rights to the Legacy User’s digital assets, and such assets may be disposed of at Aeternum’s discretion.`,
            ]}
          />
        </div>
        <div className="border-t border-black my-12" />

        <div className="flex justify-center items-center">
          <Notification
            title="AETERNUM DIGITAL INHERITANCE POLICY"
            text="Designate your digital executor and review your legacy settings regularly."
          />
        </div>
      </div>
    </section>
  );
}
