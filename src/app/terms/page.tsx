"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from '@/lib/utils';

const lastUpdated = "May 14th, 2025";
const sections = [
  "Introduction",
  "Use of the Website",
  "Restricted Access",
  "Password Protected Links",
  "User Content",
  "Intellectual Property",
  "Material Interests",
  "Linked Websites",
  "Links to Third-Party Websites",
  "Website Disclaimers and Limitations of Liability",
  "Limitation of Liability",
  "Indemnification",
  "Dispute Resolution by Binding Arbitration",
  "Governing Law",
];
export default function TermsPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper">
        <LegalSectionTitle
          title="Terms & Conditions"
          lastUpdated={lastUpdated}
          paragraphs={[
            "These Terms & Conditions govern your access and use of the Aeternum Website.",
            "By using the Website, you agree to comply with these Terms. If you do not agree, please do not use the Website.",
            "Your continued use of the Website after changes are posted constitutes acceptance of the revised Terms.",
            "The Website is not intended for minors. If you are under the age of 18, please do not provide any personal information.",
            "We may update these Terms at any time without notice.",
            <>
              Click to see the{" "}
              <Link
                href="/cookie-policy"
                className="text-teal-700 hover:underline font-medium"
                aria-label="View our Cookie Policy"
              >
                Cookie Policy
              </Link>
              .
            </>,
          ]}
        />
      </div>

      <div className="content-wrapper">
        <SectionLinkList sections={sections} toId={toId} />
      </div>

      <div className="section-wrapper">
        <div className="content-wrapper flex flex-col gap-12">
          <SectionBlock
            id="introduction"
            title="01 INTRODUCTION"
            intro={
              <>
                Please read these{" "}
                <Link
                  href="https://www.aeternumproject.com"
                  className="text-teal-700 hover:underline"
                  target="_blank"
                >
                  AeternumProject.com
                </Link>{" "}
                Website Terms of Use (“Terms of Use”) carefully before using the{" "}
                <Link
                  href="http://www.aeternumproject.com"
                  className="text-teal-700 hover:underline"
                  target="_blank"
                >
                  http://www.aeternumproject.com
                </Link>{" "}
                website (the “Website”). By browsing, accessing or otherwise
                using the Website, you agree to accept these Terms of Use.
              </>
            }
            bullets={[
              `Your visit to the Website, including, but not limited to, all images, text, illustrations, designs, icons, photographs, programs, music clips, downloads, systems and methods of trading, video clips, graphics, user interfaces, visual interfaces, information, data, tools, products, written materials, services, design, structure, selection, coordination, expression content, information, design, marks and layout therein, including but not limited to the design, structure, selection, coordination, expression and arrangement of any of the foregoing available on or through the Website, together (the “Content”), is subject to these Terms of Use, our `,
              <>
                <Link
                  href="/privacy-policy"
                  className="text-teal-700 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/cookie-policy"
                  className="text-teal-700 hover:underline"
                >
                  Cookies Policy
                </Link>
                , which may be updated by us at any time without notice to you.
              </>,
              "If we update our Terms of Use, we will post the updated Terms of Use on the Website. Any such changes will be effective upon posting.",
              "If you do not agree with these Terms of Use, you should not use the Website and you agree that your sole and exclusive remedy is to discontinue using the Website.",
              "The Website is not designed for use by minors and minors should not provide personal information through this Website.",
              "Nothing contained in these Terms of Use is intended to modify any other written agreement you may have with Aeternum (if any) that may be in effect.",
              "Additional terms and conditions of use may be applicable to password-restricted areas of the Website.",
              `For the purposes of these Terms of Use, “Aeternum,” “we” and “us” means Aeternum(TM) Corp. which controls this Website and the “User”, "you" and "your" means any person accessing the Website.`,
              "The websites of other Aeternum affiliates are governed by separate terms of use.",
              "Any disputes between User and Aeternum in connection with these Terms of Use may be resolved in arbitration or small claims court, subject to applicable law.",
              <>
                If you have any questions or comments about these Terms of Use,
                please contact us at{" "}
                <a
                  href="mailto:privacy@aeternumproject.com"
                  className="text-teal-700 hover:underline"
                >
                  privacy@aeternumproject.com
                </a>
                .
              </>,
            ]}
          />
          <SectionBlock
            id="use-of-the-website"
            title="02 USE OF THE WEBSITE"
            intro="You are responsible for your use of the Website and the Content. You undertake to use your best endeavors to ensure that nothing you do whilst accessing the Website will damage the Website or otherwise violate these Terms of Use. You may not (and may not encourage or assist others) to:"
            bullets={[
              "reproduce, republish, distribute, exploit commercially, use or modify without Aeternum’s express written consent, the Website or Content",
              "access, copy or download the Website or Content using automated methods, including but not limited to, “web scraping” or “bots”, “robots” or “spiders” that “harvest” the Website or Content, interfere with the functioning of the Website or Content or restrict or inhibit any others from using the Website or Content",
              "use any trade mark, service mark or logo of Aeternum or any third party that appears on the Website without prior written consent or remove or obscure any copyright or other notices contained in the Website or the Content",
              "if you link other websites to the Website, imply or suggest that Aeternum has endorsed or is affiliated with such websites and you may not display the Website as “framed” or “mirrored” within another website",
              "delete, decompose, decompile, reverse engineer, disassemble or otherwise deconstruct all or any portion of the Website or Content or any of the Websites’ source code or software",
              "transmit any virus, worm, time bomb or similar system interference through the Website",
              "violate these Terms of Use, the Privacy Policy or Cookies Policy or any law, regulation, rule or intellectual property or contractual rights of others, or attempt to violate the security of the Website, including attempting to gain unauthorized access to Content or use or gain access to the identities, information or computers of others through the Website",
              "impersonate any person or entity or create a user account for anyone other than yourself or create another user account without permission if Aeternum has suspended or terminated your user account; or",
              "use any hidden text or metatags using “Aeternum” on a website or content published on a website or otherwise. Aeternum has the right (but not the obligation) to monitor the Website for any unauthorized or objectionable conduct and to take all appropriate actions in response, without notice to you, and we may at any time revoke your right to use all or any portion of the Website or Content. ",
            ]}
            outro="Aeternum may investigate any complaint regarding a suspected violation of these Terms of Use, and may report any activity relating to the Website or Content to regulators, law enforcement officials or other persons or entities that it deems appropriate.The Website or any part of the Website may be periodically unavailable, and Content may be removed or modified at any time without notice. Aeternum may, in its sole discretion, restrict, suspend or cancel access to or use of the Website, for all or any one or number of Users. Users will have no right to compensation or other remedy for being unable to access the Website."
            useRomanStyle
          />
          <SectionBlock
            id="restricted-access"
            title="03 RESTRICTED ACCESS"
            intro={`The Website is operated and controlled by us in Canada. Access to the Website from countries or territories where such access is illegal is prohibited. Aeternum makes no representations that the transactions, financial or investment products, securities, and other services ("Products or Services") discussed on or accessible through the Website are available or appropriate for sale or use in all jurisdictions or by all Users. Those who access the Website do so on their own initiative and are responsible for compliance with local laws, rules and regulations.`}
          />
          <SectionBlock
            id="password-protected-links"
            title="04 Password Protected Links"
            intro="Some pages on the Website are available only to clients with registered accounts and log-on credentials. You are responsible for the confidentiality of your log-on credentials and account information, and for all actions taken on the Website while logged on with your credentials. You should not disclose your log-on credentials or account information and you should choose a unique password. Aeternum reserves the right to suspend or cancel Website accounts and log-on credentials at any time, for any, or no, reason and without notice. If you suspect that your log-on credentials have been compromised, please notify us immediately using the support contact information provided on the relevant account log-on page."
            outro="Pages on the Website that are accessible only via registered accounts and with log-on credentials are only available to institutional or professional Users. By accessing such pages, Users will be deemed to have confirmed that they meet the criteria for this classification. Such confirmation will be treated by Aeternum as the User's acceptance that they understand the classification of these Terms of Use as applicable under the regulatory regime of their country of residence."
            useRomanStyle
          />
          <SectionBlock
            id="user-content"
            title="05 User Content"
            intro={
              <>
                Electronic communications can be intercepted by third parties
                and electronic mail and other transmissions to and from the
                Website and Aeternum may not be secure. Any communications to
                Aeternum should be sent to the contact information provided in
                the{" "}
                <Link href="/contact" className="text-teal-700 hover:underline">
                  Contact Us
                </Link>{" "}
                section of the Website. You are responsible for any content that
                you post on the Website or submit to us via contact forms on the
                Website, email, social media accounts or otherwise, including
                your feedback, comments, questions, ideas, suggestions, survey
                responses or other information or materials (“User Content”).
                You hereby represent and warrant that any User Content you
                submit to us is either your original content or that you have
                obtained all necessary rights to your User Content, including
                the right to authorize us to use your User Content as set forth
                in these Terms of Use. By submitting any User Content, you
                hereby grant to Aeternum an irrevocable, perpetual, worldwide,
                non-exclusive, transferable, royalty-free, fully paid-up,
                sub-licensable license to use, display, reproduce, publish,
                transmit, store, modify and create derivative works of your User
                Content.
              </>
            }
          />
          <SectionBlock
            id="intellectual-property"
            title="06 INTELLECTUAL PROPERTY"
            intro="All content on the Website, including text, images, trademarks, and software, is owned by Aeternum or its licensors. You may not use any Aeternum trademarks or copyrighted materials without permission."
          />
          <SectionBlock
            id="material-interests"
            title="07 Material Interests"
            intro="Any part of Aeternum and/or its Affiliates may have or have had an interest or holding, relationship or other arrangement with the Products or Services, which may be material. Potential investors should refer to the applicable offering documents for any Product or Service and in particular, the potential conflicts of interest discussed therein."
          />
          <SectionBlock
            id="linked-websites"
            title="08 Linked Websites"
            intro="The Website may contain links to other websites. We are not responsible for the content, security or privacy practices of other websites and we do not endorse other websites or their content by virtue of linking to them from the Website. You should review the terms of use and privacy policies of any third party website that you visit."
          />
          <SectionBlock
            id="links-to-third-party-websites"
            title="09 LINKS TO THIRD-PARTY WEBSITES"
            intro="The Website may contain links to external sites that are not operated by Aeternum. We are not responsible for their content or privacy practices."
          />
          <SectionBlock
            id="website-disclaimers-and-limitations-of-liability"
            title="10 Website Disclaimers and Limitations of Liability"
            intro={
              <>
                <p className="tracking-widest leading-loose">
                  Subject to any applicable law that cannot be excluded, the
                  Website and Content are provided “as is” and “as available”
                  without any representation, warranty or condition. No reliance
                  should be placed on any information on the Website or the
                  Content. Users agree to bear all risks associated with their
                  use of the Website and Content, including any reliance on the
                  availability, accuracy, completeness, timeliness, usefulness
                  or appropriateness of the Website or Content. You agree that
                  Aeternum is not liable for any action you take, omission, or
                  decision you make in reliance on the Website or the Content,
                  subject to applicable law.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  The Content and the Website are for informational purposes
                  only and are not investment, professional, legal or other
                  advice nor are they to be relied upon in making an investment
                  or other decision. The Website and Content is not an offer to
                  sell, or a solicitation of an offer to buy and do not
                  constitute an invitation or inducement of any sort to any
                  person.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  Certain information contained on the Website and in the
                  Content may constitute “forward-looking statements” as defined
                  in applicable securities laws. Forward-looking statements
                  include statements that are predictive in nature, depend upon
                  or refer to future events or conditions, and include
                  statements regarding Aeternum’s competitive strengths, goals,
                  expansion, growth, future success, operations, business,
                  financial condition, expected financial results, performance,
                  prospects, opportunities, priorities, targets, goals, ongoing
                  objectives, strategies, and outlook. Words such as
                  “anticipate”, “estimate”, “expect”, “project”, “intend”,
                  “plan” and “believe” are intended to identify forward-looking
                  statements. No reliance should be placed on forward-looking
                  statements because they involve known and unknown risks,
                  uncertainties, and other factors which may cause the actual
                  results, performance, or achievements of Aeternum to differ
                  materially. Except as required by law, Aeternum undertakes no
                  obligation to update or revise statements or information on
                  the Website or in Content.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  Any transactions described on the Website or in any Content as
                  having been engaged in by Aeternum are included as
                  representative transactions for illustrative purposes only.
                  Past performance is not indicative of future results. No
                  assurance or representation is made, that comparable results
                  or any target returns disclosed on the Website or in Content
                  will be achieved.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  You agree that, to the maximum extent permitted by applicable
                  law, in no event shall you seek to hold Aeternum, its
                  affiliates and/or their respective officers, directors,
                  managers, partners, members, shareholders, employees and
                  agents (“Affiliates”), liable and in no event shall Aeternum
                  or its Affiliates be liable to any party, whether in contract,
                  tort (including negligence) or otherwise, for damages
                  (including direct, indirect, incidental, consequential,
                  special, punitive, exemplary and aggravated damages and
                  damages for loss of use, profits or revenue) or any other
                  remedy relating to the access, use, inability to use,
                  availability of the Website or the Content, irrespective of
                  whether Aeternum has been advised of the possibility of such
                  damages and/or losses.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  The liability of Aeternum and/or its Affiliates for breach of
                  any condition, guarantee or warranty implied by statute that
                  cannot be excluded, is limited to the maximum extent permitted
                  by law, at Aeternum’s option, to the re-supply of goods or
                  services, or the payment of the costs of having goods or
                  services re-supplied.
                </p>
              </>
            }
          />
          <SectionBlock
            id="limitation-of-liability"
            title="11 LIMITATION OF LIABILITY"
            intro='The Website and its content are provided "as is" without warranties of any kind. Aeternum is not liable for any errors, omissions, or interruptions on the Website. To the maximum extent permitted by law, Aeternum is not responsible for any direct, indirect, incidental, or consequential damages resulting from your use of the Website.'
          />
          <SectionBlock
            id="indemnification"
            title="12 INDEMNIFICATION"
            intro="You agree that a condition of your use of the Website and Content is that you indemnify Aeternum, its Affiliates and their respective representatives harmless against any and all liabilities, losses, damages, suits, claims, demands, costs (including court costs and legal fees), fines and actions of any kind or nature suffered as a result of your use of the Website or Content, your breach, violation or non-performance of any term or condition of these Terms of Use, or your violation of any third party’s rights relating to the Website or Content."
          />
          <SectionBlock
            id="dispute-resolution-by-binding-arbitration"
            title="13 Dispute Resolution by Binding Arbitration"
            intro="Subject to applicable law, in the interest of resolving disputes between you and Aeternum, you agree that Aeternum may, at its sole discretion, require that a dispute arising out of or in connection with these Terms of Use or your use of the Website or Content shall be resolved through binding arbitration or small claims court, at Aeternum’s option, instead of in courts of general jurisdiction. Arbitration is more informal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, allows for more limited discovery than in court, and is subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. Any arbitration under these Terms of Use will take place on an individual basis; class arbitrations and class actions are not permitted. You acknowledge and agree that the arbitrator may award relief (including monetary, injunctive, and declaratory relief) only in favor of the individual party seeking relief and only to the extent necessary to provide relief necessitated by that individual party’s claim(s). Any relief awarded cannot affect other Users."
          />
          <SectionBlock
            id="governing-law"
            title="14 Governing Law"
            intro={
              <>
                <p className="tracking-widest leading-loose">
                  Subject to the Disputes Resolution by Binding Arbitration
                  section above, these Terms of Use and the rights and
                  obligations of any recipient or viewer of the Website or the
                  Content (and any person that they represent) arising out of or
                  in connection with the Website or the Content, whether
                  contractual, non-contractual, pre-contractual or otherwise,
                  are governed by the laws of the Province of Alberta and any
                  disputes arising out of or in connection with the foregoing
                  shall be subject to the exclusive jurisdiction of the province
                  or federal courts located in Edmonton. You agree to waive
                  trial by jury in any such action.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  No waiver by Aeternum or any of its Affiliates of any right
                  under or term or provision of these Terms of Use will be
                  deemed a waiver of any other right, term or provision of these
                  Terms of Use. If any provision of these Terms of Use shall be
                  deemed unlawful, void or for any reason unenforceable, then
                  that provision shall be deemed severable from these Terms of
                  Use and shall not affect the validity and enforceability of
                  any remaining provisions.
                </p>

                <p className="mt-4 tracking-widest leading-loose">
                  You should be aware that any rules and/or regulations
                  applicable to the provision of financial services (and the
                  resultant investor protection benefits that may be available),
                  may not be applicable to interfacing conducted through the
                  internet and its various applications, of which this material
                  forms part.
                </p>
              </>
            }
          />
          <div className="border-t border-black my-12" />
          <div className="flex justify-center items-center">
            <Notification
              title="Terms & Conditions"
              text="If any provision of these Terms is found to be unenforceable, the
          remaining provisions will remain in effect."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
