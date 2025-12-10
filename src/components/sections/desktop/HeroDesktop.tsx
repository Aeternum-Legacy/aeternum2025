import Image from "next/image";
import TiltImageWrapper from "../../ui/TiltImageWrapper";
import { FadeInText } from "../../animations/FadeInText";
import { heroContent } from "@/lib/hero";

export default function HeroDesktop() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="hidden md:flex items-center text-center overflow-x-hidden hero-wrapper"
    >
      <div className="gap-y-2">
        <h1 className="sr-only">{heroContent.headline}</h1>
        <FadeInText
          text={
            <span dangerouslySetInnerHTML={{ __html: heroContent.headline }} />
          }
          className="tracking-normal text-black"
          duration={4}
        />

        <div className="text-[#738483]">
          {heroContent.subheadlines.map((line, index) => (
            <h6
              key={index}
              className="leading-tight tracking-normal"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      </div>

      <div className="-mt-16 overflow-x-visible pb-10">
        <div className="relative left-1/2 -translate-x-1/2 w-[110vw] grid grid-cols-5 gap-x-5">
          <div className="flex justify-center items-start">
            <TiltImageWrapper className="relative w-full aspect-[15/9] mt-7">
              <Image
                src={heroContent.images[0].src}
                alt={heroContent.images[0].alt}
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-20">
            <TiltImageWrapper className="relative w-80 aspect-[9/10] mt-7">
              <Image
                src={heroContent.images[1].src}
                alt={heroContent.images[1].alt}
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-40">
            <TiltImageWrapper className="relative w-full aspect-[16/11]">
              <Image
                src={heroContent.images[2].src}
                alt={heroContent.images[2].alt}
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-20">
            <TiltImageWrapper className="relative w-80 aspect-[9/10] mt-7">
              <Image
                src={heroContent.images[3].src}
                alt={heroContent.images[3].alt}
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start">
            <TiltImageWrapper className="relative w-[120%] lg:w-[110%] aspect-[16/9] mt-7">
              <Image
                src={heroContent.images[4].src}
                alt={heroContent.images[4].alt}
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
