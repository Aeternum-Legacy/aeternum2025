"use client";

import { FadeInText } from "../../animations/FadeInText";
import { ShinyButton } from "../../ui/ShinyButton";

export default function HeroMobile() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="flex flex-col items-center text-center overflow-x-hidden"
    >
      <div className="relative block md:hidden h-[100dvh] w-screen bg-[url('/images/Image5.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden mt-0">
        <div className="flex flex-col min-h-screen items-center justify-start px-4 text-center pt-[20vh]">
          <h1 className="sr-only">How will you be remembered?</h1>

          <FadeInText
            text={<span className="text-5xl">How will you be remembered?</span>}
            className="tracking-normal text-white mb-4"
          />

          <div className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            <h5 className="leading-tight tracking-normal">
              Words left unspoken
            </h5>
            <h5 className="leading-tight tracking-normal">
              Memories left forgotten
            </h5>
            <h5 className="leading-tight tracking-normal">
              Stories left untold
            </h5>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full px-6">
          <ShinyButton
            onClick={() =>
              document
                .getElementById("signup")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            buttonClassName="w-full bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white text-base font-medium py-3 rounded-full transition-colors duration-300"
            textClassName="text-white"
          >
            Join Early Access
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
