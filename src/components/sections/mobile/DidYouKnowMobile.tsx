"use client";

import { facts } from "@/lib/facts";
import { motion } from "framer-motion";

export default function DidYouKnowMobile() {
  return (
    <section className="section-wrapper md:hidden">
      <h6 className="text-[#738483]">
        Our legacies are at risk of being lost..
      </h6>
      <div className="grid-wrapper">
        {facts.map((fact, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-5 bg-[#FCFCF9] rounded-xl shadow-[0px_8px_10px_-2px_rgba(0,_0,_0,_0.35)] px-5 py-5 text-center"
          >
            <h2 className="flex items-center justify-center text-black font-semibold leading-none">
              {fact.title}
              <span
                className={`ml-1 text-[2rem] ${
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
    </section>
  );
}
