"use client";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="md:mx-28 md:px-6 py-10 md:py-24 relative flex flex-col md:flex-row items-center justify-center md:gap-8">
        <div className="w-full md:flex-1 md:relative md:z-10">
          <div className="relative inline-block w-full">
            <img
              src="/icons/quote.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-16 md:left-10 top-[-1.5rem] md:top-[-2.5rem] -translate-x-full w-10 h-10 md:w-20 md:h-20"
            />
            <img
              src="/icons/quote.svg"
              alt=""
              aria-hidden="true"
              className="absolute right-16 md:right-0 md:left-80 bottom-0 translate-x-full translate-y-1/4 rotate-180 w-10 h-10 md:w-20 md:h-20"
            />

            <p className="mx-4 md:mx-0 relative z-10 text-2xl sm:text-3xl md:text-[5.4rem] font-bold tracking-wide">
              <span className="block md:hidden text-center leading-snug">
                <span className="block">CONNECTING GENERATIONS</span>
                <span className="block">THROUGH CHERISHED MOMENTS</span>
              </span>

              <span className="hidden md:block">
                <span className="block">CONNECTING</span>
                <span className="block">GENERATIONS</span>
                <span className="block">THROUGH</span>
                <span className="block">CHERISHED</span>
                <span className="block">MOMENTS</span>
              </span>
            </p>
          </div>

          <img
            src="/icons/aeternum-logo4.svg"
            alt="Aeternum Logo"
            className="w-28 mx-auto md:w-72 md:mx-0 mt-4 md:mt-7"
          />
        </div>

        <div className="w-full md:flex-1 relative z-0 mt-6 md:mt-0 md:absolute md:right-[2rem] md:top-1/2 md:translate-y-[-43%] md:w-[55%]">
          <Image
            src="/images/family-walking.jpg"
            alt="Family walking in field"
            width={900}
            height={550}
            className="object-cover w-full h-[300px] sm:h-[400px] md:h-[550px] shadow-xl"
          />
        </div>
      </div>

      <div className="w-full h-auto lg:h-96 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative mb-20">
        <div className="order-1 lg:order-2 lg:h-full text-left">
          <h2 className="text-xl mb-2 w-fit pb-1 ml-10 lg:ml-0">Our Vision</h2>
          <div className="border-t-2 border-[#009688]" />
          <h3 className="text-2xl font-bold my-3 text-left ml-10 lg:ml-0">
            Where Memories Live Forever
          </h3>
          <p className="text-gray-700 leading-relaxed w-2/3 text-left ml-10 lg:ml-0">
            Our vision is a world where every family is prepared for the
            inevitable — where loss doesn’t mean disconnection, and every story,
            lesson, and memory lives on. We envision a future where families,
            across generations, remain bonded by love, wisdom, and the voices of
            those who came before them. In this world, farewells are softened by
            lasting presence, and no life fades into silence.
          </p>
        </div>
        <div className="lg:order-1 lg:h-full flex flex-col justify-end">
          <h2 className="text-xl mb-2 inline-block ml-10 lg:ml-32 pb-1">
            Our Mission
          </h2>
          <div className="border-t-2 border-[#009688] lg:w-1/3" />
          <h3 className="text-2xl font-bold my-4 ml-10 lg:ml-32">
            Preserving Legacies, Connecting Generations
          </h3>
          <p className="text-gray-700 leading-relaxed w-2/3 ml-10 lg:ml-32">
            At Aeternum, our mission is to preserve legacies and connect
            generations through a secure, timeless digital platform. Aeternum
            empowers families to safeguard their memories, share their stories,
            and pass down their history, values, and wisdom. We strive to ensure
            that every person’s voice, love, and essence remain a beacon for
            their descendants — not just as memories, but as a lasting presence
            across time.
          </p>
        </div>
      </div>

      <div className="relative w-full h-auto lg:h-screen">
        <div className="relative w-full h-[240px] lg:h-full group">
          <video
            className="w-full h-full object-cover"
            src="/videos/website_banner.mp4"
            autoPlay
            muted
            playsInline
            loop
          />

          <div className="absolute bottom-4 right-4 z-10 block">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#00796B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#00695C] transition duration-200"
            >
              Watch Full Video
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <button
                className="absolute top-2 right-2 text-white text-xl z-10"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/6bHoWPbasSM?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-15 lg:mt-20 flex flex-col gap-15">
        <div className="flex flex-col items-center gap-2">
          <img src="icons/aeternum-logo2.svg" className="w-8 lg:w-12" />
          <p className="font-bold leading-relaxed tracking-[0.25em] text-[#186E68] text-xs lg:text-sm">
            AETERNUM
          </p>
        </div>
        <div className="lg:mt-10">
          <div className="w-full h-auto lg:h-96 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative">
            <div className="order-1 lg:order-2 lg:h-full text-center lg:text-left">
              <h3 className="text-2xl font-bold my-3 text-left ml-10 lg:ml-0">
                Family First
              </h3>
              <div className="border-t-2 border-[#009688]" />
              <p className="text-gray-700 leading-relaxed w-2/3 my-3 text-left ml-10 lg:ml-0">
                At Aeternum, we believe that family is at the heart of
                everything we do. Our Family First Policy provides employees
                with the flexibility and support to prioritize their families,
                recognizing that caring for loved ones, being present for life’s
                precious moments, and maintaining personal wellness are
                essential to a fulfilling life. By caring for our own families,
                we better understand how to care for the families we serve.
              </p>
            </div>
            <div className="lg:order-1 lg:h-full flex flex-col justify-end">
              <h3 className="text-2xl font-bold my-3 ml-10 lg:ml-32">
                Timeless Purpose
              </h3>
              <div className="border-t-2 border-[#009688] lg:w-3/7" />
              <p className="text-gray-700 leading-relaxed w-2/3 ml-10 lg:ml-32 my-3">
                At Aeternum, we make decisions with the future in mind, striving
                to create lasting positive impacts that grow in value over time.
                We are committed to building something that improves the
                present, connects our past, and enriches the generations that
                follow. As time changes, so do we — learning, adapting, and
                evolving to ensure the choices we make today continue to bring
                meaningful benefits well into the future.
              </p>
            </div>
          </div>

          <div className="w-full h-auto lg:h-96 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative my-15 lg:my-0">
            <div className="lg:order-2 h-full">
              <h3 className="text-2xl font-bold mb-3 ml-10 lg:ml-24">Trust</h3>
              <div className="border-t-2 border-[#009688] lg:ml-24" />
              <p className="text-gray-700 leading-relaxed w-2/3 my-3 ml-10 lg:ml-24">
                We believe that trust is built through presence, support, and
                honesty. It serves as the foundation for strong relationships
                and underpins the way Aeternum operates. Our commitment to
                reliability and integrity ensures a secure and respectful
                environment for all.
              </p>
            </div>
            <div className="lg:order-1 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-3 ml-10 lg:ml-60">
                Respect
              </h3>
              <div className="border-t-2 border-[#009688] lg:w-4/9" />
              <p className="text-gray-700 leading-relaxed w-2/3 ml-10 lg:ml-60 my-3">
                Respect is a core value of Aeternum. We embrace the richness of
                diverse experiences, perspectives, and identities, and believe
                that dignity is best shown in how we engage with one another —
                especially when our views differ. Through empathy, openness, and
                humility, we foster a culture where all voices are heard and
                valued.
              </p>
            </div>
          </div>

          <div className="w-full h-auto lg:h-96 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative my-15 lg:my-0">
            <div className="lg:col-start-2 h-full">
              <h3 className="text-2xl font-bold mb-3 ml-10 lg:ml-0">
                Security & Privacy
              </h3>
              <div className="border-t-2 border-[#009688] ml-auto" />
              <p className="text-gray-700 leading-relaxed w-2/3 my-3 ml-10 lg:ml-0">
                Security and privacy are not just obligations at Aeternum — they
                are responsibilities we take personally. We safeguard personal
                data and moderate content with the same care and vigilance we
                would expect for our own families. For us, it is not about
                meeting the minimum regulatory standards; it is about setting a
                new benchmark for how families should be safeguarded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
