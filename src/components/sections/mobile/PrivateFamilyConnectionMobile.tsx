"use client";

import { PFCFeatures } from "@/lib/facts";
import Image from "next/image";

export default function PrivateFamilyConnectionMobile() {
  return (
    <section className="md:hidden grid-wrapper mb-4">
      <div className="flex items-center justify-center">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/pfc-image1.png"
            alt="..."
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold">Private Family Connection</h2>
        <p className="text-[#4F4949] text-center">
          Your family’s safety and well-being should never be compromised.
          Aeternum provides a private and secure digital space to connect,
          interact, and be remembered, for generations that follow.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 mt-10 justify-items-center">
        {PFCFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
  iconSize,
}: {
  title: any;
  desc: any;
  icon: any;
  iconSize: any;
}) {
  return (
    <div className="relative bg-[#F7F8EA] pt-12 px-3 pb-5 rounded-4xl text-center w-full z-0">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D8E3E4] p-2 rounded-full w-17 h-17 flex items-center justify-center border-[3px] border-white z-10">
        <Image
          src={icon}
          alt={`${title} icon`}
          title={title}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </div>

      <h6 className="font-semibold text-[#052922] mt-2 mb-2">{title}</h6>
      <p className="text-[#5B5B5B]">{desc}</p>
    </div>
  );
}
