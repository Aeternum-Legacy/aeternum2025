"use client";

import Image from "next/image";
import MemoryPreservationFeatureCard from "../../ui/MemoryPreservationFeatureCard";

export default function MemoryPreservationDesktop() {
  return (
    <section
      className="hidden md:flex flex-col gap-10"
      aria-labelledby="memory-preservation-heading"
    >
      <div className="flex lg:hidden justify-center">
        <div className="relative w-full max-w-[620px] h-[500px] -translate-y-5 scale-105">
          <Image
            src="/icons/memory-preservation.png"
            alt="Illustration of digital memory preservation in Aeternum"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <header className="flex flex-col gap-6 text-center items-center justify-center">
        <h2 id="memory-preservation-heading">Memory Preservation</h2>
        <p className="text-[#4F4949]">
          <span className="block -ml-2 sm:-ml-5">
            Life moves fast, and precious memories can slip away.
          </span>
          Aeternum keeps your stories, moments, and legacies safe — secure,
          shareable, and always within reach.
        </p>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-3 items-center gap-x-12 xl:gap-x-16 lg:gap-y-5">
        <div className="flex flex-col items-center justify-center gap-y-10 w-full">
          <MemoryPreservationFeatureCard
            icon="/icons/history-book.svg"
            title="Record Your Memories"
            content="Capture and share life's moments with photos, videos, text, milestones, or favorite recipes."
          />
          <MemoryPreservationFeatureCard
            icon="/icons/create-meaningful-stories.svg"
            title="Create Meaningful Stories"
            content="Turn static pictures into stories by adding narratives and chaining together a series of related memories."
          />
          <MemoryPreservationFeatureCard
            icon="/icons/memory-lane.svg"
            title="Walk Down Memory Lane"
            content="Effortlessly navigate through generations of family memories in a single intuitive dashboard."
          />
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-[620px] h-[620px] -translate-y-5 scale-105">
            <Image
              src="/icons/memory-preservation.png"
              alt="Illustration of digital memory preservation in Aeternum"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-10 w-full mt-10 lg:mt-0">
          <MemoryPreservationFeatureCard
            icon="/icons/custom-memory-collections.svg"
            title="Custom Memory Collections"
            content="Group memories into custom collections — Weddings, Baby Steps, Family Trips, Final Goodbyes."
          />
          <MemoryPreservationFeatureCard
            icon="/icons/timeless-sharing.svg"
            title="Timeless Sharing"
            content="Control what to share, who receives it, and when — preserving your legacy for loved ones now and later."
          />
        </div>
      </div>
    </section>
  );
}
