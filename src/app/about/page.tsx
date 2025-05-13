"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoLabel from "@/components/ui/LogoLabel";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="page-wrapper overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0.6 : 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/family-walking.jpg"
            alt="Family walking in field"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 0.4 : 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0.2 }}
          transition={{ duration: 2 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="font-bold tracking-normal leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            <span className="block leading-snug">
              <span className="block">Connecting generations</span>
              <span className="block">through cherished moments</span>
            </span>
          </h1>
          <img
            src="/icons/aeternum-logo.svg"
            alt="Aeternum Logo"
            className="w-28 md:w-72 mt-4"
          />
        </motion.div>
      </div>

      {/* Mission and Vision */}
      <div className="section-wrapper relative">
        <div className="content-wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative mb-20">
          <div className="h-full">
            <p className="mb-2 w-fit pb-1">Our Mission</p>
            <div className="border-t-2 border-[#009688] w-full mb-4" />
            <h5 className="font-bold my-4 min-h-[3rem] ">
              Preserving Legacies, Connecting Generations
            </h5>
            <p className=" text-gray-700 leading-relaxed">
              At Aeternum, our mission is to preserve legacies and connect
              generations through a secure, timeless digital platform. Aeternum
              empowers families to safeguard their memories, share their
              stories, and pass down their history, values, and wisdom. We
              strive to ensure that every person’s voice, love, and essence
              remain a beacon for their descendants — not just as memories, but
              as a lasting presence across time.
            </p>
          </div>

          <div className="h-full">
            <p className=" mb-2 w-fit pb-1">Our Vision</p>
            <div className="border-t-2 border-[#009688] w-full mb-4" />
            <h5 className="font-bold my-4 min-h-[3rem] ">
              Where Memories Live Forever
            </h5>
            <p className=" text-gray-700 leading-relaxed">
              Our vision is a world where every family is prepared for the
              inevitable — where loss doesn’t mean disconnection, and every
              story, lesson, and memory lives on. We envision a future where
              families, across generations, remain bonded by love, wisdom, and
              the voices of those who came before them. In this world, farewells
              are softened by lasting presence, and no life fades into silence.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-auto">
        <div className="relative w-full h-[320px] md:h-[500px] lg:h-[1000px] group">
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
                className="absolute top-2 right-2 text-white          z-10"
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

      {/* Values Section */}
      <div className="section-wrapper flex flex-col">
        <LogoLabel
          src="icons/aeternum-logo2.svg"
          alt="Aeternum Logo"
          text="VALUES"
        />

        <div className="grid md:grid-cols-2 content-wrapper grid-wrapper">
          {/* Timeless Purpose */}
          <div>
            <div className=" w-full mb-4">
              <h5 className="font-bold ">Timeless Purpose</h5>
              <div className="border-t-2 border-[#009688] w-full mb-4" />
            </div>
            <p className="text-gray-700">
              At Aeternum, we make decisions with the future in mind, striving
              to create lasting positive impacts that grow in value over time.
              We are committed to building something that improves the present,
              connects our past, and enriches the generations that follow. As
              time changes, so do we — learning, adapting, and evolving to
              ensure the choices we make today continue to bring meaningful
              benefits well into the future.
            </p>
          </div>

          {/* Respect */}
          <div>
            <div className=" w-full mb-4">
              <h5 className="font-bold ">Respect</h5>
              <div className="border-t-2 border-[#009688] w-full mb-4" />
            </div>
            <p className="text-gray-700 ">
              Respect is a core value of Aeternum. We embrace the richness of
              diverse experiences, perspectives, and identities, and believe
              that respect is best shown in how we engage with one another —
              especially when our views differ. Through empathy, openness, and
              humility, we foster a culture where all voices are heard and
              valued.
            </p>
          </div>

          {/* Family First */}
          <div>
            <div className="w-full mb-4">
              <h5 className="font-bold ">Family First</h5>
              <div className="border-t-2 border-[#009688] w-full mb-4" />
            </div>
            <p className="text-gray-700">
              At Aeternum, we believe that family is at the heart of everything
              we do. Our Family First Policy provides employees with the
              flexibility and support to prioritize their families, recognizing
              that caring for loved ones, being present for life’s precious
              moments, and maintaining personal wellness are essential to a
              fulfilling life. By caring for our own families, we better
              understand how to care for the families we serve.
            </p>
          </div>

          {/* Trust */}
          <div>
            <div className="relative w-full mb-4">
              <h5 className="font-bold ">Trust</h5>
              <div className="border-t-2 border-[#009688] w-full mb-4" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              We believe that trust is built through presence, support, and
              honesty. It serves as the foundation for strong relationships and
              underpins the way Aeternum operates. Our commitment to reliability
              and integrity ensures a secure and respectful environment for all.
            </p>
          </div>

          {/* Security & Privacy */}
          <div>
            <div className=" w-full mb-4">
              <h5 className="font-bold ">Security & Privacy</h5>
              <div className="border-t-2 border-[#009688] w-full mb-4" />
            </div>
            <p className="text-gray-700 leading-relaxed  ">
              Security and privacy are not just obligations at Aeternum — they
              are responsibilities we take personally. We safeguard personal
              data and moderate content with the same care and vigilance we
              would expect for our own families. For us, it is not about meeting
              the minimum regulatory standards; it is about setting a new
              benchmark for how families should be safeguarded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
