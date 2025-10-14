"use client";

import {
  featuresForAll,
  featureComparisonByTier,
  tabs,
  pricingPlans,
} from "@/lib/facts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import AnimatedNumber from "@/components/animations/AnimatedNumber";
import CurrencyToggle from "@/components/ui/CurrencyToggle";

type TierKey = keyof typeof featureComparisonByTier;
const tiers: TierKey[] = ["Basic", "Premium", "Legacy"];
const exampleFeatureMap = featureComparisonByTier.Basic.features;
type FeatureKey = keyof typeof exampleFeatureMap;
const allFeatures: FeatureKey[] = Object.keys(
  exampleFeatureMap
) as FeatureKey[];

export default function PricingInformationPage() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [currency, setCurrency] = useState<"USD" | "CAD">("USD");

  const formatSelected = (amount: number) => {
    const locale = currency === "CAD" ? "en-CA" : "en-US";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const USD_TO_CAD = 1.4; // 1 USD = 1.4 CAD
  const convertFromUSD = (amountUSD: number) =>
    currency === "CAD" ? amountUSD * USD_TO_CAD : amountUSD;

  return (
    <main className="page-wrapper md:gap-y-18">
      <section className="hero-wrapper gap-y-6 z-10">
        <div>
          <h2 className="text-center">
            Flexible plans <br className="block md:hidden" />
            for every legacy
          </h2>
          <p className="max-w-2xl mx-auto text-[#4F4949] text-center">
            Your memories deserve a secure, ad-free home{" "}
            <br className="block md:hidden" />
            no matter the plan you choose.
          </p>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="relative inline-block">
            <img
              src="/patterns/Highlight.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[40%] object-contain pointer-events-none opacity-10"
            />
            <p className="relative font-semibold">Unlocked for All Users</p>
          </div>
          <div className="w-fit h-fit p-8 rounded-3xl bg-gradient-to-b from-[#D7E9E8] to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-6">
              {featuresForAll.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <img src="/icons/check.svg" alt="check" className="w-5 h-5" />
                  <span className="text-gray-888 font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper justify-center items-center z-10 relative">
        <img
          src="/patterns/Ellipse.png"
          alt="circle pattern"
          aria-hidden="true"
          width={800}
          height={800}
          style={{ width: "800px", height: "800px" }}
          className="hidden md:block absolute top-[25%] left-[2%] inset-0 m-auto object-contain z-0"
        />

        <div className="flex flex-col justify-center items-center w-full z-10">
          <div className="w-full max-w-xl">
            <div>
              <Tabs
                defaultValue="monthly"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-gray-200 rounded-full p-1 h-12 flex w-full items-center justify-between">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={cn(
                        "flex-1 h-10 rounded-full font-medium transition-colors",
                        "data-[state=active]:bg-[#186E68] data-[state=active]:text-white"
                      )}
                    >
                      {tab.name}
                      {tab.value === "addon" && <span className="ml-1">ⓘ</span>}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-3">
          <CurrencyToggle value={currency} onChange={setCurrency} />
        </div>

        <div
          className={cn(
            "z-10 w-full",
            "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]",
            activeTab !== "addon"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12 mt-6 "
              : "flex items-center justify-center mt-6"
          )}
        >
          {activeTab === "addon" ? (
            <div className="w-full flex flex-col items-center justify-center mt-12 mb-12 text-center">
              <h4 className="font-semibold mb-2">Legacy Preservation</h4>
              <p className="max-w-md">
                Let Aeternum protect your legacy forever. <br />
                Information to be disclosed at platform launch.
              </p>
            </div>
          ) : (
            pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-4xl p-6 text-left flex flex-col bg-no-repeat bg-cover bg-center h-full overflow-hidden"
                style={{ backgroundImage: `url(${plan.bgPattern})` }}
              >
                <div className="flex flex-col gap-y-2 overflow-y-auto flex-grow">
                  <h6 className="tracking-wider font-medium">{plan.name}</h6>

                  <div className="flex items-center gap-2">
                    {activeTab === "yearly" && plan.monthlyPrice !== "$0" ? (
                      <>
                        {(() => {
                          const originalRaw = plan.originalYearlyPrice.replace(
                            "$",
                            ""
                          );
                          const discountedRaw = plan.yearlyPrice.replace(
                            "$",
                            ""
                          );
                          const original = parseFloat(originalRaw);
                          const discounted = parseFloat(discountedRaw);

                          // If parsing failed for either, fall back to raw text display
                          const originalIsNumber = !Number.isNaN(original);
                          const discountedIsNumber = !Number.isNaN(discounted);

                          // If discounted is numeric and zero, show FREE
                          // If this plan is explicitly FREE (e.g., Basic) show a simple FREE label
                          const discountedRawUpper = plan.yearlyPrice
                            .trim()
                            .toUpperCase();
                          const isExplicitFree =
                            plan.name === "Basic" ||
                            discountedRawUpper === "FREE" ||
                            discountedRawUpper === "$0" ||
                            (discountedIsNumber && discounted === 0);

                          if (isExplicitFree) {
                            return (
                              <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-bold leading-none">
                                  FREE
                                </p>
                              </div>
                            );
                          }

                          // If both numeric, animate between them
                          if (originalIsNumber && discountedIsNumber) {
                            return (
                              <div className="flex items-baseline gap-2">
                                {(() => {
                                  const origConv = convertFromUSD(original);
                                  const discConv = convertFromUSD(discounted);
                                  return (
                                    <>
                                      <p
                                        className={cn(
                                          "text-gray-500",
                                          "animate-strike-through"
                                        )}
                                      >
                                        {formatSelected(origConv)}
                                      </p>
                                      <div className="flex items-baseline gap-2">
                                        <AnimatedNumber
                                          from={origConv}
                                          to={discConv}
                                          formatter={(n: number) =>
                                            formatSelected(n)
                                          }
                                        />
                                        <span className="text-3xl font-bold leading-none text-[#186E68]">
                                          {currency}
                                        </span>
                                      </div>
                                    </>
                                  );
                                })()}
                              </div>
                            );
                          }

                          // Fallback: show raw strings (e.g., "Free" or other text)
                          return (
                            <div className="flex items-baseline gap-2">
                              <p
                                className={cn(
                                  "text-gray-500",
                                  "animate-strike-through"
                                )}
                              >
                                {plan.originalYearlyPrice}
                              </p>
                              <p className="text-3xl font-bold leading-none">
                                {plan.yearlyPrice}
                              </p>
                            </div>
                          );
                        })()}
                        <p className="text-sm leading-none">{plan.subtext}</p>
                      </>
                    ) : activeTab === "addon" ? (
                      <h4>hi</h4>
                    ) : (
                      <>
                        {(() => {
                          const monthlyRaw = plan.monthlyPrice.replace("$", "");
                          const monthlyVal = parseFloat(monthlyRaw);
                          const monthlyIsNumber = !Number.isNaN(monthlyVal);

                          if (monthlyIsNumber && monthlyVal === 0) {
                            return (
                              <p className="text-3xl font-bold leading-none">
                                FREE
                              </p>
                            );
                          }

                          if (monthlyIsNumber) {
                            return (
                              <p className="text-3xl font-bold leading-none flex items-baseline gap-2">
                                <span>
                                  {formatSelected(convertFromUSD(monthlyVal))}
                                </span>
                                <span className="text-3xl font-bold leading-none">
                                  {currency}
                                </span>
                              </p>
                            );
                          }

                          // Fallback: raw text (e.g., "Free")
                          return (
                            <p className="text-3xl font-bold leading-none">
                              {plan.monthlyPrice}
                            </p>
                          );
                        })()}
                        <p className="text-sm leading-none">{plan.subtext}</p>
                      </>
                    )}
                  </div>

                  <p className="font-semibold text-sm">{plan.description}</p>
                  <small className="font-light text-sm leading-snug text-black/80">
                    {plan.note}
                  </small>
                </div>

                <div className="mt-18 md:mt-36 mb-4 border-b-2 border-[#484844]/30 w-full" />

                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-sm">{plan.featuresHeader}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature: any) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm font-light leading-normal tracking-normal"
                      >
                        <img
                          src="/icons/check-1.svg"
                          alt="check"
                          className="w-4 h-4"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {activeTab !== "addon" && (
        <>
          <section className="section-wrapper z-10">
            <p className="text-left font-bold mb-2">
              Compare Features By Category
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm md:text-base text-left rounded-2xl overflow-hidden">
                <thead className="bg-[#E5E6E0]">
                  <tr>
                    <th className="py-3 px-3 md:px-8 font-medium">Feature</th>
                    {tiers.map((tier) => (
                      <th
                        key={tier}
                        className="p-2 md:p-3 font-medium text-center"
                      >
                        {tier}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature}>
                      <td className="py-3 px-3 md:px-8 bg-white">{feature}</td>
                      {tiers.map((tier) => {
                        const value =
                          featureComparisonByTier[tier].features[feature];
                        const color = featureComparisonByTier[tier].color;

                        // Special handling for the Monthly Price row: convert and format
                        if (feature === "Monthly Price") {
                          const plan = pricingPlans.find(
                            (p) => p.name === tier
                          );
                          if (!plan) {
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                {value}
                              </td>
                            );
                          }

                          const monthlyRaw = plan.monthlyPrice.replace("$", "");
                          const monthlyVal = parseFloat(monthlyRaw);
                          const monthlyIsNumber = !Number.isNaN(monthlyVal);

                          // If numeric and zero or the plan explicitly says Free
                          if (
                            plan.name === "Basic" ||
                            plan.monthlyPrice
                              .toString()
                              .toUpperCase()
                              .includes("FREE") ||
                            (monthlyIsNumber && monthlyVal === 0)
                          ) {
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                Free
                              </td>
                            );
                          }

                          if (monthlyIsNumber) {
                            const conv = convertFromUSD(monthlyVal);
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                <div className="flex items-center justify-center">
                                  <p className="text-sm font-medium">
                                    {formatSelected(conv)}
                                  </p>
                                </div>
                              </td>
                            );
                          }

                          // Fallback: raw monthlyPrice string
                          return (
                            <td
                              key={tier}
                              className="p-2 md:p-3 text-center"
                              style={{ backgroundColor: color }}
                            >
                              {plan.monthlyPrice}
                            </td>
                          );
                        }

                        // Special handling for the Annual Price row: show original price (strike)
                        // and an animated discounted price for Premium/Legacy, or FREE for Basic.
                        if (feature === "Annual Price") {
                          const plan = pricingPlans.find(
                            (p) => p.name === tier
                          );
                          if (!plan) {
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                {value}
                              </td>
                            );
                          }

                          const origRaw = plan.originalYearlyPrice.replace(
                            "$",
                            ""
                          );
                          const discRaw = plan.yearlyPrice.replace("$", "");
                          const orig = parseFloat(origRaw);
                          const disc = parseFloat(discRaw);
                          const origIsNum = !Number.isNaN(orig);
                          const discIsNum = !Number.isNaN(disc);

                          // If plan is free or discounted to zero -> show FREE
                          if (
                            plan.name === "Basic" ||
                            plan.yearlyPrice
                              .toString()
                              .toUpperCase()
                              .includes("FREE") ||
                            (discIsNum && disc === 0)
                          ) {
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                Free
                              </td>
                            );
                          }

                          // Numeric prices: show strike-through original and animated discounted
                          if (origIsNum && discIsNum) {
                            return (
                              <td
                                key={tier}
                                className="p-2 md:p-3 text-center"
                                style={{ backgroundColor: color }}
                              >
                                <div className="flex flex-row items-center gap-2 justify-center">
                                  {(() => {
                                    const origConv = convertFromUSD(orig);
                                    const discConv = convertFromUSD(disc);
                                    return (
                                      <>
                                        <p className="text-gray-500 text-sm line-through">
                                          {formatSelected(origConv)}
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                          <AnimatedNumber
                                            from={origConv}
                                            to={discConv}
                                            formatter={(n: number) =>
                                              formatSelected(n)
                                            }
                                            className="text-base font-medium leading-none"
                                          />
                                        </div>
                                      </>
                                    );
                                  })()}
                                </div>
                              </td>
                            );
                          }

                          // Fallback: show the raw yearlyPrice string
                          return (
                            <td
                              key={tier}
                              className="p-2 md:p-3 text-center"
                              style={{ backgroundColor: color }}
                            >
                              {plan.yearlyPrice}
                            </td>
                          );
                        }

                        // Default rendering for other features
                        return (
                          <td
                            key={tier}
                            className="p-2 md:p-3 text-center"
                            style={{ backgroundColor: color }}
                          >
                            {value === "check" ? (
                              <img
                                src="/icons/check.svg"
                                alt="✔"
                                className="mx-auto w-4 h-4"
                              />
                            ) : value === "x" ? (
                              <img
                                src="/icons/X.svg"
                                alt="✕"
                                className="mx-auto w-4 h-4"
                              />
                            ) : (
                              value
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
