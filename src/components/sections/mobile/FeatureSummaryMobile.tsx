"use client";

import Image from "next/image";
import LogoLabel from "../../ui/LogoLabel";
import { features } from "@/lib/facts";

export default function FeatureSummaryMobile() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-wrapper bg-[#F7F8EA] md:hidden -mt-12"
    >
      <LogoLabel
        src="/icons/aeternum-logo2.svg"
        alt="Aeternum logo"
        text="AETERNUM"
      />

      <div className="grid-cols-1 grid-wrapper pb-4">
        {features.map((feature, index) => {
          const [firstLine, secondLine] = [
            feature.title.split(" ").slice(0, -1).join(" "),
            feature.title.split(" ").slice(-1),
          ];

          return (
            <article key={index} className="content-wrapper">
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={60}
                height={60}
                className="w-12 h-12"
              />
              <h4 className="font-bold leading-snug">
                {firstLine}
                <br />
                {secondLine}
              </h4>
              <p className="text-[#052922] max-w-[25rem] leading-tight">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
