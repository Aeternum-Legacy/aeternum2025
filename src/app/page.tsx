import Image from "next/image";
import NavigationMenu from "../components/layout/navigation-menu";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      {/* Navigation */}
      <section className="p-5">
        <NavigationMenu />
      </section>

      {/* Hero Section */}
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

      {/* Did You Know Section */}
      <section className="mt-20 mb-40 flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-row items-center space-x-2">
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right Icon"
            className="w-6 h-6"
          />
          <p>Did you know...</p>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {/* Fact 1 */}
          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.2)] px-6 pt-20 pb-6 w-72 text-left">
            <div className="flex items-start text-black text-6xl font-semibold leading-none">
              62
              <span className="text-3xl font-normal align-super ml-1">%</span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              of parents fear their children will not have access to their
              digital memories
            </p>
          </div>

          {/* Fact 2 */}
          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.2)] px-6 pt-20 pb-6 w-72 text-left">
            <div className="flex items-end text-black text-6xl font-semibold leading-none">
              <div>127</div>
              <span className="text-4xl font-bold ml-1 self-end">M</span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              deceased social media accounts are at risk of being deleted,
              erasing valuable memories and family history
            </p>
          </div>

          {/* Fact 3 */}
          <div className="bg-[#FCFCF9] rounded-xl shadow-[3px_6px_4px_-1px_rgba(0,_0,_0,_0.2)] px-6 pt-20 pb-6 w-72 text-left">
            <div className="flex items-start text-black text-6xl font-semibold leading-none">
              71
              <span className="text-3xl font-normal align-super ml-1">%</span>
            </div>
            <p className="mt-3 text-sm text-black leading-snug">
              of children are exposed to online hate content through social
              media
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="flex flex-col items-center justify-center gap-36 text-center">
        <div>
          <h2 className="text-6xl text-black">What if there is a solution?</h2>
          <div className="mt-4 text-xl text-[#738483]">
            <p>Deliver timeless messages</p>
            <p>Pass on cherished memories</p>
            <p>Private and safe for families</p>
          </div>
        </div>

        <div className="relative inline-block">
          <img
            src="/icons/quote.svg"
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-6 -translate-x-full w-20 h-20"
          />
          <img
            src="/icons/quote.svg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-6 translate-x-full translate-y-1/4 w-20 h-20 rotate-180"
          />
          <h1 className="text-[5.5rem] relative z-10">Reimagine Your Legacy</h1>
        </div>
      </section>

      <section className="relative text-center overflow-hidden">
        {/* Background image (fills container, stays in back) */}
        <img
          src="/images/mom&daughter.png"
          alt="Family in a field"
          className="w-full object-cover"
        />

        {/* Content that overlays the image */}
        <div className="absolute inset-0 flex flex-col justify-start items-center pt-14 px-6">
          {/* Heading with quote icons */}

          {/* Paragraph + Button */}
          <div className="mx-10 mb-14 flex flex-col gap-10 items-end self-end text-right">
            <p
              className="text-5xl leading-relaxed tracking-wider"
              style={{ fontWeight: 500, textShadow: "0 0 .9px currentColor" }}
            >
              <span className="block">
                Aeternum offers a{" "}
                <span className="italic text-teal-700">private</span> and{" "}
                <span className="italic text-teal-700">secure</span> digital
              </span>
              <span className="block">
                space to <span className="italic text-teal-700">connect</span>{" "}
                families, <span className="italic text-teal-700">share</span>{" "}
                cherished
              </span>
              <span className="block">
                memories, and{" "}
                <span className="italic text-teal-700">deliver</span> loving
                messages,
              </span>
              <span className="block">
                <span className="italic text-teal-700">
                  even after our passing.
                </span>
              </span>
            </p>

            <div>
              <button className="bg-teal-700 hover:bg-gray-800 text-white text-lg font-medium px-6 py-2 rounded-full transition-colors duration-300">
                Join Beta Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F8EA] py-20 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <img src="icons/Logo2.svg" />
          <p className="leading-relaxed font-bold text-xs tracking-[0.25em] text-[#186E68]">
            AETERNUM
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-y border-gray-300 w-full">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center px-6 md:border-r border-gray-300">
            <img
              src="/icons/security.svg"
              alt="Privacy Icon"
              className="w-10 h-10 mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">
              Privacy and
              <br />
              Security
            </h3>
            <p className="text-sm text-gray-700 max-w-[280px]">
              Your family connections should be protected, free from outside
              intrusion. Connect with linked ones in Aeternum’s Private Family
              Tree — free from ads, forced content, and unwanted influence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center px-6 md:border-r border-gray-300">
            <img
              src="/icons/memory.svg"
              alt="Memory Icon"
              className="w-10 h-10 mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">
              Memory
              <br />
              Preservation
            </h3>
            <p className="text-sm text-gray-700 max-w-[280px]">
              A photo without a story is just a snapshot in time. Aeternum keeps
              your cherished memories into lasting legacies by pairing images
              and videos with personal stories, voice recordings, and heartfelt
              reflections.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center px-6">
            <img
              src="/icons/inheritance.svg"
              alt="Legacy Icon"
              className="w-10 h-10 mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">
              Legacy
              <br />
              Inheritance
            </h3>
            <p className="text-sm text-gray-700 max-w-[280px]">
              Your legacy is more than memories: it’s the values, traditions,
              and wisdom you pass down. With Aeternum’s proprietary design, you
              can securely share your life’s story and ensure it reaches your
              loved ones for generations to come.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
