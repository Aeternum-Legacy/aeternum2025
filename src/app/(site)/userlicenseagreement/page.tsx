"use client";

import SectionBlock from "@/components/ui/SectionBlock";
import Notification from "@/components/ui/Notification";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import Link from "next/link";
import SectionLinkList from "@/components/ui/SectionLinkList";
import { toId } from "@/lib/utils";

const lastUpdated = "2025-10-24";
const sections = [
  "Intellectual Property",
  "License",
  "User Content",
  "Digital Inheritance",
  "Storage Limits",
  "Fees",
  "Refunds",
  "Term",
  "Termination & Account Deletions",
  "Effect of Termination",
  "Representations & Warranties",
  "Limitation of Liability",
  "No Reliance",
  "Indemnification & Release",
  "Disputes",
  "Notices",
  "General",
];

export default function UserLicenseAgreementPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="AETERNUM USER LICENSE AGREEMENT"
          lastUpdated={lastUpdated}
          paragraphs={[
            "THIS USER LICENSE AGREEMENT (THE “AGREEMENT”) IS BETWEEN USER AND AETERNUM CORP. (“WE”, “US”, “OUR”, “AETERNUM”). THE INDIVIDUAL WHO REGISTERS FOR THE PLATFORM (“YOU”, “YOUR”, “USER”) ACKNOWLEDGES THAT THEY HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY IT EFFECTIVE THE DATE THEY REGISTERED FOR THE PLATFORM (THE “EFFECTIVE DATE”). IN THIS AGREEMENT, EACH PARTY IS A “PARTY” AND TOGETHER THEY ARE THE “PARTIES”.",
            <>
              THIS AGREEMENT GOVERNS YOUR ACCESS TO AND USE OF OUR PLATFORM
              FOUND AT{" "}
              <Link
                href="https://www.aeternumproject.com"
                className="text-teal-700 hover:underline"
                target="_blank"
              >
                WWW.AETERNUMPROJECT.COM
              </Link>{" "}
              AND AS FOUND ON THE APPLE APP STORE AND GOOGLE PLAY STORE (THE
              “PLATFORM”), INCLUDING YOUR PARTICIPATION ON THE PLATFORM AS A
              USER, YOUR SUBMISSION AND PUBLISHING OF USER CONTENT, YOUR
              TRANSACTIONS ON THE PLATFORM, YOUR ACCESS TO AND USE OF OUR
              INTELLECTUAL PROPERTY, AND YOUR INTERACTIONS WITH AETERNUM AND
              OTHER USERS ON THE PLATFORM.
            </>,
            <>
              THIS USER LICENSE AGREEMENT PROVIDES ONLY SOME OF THE TERMS AND
              CONDITIONS APPLICABLE TO YOUR ACCESS TO AND USE OF OUR PLATFORM.
              USER ADDITIONALLY AGREES TO AND PROVIDES EXPRESS CONSENT TO OUR{" "}
              <Link
                href="/privacy-policy"
                className="text-teal-700 hover:underline"
              >
                PRIVACY POLICY
              </Link>{" "}
              AND{" "}
              <Link href="/terms" className="text-teal-700 hover:underline">
                TERMS OF SERVICE
              </Link>
              {"."} PLEASE REVIEW THOSE DOCUMENTS TOGETHER WITH THIS AGREEMENT.
            </>,
            <>
              <strong>NOW, THEREFORE,</strong> in consideration of the mutual
              covenants, terms, and conditions set forth herein, and for other
              good and valuable consideration, the receipt and sufficiency of
              which are hereby acknowledged, the Parties agree as follows:
            </>,
          ]}
        />

        <SectionLinkList sections={sections} toId={toId} />

        <div className="flex flex-col gap-12 mt-12 text-left items-start">
          <SectionBlock
            id="intellectual-property"
            title="01 INTELLECTUAL PROPERTY"
            bullets={[
              `A. Other than content submitted to or published on the Platform as User Content (as defined herein), you understand and agree that all intellectual property belonging to AETERNUM, including the Platform and its entire contents, features, and functionality, including, all copyrights, trademarks, patents, inventions, ideas, trade secrets, works, files, content, logos, text, code, images, video, audio, audiovisual, broadcast, design, presentation, layout, selection, arrangement, data, and any related derivatives or spinoffs (“Intellectual Property”), are the sole property of AETERNUM, its licensors, or other providers of such material; and all rights not expressly granted are reserved by AETERNUM.`,
              `B. Other than the limited License granted in this Agreement, USER shall have no right, title, or interest in or to AETERNUM’s Intellectual Property.`,
              `C. USER acknowledges and understands that any use of the Platform or Intellectual Property not expressly permitted by this Agreement is a breach of this Agreement and may infringe or violate copyright, trademark, or other intellectual property or other laws, or the propriety rights or other rights of AETERNUM, other users of the Platform, or other third parties.`,
            ]}
          />

          <SectionBlock
            id="license"
            title="02 LICENSE"
            bullets={[
              `A. Subject to and conditioned on USER’s full compliance with the terms and conditions of this Agreement, our Terms of Service, and our Privacy Policy, AETERNUM hereby grants USER a limited license, during the Term, to access and use the Platform and the contents herein to the minimum extent reasonably necessary to fulfil your role as a USER on the Platform and limited strictly to the purposes authorized by this Agreement (the “License”).`,
              `B. The License granted herein is granted solely to USER and USER shall stop third-parties related to USER from unauthorized or prohibited use or access of the Platform and our Intellectual Property. Any terms or conditions of this Agreement applicable to USER also apply to any user of the Platform authorized to use the Platform by USER or who accesses the Platform through USER’s account, or for any Digital Inheritor designated by USER (as defined herein). USER shall be responsible for any such user’s use of the Platform and their compliance with this Agreement.`,
              `C. USER shall not engage in any unauthorized activities, including to copy, modify, download, reproduce, distribute, transmit, create derivative works of, rent, lease, lend, sell, license, sublicense, assign, distribute, publish, transfer, reverse engineer, disassemble, circumvent, decompile, decode, adapt, remove proprietary notices from, or otherwise make available the Platform or AETERNUM’s Intellectual Property, in whole or in part, or the intellectual property belonging to any third party, including other users of the Platform, without such third-party’s express permission.`,
              `D. USER shall not access or use the Platform outside of the permitted geographic regions as specified in our Privacy Policy.`,
              `E. USER shall not access or use the Platform unless USER is at least 18 years of age.`,
              `F. AETERNUM may suspend the License and your access to the Platform or our Intellectual Property at our sole discretion if: you are in breach of this Agreement, our Terms of Service, or our Privacy Policy; there is a threat or attack on the Platform; your use of the Platform disrupts or poses a security risk to AETERNUM or to any other user of the Platform; you engage in any fraudulent, illegal, or unauthorized activities; you have an ongoing dispute with us or another user of the Platform; AETERNUM’s provision of the Platform or other services to you is prohibited by law or regulation; or we are no longer able to provide our services or Platform to you.`,
              `AETERNUM SHALL HAVE NO LIABILITY FOR ANY DAMAGES, LIABILITIES, LOSSES, OR ANY OTHER CONSEQUENCES THAT USER MAY INCUR AS A RESULT OF A SERVICE SUSPENSION, SUSPENSION OF THE LICENSE, INABILITY TO ACCESS THE PLATFORM OR USER’S PROFILE, CONTENT, OR DATA, OR FAILURES, MISTAKES, OR BUGS, IN THE FUNCTIONING OR CONTENT OF THE PLATFORM OR OUR INTELLECTUAL PROPERTY.`,
            ]}
          />

          <SectionBlock
            id="user-content"
            title="03 USER CONTENT"
            bullets={[
              `A. As a condition of your access to and use of the Platform and the grant of your License under this Agreement, any submissions you make to the Platform through any Interactive Function, including through a registration, form, drop box, upload field, post, publication, comment, direct message, user profile, media player, store, checkout, link, download, or other similar functions (collectively “Interactive Functions”) constitutes your consent to all actions we take with respect to Interactive Functions and User Content in accordance with this Agreement, our Terms of Service, and our Privacy Policy.`,
              `B. You warrant and swear that you have all required rights, consents, and authorizations to submit and publish any works, content, data, text, images, materials, files, images, audio, or audiovisual materials to an Interactive Function of the Platform (each being “User Content”).`,
              `C. All User Content inherited by a Digital Inheritor (as defined herein) under this Agreement shall be considered the User Content of the Digital Inheritor.`,
              `D. Notwithstanding the license granted to AETERNUM herein, and subject to clause four (4) of this Agreement, AETERNUM acknowledges that USER shall exclusively own the User Content submitted or published by USER.`,
              `E. By submitting any User Content to the Platform, you grant AETERNUM a perpetual, world-wide, royalty free, irrevocable right and license to use, perform, publish, transmit, reproduce, distribute, display, and create derivative works of, any such User Content, in order to provide our Platform, products, and services to our users and customers, including User’s trademarks, image, voice, and likeness, and otherwise for the purposes as detailed in our Terms of Service and Privacy Policy. You waive any moral rights as a condition of submitting any User Content. For the avoidance of doubt, after the Term of this Agreement, subject to our Privacy Policy, AETERNUM shall not be required to remove or discontinue use of any User Content submitted to the Platform during the Term.`,
              `F. For any User Content submitted to the Platform, USER acknowledges and states that it is solely responsible for the accuracy, validity, and truthfulness of such User Content, and the right and consent to use, publish, and provide such User Content to the Platform, and USER agrees that it shall be solely liable for all User Content submitted to the Platform or otherwise made available by USER on the Platform, including on the Platform’s front-end and back-end, whether or not it is viewable by other users or the public.`,
              `G. AETERNUM reserves the right to remove User Content if it is determined, in AETERNUM’s sole discretion, to be in violation of this Agreement, our Terms of Service, or our Privacy Policy, in violation of any law or regulation, infringing on the rights of AETERNUM or any third party, or if any third party submits a complaint with AETERNUM requesting the removal of such User Content.`,
            ]}
          />
          <SectionBlock
            id="digital-inheritance"
            title="04 DIGITAL INHERITANCE"
            bullets={[
              `A. USER acknowledges that when USER dies all User Content uploaded to or submitted by USER to the Platform shall transfer to a designee of USER’s choosing (the “Digital Inheritor”) in accordance with the procedure set out in our Digital Inheritance Policy found at www.aeternumproject.com/digitalinheritance (the “Digital Inheritance”).`,
              `B. USER acknowledges that the terms and conditions for transferring and receiving User Content on the Platform in a Digital Inheritance shall commence in accordance with our Digital Inheritance Policy and USER agrees to the procedure as set out therein.`,
              `C. USER acknowledges the Digital Inheritance Policy may change from time to time at AETERNUM’s discretion and that a Digital Inheritance shall commence in accordance with the latest version of the Digital Inheritance Policy.`,
              `D. USER acknowledges that a Digital Inheritance shall constitute a transfer of ownership of the USER’s profile and User Content to the Digital Inheritor and that such Digital Inheritor shall thereafter have access to the USER’s profile, User Content, and any interactions with other users on the Platform.`,
              `E. USER acknowledges that another user of the Platform may commence the Digital Inheritance in accordance with our Digital Inheritance Policy and that the USER may only prevent such Digital Inheritance from commencing in accordance with the procedure set out in our Digital Inheritance Policy.`,
              `F. USER acknowledges that AETERNUM shall have no liability or responsibility regarding the authentication or identification of a Digital Inheritor, the Digital Inheritance, or the transfer of USER’s profile or User Content to the Digital Inheritor.`,
              `G. USER acknowledges that AETERNUM reserves the right to prevent a Digital Inheritance from commencing at its sole discretion.`,
              `H. Upon USER’s death, AETERNUM reserves the right to store USER’s data in any method or medium of its choosing and AETERNUM does not guarantee the retrieval time of such data.`,
              `I. Upon USER’s death, in the event that there is no Digital Inheritor designated by USER, the USER’s overflow data shall be subject to deletion at AETERNUM’s discretion.`,
              `J. USER agrees to explicitly ‘carve out’ their User Content from any will or last testament or other such documents that they have, will have, or have not specified, and that in the event of a conflict between this Agreement and any other such document, this Agreement shall govern.`,
            ]}
          />

          <SectionBlock
            id="storage-limits"
            title="05 STORAGE LIMITS"
            bullets={[
              `A. USER acknowledges that there are storage limits applicable to USER based on the subscription tier of USER’s profile.`,
              `B. USER acknowledges that USER shall lose functionality on the Platform in the event USER exceeds the storage limit applicable to its subscription tier, including losing the ability to upload User Content to the Platform.`,
              `C. USER acknowledges that USER’s data on the Platform shall be deleted in the event that USER exceeds the storage limit applicable to its subscription tier, proportional to the degree that USER’s data used is in excess of its storage limit.`,
            ]}
          />

          <SectionBlock
            id="fees"
            title="06 FEES"
            bullets={[
              `A. USER authorizes AETERNUM and provides all necessary consents to collect or facilitate the collection of all monies or fees USER owes in connection with this Agreement (the “Fee”).`,
              `B. Any prices listed on the Platform for a particular product or service offered by AETERNUM (the “Listed Price”) may change from time to time. By purchasing products or services at the Listed Price, as displayed to USER at the time of order checkout, USER agrees to the Listed Price ‘as is’ at the time of entering into the transaction and agrees that the Listed Price is acceptable consideration for the products or services being offered at the time of the transaction.`,
              `C. USER authorizes AETERNUM to charge USER’s credit card for all transactions entered into by USER and/or facilitate the payment through our payment partner, Stripe. Any payment processing fees or transaction fees related to such transaction shall be incurred by USER.`,
              `D. USER is responsible for notifying AETERNUM of any sales tax, goods and services tax, value added tax, use and excise taxes, and any other similar taxes, duties, and charges of any kind imposed by any state, federal, provincial, territorial, or local governmental or regulatory entity on any amounts payable by or to USER hereunder. Such taxes shall be the sole responsibility of USER and will be paid and/or collected by USER independently of AETERNUM unless otherwise agreed by the Parties. USER shall provide to the Platform USER’s accurate and up-to-date payment information.`,
            ]}
          />

          <SectionBlock
            id="refunds"
            title="07 REFUNDS"
            paragraphs={[
              `Except for termination of this Agreement in accordance with section 9(A), all sales and transactions pursuant to this Agreement are final and USER acknowledges that AETERNUM shall not be liable to or owe USER any refund for any fees or monies owed or collected pursuant to this Agreement. In the event this Agreement is terminated in accordance with section 9(A), AETERNUM agrees to provide a partial refund to USER based on the amount of time left outstanding on USER’s subscription.`,
            ]}
          />

          <SectionBlock
            id="term"
            title="08 TERM"
            paragraphs={[
              `The term of this Agreement begins on the Effective Date and will continue in effect until terminated earlier in accordance with this Agreement (the “Term”).`,
            ]}
          />

          <SectionBlock
            id="termination-account-deletions"
            title="09 TERMINATION & ACCOUNT DELETIONS"
            bullets={[
              `A. AETERNUM may terminate this Agreement at any time if AETERNUM determines, in its sole discretion, that USER is in violation of this Agreement, our Terms of Service, or our Privacy Policy.`,
              `B. USER may terminate this Agreement by deleting USER’s profile on the Platform and ceasing use of our Platform, Intellectual Property, products, and services.`,
              `C. In the event of termination of this Agreement for any reason, USER’s profile, User Content, and data may be deleted at AETERNUM’s discretion, subject to our Privacy Policy.`,
              `D. In the event that USER does not have an active subscription to the Platform and USER’s account has not had any user activity, including logging in, posting, or engaging with any content on the Platform, for a period of at least twelve (12) months, USER’s profile, User Content, and data shall be deleted at AETERNUM’s discretion, subject to our Privacy Policy.`,
            ]}
          />

          <SectionBlock
            id="effect-of-termination"
            title="10 EFFECT OF TERMINATION"
            paragraphs={[
              `Upon termination of this Agreement, USER shall immediately discontinue use of our Platform, Intellectual Property, products, and services. Should you return, you agree to be bound by the most recent terms and conditions at the time of your return. Any part or portion of this Agreement pertaining to authorized or unauthorized use, disputes, intellectual property, representations, warranties, license terms, Digital Inheritance, privacy, indemnification, limitation on liability, notices, release, term, termination, or general terms, or as otherwise necessary to comply with or enforce this Agreement, shall survive termination of this Agreement.`,
            ]}
          />

          <SectionBlock
            id="representations-warranties"
            title="11 REPRESENTATIONS & WARRANTIES"
            intro="USER hereby represents and warrants that:"
            bullets={[
              `A. USER shall not use or access the Platform, Intellectual Property, or any third-party property, for any purposes beyond the scope permitted by this Agreement or for any purpose not expressly authorized by this Agreement or without the consent of such party, or for any illegal, fraudulent, or unauthorized purposes;`,
              `B. USER shall comply with all applicable laws, regulations, orders, and ordinances in its use of the Platform and our Intellectual Property; and`,
              `C. USER has all required rights, consents, and authorizations to use all User Content submitted to or published on the Platform; and no User Content breaches a third-party agreement or the rights of a third party.`,
            ]}
          />

          <SectionBlock
            id="limitation-of-liability"
            title="12 LIMITATION OF LIABILITY"
            paragraphs={[
              `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR PLATFORM, INTELLECTUAL PROPERTY, PRODUCTS, AND SERVICES ARE PROVIDED ‘AS IS’ AND ON AN ‘AS AVAILABLE’ BASIS AND AETERNUM HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS. IN NO EVENT WILL AETERNUM BE LIABLE UNDER OR IN CONNECTION WITH: THIS AGREEMENT; THE PLATFORM; INTERACTIONS WITH OTHER USERS OF THE PLATFORM OR THIRD-PARTY CONTENT OR FEATURES; YOUR USE OF OR ACCESS TO THE PLATFORM, ITS CONTENTS, OR OUR INTELLECTUAL PROPERTY; YOUR USER CONTENT; OR WITH RESPECT TO ANY DIGITAL INHERITANCE, DIGITAL INHERITOR, OR THE TRANSMISSION OR TRANSFER OF USER’S USER CONTENT, PROFILE, OR DATA. NOTWITHSTANDING, IN NO EVENT WILL AETERNUM’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY OR JURISDICTION EXCEED THE TOTAL FEES PAID TO AETERNUM BY USER UNDER THIS AGREEMENT. ANY THIRD PARTY CLAIMS AGAINST AETERNUM THAT ARISE OUT OF THIS AGREEMENT ARE CONSIDERED A CLAIM OF THE USER UNDER THIS AGREEMENT.`,
            ]}
          />

          <SectionBlock
            id="no-reliance"
            title="13 NO RELIANCE"
            paragraphs={[
              `USER acknowledges that the Platform is provided for entertainment purposes only and that no use of the Platform or any of its contents or functions shall be considered by USER as business, professional, or legal advice, including advice related to wills and estates. USER acknowledges that it must retain qualified professional advice before taking or refraining from any action related to the Platform or the Digital Inheritance.`,
            ]}
          />

          <SectionBlock
            id="indemnification-release"
            title="14 INDEMNIFICATION & RELEASE"
            paragraphs={[
              `To the maximum extent permitted by applicable law, you agree to defend, indemnify, release, and hold harmless AETERNUM, and its subsidiaries, affiliates, and their respective directors, officers, employees, agents, service providers, contractors, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your breach of this Agreement or our Terms of Service; your use of the Platform in contravention of our Privacy Policy; your use of or access to the Platform or our Intellectual Property; your User Content; your unauthorized use of a third party’s property; or your infringement or breach of a third party’s rights or a third party agreement.`,
            ]}
          />

          <SectionBlock
            id="disputes"
            title="15 DISPUTES"
            paragraphs={[
              `In any dispute brought by a Party to this Agreement, the Parties agree to first negotiate in good faith to cure or resolve such dispute. If the dispute is not cured or resolved within ten (10) days of prior written notice to the other Party, each Party shall submit to arbitration and the decision of such arbitrator shall be final and binding. To the fullest extent permitted by law, each Party waives trial by jury in any action, proceeding, or counterclaim brought by or on behalf of either Party with respect to any matter relating to this Agreement. The arbitrator shall award to the prevailing Party, if any, the costs and attorneys’ fees reasonably incurred by the prevailing Party in connection with the arbitration, and the losing Party shall cover the costs of the arbitrator. To the extent permitted under applicable law, the Parties agree to resolve any dispute in arbitration on an individual basis only, and not on a class or collective action basis. If any court or arbitrator finds that this agreement to arbitrate is unenforceable, the Parties agree to submit to the personal and exclusive jurisdiction of the courts of Alberta and Canada, as applicable.`,
            ]}
          />

          <SectionBlock
            id="notices"
            title="16 NOTICES"
            paragraphs={[
              `All notices and communications under this Agreement shall be delivered via email to AETERNUM at `,
              <>
                <a
                  href="mailto:legal@aeternumproject.com"
                  className="text-teal-700 hover:underline"
                >
                  legal@aeternumproject.com
                </a>
                {", "}Attention: Privacy Officer. All communications with USER
                shall be sent to the email address USER used to register for the
                Platform or as updated on USER’s profile.
              </>,
            ]}
          />

          <SectionBlock
            id="general"
            title="17 GENERAL"
            paragraphs={[
              `This Agreement will be governed by and construed in accordance with the laws of Alberta and Canada, as applicable. Subject to the Disputes clause of this Agreement, any action or proceeding arising out of or relating to the Platform or under this Agreement will be instituted in those courts, as applicable, and each party irrevocably submits to the exclusive jurisdiction of such courts in any such action or proceeding. This Agreement may be executed in any number of counterparts, each of which shall constitute an original, but all of which, when taken together, shall be considered one document, and the transmittal of signatures by facsimile or other electronic form is good and valid execution of this Agreement and is legally binding on the Parties. Unless mutually agreed by the Parties in writing, no failure to exercise, or delay in exercising, any right, remedy, power, or privilege arising from this Agreement operates, or may be construed, as a waiver thereof. Any waiver or partial waiver by AETERNUM of any obligation owed to AETERNUM shall be understood to be a one-time occurrence and shall not create any presumptions thereof and shall not reduce or limit the obligations USER owed to AETERNUM thereafter. No waiver by AETRERNUM or any of its affiliates of any right under or term or provision of this Agreement will be deemed a waiver of any other right, term or provision of this Agreement. If any term or provision of this Agreement is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Agreement or invalidate or render unenforceable such term or provision in any other jurisdiction. This Agreement, our Privacy Policy, and our Terms of Service constitutes the entire Agreement between you and AETERNUM regarding our relationship and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, whether written, oral, or inferred from conduct, regarding such subject-matter. In the event of any conflict between this Agreement and our Terms of Service, this Agreement shall prevail. Nothing contained herein, expressed, or implied, will constitute or contemplate a partnership, joint venture, employment, or other agency or business relationship between the Parties. The Parties agree that only AETERNUM may assign or transfer this Agreement and its rights and obligations under this Agreement to a third party, at its option and discretion. If any legal proceeding is brought by either Party hereto to enforce or interpret this Agreement, both Parties will be deemed to have jointly drafted this Agreement and neither side will enjoy the benefit of any presumptions regarding which party drafted the contract. The word “including” in this Agreement means ‘including without limitation’. The sections and headers in this Agreement are for context only. Each Party acknowledges to the other they had the opportunity to obtain independent legal advice or have freely chosen not to obtain such advice.`,
            ]}
          />
        </div>
        <div className="border-t border-black my-12" />
        <div className="flex justify-center items-center">
          <Notification
            title="AETERNUM USER LICENSE AGREEMENT"
            text="If any provision of these Terms is found to be unenforceable, the
          remaining provisions will remain in effect."
          />
        </div>
      </div>
    </section>
  );
}
