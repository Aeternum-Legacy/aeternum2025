"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageTileMobile() {
  const row1Images = [
    "image-tile12.jpg",
    "image-tile15.jpg",
    "image-tile9.jpg",
    "image-tile2.jpg",
    "image-tile1.jpg",
    "image-tile6.jpg",
  ];

  const row2Images = [
    "image-tile11.jpg",
    "image-tile10.jpg",
    "image-tile8.jpg",
    "image-tile4.jpg",
    "image-tile5.jpg",
    "image-tile3.jpg",
  ];

  const repeat = (arr: string[]) => [...arr, ...arr]; 

  return (
    <>
      <section className="section-wrapper lg:hidden gap-y-2">
        <h1 className="leading-tighter tracking-tight text-left">
          <span className="block">Do not let</span>
          <span className="block">memories fade</span>
          <span className="block">
            Secure them{" "}
            <span className="inline-flex items-center gap-3">
              forever
              <img
                src="/icons/aeternum-logo3.svg"
                alt="Aeternum logo"
                title="Aeternum logo"
                className="w-[45px] h-[45px] mt-2"
              />
            </span>
          </span>
        </h1>

        <p className="text-lg mt-4 mb-5 text-left">
          <span className="sr-only">
            Preserve your memories today with Aeternum.
          </span>
          Your memories, your legacy – <span className="block sm:hidden" />
          begin preserving them today.
        </p>
      </section>
      <div className="lg:hidden relative overflow-x-hidden w-full -mt-12">
        <div className="w-[120%]">
          <div className="relative overflow-x-hidden w-full">
            <div className="w-[120%]">
              <div className="block lg:hidden overflow-hidden space-y-2">
                <motion.div
                  className="flex w-max gap-1"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {repeat(row1Images).map((src, index) => (
                    <div
                      key={`row1-${index}`}
                      className="relative w-[120px] h-[180px] flex-shrink-0"
                    >
                      <Image
                        src={`/images/${src}`}
                        alt={`Tile ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </motion.div>

              
                <motion.div
                  className="flex w-max gap-1"
                  animate={{ x: ["-50%", "0%"] }} 
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {repeat(row2Images).map((src, index) => (
                    <div
                      key={`row2-${index}`}
                      className="relative w-[120px] h-[180px] flex-shrink-0"
                    >
                      <Image
                        src={`/images/${src}`}
                        alt={`Tile ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
