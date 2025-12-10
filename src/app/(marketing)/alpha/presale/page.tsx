"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CookieBannerClient from "./CookieBannerClient";
import Footer from "@/components/layout/Footer";
import { ShinyButton } from "@/components/ui/ShinyButton";
import MemoryPreservationDesktop from "@/components/sections/desktop/MemoryPreservationDesktop";
import MemoryPreservationMobile from "@/components/sections/mobile/MemoryPreservationMobile";

export default function AeternumLegacyPlan() {
  const router = useRouter();
  return (
    <main className="bg-pattern bg-white">
      <CookieBannerClient />
      <div className="flex justify-start px-6 pt-4">
        <a href="/" aria-label="Aeternum home" className="bg-transparent">
          <img
            src="/icons/Aeternum_logo_TM_black.svg"
            alt="Aeternum Logo"
            className="w-40 h-auto md:w-48"
          />
        </a>
      </div>

      <div className="flex flex-col gap-y-12">
        <section className=" hero-wrapper gap-y-6 text-center items-center justify-center flex flex-col">
          <div className="space-y-4 px-6">
            <h3 className="text-center font-bold">
              Alpha Launch Founding Supporter Benefit
              <br />
              Preserve What Matters Most
            </h3>
            <p className="max-w-2xl mx-auto text-[#4F4949] text-center">
              Your family’s stories deserve more than social feeds and scattered
              folders. Aeternum gives you a private, secure space to preserve
              your memories, voices, and values for generations to come.
            </p>
          </div>
          <div className="text-center">
            <strong>
              This offer is now ended. Missed becoming a Founding Supporter?
              Sign up to get our latest offers and get Early Access.
            </strong>
          </div>

          <ShinyButton
            buttonClassName="w-full bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-base font-medium py-3 rounded-full transition-colors duration-300 w-72"
            textClassName="text-white"
            onClick={() => {
              router.push("/#signup");
            }}
          >
            Become a Founding Supporter
          </ShinyButton>
        </section>

        {/* Plans Section */}
        <section
          id="plans"
          className="justify-center items-center z-10 relative bg-[#979980]/30 py-12"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
            {/* Legacy Family Plan */}
            <div
              className="flex flex-col gap-2 justify-center items-center min-w-0 rounded-2xl border border-white/10 p-6 text-center bg-gradient-to-br from-neutral-800/60 to-neutral-700/30 backdrop-blur-sm shadow-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/patterns/Basic.svg)",
                backgroundPosition: "center 95%",
              }}
            >
              <div className="text-center mb-4 px-6">
                <strong>Offer ended Nov. 14, 2025</strong>
              </div>
              <h2 className="text-2xl font-semibold">Legacy Family Plan</h2>
              <p className="text-emerald-600 font-bold">75% Off For Life</p>
              <p className="text-neutral-700">
                Perfect for families getting started on their preservation
                journey. Includes full access to Aeternum’s secure vault and
                sharing features.
              </p>
              <div className="leading-tight mb-3">
                <p className="text-3xl font-bold">
                  <strong className="text-lg">Now: </strong> USD 2.50
                  <span className="text-lg font-normal">/month</span>
                </p>
                <p className="text-sm text-neutral-700 -mt-2">
                  billed annually
                </p>
                <p className="text-md text-neutral-500">
                  (was USD 9.99)
                  <a href="#legal-note" className=" text-blue-800">
                    *
                  </a>
                </p>
              </div>
              {/* <a
                href="https://buy.stripe.com/8x2fZg0ttd169RCaSa4Ja04?prefilled_promo_code=75forlife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white px-6 py-3 rounded-full font-semibold"
              >
                Secure my Lifetime Discount
              </a> */}
              <p className="text-xs w-full md:w-96 break-words">
                The Guarantee: It's totally risk-free. Secure your Founder's
                Rate today, and if you don't love the platform within 30 days
                after our November launch
                <a href="#legal-note" className=" text-blue-800">
                  *
                </a>
                , we'll refund you 100%.
              </p>
            </div>

            {/* Plan Details */}
            <div
              className="flex flex-col gap-2 min-w-0 rounded-2xl border border-white/10 p-6 text-center bg-gradient-to-br from-sage-300 to-teal-700 backdrop-blur-sm shadow-2xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/patterns/Premium.svg)" }}
            >
              <div className="mb-4 flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">
                  What’s Included in Your Legacy Plan{" "}
                </h2>
                <p>
                  As a Founding Supporter, you get{" "}
                  <span className="text-amber-700 font-bold mb-1">
                    immediate access
                  </span>{" "}
                  to our Alpha platform and a{" "}
                  <span className="text-amber-700 font-bold mb-1">
                    first-in-line pass
                  </span>{" "}
                  to all our new features as they roll out!
                </p>
              </div>

              <div className="mb-4">
                <p className="font-bold">Available at Alpha Launch:</p>
                <ul className="text-neutral-800 space-y-1">
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>
                      2 TB Secure Storage for photos, videos, audio, & PDF files
                    </span>
                  </li>
                  <li className="flex items-start text-left  gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>
                      Private Digital Vault with end-to-end encryption
                    </span>
                  </li>
                  <li className="flex items-start  text-left gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Family Connections</span>
                  </li>
                  <li className="flex items-start  text-left gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Curated Profiles for a loved one</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Privacy Circles (Standard Version)</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/check-1.svg"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Ad-Free & Privacy-First experience</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">
                  Coming Soon (Rolling out in the next 2 months!):
                </p>
                <ul className="text-neutral-800 space-y-1">
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Family Tree Integration</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Share with 5 Family Members</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Native Mobile Version for iOS and Android</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>File Management System</span>
                  </li>

                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Timeline Memory View</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Enhanced Memory &amp; Legacy Suite:</span>
                  </li>
                  <ul className="list-none mt-2 ml-7 space-y-1">
                    <li className="flex items-start text-left gap-2 text-sm">
                      <img
                        src="/icons/loading.png"
                        alt="check"
                        className="w-4 h-4 mt-2"
                      />
                      <span>Customizable Privacy Circles</span>
                    </li>
                    <li className="flex items-start text-left gap-2 text-sm">
                      <img
                        src="/icons/loading.png"
                        alt="check"
                        className="w-4 h-4 mt-2"
                      />
                      <span>Memory Collections &amp; Chain Memory System</span>
                    </li>
                    <li className="flex items-start text-left gap-2 text-sm">
                      <img
                        src="/icons/loading.png"
                        alt="check"
                        className="w-4 h-4 mt-2"
                      />
                      <span>Memory Integrated File Management System</span>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-bold">
                  Coming Soon to Aeternum Beta (Q1 2026):
                </p>
                <ul className="text-neutral-800 space-y-1 mt-2">
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Aeternum Legacy Messages</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>Digital Inheritance Management System</span>
                  </li>
                  <li className="flex items-start text-left gap-2 text-sm">
                    <img
                      src="/icons/loading.png"
                      alt="check"
                      className="w-4 h-4 mt-2"
                    />
                    <span>In App Recorded Voice Notes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-10">
          <h4 className=" font-bold text-center">
            Welcome to Aeternum’s Alpha Platform
          </h4>
          <img
            src="/images/alpha_intro_image_banner-2.png"
            alt="Aeternum Alpha Intro"
            className="px-2 md:px-0 w-full md:w-[40%] h-auto mx-auto block"
          />
        </section>

        <section className="max-w-screen-xl flex flex-col py-6 px-6 lg:px-8 w-full mx-auto gap-6 text-center;">
          <MemoryPreservationMobile />
          <MemoryPreservationDesktop />
        </section>

        {/* Testimonial */}
        <section className="bg-[#F7F8EA]/80 py-16 text-center px-6">
          <blockquote className="max-w-2xl mx-auto text-lg italic text-neutral-800">
            “I will use Aeternum to digitize my family’s genealogy and share it
            with my children and other family. It’s not just storage — it’s how
            we bring our history to life.”
          </blockquote>
          <p className="mt-4 font-semibold text-black">
            — Bethny T., Legacy Keeper
          </p>
        </section>

        {/* CTA Section */}
        <section
          className="flex w-full items-center justify-center bg-cover relative"
          style={{
            backgroundImage: "url('/icons/mom&daughter.png')",
            backgroundPosition: "center 85%",
            minHeight: "600px",
          }}
        >
          {/* full-section overlay */}
          <div className="absolute inset-0 bg-grey/20" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-4xl text-center px-6">
            <h2
              className=" font-bold mb-4 text-white"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.65)" }}
            >
              Your Story. <br />
              Protected Forever.
            </h2>
            <p
              className="text-neutral-100 mb-8 text-xl font-semibold"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
            >
              Aeternum isn’t another cloud.
              <br />
              It’s your family’s digital heirloom; built for permanence,
              connection, and privacy.
            </p>
            <p
              className="text-white mb-8 text-xl font-semibold"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,3)" }}
            >
              Founder's Offer ends November 14th!
            </p>
            {/* <ShinyButton
              buttonClassName="w-full bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-base font-medium py-3 rounded-full transition-colors duration-300 w-72"
              textClassName="text-white"
              onClick={() => {
                // Open Stripe checkout with 75forlife promo in a new tab
                window.open(
                  "https://buy.stripe.com/8x2fZg0ttd169RCaSa4Ja04?prefilled_promo_code=75forlife",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Become a Founding Supporter
            </ShinyButton> */}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#979980]/30 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
            <div className="space-y-6 text-neutral-800 px-10">
              <div>
                <p className="font-semibold text-gray-500">
                  Q: What happens if I cancel?
                </p>
                <p>
                  A: You keep access through your paid period. Cancel anytime
                  with no hidden fees.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">
                  Q: What happens to my data after I cancel?
                </p>
                <p>
                  A: We securely retain your account data for up to{" "}
                  <strong>6 months</strong> after cancellation. For details,
                  please see our
                  <a
                    href="https://www.aeternumproject.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f766e] underline mx-1"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    href="https://www.aeternumproject.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0f766e] underline mx-1"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">
                  Q: Is my data really private?
                </p>
                <p>
                  A: Yes. On Aeternum, your data is private and only accessible
                  to you and the connections you explicitly choose to share
                  with.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">
                  Q: How long is this discount available?
                </p>
                <p>
                  A: Our limited-time Alpha pre-launch offer is available until{" "}
                  <strong>November 14 at 10:59 PM PST</strong>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">
                  Q: When is Alpha launching?
                </p>
                <p>
                  A: We plan to launch Alpha access on or before{" "}
                  <strong>November 28th, 2026</strong>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">
                  Q: After subscribing, when do I get access?
                </p>
                <p>
                  You’ll receive an email with access instructions{" "}
                  <strong>on or shortly after our Alpha launch.</strong> Your
                  subscription service officially begins at that time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-3xl mx-auto text-center px-6 py-20 mb-10">
          <h3 className=" font-bold mb-4">Start Preserving Today</h3>
          <p className="text-neutral-700 mb-8">
            Your family's story deserves a safe home.
            <br />
            Join thousands of families building their legacies with Aeternum.
          </p>

          <a
            href="https://app.aeternumproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 hover:bg-teal-800 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Join the Alpha
          </a>
        </section>

        {/* Legal note */}
        <section id="legal-note" className="flex items-center justify-center">
          <p className="text-xs text-neutral-600 text-center px-6 mb-10 w-[90%]">
            *Plan will be billed annually at a payment of $29.97 under a
            recurring annual subscription. Your card will be charged immediately
            upon checkout to secure your Founder's Rate. This Founder's Rate is
            locked in for life and will not increase, valid for as long as your
            subscription remains active. This offer is for Founding Supporters
            only, ends November 14, 2025, and is non-transferable. Refunds must
            be requested via email at
            <a
              href="mailto:support@aeternumproject.com"
              className="text-[#0f766e] underline mx-1"
            >
              support@aeternumproject.com
            </a>
            within 30 days of the platform alpha launch announcement. For full
            details of the Legacy Plan and applicable Terms of Service, please
            refer to our
            <a
              href="https://www.aeternumproject.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f766e] underline mx-1"
            >
              Terms of Service
            </a>
            and
            <a
              href="https://www.aeternumproject.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f766e] underline mx-1"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
