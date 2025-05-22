"use client";

import { LegacyFeatureCardProps, legacyFeatures } from "@/lib/facts";
import Image from "next/image";

export default function LegacyInheritanceMobile() {
  return (
    <section
      className="md:hidden grid-wrapper mb-4"
      aria-labelledby="legacy-inheritance-heading"
    >
      <div className="flex items-center justify-center">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/legacy-inheritance.png"
            alt="Aeternum platform preserving a digital legacy for future generations"
            title="Digital legacy preservation with Aeternum"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold" id="legacy-inheritance-heading">
          Legacy Inheritance
        </h2>
        <p className="text-[#4F4949] text-center">
          Because the impact you leave behind matters, Aeternum ensures your
          legacy is preserved and inherited by future generations, exactly as
          you intend.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 justify-items-center">
        {legacyFeatures.map((feature, idx) => (
          <LegacyFeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

function LegacyFeatureCard({
  icon,
  title,
  description,
}: LegacyFeatureCardProps) {
  return (
    <div className="relative w-full mx-auto">
      <div className="flex flex-col border border-[#8BA39C] rounded-xl bg-white p-5 pl-7 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#BCC6C7] p-2 rounded-full flex items-center justify-center">
            <Image src={icon} alt={`${title} icon`} width={24} height={24} />
          </div>
          <h3 className="font-semibold text-2xl md:text-xl text-black">
            {title}
          </h3>
        </div>
        <p className="text-lg md:text-base text-[#484844] leading-6 text-left tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
}
