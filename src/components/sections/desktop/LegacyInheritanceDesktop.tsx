
"use client";

import Image from "next/image";
import LegacyFeatureCard from "../../ui/LegacyFeatureCard";
import { legacyFeatures } from "@/lib/facts";

export default function LegacyInheritanceDesktop() {
  return (
    <section
      className="hidden md:flex flex-col gap-10"
      aria-labelledby="legacy-inheritance-heading"
    >
      <div className="flex lg:hidden justify-center px-4">
        <div className="relative w-full max-w-[620px] h-[500px]">
          <Image
            src="/images/legacy-inheritance.png"
            alt="Illustration of a digital legacy being preserved"
            fill
            className="object-contain"
          />
        </div>
      </div>
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
