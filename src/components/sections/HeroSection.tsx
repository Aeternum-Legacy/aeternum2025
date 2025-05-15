import Image from "next/image";
import TiltImageWrapper from "../ui/TiltImageWrapper";
import { FadeInText } from "../animations/FadeInText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="page-wrapper flex flex-col items-center text-center overflow-x-hidden"
    >
      <div className="w-full text-center mt-15 md:mt-30">
        <div>
          <h1 className="sr-only">How will you be remembered?</h1>
          <FadeInText
            text={
              <>
                <span className="block sm:hidden">
                  How will
                  <br />
                  you be
                  <br />
                  remembered?
                </span>
                <span className="hidden sm:block text-nowrap">
                  How will you be remembered?
                </span>
              </>
            }
            className="text-black dark:text-white mb-4"
            duration={4}
          />
        </div>

        <div className="text-[#738483]">
          <h5 className="leading-tight tracking-normal">Words left unspoken</h5>
          <h5 className="leading-tight tracking-normal">
            Memories left forgotten
          </h5>
          <h5 className="leading-tight tracking-normal">Stories left untold</h5>
        </div>
      </div>

      <div className="section-wrapper md:-mt-50">
        <div className="grid w-[140vw] 2xl:w-[130vw] md:grid-cols-5">
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

          <div className="flex justify-center items-end w-full h-full md:pb-10">
            <TiltImageWrapper className="relative w-full aspect-[16/11]">
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
                alt="Senior couple holding hands peacefully together"
                title="Old couple together"
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
