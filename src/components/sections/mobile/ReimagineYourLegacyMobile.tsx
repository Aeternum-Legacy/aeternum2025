"use client";

import { useRouter } from "next/navigation";
import AnimatedWord from "../../animations/AnimatedWord";
import { ShinyButton } from "../../ui/ShinyButton";

export default function ReimagineYourLegacyMobile() {
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
      className="overflow-hidden md:hidden"
      style={{
        backgroundImage: "url('/images/mom&daughter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitMaskImage: "linear-gradient(to top, black 90%, transparent)",
        maskImage: "linear-gradient(to top, black 90%, transparent)",
      }}
    >
      <div className="section-wrapper pb-36">
        <h1 id="reimagine-heading" className="font-bold">
          Reimagine Your Legacy
        </h1>

        <h4 className="text-center">
          Aeternum offers a <AnimatedWord word="private" /> digital space to{" "}
          <AnimatedWord word="connect" /> families,{" "}
          <AnimatedWord word="share" /> cherished memories, and{" "}
          <AnimatedWord word="deliver" /> loving messages,{" "}
          <AnimatedWord word="even after our passing." />
        </h4>

        <div>
          <ShinyButton
            onClick={handleClick}
            buttonClassName="w-full bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-base font-medium py-3 rounded-full transition-colors duration-300 w-72"
            textClassName="text-white"
          >
            Join Early Access
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
