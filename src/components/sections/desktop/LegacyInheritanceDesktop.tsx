"use client";

import Image from "next/image";
import LegacyFeatureCard from "../../ui/LegacyFeatureCard";

export default function LegacyInheritanceDesktop() {
  const legacyFeatures = [
    {
      icon: "/icons/inheritance2.svg",
      title: "Digital Inheritance",
      description:
        "Designate loved ones as inheritors of your digital legacy, ensuring your story, values, and wisdom will remain accessible to those that come after.",
    },
    {
      icon: "/icons/legacy-pin.svg",
      title: "Unfold Your Legacy",
      description:
        "Capture the essence of a life well-lived with a personal profile showcasing milestones, passions, achievements, and the tapestry of memories you preserved.",
    },
    {
      icon: "/icons/message.svg",
      title: "Legacy Messages",
      description: `"I'm sorry I can't be there with you, but remember that I will always love you." — Ensure your words, love, and wisdom reach your loved ones at just the right moment, even after you are gone.`,
    },
  ];

  return (
    <section
      className="hidden md:block content-wrapper"
      aria-labelledby="legacy-inheritance-heading"
    >
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
        <div className="flex flex-col items-center justify-center text-center gap-10 px-8 xl:px-0">
          <h2 id="legacy-inheritance-heading" className="text-center">
            Legacy Inheritance
          </h2>

          <p className="text-[#4F4949]">
            <span className="block">
              Because the impact you leave behind matters,
            </span>
            <span className="block">
              Aeternum ensures your legacy is preserved and inherited
            </span>
            by future generations, exactly as you intend.
          </p>

          <div className="flex flex-col gap-6 items-center justify-center">
            {legacyFeatures.map((feature, idx) => (
              <LegacyFeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center h-full">
          <div className="relative w-full max-w-[750px]">
            <Image
              src="/images/legacy-inheritance.png"
              alt="Illustration of a digital legacy being preserved"
              width={750}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
