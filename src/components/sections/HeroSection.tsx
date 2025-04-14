import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] py-20 flex flex-col items-center text-center">
      <div className="absolute top-10 z-10 w-full flex flex-col items-center mt-12 gap-4">
        <h1 className="text-6xl text-black dark:text-white">
          How will you be remembered?
        </h1>
        <div className="text-xl text-[#738483]">
          <p>Words left unspoken</p>
          <p>Memories left forgotten</p>
          <p>Stories left untold</p>
        </div>
      </div>

      {/* Image Strip */}
      <div className="pt-36 grid grid-cols-5 gap-2 w-[110vw]">
        {/* Each image column */}
        <div className="flex justify-center items-start">
          <div className="relative w-[120%] aspect-[15/9]">
            <Image
              src="/images/Image2.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex justify-center items-start pt-24">
          <div className="relative w-[80%] aspect-[3/4]">
            <Image
              src="/images/Image3.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex justify-center items-start pt-44">
          <div className="relative w-[130%] aspect-[16/11]">
            <Image
              src="/images/Image4.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex justify-center items-end">
          <div className="relative w-[80%] aspect-[3/4]">
            <Image
              src="/images/Image5.jpg"
              alt="Aeternum"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex justify-center items-start">
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
