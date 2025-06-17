"use client";

import { PFCFeatures } from "@/lib/facts";
import Image from "next/image";

export default function PrivateFamilyConnectionDesktop() {
  return (
    <section className="hidden md:flex flex-col lg:flex-row gap-14">
      <div className="flex md:justify-center relative flex-[0.9]">
        <div className="relative w-full h-auto md:h-[500px] lg:h-full lg:bottom-10">
          <Image
            src="/icons/pfc-image1.png"
            alt="holding hands symbolizing family connection"
            title="Family holding hands"
            fill
            className="object-contain"
          />
        </div>

        <div className="hidden lg:block absolute bottom-5 -right-10 z-10 w-full max-w-[350px] aspect-square">
          <Image
            src="/icons/pfc-image2.png"
            alt="Photo album representing preserved family memories"
            title="Photo album"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-[1.1] text-center flex flex-col gap-6">
        <h2 className="text-center">Private Family Connection</h2>
        <p className="text-[#4F4949] mt-5 mb-5 text-center">
          Your family’s safety and well-being should never be compromised.
          Aeternum provides a private and secure digital space to connect,
          interact, and be remembered, for generations that follow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-10 justify-items-center">
          {PFCFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
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
    <div className="relative bg-[#F7F8EA] pt-14 px-4 pb-5 rounded-t-[100px] text-center w-full max-w-[18rem] z-0">
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

      <h6 className="font-semibold text-[#052922] text-[1.333rem] mt-2 mb-2">
        {title}
      </h6>
      <p className="text-[#5B5B5B] text-[1rem]">{desc}</p>
    </div>
  );
}
