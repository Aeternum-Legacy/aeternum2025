"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from "@/lib/utils";

const lastUpdated = "2025-10-24";
const sections = [
  "Introduction",
  "Use of the Website",
  "Restricted Access",
  "Password Protected Links",
  "Submitted Content",
  "Intellectual Property",
  "Links to Third-Party Websites",
  "No Reliance",
  "Forward Looking Statements",
  "No Assurance",
  "Limitation of Liability",
  "Indemnification",
  "Dispute Resolution",
  "Notices",
  "General",
];

export default function TermsPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="AETERNUM TERMS OF SERVICE"
          lastUpdated={lastUpdated}
          paragraphs={[
            // 1
            <>
              PLEASE READ THESE{" "}
              <Link
                href="http://www.aeternumproject.com"
                className="text-teal-700 hover:underline"
                target="_blank"
              >
                AETERNUMPROJECT.COM
              </Link>{" "}
              WEBSITE TERMS OF SERVICE (THE “TERMS OF SERVICE”) CAREFULLY BEFORE
              USING THE{" "}
              <Link
                href="http://www.aeternumproject.com"
                className="text-teal-700 hover:underline"
                target="_blank"
              >
                HTTP://WWW.AETERNUMPROJECT.COM
              </Link>{" "}
              WEBSITE (THE “WEBSITE”).
            </>,
            // 2
            <>
              THIS TERMS OF SERVICE AGREEMENT (THE “TERMS OF SERVICE”) IS
              BETWEEN USER AND AETERNUM CORP. (“WE”, “US”, “OUR”, “AETERNUM”).
              THE INDIVIDUAL WHO USES THE WEBSITE OR REGISTERS FOR THE PLATFORM
              (“YOU”, “YOUR”, “USER”) ACKNOWLEDGES THAT THEY HAVE READ THIS
              TERMS OF SERVICE, UNDERSTAND IT, AND AGREE TO BE BOUND BY IT
              EFFECTIVE THE DATE THEY USED THE WEBSITE OR REGISTERED FOR THE
              PLATFORM (THE “EFFECTIVE DATE”), WHICHEVER COMES FIRST. IN THIS
              TERMS OF SERVICE, EACH PARTY IS A “PARTY” AND TOGETHER THEY ARE
              THE “PARTIES”.
            </>,
            // 3
            <>
              THIS TERMS OF SERVICE GOVERNS YOUR ACCESS TO AND USE OF OUR
              WEBSITE AND OUR PLATFORM FOUND AT{" "}
              <Link
                href="http://www.aeternumproject.com"
                className="text-teal-700 hover:underline"
                target="_blank"
              >
                WWW.AETERNUMPROJECT.COM
              </Link>{" "}
              AND AS FOUND ON THE APPLE APP STORE AND GOOGLE PLAY STORE (THE
              “PLATFORM”), INCLUDING YOUR PARTICIPATION ON THE WEBSITE AND
              PLATFORM AS A USER, YOUR SUBMISSION AND PUBLISHING OF USER
              CONTENT, YOUR TRANSACTIONS ON THE WEBSITE AND PLATFORM, YOUR
              ACCESS TO AND USE OF OUR INTELLECTUAL PROPERTY, AND YOUR
              INTERACTIONS WITH AETERNUM AND OTHER USERS ON THE PLATFORM.
            </>,
            // 4
            <>
              THIS TERMS OF SERVICE PROVIDES ONLY SOME OF THE TERMS AND
              CONDITIONS APPLICABLE TO YOUR ACCESS TO AND USE OF OUR WEBSITE AND
              PLATFORM. BY USING OUR WEBSITE, USER ADDITIONALLY AGREES TO AND
              PROVIDES EXPRESS CONSENT TO OUR{" "}
              <Link
                href="/privacy-policy"
                className="text-teal-700 hover:underline"
              >
                PRIVACY POLICY
              </Link>{" "}
              AND{" "}
              <Link
                href="/cookie-policy"
                className="text-teal-700 hover:underline"
              >
                COOKIES POLICY
              </Link>
              . BY REGISTERING ON OUR PLATFORM, USER ADDITIONALLY AGREES TO AND
              PROVIDES EXPRESS CONSENT TO OUR{" "}
              <Link
                href="/privacy-policy"
                className="text-teal-700 hover:underline"
              >
                PRIVACY POLICY
              </Link>
              {", "}
              <Link
                href="/cookie-policy"
                className="text-teal-700 hover:underline"
              >
                COOKIES POLICY
              </Link>
              {", "}
              <Link
                href="/digitalinheritance"
                className="text-teal-700 hover:underline"
              >
                DIGITAL INHERITANCE POLICY
              </Link>
              {", AND "}
              <Link
                href="/userlicenseagreement"
                className="text-teal-700 hover:underline"
              >
                USER LICENSE AGREEMENT
              </Link>
              . PLEASE REVIEW THOSE DOCUMENTS TOGETHER WITH THIS TERMS OF
              SERVICE.
            </>,
            // 5
            <>
              NOW, THEREFORE, in consideration of the mutual covenants, terms,
              and conditions set forth herein, and for other good and valuable
              consideration, the receipt and sufficiency of which are hereby
              acknowledged, the Parties agree as follows:
            </>,
          ]}
        />
        <SectionLinkList sections={sections} toId={toId} />
        <div className="flex flex-col gap-12 mt-12 text-left items-start">
          {/* 01: INTRODUCTION */}
          <SectionBlock
            id="introduction"
            title="01 INTRODUCTION"
            paragraphs={[
              `Your use of the Website and Platform, including, but not limited to, all images, text, illustrations, designs, icons, photographs, programs, music clips, downloads, systems and methods of trading, video clips, graphics, user interfaces, visual interfaces, information, data, tools, products, written materials, services, design, structure, selection, coordination, expression content, information, design, marks and layout therein, including but not limited to the design, structure, selection, coordination, expression and arrangement of any of the foregoing available on or through the Website and Platform, together (the “Content”), is subject to these Terms of Service, which may be updated by us at any time without notice to you.`,
              `If we update our Terms of Service, we will post the updated Terms of Service on the Website. Any such changes will be effective upon posting.`,
              `If you do not agree with these Terms of Service, you should not use the Website or register as a user on the Platform and you agree that your sole and exclusive remedy is to discontinue using the Website and to not complete your registration on the Platform.`,
              `The Website and Platform is not designed for use by minors and minors should not provide personal information through the Website and Platform.`,
              `Nothing contained in these Terms of Service is intended to modify any other written agreement you may have with AETERNUM (if any) that may be in effect.`,
              `The websites of other AETERNUM affiliates are governed by separate terms of service agreements.`,
              <>
                If you have any questions or comments about these Terms of
                Service, please contact us at{" "}
                <a
                  href="mailto:legal@aeternumproject.com"
                  className="text-teal-700 hover:underline"
                >
                  legal@aeternumproject.com
                </a>
                .
              </>,
            ]}
          />

          {/* 02: USE OF THE WEBSITE */}
          <SectionBlock
            id="use-of-the-website"
            title="02 USE OF THE WEBSITE"
            intro={`You are responsible for your use of the Website, Platform, and the Content. You undertake to use your best endeavors to ensure that nothing you do whilst accessing the Website and Platform will damage the Website or Platform or otherwise violate these Terms of Service. You acknowledge and agree that you may not (and may not encourage or assist others) to:`}
            bullets={[
              "A. reproduce, republish, distribute, exploit commercially, use or modify without AETERNUM’s express written consent, the Website, Platform, or Content, or access, copy or download the Website, Platform, or Content;",
              "B. use automated methods, including but not limited to “web scraping” or “bots,” “robots,” or “spiders” that “harvest” the Website, Platform, or Content, interfere with the functioning of the Website, Platform, or Content, or restrict or inhibit any others from using the Website, Platform, or Content;",
              "C. use any trade mark, service mark or logo of AETERNUM or any third party that appears on the Website and Platform without prior written consent, or remove or obscure any copyright or other notices contained in the Website, Platform, or the Content;",
              "D. link other websites to the Website or Platform, imply or suggest that AETERNUM has endorsed or is affiliated with such websites, or display the Website or Platform as “framed” or “mirrored” within another website;",
              "E. delete, decompose, decompile, reverse engineer, disassemble or otherwise deconstruct all or any portion of the Website, Platform, or Content, or any of the Website’s and Platform’s source code or software;",
              "F. transmit any virus, worm, time bomb or similar system interference through the Website and Platform;",
              "G. violate these Terms of Service, any AETERNUM policy referenced in these Terms of Service, or any law, regulation, rule or intellectual property or contractual rights of others, or attempt to violate the security of the Website and Platform, including attempting to gain unauthorized access to Content or use or gain access to the identities, information or computers of others through the Website and Platform;",
              "H. impersonate any person or entity or create a user account for anyone other than yourself, or create another user account without permission if AETERNUM has suspended or terminated your user account; or",
              "I. use any hidden text or metatags using “Aeternum” on a website or content published on a website or otherwise. AETERNUM has the right (but not the obligation) to monitor the Website and Platform for any unauthorized or objectionable conduct and to take all appropriate actions in response, without notice to you, and we may at any time revoke your right to use all or any portion of the Website, Platform, or Content.",
            ]}
            outro={`AETERNUM may investigate any complaint regarding a suspected violation of these Terms of Service, and may report any activity relating to the Website, Platform, or Content to regulators, law enforcement officials or other persons or entities that it deems appropriate. The Website or Platform, or any part of the Website or Platform, may be periodically unavailable, and Content may be removed or modified at any time without notice. AETERNUM may, in its sole discretion, restrict, suspend or cancel access to or use of the Website or Platform, for all or any one or number of users. You acknowledge that you will have no right to compensation or other remedy for being unable to access the Website or Platform.`}
          />

          {/* 03: RESTRICTED ACCESS */}
          <SectionBlock
            id="restricted-access"
            title="03 RESTRICTED ACCESS"
            paragraphs={[
              `The Website and Platform is operated and controlled by us in Canada. You acknowledge that access to the Website and Platform from countries or territories where such access is illegal is prohibited.`,
              `You agree that AETERNUM makes no representations that the services discussed on or accessible through the Website and Platform are available or appropriate for sale or use in all jurisdictions or by all users.`,
              `You acknowledge that you access the Website or Platform on your own initiative and are responsible for compliance with local laws, rules and regulations.`,
            ]}
          />

          {/* 04: PASSWORD PROTECTED LINKS */}
          <SectionBlock
            id="password-protected-links"
            title="04 PASSWORD PROTECTED LINKS"
            paragraphs={[
              `Some pages on the Website and Platform are available only to users with registered accounts and log-on credentials. You are responsible for the confidentiality of your log-on credentials and account information, and for all actions taken on the Website and Platform while logged on with your credentials. You should not disclose your log-on credentials or account information and you should choose a unique password. You agree that AETERNUM reserves the right to suspend or cancel Website and Platform accounts and log-on credentials at any time, for any, or no, reason and without notice. If you suspect that your log-on credentials have been compromised, please notify us immediately using the support contact information provided on the relevant account log-on page.`,
            ]}
          />

          {/* 05: SUBMITTED CONTENT */}
          <SectionBlock
            id="submitted-content"
            title="05 SUBMITTED CONTENT"
            paragraphs={[
              `Electronic communications can be intercepted by third parties and electronic mail and other transmissions to and from the Website, Platform, and AETERNUM may not be secure. Any communications to AETERNUM should be sent to the contact information provided in the Contact Us section of the Website or Platform.`,
              `You are responsible for any content that you post on the Website or that you submit to us via contact forms on the Website, email, social media accounts or otherwise, including your feedback, comments, questions, ideas, suggestions, survey responses or other information or materials (“Submitted Content”). You hereby represent and warrant that any Submitted Content you submit to us is either your original content or that you have obtained all necessary rights to your Submitted Content, including the right to authorize us to use your Submitted Content as set forth in these Terms of Service.`,
              `By submitting any Submitted Content, you hereby grant to AETERNUM an irrevocable, perpetual, worldwide, non-exclusive, transferable, royalty-free, fully paid-up, sub-licensable license to use, display, reproduce, publish, transmit, store, modify and create derivative works of your Submitted Content.`,
            ]}
          />

          {/* 06: INTELLECTUAL PROPERTY */}
          <SectionBlock
            id="intellectual-property"
            title="06 INTELLECTUAL PROPERTY"
            paragraphs={[
              `All content on the Website and Platform, including text, images, trademarks, and software, is owned by AETERNUM or its licensors. You may not use any AETERNUM trademarks or copyrighted materials without permission.`,
            ]}
          />

          {/* 07: LINKS TO THIRD-PARTY WEBSITES */}
          <SectionBlock
            id="links-to-third-party-websites"
            title="07 LINKS TO THIRD-PARTY WEBSITES"
            paragraphs={[
              `The Website and Platform may contain links to other websites. We are not responsible for the content, security or privacy practices of other websites and we do not endorse other websites or their content by virtue of linking to them from the Website and Platform. You should review the terms of service and privacy policies of any third party website that you visit.`,
            ]}
          />

          {/* 08: NO RELIANCE */}
          <SectionBlock
            id="no-reliance"
            title="08 NO RELIANCE"
            paragraphs={[
              `Subject to any applicable law that cannot be excluded, the Website, Platform, and Content are provided “as is” and “as available” without any representation, warranty or condition. No reliance should be placed on any information on the Website, Platform, or the Content. You agree to bear all risks associated with your use of the Website, Platform, and Content, including any reliance on the availability, accuracy, completeness, timeliness, usefulness, or appropriateness of the Website, Platform, or Content. You agree that AETERNUM is not liable for any action you take, omission, or decision you make in reliance on the Website, Platform, or the Content, subject to applicable law.`,
              `The Content, Website, and Platform are for informational purposes only and are not investment, professional, legal, or other advice nor are they to be relied upon in making an investment or other decision. The Website, Platform, and Content is not an offer to sell, or a solicitation of an offer to buy and does not constitute an invitation or inducement of any sort to any person.`,
            ]}
          />

          {/* 09: FORWARD LOOKING STATEMENTS */}
          <SectionBlock
            id="forward-looking-statements"
            title="09 FORWARD LOOKING STATEMENTS"
            paragraphs={[
              `Certain information contained on the Website, Platform, and in the Content may constitute “forward-looking statements” as defined in applicable securities laws. Forward-looking statements include statements that are predictive in nature, depend upon or refer to future events or conditions, and include statements regarding AETERNUM’s competitive strengths, goals, expansion, growth, future success, operations, business, financial condition, expected financial results, performance, prospects, opportunities, priorities, targets, goals, ongoing objectives, strategies, and outlook.`,
              `Words such as “anticipate”, “estimate”, “expect”, “project”, “intend”, “plan” and “believe” are intended to identify forward-looking statements. No reliance should be placed on forward-looking statements because they involve known and unknown risks, uncertainties, and other factors which may cause the actual results, performance, or achievements of AETERNUM to differ materially.`,
              `Except as required by law, AETERNUM undertakes no obligation to update or revise statements or information on the Website, Platform, or in Content.`,
            ]}
          />

          {/* 10: NO ASSURANCE */}
          <SectionBlock
            id="no-assurance"
            title="10 NO ASSURANCE"
            paragraphs={[
              `Any transactions described on the Website, Platform, or in any Content as having been engaged in by AETERNUM are included as representative transactions for illustrative purposes only. Past performance is not indicative of future results. No assurance or representation is made that comparable results or any target returns disclosed on the Website, Platform, or in Content will be achieved.`,
            ]}
          />

          {/* 11: LIMITATION OF LIABILITY */}
          <SectionBlock
            id="limitation-of-liability"
            title="11 LIMITATION OF LIABILITY"
            paragraphs={[
              `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE, PLATFORM, CONTENT, INTELLECTUAL PROPERTY, PRODUCTS, AND SERVICES ARE PROVIDED ‘AS IS’ AND ON AN ‘AS AVAILABLE’ BASIS AND AETERNUM HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS. IN NO EVENT WILL AETERNUM BE LIABLE UNDER OR IN CONNECTION WITH: THIS TERMS OF SERVICE; THE WEBSITE; THE PLATFORM; INTERACTIONS WITH OTHER USERS OF THE WEBSITE AND PLATFORM; INTERACTIONS WITH THIRD-PARTY CONTENT OR FEATURES; YOUR USE OF OR ACCESS TO THE WEBSITE, PLATFORM, ITS CONTENTS, OR OUR INTELLECTUAL PROPERTY; YOUR SUBMITTED CONTENT; OR WITH RESPECT TO THE TRANSMISSION OR TRANSFER OF SUBMITTED CONTENT, PROFILE, OR DATA. NOTWITHSTANDING, IN NO EVENT WILL AETERNUM’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS TERMS OF SERVICE UNDER ANY LEGAL OR EQUITABLE THEORY OR JURISDICTION EXCEED THE TOTAL FEES PAID TO AETERNUM BY USER UNDER THIS TERMS OF SERVICE. ANY THIRD PARTY CLAIMS AGAINST AETERNUM THAT ARISE OUT OF THIS TERMS OF SERVICE ARE CONSIDERED A CLAIM OF USER UNDER THIS TERMS OF SERVICE.`,
            ]}
          />

          {/* 12: INDEMNIFICATION */}
          <SectionBlock
            id="indemnification"
            title="12 INDEMNIFICATION"
            paragraphs={[
              `To the maximum extent permitted by applicable law, you agree to defend, indemnify, release, and hold harmless AETERNUM, and its subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your breach of this Terms of Service; your use of the Website or Platform in contravention of our Privacy Policy; your use of or access to the Website, Platform or our Intellectual Property; your Submitted Content; your unauthorized use of a third party’s property; or your infringement or breach of a third party’s rights or a third party agreement.`,
            ]}
          />

          {/* 13: DISPUTE RESOLUTION */}
          <SectionBlock
            id="dispute-resolution"
            title="13 DISPUTE RESOLUTION"
            paragraphs={[
              `In any dispute brought by a Party to this Terms of Service, the Parties agree to first negotiate in good faith to cure or resolve such dispute.`,
              `If the dispute is not cured or resolved within ten (10) days of prior written notice to the other Party, each Party shall submit to arbitration and the decision of such arbitrator shall be final and binding.`,
              `To the fullest extent permitted by law, each Party waives trial by jury in any action, proceeding, or counterclaim brought by or on behalf of either Party with respect to any matter relating to this Terms of Service.`,
              `The arbitrator shall award to the prevailing Party, if any, the costs and attorneys’ fees reasonably incurred by the prevailing Party in connection with the arbitration, and the losing Party shall cover the costs of the arbitrator.`,
              `To the extent permitted under applicable law, the Parties agree to resolve any dispute in arbitration on an individual basis only, and not on a class or collective action basis.`,
              `If any court or arbitrator finds that this agreement to arbitrate is unenforceable, the Parties agree to submit to the personal and exclusive jurisdiction of the courts of Alberta and Canada, as applicable.`,
            ]}
          />

          {/* 14: NOTICES */}
          <SectionBlock
            id="notices"
            title="14 NOTICES"
            paragraphs={[
              `All notices and communications under this Terms of Service shall be delivered via email to AETERNUM at `,
              <>
                <a
                  href="mailto:legal@aeternumproject.com"
                  className="text-teal-700 hover:underline"
                >
                  legal@aeternumproject.com
                </a>
                {", "}Attention: Privacy Officer. All communications to you
                shall be sent to the email address you used to register for the
                Platform, as updated on your profile, or as submitted through
                the Website’s contact form.
              </>,
            ]}
          />

          {/* 15: GENERAL */}
          <SectionBlock
            id="general"
            title="15 GENERAL"
            paragraphs={[
              `This Terms of Service will be governed by and construed in accordance with the laws of Alberta and Canada, as applicable. Subject to the Disputes clause of this Terms of Service, any action or proceeding arising out of or relating to the Website, Platform, or under this Terms of Service will be instituted in those courts, as applicable, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding.`,
              `This Terms of Service may be executed in any number of counterparts, each of which shall constitute an original, but all of which, when taken together, shall be considered one document, and the transmittal of signatures by facsimile or other electronic form is good and valid execution of this Terms of Service and is legally binding on the Parties.`,
              `Unless mutually agreed by the Parties in writing, no failure to exercise, or delay in exercising, any right, remedy, power, or privilege arising from this Terms of Service operates, or may be construed, as a waiver thereof. Any waiver or partial waiver by AETERNUM of any obligation owed to AETERNUM shall be understood to be a one-time occurrence and shall not create any presumptions thereof and shall not reduce or limit the obligations the USER owed to AETERNUM thereafter. No waiver by AETERNUM or any of its affiliates of any right under or term or provision of this Terms of Service will be deemed a waiver of any other right, term, or provision of this Terms of Service.`,
              `If any term or provision of this Terms of Service is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Terms of Service or invalidate or render unenforceable such term or provision in any other jurisdiction.`,
              `This Terms of Service, our Privacy Policy, and our User License Agreement constitute the entire agreement between you and AETERNUM regarding our relationship and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, whether written, oral, or inferred from conduct, regarding such subject matter. In the event of any conflict between this Terms of Service and our User License Agreement, the User License Agreement shall prevail.`,
              `Nothing contained herein, expressed, or implied, will constitute or contemplate a partnership, joint venture, employment, or other agency or business relationship between the Parties.`,
              `The Parties agree that only AETERNUM may assign or transfer this Terms of Service and its rights and obligations under this Terms of Service to a third party, at its option and discretion.`,
              `If any legal proceeding is brought by either Party hereto to enforce or interpret this Terms of Service, both Parties will be deemed to have jointly drafted this Terms of Service and neither side will enjoy the benefit of any presumptions regarding which party drafted the contract.`,
              `The word “including” in this Terms of Service means ‘including without limitation’. The sections and headers in this Terms of Service are for context only.`,
              `Each Party acknowledges to the other that they had the opportunity to obtain independent legal advice or have freely chosen not to obtain such advice.`,
            ]}
          />
        </div>
        <div className="border-t border-black my-12" />
        <div className="flex justify-center items-center">
          <Notification
            title="Terms & Conditions"
            text="If any provision of these Terms is found to be unenforceable, the
          remaining provisions will remain in effect."
          />
        </div>
      </div>
    </section>
  );
}
