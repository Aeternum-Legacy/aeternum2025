import Image from "next/image";
import TiltImageWrapper from "../ui/TiltImageWrapper";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { AnimatedHighlight } from "../animations/AnimatedHighlight";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center text-center
               min-h-full pt-[3.75rem]
               md:min-h-[600px] md:py-20 lg:min-h-[700px] lg:py-28 overflow-x-hidden"
    >
      <div
        className="absolute z-10 w-full flex flex-col items-center
                   top-[2.5rem] mt-[0.75rem] gap-4
                   md:mt-14"
      >
        <TextGenerateEffect
          className="text-5xl lg:text-7xl text-black dark:text-white"
          duration={2}
          filter={false}
          words={"How will you be remembered?"}
        />

        <div className="flex flex-col gap-0 text-lg text-[#738483] lg:text-xl">
          <AnimatedHighlight text="Words left " highlight="unspoken" />
          <AnimatedHighlight text="Memories left " highlight="forgotten" />
          <AnimatedHighlight text="Stories left " highlight="untold" />
        </div>
      </div>

      <div
        className="grid gap-2 w-[110vw]
                   pt-[15rem] md:pt-24 lg:pt-28
                   md:grid-cols-5"
      >
        <div className="hidden md:flex justify-center items-start">
          <TiltImageWrapper className="relative w-[120%] lg:w-[110%] aspect-[15/9]">
            <Image
              src="/images/Image2.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </TiltImageWrapper>
        </div>

        <div className="hidden md:flex justify-center items-start pt-24 lg:pt-28">
          <TiltImageWrapper className="relative w-[80%] lg:w-[85%] aspect-[3/4]">
            <Image
              src="/images/Image3.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </TiltImageWrapper>
        </div>

        <div className="flex justify-center items-start md:pt-44 lg:pt-52">
          <TiltImageWrapper className="relative w-[90%] md:w-[130%] lg:w-[120%] aspect-[16/11]">
            <Image
              src="/images/Image4.jpg"
              alt="Aeternum"
              fill
              className="object-cover md:rounded-xl"
            />
          </TiltImageWrapper>
        </div>

        <div className="hidden md:flex justify-center items-end">
          <TiltImageWrapper className="relative w-[80%] lg:w-[85%] aspect-[3/4]">
            <Image
              src="/images/Image5.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </TiltImageWrapper>
        </div>

        <div className="hidden md:flex justify-center items-start">
          <TiltImageWrapper className="relative w-[120%] lg:w-[110%] aspect-[16/9]">
            <Image
              src="/images/Image1.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </TiltImageWrapper>
        </div>
      </div>
    </section>
  );
}
