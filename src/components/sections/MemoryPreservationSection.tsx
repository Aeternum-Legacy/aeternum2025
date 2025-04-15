import MemoryPreservationFeatureCard from "../ui/MemoryPreservationFeatureCard";
import Image from "next/image";

export default function MemoryPreservationSection() {
  return (
    <div className="mb-30 md:mb-40">
      <div className="lg:hidden flex justify-center mb-5">
        <div className="relative w-[100%] aspect-[4/4]">
          <Image
            src="/images/memory-preservation.png"
            alt="Memory Preservation"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 text-center items-center justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold md:font-normal">
          Memory Preservation
        </h2>
        <p className="text-[#4F4949] text-lg w-4/5 md:w-2/3 md:mb-5">
          <span className="block">
            Life moves fast, and precious memories can slip away.
          </span>
          Aeternum keeps your stories, moments, and legacies safe - secure,
          shareable, and always within reach.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center w-full mt-10 lg:mt-15">
        <div className="flex flex-col gap-y-7 lg:gap-y-10 items-center justify-center h-full">
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
            content="Effortlessly navigate through generations of famly memories in a single intuitive dashboard."
          />
        </div>

        <div className="hidden relative lg:flex justify-center">
          <div className="relative w-[500px] h-[500px] -translate-y-5 scale-120">
            <Image
              src="/images/memory-preservation.png"
              alt="Memory Preservation"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-7 lg:mt-0 flex flex-col gap-y-7 lg:gap-y-10 items-center justify-center h-full">
          <MemoryPreservationFeatureCard
            icon="/icons/custom-memory-collections.svg"
            title="Custom Memory Collections"
            content="Group memories into custom collections - Weddings, Baby Steps, Family Trips, Final Goodbyes."
          />
          <MemoryPreservationFeatureCard
            icon="/icons/timeless-sharing.svg"
            title="Timeless Sharing"
            content="Control what to share, who receives it, and when - preserving your legacy for loved ones and later."
          />
        </div>
      </div>
    </div>
  );
}
