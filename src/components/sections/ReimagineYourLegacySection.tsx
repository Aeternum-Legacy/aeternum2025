"use client";

import { useRouter } from "next/navigation";
import AnimatedWord from "../animations/AnimatedWord";
import { ShinyButton } from "../ui/ShinyButton";

export default function ReimagineYourLegacySection() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const signupSection = document.getElementById("signup");
      if (signupSection) {
        signupSection.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#signup");
      }
    }
  };

  return (
    <section className="relative overflow-hidden text-center">
      <img
        src="/images/mom&daughter.png"
        alt="Family in a field"
        className="w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start md:px-[1.2rem] md:pt-14">
        <div className="flex flex-col items-center sm:items-center md:items-end text-center sm:text-center md:text-right gap-[2.5rem] self-center md:self-end md:mx-10 md:mb-14">
          <p
            className="text-sm sm:text-base md:text-3xl lg:text-5xl leading-relaxed tracking-wider font-medium px-4 md:px-0 mx-auto"
            style={{ textShadow: "0 0 0.5px currentColor" }}
          >
            <span className="inline-flex items-center justify-center md:justify-end gap-[0.25rem] md:gap-3 flex-wrap">
              <span className="relative inline-flex items-center md:mr-3">
                Aeternum™ offers a
              </span>
              <AnimatedWord word="private" /> and <AnimatedWord word="secure" />{" "}
              digital
            </span>

            <span className="block">
              space to <AnimatedWord word="connect" /> families,{" "}
              <AnimatedWord word="share" /> cherished
            </span>
            <span className="block">
              memories, and <AnimatedWord word="deliver" /> loving messages,
            </span>
            <span className="block">
              <AnimatedWord word="even after our passing." />
            </span>
          </p>
          <ShinyButton
            onClick={handleClick}
            buttonClassName="self-center md:self-end bg-teal-700 hover:bg-gray-800 text-white text-[1.875rem] md:text-xl font-medium px-[4rem] py-[1.25rem] md:px-10 md:py-3 rounded-full transition-colors duration-300"
            textClassName="text-white font-medium text-[1.875rem] md:text-xl"
          >
            Sign Up
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
