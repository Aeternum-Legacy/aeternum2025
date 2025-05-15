"use client";

import { motion } from "framer-motion";

export default function DidYouKnowSection() {
  const facts = [
    {
      title: "62",
      measurement: "%",
      description:
        "of parents fear their children will not have access to their digital memories",
    },
    {
      title: "127",
      measurement: "M",
      description:
        "deceased social media accounts are at risk of being deleted, erasing valuable memories and family history",
    },
    {
      title: "71",
      measurement: "%",
      description:
        "of children are exposed to online hate content through social media",
    },
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="section-wrapper flex flex-col items-center text-center md:mt-20 md:py-16"
    >
      <div className="content-wrapper">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="/icons/arrow-right.svg"
            alt="Right arrow icon indicating insight"
            className="w-5 h-5 grayscale brightness-75 hidden sm:block"
          />
          <h5 id="problem-heading" className="text-[#738483]">
            Our legacies are at risk of being lost...
          </h5>
        </div>

        <div className="grid grid-wrapper md:grid-cols-3">
          {facts.map((fact, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-y-5 bg-[#FCFCF9] rounded-xl shadow-[0px_8px_10px_-2px_rgba(0,_0,_0,_0.35)] px-5 py-5 sm:px-7 sm:py-10 text-center md:text-left lg:min-h-[320px]"
            >
              <div className="hidden md:block md:h-[10px] lg:h-[50px]" />

              <h2 className="flex items-center justify-center md:justify-normal md:items-start text-black font-semibold leading-none">
                {fact.title}
                <span
                  className={`ml-1 text-[2rem] lg:text-[2.25rem] ${
                    fact.measurement === "%"
                      ? "font-normal align-super"
                      : "font-bold self-end"
                  }`}
                >
                  {fact.measurement}
                </span>
              </h2>

              <p className="text-black tracking-normal leading-tight">
                <span className="sr-only">
                  {fact.title}
                  {fact.measurement === "%" ? "%" : " million"} —{" "}
                </span>
                {fact.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
