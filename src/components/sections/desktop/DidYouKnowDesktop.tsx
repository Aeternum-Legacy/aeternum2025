"use client";

import { motion } from "framer-motion";

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

export default function DidYouKnowDesktop() {
  return (
    <section className="section-wrapper hidden md:flex">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/icons/arrow-right.svg"
          alt="Right arrow icon indicating insight"
          className="w-5 h-5 grayscale brightness-75"
        />
        <h6 className="text-[#738483]">
          Our legacies are at risk of being lost...
        </h6>
      </div>

      <div className="w-full flex">
        <div className="grid grid-cols-3 justify-items-center gap-8 w-full max-w-screen-xl mx-auto">
          {facts.map((fact, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-y-4 bg-[#FCFCF9] rounded-xl shadow-[0px_8px_10px_-2px_rgba(0,_0,_0,_0.35)] px-7 py-5 text-left "
            >
              <div className="hidden lg:block h-[10px] lg:h-[40px]" />

              <h2 className="flex items-center justify-start text-black font-semibold leading-none">
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
