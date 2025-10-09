"use client";

import Notification from "@/components/ui/Notification";
import SectionBlock from "@/components/ui/SectionBlock";
import { toId } from "@/lib/utils";
import LegalSectionTitle from "@/components/ui/LegalSectionTitle";
import SectionLinkList from "@/components/ui/SectionLinkList";

const lastUpdated = "October 2nd, 2025";

const sections = [
  "Introduction",
  "Consent to Privacy Policy",
  "Consent to Mail List & Marketing Communications",
  "Age Restrictions",
  "Geographic Restrictions",
  "Information We Collect About You",
  "How We Collect Data",
  "Data You Provide to Us",
  "Data We Collect Through Automatic Means",
  "Third Parties on the Platform",
  "How We Use Your Data",
  "Disclosure of Your Data",
  "Storage of Your Data",
  "Choices About Your Data",
  "Data Security",
  "Data Retention",
  "Accessing and Correcting Your Data",
  "Changes to Our Privacy Policy",
  "Hyperlinks",
  "Notices",
];

export default function PrivacyPolicyPage() {
  return (
    <section className="page-wrapper bg-pattern">
      <div className="section-wrapper pt-16 md:pt-20">
        <LegalSectionTitle
          title="Privacy Policy"
          lastUpdated={lastUpdated}
          paragraphs={[
            "PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND OUR POLICIES AND PRACTICES FOR COLLECTING, PROCESSING, STORING, USING, AND DISCLOSING YOUR DATA. BY ACCESSING OR USING ANY PORTION OF THE PLATFORM, THE INDIVIDUAL ACCESSING OR USING THE PLATFORM (“USER”, “YOU”, “YOUR”) ACKNOWLEDGES THAT THEY HAVE READ THIS POLICY, UNDERSTAND IT, AND PROVIDE EXPRESS CONSENT TO THE POLICIES AND PRACTICES STATED HEREIN EFFECTIVE THE DATE YOU FIRST USED THE PLATFORM.",
            "IF YOU DO NOT AGREE WITH OUR POLICIES AND PRACTICES, YOUR ONLY CHOICE IS TO NOT USE THE PLATFORM, LEAVE IMMEDIATELY, AND STOP INTERACTING WITH US. PLEASE KEEP A COPY OF THIS POLICY FOR YOUR RECORDS.",
          ]}
        />
        <SectionLinkList sections={sections} toId={toId} />
        <div className="flex flex-col gap-12 mt-12 text-left items-start">
          <SectionBlock
            id="introduction"
            title="01 INTRODUCTION"
            intro={`Aeternum Corp. (“Company”, “we”, “us”, “our”, “Aeternum”) is a company from Alberta, Canada that offers a private digital space to connect families, share cherished memories, and deliver loving messages, even after our passing. We provide the website and platform found at www.aeternumproject.com and as found on the Apple App Store and Google Play Store (the “Platform”).

This Privacy Policy interacts with and User additionally agrees to our Terms of Service and User License Agreement. Please review those documents together with this Privacy Policy.`}
          />
          <SectionBlock
            id="consent-to-privacy-policy"
            title="02 CONSENT TO PRIVACY POLICY"
            intro={`By accessing or using the Platform or in any other interactions with Aeternum you state that you clearly and irrevocably understand, accept, and consent to the practices described in this Privacy Policy. For greater clarity, User acknowledges and agrees that any of the following actions shall clearly evidence, constitute, and denote User’s express consent and agreement to this Privacy Policy, and any applicable agreement listed above, including when User interacts with any interactive function of the Platform, User enters into a written agreement with Aeternum, User submits any data to Aeternum or the Platform, User submits any user submission to the Platform, User publishes any user content on the Platform, User interacts with any other user on the Platform, or User engages in continued use of the Platform.`}
            paragraphs={[
              "This Privacy Policy may change from time to time. Your continued use of the Platform after we make changes denotes your acceptance and consent to those changes. It is your responsibility to check this Privacy Policy periodically for updates.",
            ]}
          />

          <SectionBlock
            id="consent-to-mail-list-&-marketing-communications"
            title="03 CONSENT TO MAIL LIST & MARKETING COMMUNICATIONS"
            intro="By using or accessing the Platform, User expressly agrees and provides consent to Aeternum to send, distribute, or otherwise transmit to you any commercial electronic message or other communications or notifications, including for commercial and other promotional purposes; and you agree to be added to our mail list until and when you provide us written notice that you wish to unsubscribe in accordance with the notice provision at the end of this Privacy Policy."
          />

          <SectionBlock
            id="age-restrictions"
            title="04 AGE RESTRICTIONS"
            intro="Use of and access to the Platform is not intended for individuals under 18 years of age. No one under 18 may provide any information to the Platform. We do not knowingly collect information from individuals under 18. If you are under 18, do not register for the Platform, submit any information to the Platform, use any of the interactive functions of the Platform, or submit any user submission or user content to the Platform. If you believe the information is submitted to the Platform by someone that is under 18, or that we might have information about individuals under 18 that is not provided with express consent by an authorized parents or guardian of the individual, please contact us. Any User that provides information to the Platform on behalf of an individual under the age of 18 is responsible for such information and such User acknowledges that they provide consent on behalf of such individual under the age of 18. "
          />

          <SectionBlock
            id="geographic-restrictions"
            title="05 GEOGRAPHIC RESTRICTIONS"
            intro="The Platform is offered only for access and use in the United States of America and limited areas of Canada. The Platform is not intended for use in any jurisdiction where its use is not permitted, including in Quebec, Europe, or United Kingdom. Such users must leave the Platform immediately. Aeternum does not have sufficient capabilities to determine where a user is located, including to block a user based on its geographic location, prevent a user's access to the Platform or certain features or functionality of the Platform, manage a user’s interactions with other users of the Platform, or prevent a user from completing a transaction on the Platform. If you access the Platform from outside the permitted regions, you do so at your own risk and you are responsible for compliance with local laws and regulations of your jurisdiction. You must immediately stop using the Platform if your use of it, as it is offered by Aeternum, is prohibited under your local laws or regulations and in no way shall Aeternum be responsible or liable for your unauthorized or unlawful use of the Platform. Data may be transferred across regions and User expressly authorizes such data transfer in accordance with this Policy."
          />

          <SectionBlock
            id="information-we-collect-about-you"
            title="06 INFORMATION WE COLLECT ABOUT YOU"
            intro={
              <>
                We collect and use several types of information from and about
                you (“data”), including: <strong>personal information</strong>,
                that we can reasonably use to directly or indirectly identify
                you, including demographic and psychographic information, your
                name, age, gender, location, mailing address, e-mail address,
                telephone number, IP address, username, billing and account
                information, or any other identifier we may use to contact you,
                or any personal information contained in any user submissions or
                user content uploaded to or submitted to the Platform by User;{" "}
                <strong>non-personal information</strong>, that does not
                directly or indirectly reveal your identity or directly relate
                to an identifiable individual, such as statistical or aggregated
                data; <strong>technical information</strong>, including your
                login information, browser type and version, device and device
                settings, time zone setting, browser plug-in types and versions,
                operating system and platform, advertising identifiers and
                trackers, and information about your internet connection,
                hardware, software, and your usage and interactions with the
                Platform;{" "}
                <strong>
                  non-personal details about your Platform interactions
                </strong>
                , including URLs, clickstream to, through, and from our Platform
                (including date and time), products or services you viewed or
                searched for, page response times, download errors, length of
                visits to certain pages, and page interaction information (such
                as scrolling, clicks, and mouse-overs); and{" "}
                <strong>usage information</strong>, including as pertaining to
                User’s submission of user submissions, posting of user content,
                User’s interactions with content, features, functionality,
                products, services, and other users on the Platform, and User’s
                back-end information and settings as set by User.
              </>
            }
          />
          <SectionBlock
            id="how-we-collect-data"
            title="07 HOW WE COLLECT DATA"
            intro={
              <>
                We use different methods to collect your information, including
                through: <strong>direct interactions</strong> with you when you
                provide it to us, for example, by submitting or publishing a
                user submission or user content, through interactive functions
                on the Platform, or when corresponding with us by phone, email,
                social media, mail, or otherwise;{" "}
                <strong>automated technologies or interactions</strong>, for
                example, information may be collected automatically as you use
                the Platform, including through cookies;{" "}
                <strong>third party software</strong>, including the use of
                third party plugins, applications, or APIs that enhance the
                Platform which may collect information on you; and{" "}
                <strong>third party tracking technologies</strong>, which may
                include usage details, demographic or psychographic information,
                IP addresses, advertising data, tracking information,
                identifiers, and information collected through cookies and other
                tracking technologies.
              </>
            }
          />
          <SectionBlock
            id="data-you-provide-to-us"
            title="08 DATA YOU PROVIDE TO US"
            intro="The information we collect directly from you on or through the Platform or through other means may include:"
            bullets={[
              "Information that you provide in a user submission or user content, including by interacting with interactive functions on the Platform.",
              "Information provided to us during the registration process, subscribing to our services or products, or mailing list, or as uploaded to your user profile.",
              "Information and copies of your correspondence and details if you contact us.",
              "Details of transactions you carry out through our Platform and of the fulfillment of your orders.",
              "Interactions with other users on the Platform.",
              "Contract details if you enter into a contract with us.",
              "Your search queries on the Platform and through usage of the Platform.",
            ]}
          />

          <SectionBlock
            id="data-we-collect-through-automatic-means"
            title="09 DATA WE COLLECT THROUGH AUTOMATIC MEANS"
            intro="As you navigate through and interact with our Platform, we may use cookies or other automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns."
            paragraphs={[
              "This may include details of your visits to our Platform, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Platform; usage information about your use of the Platform; and information about your device and internet connection, including your device make and model, IP address, operating system, and browser type.",
              "We may also use these technologies to collect information about your online activities over time and across third-party websites or other online services.",
              "The information we collect through automatic means allows us to improve our Platform and to deliver a better and more personalized service, including by enabling us to estimate our audience size and usage patterns; store information about your preferences; customize our Platform according to your interests; speed up your searches and load times; personalize your user experience; recognize you when you return to our Platform and allow you to pick up where you left off; and save your payment preferences and information to make future orders easier.",
              <>
                The technologies we use for automatic data collection may
                include <strong>Cookies</strong> (small files placed on the hard
                drive of your device or your internet browser),{" "}
                <strong>Flash Cookies</strong> (that collect and store
                information about your preferences and navigation to, from, and
                on our Platform), and <strong>Beacons/Pixels</strong> (small
                electronic files that permit us to monitor usage, gather
                statistics, and enhance the effectiveness of our
                advertisements).
              </>,
            ]}
          />

          <SectionBlock
            id="third-parties-on-the-platform"
            title="10 THIRD PARTIES ON THE PLATFORM"
            intro="Certain services on the Platform including content, functions, features, links, plugins, or APIs may be operated or provided by third parties. They may collect and use your data when you use the Platform. The Platform may also include outbound links to third-party sites and pages off the Platform. These third parties have their own privacy and data policies and practices, and we do not accept any responsibility or liability for such policies and practices."
            paragraphs={[
              "Third-party services we use on the Platform include: Amazon Web Services, Google Site Kit, Google Tag Manager, Google Search Console, Google Analytics, Google Ads, Bing Webmaster, Facebook Pixel, LinkedIn Pixel, Brevo, JotForm, WordPress, and WPForms.",
            ]}
          />

          <SectionBlock
            id="how-we-use-your-data"
            title="11 HOW WE USE YOUR DATA"
            intro="We use information that we collect on users or that is provided to us in order to:"
            bullets={[
              "Offer our Platform and its content and functionality to our users; provide users information and fulfill their requests; add users to our mailing list and send marketing communications; and provide users with notices about their account.",
              "Carry out our obligations and enforce our rights arising from any contracts with a user, including for billing and collection purposes or to comply with legal requirements.",
              "Verify the accuracy or appropriateness of any user submission or user content; monitor our Platform and enforce our standards; notify users about changes to our Platform or any products or services we provide.",
              "Allow users to register for the Platform; participate in interactive functions; publish user content or submit user submissions; manage our relationship with users; and contact users about Aeternum goods and services that may be of interest to them.",
              "Collect and measure data used to make the Platform and Aeternum and our products and services more effective; create recommendations, legacy summaries, and emotional analyses; or in any other way we may describe when a user provides the information or for any other purpose with their consent.",
            ]}
          />

          <SectionBlock
            id="disclosure-of-your-data"
            title="12 DISCLOSURE OF YOUR DATA"
            intro="We may disclose your information that we collect or you provide:"
            bullets={[
              "Directly on the Platform when you submit a user submission or user content or interact with an interactive function of the Platform; to other users of the Platform for the purposes of facilitating the Platform’s digital inheritance functionality; or to third parties authorized to receive such information by User.",
              "To our subsidiaries, assigns, and affiliates; to contractors, service providers, and other third parties we use to support our business or deliver our products and services.",
              "To comply with any court order, law, or legal process, including to respond to any government or regulatory request, in accordance with applicable law; to enforce our Terms of Service and User License Agreement including for compliance and billing and collection purposes; or if we believe disclosure is necessary to protect the rights, property, or safety of Aeternum, our customers, other users, or the public.",
            ]}
          />

          <SectionBlock
            id="storage-of-your-data"
            title="13 STORAGE OF YOUR DATA"
            intro="We currently use Amazon Web Services to host our servers and data, which stores your information in the USA and Canada. In instances where your data is held outside of Canada, different privacy laws may apply that may not be as comprehensive as Canadian standards. In these circumstances, the governments, courts, law enforcement, regulatory agencies, and other third parties in that country may be able to obtain access to your data through the laws of the foreign country."
          />

          <SectionBlock
            id="choices-about-your-data"
            title="14 CHOICES ABOUT YOUR DATA"
            intro="You can control the collection and use of your data including with:"
            bullets={[
              <>
                <strong>Browser and device choices</strong>, including by
                setting your browser to refuse cookies.
              </>,
              <>
                <strong>Opting out of marketing communications</strong>, by
                providing us written notice in accordance with the notice
                provision at the end of this Privacy Policy.
              </>,
              "By opting out of any feature, you may be unable to access or use some or all of the Platform.",
              "To withdraw your consent to the practices stated in this Privacy Policy, please provide us notice in accordance with the notice provision at the end of this Privacy Policy.",
            ]}
          />

          <SectionBlock
            id="data-security"
            title="15 DATA SECURITY"
            intro="We use physical, electronic, and administrative measures to help secure your data from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your data also depends on you. You are responsible for your profile on the Platform and for keeping your login and password confidential. The transmission of data via the internet is not completely secure and we cannot guarantee the security of your data on the Platform. Any transmission of data is at your own risk."
          />

          <SectionBlock
            id="data-retention"
            title="16 DATA RETENTION"
            intro="Except as otherwise permitted or required by applicable law or regulation, we will only retain your data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Under some circumstances we may anonymize your data so that it can no longer be associated with you. We reserve the right to use and retain such anonymous data indefinitely for any legitimate business purpose without further notice to you."
          />

          <SectionBlock
            id="accessing-and-correcting-your-data"
            title="17 ACCESSING AND CORRECTING YOUR DATA"
            intro="It is important that the data we hold about you is accurate and current. Please keep us informed if your data changes. By law you have the right to request access to it and to correct the data that we hold about you. By withdrawing your consent, you will not be able to access and use the Platform or our products or services. If you want to otherwise review, verify, correct, or withdraw consent to the use of your data, you may send us written notice in accordance with the notice provision at the end of this Privacy Policy. We may not accommodate a request to change data if we believe the change would violate any law or legal requirement or cause the information to be incorrect. We may request specific information from you to help us confirm your identity and your right to access the data, and to provide you with the data that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all the data that we hold about you, or we may have destroyed, erased, or made your data anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your data, we will inform you, subject to any legal or regulatory restrictions."
          />

          <SectionBlock
            id="changes-to-our-privacy-policy"
            title="18 CHANGES TO OUR PRIVACY POLICY"
            intro="It is our policy at Aeternum to post any changes we make to our Privacy Policy on this page. We include the date the Privacy Policy was last modified at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting our Platform and this Privacy Policy to check for any changes."
          />

          <SectionBlock
            id="hyperlinks"
            title="19 HYPERLINKS"
            intro="Any hyperlink in this Privacy Policy is provided for convenience only and is subject to change from time to time as the server, data, or destination changes, or as posts or pages are taken down or moved. You understand that a wrong or missing hyperlink shall not affect the interpretation of this Privacy Policy."
          />
          <SectionBlock
            id="notices"
            title="20 NOTICES"
            intro={
              <>
                All notices and communications to Aeternum shall be delivered in
                writing via email to:
                <div className="text-center mt-4 mb-2 leading-loose">
                  Aeternum Corp.
                  <br />
                  Attention: Privacy Officer
                  <br />
                  <a
                    href="mailto:legal@aeternumproject.com"
                    className="underline text-[#186E68] font-medium"
                  >
                    legal@aeternumproject.com
                  </a>
                </div>
              </>
            }
            paragraphs={[
              "All notices and communications to User shall be delivered to User by email to the email address User used to contact Aeternum and/or the email address we have on file for User.",
              "We welcome your questions, comments, complaints, and requests regarding this Privacy Policy and our privacy and digital practices.",
              "If submitting a notice, complaint, or request to withdraw consent or remove your account, content, data, or information from the Platform, please particularize and substantiate all information and evidence Aeternum needs to comply with such notice, complaint, or request, including to comply with all relevant rules, regulations, and this Privacy Policy, within TEN (10) days of the circumstances of such notice, complaint, or request was made known to User.",
            ]}
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
