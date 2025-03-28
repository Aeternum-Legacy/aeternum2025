import Image from "next/image";
import NavigationMenu from "../components/layout/navigation-menu";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      <section className="p-5">
        <NavigationMenu />
      </section>

      <section className="relative mt-24 pb-24 min-h-[600px] flex flex-col items-center text-center">
        <div className="absolute top-0 z-10 w-full flex flex-col items-center mt-12">
          <h1 className="text-6xl text-black dark:text-white">
            How will you be remembered?
          </h1>
          <div className="mt-4 text-lg text-[#738483]">
            <p>Words left unspoken</p>
            <p>Memories left forgotten</p>
            <p>Stories left untold</p>
          </div>
        </div>

        <div className="pt-36 grid grid-cols-5 gap-5 w-[110vw]">
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
            <div className="relative w-4/5 aspect-[3/4]">
              <Image
                src="/images/Image3.jpg"
                alt="Aeternum"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-center items-start pt-44">
            <div className="relative w-[110%] aspect-[16/9]">
              <Image
                src="/images/Image4.jpg"
                alt="Aeternum"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-center items-end">
            <div className="relative w-4/5 aspect-[3/4]">
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

      <section className="flex flex-col gap-10 justify-center items-center mb-14">
        <div className="flex flex-row space-x-2">
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right Icon"
            className="w-6 h-6"
          />
          <p>Did you know...</p>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.1)] px-6 pt-20 pb-3 w-72 text-left">
            <div className="flex items-start text-black text-6xl font-semibold leading-none">
              62
              <span className="text-3xl font-normal align-super ml-1">%</span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              of parents fear their children will not have access to their
              digital memories
            </p>
          </div>

          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.1)] px-6 pt-20 pb-3 w-72 text-left">
            <div className="flex items-start text-black text-6xl font-semibold leading-none">
              127
              <span className="text-base font-medium align-baseline ml-1">
                M
              </span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              deceased social media accounts are at risk of being deleted,
              erasing valuable memories and family history
            </p>
          </div>

          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.1)] px-6 pt-16 pb-6 w-64 text-left">
            <div className="flex items-start text-black text-5xl font-semibold leading-none">
              71
              <span className="text-sm font-normal align-super ml-1">%</span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              of children are exposed to online hate content through social
              media
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
