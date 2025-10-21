import React from "react";

export default function AeternumLegacyPlan() {
  return (
    <main className="bg-pattern flex flex-col gap-y-12">
      {/* Hero Section */}
      <section className="hero-wrapper gap-y-6 text-center">
        <div className="space-y-4 px-6">
          <h3 className="text-center font-bold">
            Preserve What Matters Most — For Less
          </h3>
          <p className="max-w-2xl mx-auto text-[#4F4949] text-center">
            Your family’s stories deserve more than social feeds and scattered
            folders. Aeternum gives you a private, secure space to preserve your
            memories, voices, and values for generations to come.
          </p>
        </div>
        <div className="w-fit h-fit p-4 rounded-3xl bg-gradient-to-b from-[#D7E9E8] to-transparent">
          <p className="relative font-bold text-[#0f766e]">
            Get exclusive launch pricing until
            <span className="inline-block italic px-3 py-1 rounded-lg font-bold">
              November 14th
            </span>
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section
        id="plans"
        className="justify-center items-center z-10 relative bg-[#979980]/30 py-12"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {/* Monthly Plan */}
          <div
            className="rounded-2xl border border-white/10 p-6 text-center bg-gradient-to-br from-neutral-800/60 to-neutral-700/30 backdrop-blur-sm shadow-2xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/patterns/Basic.svg)" }}
          >
            <h2 className="text-2xl font-semibold mb-2">Monthly Legacy Plan</h2>
            <p className="text-emerald-400 font-bold mb-1">
              50% Off for 12 months
            </p>
            <p className="text-neutral-700 mb-4">
              Perfect for families getting started on their preservation
              journey. Includes full access to Aeternum’s secure vault and
              sharing features.
            </p>
            <p className="text-3xl font-bold mb-2 ">
              $4.99<span className="text-lg font-normal">/month</span>
            </p>
            <p className="line-through text-neutral-500 mb-4">$13.99 USD</p>
            <a
              href="https://buy.stripe.com/bJe9AS4JJgdiaVG8K24Ja03?prefilled_promo_code=alpha50"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Start Monthly Plan
            </a>
          </div>

          {/* Annual Plan */}
          <div
            className="rounded-2xl border border-white/10 p-6 text-center bg-gradient-to-br from-sage-300 to-teal-700 backdrop-blur-sm shadow-2xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/patterns/Premium.svg)" }}
          >
            <h2 className="text-2xl font-semibold mb-2">Annual Legacy Plan</h2>
            <p className="text-amber-700 font-bold mb-1">
              75% Off for the first year
            </p>
            <p className="text-neutral-700 mb-4">
              Unlock the best value: protect your family’s legacy all year long.
              Get every premium feature plus early access to new updates.
            </p>
            <p className="text-3xl font-bold mb-2 ">
              $29.97<span className="text-lg font-normal">/year</span>
            </p>
            <p className="line-through text-neutral-500 mb-4">$119.88 USD</p>
            <a
              href="https://buy.stripe.com/4gM00iccb4uAbZKbWe4Ja02?prefilled_promo_code=alpha75"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-700 hover:bg-amber-900 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Start Annual Plan
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          What’s Included At Launch
        </h2>
        <ul className="text-neutral-800 space-y-3 text-sm md:text-lg px-10">
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>2 TB Secure Storage for photos, videos, and voice notes</span>
          </li>
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>Up to 6 Family Members per account</span>
          </li>
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>Private Digital Vault with end-to-end encryption</span>
          </li>
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>
              Family Tree Integration to connect stories across generations
            </span>
          </li>
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>
              Privacy Circles for shared storytelling and collaboration
            </span>
          </li>
          <li className="flex items-start md:items-center gap-3">
            <img
              src="/icons/check-1.svg"
              alt="check"
              className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0"
            />
            <span>Ad-Free & Privacy-First — your data stays yours</span>
          </li>
        </ul>
      </section>

      {/* Testimonial */}
      <section className="bg-neutral-900 py-16 text-center px-6">
        <blockquote className="max-w-2xl mx-auto text-lg italic text-neutral-300">
          “I will use Aeternum to digitize my family’s genealogy and share it
          with my children and other family. It’s not just storage — it’s how we
          bring our history to life.”
        </blockquote>
        <p className="mt-4 font-semibold text-white">
          — Bethny T., Legacy Keeper
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0f766e]">
          Your Story. Protected Forever.
        </h2>
        <p className="text-neutral-700 mb-8">
          Aeternum isn’t another cloud.
          <br />
          It’s your family’s digital heirloom; built for permanence, connection,
          and trust.
        </p>
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
                A: You keep access through your paid period. Cancel anytime with
                no hidden fees.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-500">
                Q: Is my data really private?
              </p>
              <p>
                A: Yes. Your vault is encrypted and only accessible by you and
                your chosen family members.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-500">
                Q: How long is this discount available?
              </p>
              <p>
                A: This limited-time Alpha Launch offer is available till
                November 14th, 10:59 pm PST. Once it’s gone, regular pricing
                applies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto text-center px-6 py-20 mb-10">
        <h3 className=" font-bold mb-4">Start Preserving Today</h3>
        <p className="text-neutral-700 mb-8">
          Your family’s story deserves a safe home.
          <br />
          Join thousands of families building their legacies with Aeternum.
        </p>
        <a
          href="#plans"
          className="inline-block bg-teal-600 hover:bg-teal-800 text-white px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Start Your Plan Today
        </a>
      </section>
    </main>
  );
}
