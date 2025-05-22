import Image from "next/image";
import TiltImageWrapper from "../../ui/TiltImageWrapper";
import { FadeInText } from "../../animations/FadeInText";

export default function HeroDesktop() {
  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="hidden md:flex page-wrapper items-center text-center  flex-col overflow-x-hidden pb-10"
    >
      <div className="content-wrapper text-center gap-y-2">
        <h1 className="sr-only">How will you be remembered?</h1>
        <FadeInText
          text={"How will you be remembered?"}
          className="tracking-normal text-black mb-4"
          duration={4}
        />

        <div className="text-[#738483]">
          {/* Below h5 are properly centered */}
          <h5 className="leading-tight tracking-normal">Words left unspoken</h5>
          <h5 className="leading-tight tracking-normal">
            Memories left forgotten
          </h5>
          <h5 className="leading-tight tracking-normal">Stories left untold</h5>
        </div>
      </div>

      <div className="-mt-56 overflow-x-visible">
        <div className="relative left-1/2 -translate-x-1/2 w-[110vw] grid grid-cols-5 gap-x-5">
          <div className="flex justify-center items-start">
            <TiltImageWrapper className="relative w-full aspect-[15/9] mt-7">
              <Image
                src="/images/Image2.jpg"
                alt="Father holding his son"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-20">
            <TiltImageWrapper className="relative w-80 aspect-[9/10] mt-7">
              <Image
                src="/images/Image3.jpg"
                alt="Mom holding her son"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-40">
            <TiltImageWrapper className="relative w-full aspect-[16/11]">
              <Image
                src="/images/Image4.jpg"
                alt="Father holding his daughter"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start pt-20">
            <TiltImageWrapper className="relative w-80 aspect-[9/10] mt-7">
              <Image
                src="/images/Image5.jpg"
                alt="Senior couple holding hands peacefully together"
                fill
                className="object-cover rounded-xl"
              />
            </TiltImageWrapper>
          </div>

          <div className="flex justify-center items-start">
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
