"use client";

import { useState } from "react";
import { BaseButton } from "../ui/BaseButton";

export default function Prices() {
  const [currency, setCurrency] = useState<"USD" | "CAD">("USD");

  const premiumPricing = {
    promo: { USD: 2.09, CAD: 2.79 },
    regular: { USD: 2.99, CAD: 3.99 },
    discount: "30%",
  };

  const legacyPricing = {
    promo: { USD: 4.99, CAD: 6.99 },
    regular: { USD: 9.99, CAD: 13.99 },
    yearTwoPrice: { USD: 7.99, CAD: 11.19 },
    discount: "50%",
  };

  return (
    <section className="section-wrapper bg-gradient-to-b from-[#F8F9F4] to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Alpha Special Promo
          </h2>
          <p className="text-lg text-[#4F4949] max-w-2xl mx-auto">
            Lock in exclusive lifetime discounts by joining us during our Alpha
            phase
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex bg-gray-200 rounded-full p-1">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  currency === "USD"
                    ? "bg-[#186E68] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("CAD")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  currency === "CAD"
                    ? "bg-[#186E68] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                CAD
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Premium Card */}
          <div
            className="relative rounded-3xl p-8 shadow-lg bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url(/patterns/Premium.svg)" }}
          >
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-[#186E68] text-white px-4 py-2 rounded-full font-bold text-sm">
              {premiumPricing.discount} OFF
            </div>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Premium Alpha Special
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-[#186E68]">
                  ${premiumPricing.promo[currency].toFixed(2)}
                </span>
                <span className="text-xl line-through text-gray-500">
                  ${premiumPricing.regular[currency].toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-[#4F4949]">
                /month per user. All pricing billed annually.
              </p>
            </div>

            {/* Body Text */}
            <p className="text-[#484844] mb-6">
              Share your plan with the family, and record Legacy Messages for
              the future.
            </p>

            {/* Feature List Header */}
            <div className="mb-4">
              <p className="font-semibold text-black">
                More space, more memories.
              </p>
              <p className="text-sm text-[#4F4949]">
                A step up in preservation
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "100 GB Data Storage Capacity",
                "Multiple Users",
                "Automated Digital Inheritance System",
                "Enhanced Legacy Messages",
                "Curated Profiles",
                "Memory Management",
                "Private Family Connection",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt=""
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#484844]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <BaseButton
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/eVq3cuccb4uAgg0aSa4Ja09?prefilled_promo_code=alpha30",
                  "_blank"
                )
              }
              className="w-full bg-[#186E68] hover:bg-[#145a55] text-white font-semibold py-4 rounded-full transition-colors cursor-pointer"
            >
              Choose Premium {premiumPricing.discount} Off
            </BaseButton>
          </div>

          {/* Legacy Card */}
          <div
            className="relative rounded-3xl p-8 shadow-lg bg-cover bg-center bg-no-repeat flex flex-col border-4 border-[#186E68]"
            style={{ backgroundImage: "url(/patterns/Legacy.svg)" }}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#186E68] text-white px-6 py-2 rounded-full font-bold text-sm">
              MOST POPULAR
            </div>

            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-[#D97706] text-white px-4 py-2 rounded-full font-bold text-sm">
              {legacyPricing.discount} OFF
            </div>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Legacy Alpha Special
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-[#D97706]">
                  ${legacyPricing.promo[currency].toFixed(2)}
                </span>
                <span className="text-xl line-through text-gray-500">
                  ${legacyPricing.regular[currency].toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-[#4F4949] mb-1">
                /month per user. All pricing billed annually.
              </p>
              <p className="text-xs text-[#4F4949]">
                ${legacyPricing.yearTwoPrice[currency].toFixed(2)}/month (20%
                off reg. ${legacyPricing.regular[currency].toFixed(2)}/month)
                after the first year.
              </p>
            </div>

            {/* Body Text */}
            <p className="text-[#484844] mb-6">
              With a massive 2TB of storage, multi-user access, and all premium
              features
            </p>

            {/* Feature List Header */}
            <div className="mb-4">
              <p className="font-semibold text-black">
                Ultimate preservation for your family's legacy.
              </p>
              <p className="text-sm text-[#4F4949]">
                Ultimate digital legacy protection
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "2 TB Data Storage Capacity",
                "Multiple Users",
                "Automated Digital Inheritance System",
                "Enhanced Legacy Messages",
                "Curated Profiles",
                "Memory Management",
                "Private Family Connections",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt=""
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-[#484844]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <BaseButton
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/aFadR8a43f9egg0aSa4Ja07?prefilled_promo_code=alpha50",
                  "_blank"
                )
              }
              className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-semibold py-4 rounded-full transition-colors cursor-pointer"
            >
              Choose Legacy {legacyPricing.discount} Off
            </BaseButton>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-[#F8F9F4] rounded-2xl p-6 border border-[#8BA39C]">
            <p className="text-sm text-[#4F4949] text-center leading-relaxed">
              <strong>
                Alpha Promotional offer is valid till December 31, 2025, 23:59
                MST.
              </strong>{" "}
              The discount applies to the first year of the chosen plan, after
              which the annual plan will be charged at the regular rate with a
              20% discount applied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
