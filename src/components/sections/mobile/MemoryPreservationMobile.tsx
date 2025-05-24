"use client";

import Image from "next/image";
import MemoryPreservationFeatureCard from "../../ui/MemoryPreservationFeatureCard";

export default function MemoryPreservationMobile() {
  return (
    <section
      className="md:hidden grid-wrapper mb-4"
      aria-labelledby="memory-preservation-heading"
    >
      <div className="flex items-center justify-center">
        <div className="relative w-full aspect-square">
          <Image
            src="/images/memory-preservation.png"
            alt="..."
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold">Memory Preservation</h2>
        <p className="text-[#4F4949] text-center">
          Life moves fast, and precious memories can slip away. Aeternum keeps
          your stories, moments, and legacies safe — secure, shareable, and
          always within reach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 justify-items-center">
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
    </section>
  );
}
