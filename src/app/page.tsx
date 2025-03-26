import Image from "next/image";
import NavigationMenu from "../components/layout/navigation-menu";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      <div className="p-5">
        <NavigationMenu />
      </div>

      {/* Hero Section */}
      <section className="relative mt-24 mb-20 flex flex-col items-center text-center">
        {/* Section 1: Text Overlay */}
        <div className="absolute top-0 z-10 w-full flex flex-col items-center text-center mt-12">
          <h1 className="text-6xl text-black dark:text-white">
            How will you be remembered?
          </h1>
          <div className="mt-4 text-lg text-[#738483]">
            <p>Words left unspoken</p>
            <p>Memories left forgotten</p>
            <p>Stories left untold</p>
          </div>
        </div>

        {/* Section 2: Image Grid (pushed down to make space for text) */}
        <div className="pt-36 grid grid-cols-5 gap-4 w-screen z-0">
          <div className="flex items-start justify-center">
            <Image
              src="/images/Image2.jpg"
              alt="Aeternum"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="flex items-center justify-center pt-20">
            <Image
              src="/images/Image3.jpg"
              alt="Aeternum"
              width={200}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="flex items-start justify-center pt-32">
            <Image
              src="/images/Image4.jpg"
              alt="Aeternum"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="flex items-end justify-center">
            <Image
              src="/images/Image5.jpg"
              alt="Aeternum"
              width={200}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="flex items-start justify-center">
            <Image
              src="/images/Image1.jpg"
              alt="Aeternum"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="flex items-center justify-center mt-10">
        <div className="flex flex-row space-x-2">
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right Icon"
            className="w-6 h-6"
          />
          <p>Did you know...</p>
        </div>
        <div className="grid grid-cols-3">
          <div></div>
        </div>
      </section>
    </main>
  );
}
