"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoLabel from "@/components/ui/LogoLabel";
import { aboutContent } from "@/lib/facts";

export default function AboutMobile() {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="page-wrapper overflow-hidden md:hidden">
      <div className="relative w-full min-h-[50vh] flex items-center justify-center">
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
            className="w-28 mt-4"
          />
        </motion.div>
      </div>

      <div className="section-wrapper">
        <div className="grid-wrapper grid-cols-1">
          <div className="content-wrapper">
            <p className="w-full border-b-2 border-[#009688] pb-2">
              {aboutContent.mission.title}
            </p>
            <h5 className="font-bold">{aboutContent.mission.headline}</h5>
            <p className="text-gray-700 leading-relaxed">
              {aboutContent.mission.body}
            </p>
          </div>

          <div className="content-wrapper">
            <p className="w-full border-b-2 border-[#009688]">
              {aboutContent.vision.title}
            </p>
            <h5 className="font-bold">{aboutContent.vision.headline}</h5>
            <p className="text-gray-700 leading-relaxed">
              {aboutContent.vision.body}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto">
        <div className="relative w-full h-[320px] group">
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

      <div className="section-wrapper flex flex-col">
        <LogoLabel
          src="icons/aeternum-logo2.svg"
          alt="Aeternum Logo"
          text="VALUES"
        />

        <div className="grid content-wrapper grid-wrapper">
          {aboutContent.values.map((value, index) => (
            <div key={index}>
              <div className="w-full mb-4">
                <h5 className="font-bold border-b-2 border-[#009688] pb-2 w-full">
                  {value.title}
                </h5>
              </div>
              <p className="text-gray-700 leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
