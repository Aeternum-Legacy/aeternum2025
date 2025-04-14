import Image from "next/image";
import BlurIn from "../animations/BlurIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-full md:min-h-[600px] pt-15 md:py-20 flex flex-col items-center text-center">
      <div className="absolute top-10 z-10 w-full flex flex-col items-center mt-3 md:mt-12 gap-2 md:gap-4">
        <BlurIn className="text-[1.6875rem] md:text-5xl lg:text-6xl text-black dark:text-white">
          How will you be remembered?
        </BlurIn>
        <div className="flex  flex-col gap-1 md:gap-0 text-sm md:text-xl text-[#738483]">
          <p>Words left unspoken</p>
          <p>Memories left forgotten</p>
          <p>Stories left untold</p>
        </div>
      </div>

      <div className="pt-36 grid md:grid-cols-5 gap-2 w-[110vw]">
        <div className="justify-center items-start hidden md:flex">
          <div className="relative w-[120%] aspect-[15/9]">
            <Image
              src="/images/Image2.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center items-start pt-24">
          <div className="relative w-[80%] aspect-[3/4]">
            <Image
              src="/images/Image3.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex justify-center items-start md:pt-44">
          <div className="relative w-[90%] md:w-[130%] aspect-[16/11]">
            <Image
              src="/images/Image4.jpg"
              alt="Aeternum"
              fill
              className="object-cover md:rounded-xl"
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center items-end">
          <div className="relative w-[80%] aspect-[3/4]">
            <Image
              src="/images/Image5.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center items-start">
          <div className="relative w-[120%] aspect-[16/9]">
            <Image
              src="/images/Image1.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
