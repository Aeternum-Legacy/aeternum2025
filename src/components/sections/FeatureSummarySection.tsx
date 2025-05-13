"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LogoLabel from "../ui/LogoLabel";

export default function FeatureSummarySection() {
  const features = [
    {
      icon: "/icons/security.svg",
      title: "Privacy and Security",
      description:
        "Your family connections should be protected, free from outside intrusion. Connect with loved ones on Aeternum’s Private Family Tree — free from ads, forced content, and unwanted influence.",
    },
    {
      icon: "/icons/memory.svg",
      title: "Memory Preservation",
      description:
        "A photo without a story is just a snapshot in time. Aeternum turns your cherished memories into lasting legacies by pairing images and videos with personal stories, voice recordings, and heartfelt reflections.",
    },
    {
      icon: "/icons/inheritance.svg",
      title: "Legacy Inheritance",
      description:
        "Your legacy is more than memories: it’s the values, traditions, and wisdom you pass down. With Aeternum’s proprietary design, you can securely share your life’s story and ensure it reaches your loved ones for generations to come.",
    },
  ];

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-wrapper mt-0 bg-[#F7F8EA] py-16 md:py-20 px-4 lg:px-8 flex flex-col items-center"
    >
      <div className="content-wrapper">
        <LogoLabel
          src="/icons/aeternum-logo2.svg"
          alt="Aeternum logo"
          text="AETERNUM"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, amount: 0.5 });

            const [firstLine, secondLine] = [
              feature.title.split(" ").slice(0, -1).join(" "),
              feature.title.split(" ").slice(-1),
            ];

            return (
              <motion.article
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.8,
                }}
                className="relative flex items-center justify-center lg:justify-start gap-x-8"
              >
\                <div className="hidden lg:block">
                  <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-28 w-[1.5px] bg-[#42590F]" />
                </div>

                <div className="flex flex-col items-center lg:items-start justify-center gap-2 py-5 text-center lg:text-left lg:w-[90%]">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    title={feature.title}
                    className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 lg:mb-2"
                  />
                  <h4 className="font-bold leading-snug lg:mb-2">
                    {firstLine}
                    <br />
                    {secondLine}
                  </h4>
                  <p className="text-[#052922] max-w-[25rem] leading-tight">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
