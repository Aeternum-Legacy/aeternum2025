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
    <section className="relative text-center overflow-hidden">
      <img
        src="/images/mom&daughter.png"
        alt="Family in a field"
        className="w-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-start items-center md:pt-14 px-6">
        <div className="md:mx-10 md:mb-14 flex flex-col items-end self-end text-right gap-10">
          <p
            className="text-xl md:text-3xl lg:text-5xl leading-relaxed tracking-wider"
            style={{ fontWeight: 500, textShadow: "0 0 0.5px currentColor" }}
          >
            <span className="inline-flex items-baseline gap-1 md:gap-3">
              <span className="relative inline-flex items-center md:mr-3">
                Aeternum
                <img
                  src="/icons/trademark.png"
                  alt="Trademark"
                  className="w-3 h-3 md:w-10 md:h-10 relative -mt-2 md:-mt-4"
                />
              </span>
              offers a <span className="text-teal-700">private</span> and{" "}
              <span className="text-teal-700">secure</span> digital
            </span>

            <span className="block">
              space to <span className=" text-teal-700">connect</span> families,{" "}
              <span className=" text-teal-700">share</span> cherished
            </span>
            <span className="block">
              memories, and <span className=" text-teal-700">deliver</span>{" "}
              loving messages,
            </span>
            <span className="block">
              <span className=" text-teal-700">even after our passing.</span>
            </span>
          </p>

          <button
            className="bg-teal-700 hover:bg-gray-800 text-white text-3xl md:text-xl font-medium px-18 py-5  md:px-10 md:py-3 rounded-full transition-colors duration-300 self-center md:self-end"
            onClick={handleClick}
          >
            Join Beta Now
          </button>
        </div>
      </div>
    </section>
  );
}
