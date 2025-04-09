import FeatureSummarySection from "@/components/sections/FeatureSummarySection";
import DidYouKnowSection from "@/components/sections/DidYouKnowSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HeroSection from "@/components/sections/HeroSection";
import FeatureDetailSection from "@/components/sections/FeatureDetailSection";
import ImageTileSection from "@/components/sections/ImageTileSection";
import Image from "next/image";
import ReimagineYourLegacySection from "@/components/sections/ReimagineYourLegacySection";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      <HeroSection />
      <DidYouKnowSection />
      <SolutionSection />
      <ReimagineYourLegacySection />
      <FeatureSummarySection />
      <FeatureDetailSection />
      <ImageTileSection />
      <section className="grid grid-cols-2 h-[700px] mb-10" id="signup">
        <div className="relative">
          <Image
            src="/images/tree.png"
            alt="Tree"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex flex-col px-10 text-black items-center justify-start mt-10">
            <h2 className="text-[42px] mb-3 tracking-tighter">
              Early Access to Aeternum
            </h2>
            <p className="mb-3 whitespace-nowrap text-left tracking-tight">
              Register as a Private User and gain exclusive access to Aeternum
              expected to launch in 2025.
            </p>
            <p className="tracking-tight mb-3">As a Priority User, you will:</p>
            <ul className="ml-5 space-y-1 tracking-tight">
              <li className="flex items-start gap-1">
                <img
                  src="/icons/list.svg"
                  alt="bullet"
                  className="w-4 h-4 mt-1"
                />
                <span>
                  Get an exclusive invitation to the Beta Test about the future
                  of legacy preservation.
                </span>
              </li>
              <li className="flex items-start gap-1">
                <img
                  src="/icons/list.svg"
                  alt="bullet"
                  className="w-4 h-4 mt-1"
                />
                <span>
                  Be the first to experience Aeternum’s new approach to memory
                  preservation.
                </span>
              </li>
              <li className="flex items-start gap-1">
                <img
                  src="/icons/list.svg"
                  alt="bullet"
                  className="w-4 h-4 mt-1"
                />
                <span>
                  Be chosen for limited updates and features, tests, and
                  feedback cycles.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#F7F8EA] flex flex-col justify-center items-center px-20">
          <img
            src="/icons/logo4.svg"
            alt="Aeternum Logo"
            className="w-[250px] mb-15"
          />
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label
                  htmlFor="first-name"
                  className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="last-name"
                  className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
                />
              </div>
            </div>

            <div className="relative mb-15">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-[#F6F6E9] px-1 text-sm text-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border border-black p-3 pt-5 rounded-md w-full bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 text-sm mb-15">
              <input type="checkbox" id="agree" className="w-4 h-4" />
              <label htmlFor="agree" className="leading-snug">
                By registering, you agree to Aeternum’s&nbsp;
                <a href="#" className="underline text-blue-600">
                  terms
                </a>{" "}
                regarding data collection and usage.
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#186E68] text-white px-6 py-2 rounded-full text-lg tracking-wider font-medium hover:bg-[#2c4a48] transition-colors duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
