"use client";

import { useRouter } from "next/navigation";

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

      <div
        className="absolute inset-0 flex flex-col items-center justify-start
             md:px-[1.2rem] md:pt-14"
      >
        <div
          className="flex flex-col
               items-center sm:items-center md:items-end
               text-center sm:text-center md:text-right
               gap-[2.5rem] self-center md:self-end
               md:mx-10 md:mb-14"
        >
          <p
            className="text-sm sm:text-base md:text-3xl lg:text-5xl
                 leading-relaxed tracking-wider font-medium
                 px-4 md:px-0
                 mx-auto"
            style={{ textShadow: "0 0 0.5px currentColor" }}
          >
            <span
              className="inline-flex items-center justify-center md:justify-end
                   gap-[0.25rem] md:gap-3 flex-wrap"
            >
              <span className="relative inline-flex items-center md:mr-3">
                Aeternum
                <img
                  src="/icons/trademark.png"
                  alt="Trademark"
                  className="ml-1 w-[0.75rem] h-[0.75rem] translate-y-[2px]
                       md:w-10 md:h-10 md:-mt-4"
                />
              </span>
              offers a <span className="text-teal-700">private</span> and{" "}
              <span className="text-teal-700">secure</span> digital
            </span>

            <span className="block">
              space to <span className="text-teal-700">connect</span> families,{" "}
              <span className="text-teal-700">share</span> cherished
            </span>
            <span className="block">
              memories, and <span className="text-teal-700">deliver</span>{" "}
              loving messages,
            </span>
            <span className="block">
              <span className="text-teal-700">even after our passing.</span>
            </span>
          </p>

          <button
            className="self-center md:self-end
                 bg-teal-700 hover:bg-gray-800 text-white
                 text-[1.875rem] md:text-xl font-medium
                 px-[4rem] py-[1.25rem] md:px-10 md:py-3
                 rounded-full transition-colors duration-300"
            onClick={handleClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
