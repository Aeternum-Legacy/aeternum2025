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

      <div className="absolute inset-0 flex flex-col justify-start items-center pt-14 px-6">
        <div className="mx-10 mb-14 flex flex-col items-end self-end text-right">
          <p
            className="text-5xl leading-relaxed tracking-wider"
            style={{ fontWeight: 500, textShadow: "0 0 1.5px currentColor" }}
          >
            <span className="inline-flex items-baseline gap-3">
              <span className="relative inline-flex items-center mr-3">
                Aeternum
                <img
                  src="/icons/trademark.png"
                  alt="Trademark"
                  className="w-5 h-5 relative -mt-4"
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

          <div>
            <button
              className="bg-teal-700 hover:bg-gray-800 text-white text-lg font-medium px-6 py-2 rounded-full transition-colors duration-300"
              onClick={handleClick}
            >
              Join Beta Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
