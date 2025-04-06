import PrivateFamilyConnection from "./PrivateFamilyConnection";
import Image from "next/image";
import MemoryPreservationFeatureCard from "../ui/MemoryPreservationFeatureCard";

export default function FeatureDetailSection() {
  return (
    <section className="py-40 px-6 md:px-20 bg-white">
      <div className="flex flex-col items-center gap-2 mb-40">
        <img src="icons/features.svg" />
        <p className="leading-relaxed font-bold text-xs tracking-[0.25em] text-[#186E68]">
          FEATURES
        </p>
      </div>
      <PrivateFamilyConnection />
      <div className="flex flex-col gap-6 text-center items-center justify-center">
        <h2 className="text-6xl">Memory Preservation</h2>
        <p className="text-[#4F4949] w-2/3">
          <span className="block">
            Life moves fast, and precious memories can slip away.{" "}
          </span>
          Aeternum keeps your stories, moments, and legacies safe - secure,
          shareable, and always within reach.
        </p>
      </div>
      <div className="grid grid-cols-3 items-center w-full mt-20">
        {/* Left Feature Cards */}
        <div className="grid gap-y-10 place-items-center">
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

        {/* Center Image (larger and vertically centered) */}
        <div className="flex justify-center">
          <Image
            src="/images/memory-preservation.png"
            alt="Memory Preservation"
            width={500} // adjust size here
            height={600}
            className="object-contain"
          />
        </div>

        {/* Right Feature Cards */}
        <div className="grid gap-y-10 justify-center place-items-center">
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
    </section>
  );
}
