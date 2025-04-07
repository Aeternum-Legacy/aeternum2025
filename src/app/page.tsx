import FeatureSummarySection from "@/components/sections/FeatureSummarySection";
import DidYouKnowSection from "@/components/sections/DidYouKnowSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HeroSection from "@/components/sections/HeroSection";
import NavigationBar from "../components/layout/NavigationBar";
import FeatureDetailSection from "@/components/sections/FeatureDetailSection";
import ImageTile from "@/components/ui/ImageTile";
import ImageTileSection from "@/components/sections/ImageTileSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      <NavigationBar />
      <HeroSection />
      <DidYouKnowSection />
      <SolutionSection />

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
              <button className="bg-teal-700 hover:bg-gray-800 text-white text-lg font-medium px-6 py-2 rounded-full transition-colors duration-300">
                Join Beta Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <FeatureSummarySection />
      <FeatureDetailSection />
      <ImageTileSection />
      <section className="grid grid-cols-2 h-[700px]">
        {/* Left: Tree Image with Text */}
        <div className="relative">
          <Image
            src="/images/tree.png"
            alt="Tree"
            fill
            className="object-cover"
          />

          {/* Content on top of the image */}
          <div className="absolute inset-0 flex flex-col justify-center px-20 text-black items-center">
            <h2 className="text-4xl font-semibold mb-4">
              Early Access to Aeternum
            </h2>
            <p className="text-lg mb-6 max-w-lg">
              Register as a Private User and gain exclusive access to Aeternum
              expected to launch in 2025.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base">
              <li>
                Get an exclusive invitation to the Beta Test about the future of
                legacy preservation.
              </li>
              <li>
                Be the first to experience Aeternum’s new approach to memory
                preservation.
              </li>
              <li>
                Be chosen for limited updates and features, tests, and feedback
                cycles.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Form Area */}
        <div className="bg-[#F7F8EA] flex flex-col justify-center px-20">
          <img
            src="/icons/logo3.svg"
            alt="Aeternum Logo"
            className="w-[130px] mb-10"
          />
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree">
                By registering, you agree to Aeternum’s&nbsp;
                <a href="#" className="underline text-blue-600">
                  terms
                </a>{" "}
                regarding data collection and storage.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#2E8062] text-white px-6 py-3 rounded-full text-lg"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
