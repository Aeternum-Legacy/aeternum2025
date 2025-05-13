"use client";

import { useRouter } from "next/navigation";
import AnimatedWord from "../animations/AnimatedWord";
import { ShinyButton } from "../ui/ShinyButton";

export default function ReimagineYourLegacySection() {
  const router = useRouter();

  const handleClick = () => {
    const signupSection = document.getElementById("signup");
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#signup");
    }
  };

  return (
    <section
      id="reimagine"
      aria-labelledby="reimagine-heading"
      className="section-wrapper relative text-center overflow-hidden pb-0"
    >
      <div className="content-wrapper relative z-10 flex flex-col items-center justify-center text-black">
        <div className="flex flex-col items-center text-center">
          <h2>What if there is a solution?</h2>
          <div className="text-[#738483] space-y-1 text-[1.333rem] tracking-wide mt-4">
            <h5 className="leading-tight tracking-normal">
              Deliver timeless <span className="inline-block">messages</span>
            </h5>
            <h5 className="leading-tight tracking-normal">
              Pass on cherished <span className="inline-block">memories</span>
            </h5>
            <h5 className="leading-tight tracking-normal">
              Private and safe{" "}
              <span className="inline-block">for families</span>
            </h5>
          </div>
        </div>

        <div className="mt-20 md:mt-28 font-bold">
          <h1 id="reimagine-heading">Reimagine Your Legacy</h1>
        </div>

        <h3 className="mt-7 leading-relaxed text-center">
          <span className="block">
            Aeternum offers a <AnimatedWord word="private" /> digital space
          </span>
          <span className="block">
            to <AnimatedWord word="connect" /> families,{" "}
            <AnimatedWord word="share" /> cherished memories,
          </span>
          <span className="block">
            and <AnimatedWord word="deliver" /> loving messages,{" "}
          </span>
          <AnimatedWord word="even after our passing." />
        </h3>

        <div className="mt-7">
          <ShinyButton
            onClick={handleClick}
            buttonClassName="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-lg md:text-xl font-medium px-6 py-2 md:px-10 md:py-2 rounded-full transition-colors duration-300"
            textClassName="text-white font-medium"
          >
            Sign Up
          </ShinyButton>
        </div>
      </div>

      <div className="relative z-0 w-full -mt-[10rem] sm:-mt-[20rem] md:-mt-[25rem] xl:-mt-[30rem] 2xl:-mt-[40rem]">
        <img
          src="/images/mom&daughter.png"
          alt="Mother and daughter hugging in a sunny field"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
