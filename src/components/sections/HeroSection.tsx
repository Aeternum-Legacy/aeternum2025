// src/components/sections/HeroSection.tsx

import Image from "next/image";
import TiltImageWrapper from "../ui/TiltImageWrapper";
import { FadeInText } from "../animations/FadeInText";
// import { AnimatedHighlight } from "../animations/AnimatedHighlight";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="page-wrapper flex flex-col items-center text-center overflow-x-hidden"
    >
      <div className="section-wrapper">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <header className="flex flex-col items-center">
            <FadeInText
              text="How will you be remembered?"
              className="text-black dark:text-white mb-4"
              duration={4}
            />
            <p className="sr-only">
              Aeternum helps you preserve memories, values, and stories for
              future generations.
            </p>
          </header>
        </div>

        <div className="grid md:w-[150vw] lg:w-[130vw] md:grid-cols-5">
          <div className="hidden md:flex justify-center items-start">
            <TiltImageWrapper className="relative w-[120%] lg:w-[110%] aspect-[15/9] mt-7">
              <Image
                src="/images/Image2.jpg"
                alt="Father holding his son"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="hidden md:flex justify-center items-start pt-24 lg:pt-28">
            <TiltImageWrapper className="relative w-[80%] lg:w-[85%] aspect-[3/4] mt-7">
              <Image
                src="/images/Image3.jpg"
                alt="Mom holding her son"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex flex-col justify-between items-center w-full h-full gap-y-10 md:gap-y-0">
            <div className="w-full self-start text-[#738483]">
              <h5 className="leading-tight tracking-normal">
                Words left unspoken
              </h5>
              <h5 className="leading-tight tracking-normal">
                Memories left forgotten
              </h5>
              <h5 className="leading-tight tracking-normal">
                Stories left untold
              </h5>
              {/* <AnimatedHighlight text="Words left " highlight="unspoken" as="h5" />
              <AnimatedHighlight text="Memories left " highlight="forgotten" as="h5" />
              <AnimatedHighlight text="Stories left " highlight="untold" as="h5" /> */}
            </div>

            <TiltImageWrapper className="relative w-full aspect-[16/11] md:mb-20">
              <Image
                src="/images/Image4.jpg"
                alt="Father holding his daughter"
                fill
                className="object-cover md:rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="hidden md:flex justify-center items-end">
            <TiltImageWrapper className="relative w-[80%] lg:w-[85%] aspect-[3/4] mt-7">
              <Image
                src="/images/Image5.jpg"
                alt="Old couple holding hands"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="hidden md:flex justify-center items-start">
            <TiltImageWrapper className="relative w-[120%] lg:w-[110%] aspect-[16/9] mt-7">
              <Image
                src="/images/Image1.jpg"
                alt="Old couple"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
