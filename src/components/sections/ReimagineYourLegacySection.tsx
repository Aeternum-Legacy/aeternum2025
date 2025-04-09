"use client";

import { useRouter } from "next/navigation";

export default function ReimagineYourLegacySection() {
  const router = useRouter();

  const handleClick = () => {
    // Only run in client-side context
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
        <div className="mx-10 mb-14 flex flex-col gap-10 items-end self-end text-right">
          <p
            className="text-5xl leading-relaxed tracking-wider"
            style={{ fontWeight: 500, textShadow: "0 0 .9px currentColor" }}
          >
            <span className="block">
              Aeternum offers a{" "}
              <span className="italic text-teal-700">private</span> and{" "}
              <span className="italic text-teal-700">secure</span> digital
            </span>
            <span className="block">
              space to <span className="italic text-teal-700">connect</span>{" "}
              families, <span className="italic text-teal-700">share</span>{" "}
              cherished
            </span>
            <span className="block">
              memories, and{" "}
              <span className="italic text-teal-700">deliver</span> loving
              messages,
            </span>
            <span className="block">
              <span className="italic text-teal-700">
                even after our passing.
              </span>
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
