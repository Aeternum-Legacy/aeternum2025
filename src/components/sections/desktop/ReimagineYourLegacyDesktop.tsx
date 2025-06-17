"use client";

import { useRouter } from "next/navigation";
import AnimatedWord from "../../animations/AnimatedWord";
import { ShinyButton } from "../../ui/ShinyButton";

export default function ReimagineYourLegacyDesktop() {
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
      className="overflow-hidden hidden md:flex justify-center items-center w-full"
      style={{
        backgroundImage: "url('/icons/mom&daughter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitMaskImage: "linear-gradient(to top, black 90%, transparent)",
        maskImage: "linear-gradient(to top, black 85%, transparent)",
      }}
    >
      <div className="w-full pb-72">
        <div className="section-wrapper">
          <h1 id="reimagine-heading" className="font-bold">
            Reimagine Your Legacy
          </h1>

          <div className="pt-16">
            <h3 className="leading-relaxed text-center">
              Aeternum offers a <AnimatedWord word="private" /> digital space to{" "}
              <br className="hidden lg:block" />
              <AnimatedWord word="connect" /> families,{" "}
              <AnimatedWord word="share" /> cherished memories,{" "}
              <br className="hidden lg:block" />
              and <AnimatedWord word="deliver" /> loving messages,{" "}
              <br className="hidden lg:block" />
              <AnimatedWord word="even after our passing." />
            </h3>
          </div>

          <div className="pt-16">
            <ShinyButton
              onClick={handleClick}
              buttonClassName="w-full bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-base font-medium py-3 rounded-full transition-colors duration-300 w-52"
              textClassName="text-white"
            >
              Join Early Access
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
