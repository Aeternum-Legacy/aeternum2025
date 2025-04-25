import PrivateFamilyConnection from "./PrivateFamilyConnection";
import MemoryPreservationSection from "./MemoryPreservationSection";

import LegacyInheritanceSection from "./LegacyInheritanceSection";

export default function FeatureDetailSection() {
  return (
    <section className="py-10 md:py-20 lg:py-35 px-2 md:px-15 lg:px-20 mb-30 md:mb-40">
      <div className="flex flex-col items-center gap-2 mb-10 lg:mb-30">
        <img src="icons/features.svg" className="w-8 md:w-12" />
        <p className="leading-relaxed font-bold text-xs md:text-sm tracking-[0.25em] text-[#186E68]">
          FEATURES
        </p>
      </div>
      <PrivateFamilyConnection />
      <MemoryPreservationSection />
      <LegacyInheritanceSection />
    </section>
  );
}
