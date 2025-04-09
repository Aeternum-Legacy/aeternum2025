import PrivateFamilyConnection from "./PrivateFamilyConnection";
import MemoryPreservationSection from "./MemoryPreservationSection";

import LegacyInheritanceSection from "./LegacyInheritanceSection";

export default function FeatureDetailSection() {
  return (
    <section className="py-35 px-2 md:px-20 bg-white mb-40">
      <div className="flex flex-col items-center gap-2 mb-30">
        <img src="icons/features.svg" />
        <p className="leading-relaxed font-bold text-xs tracking-[0.25em] text-[#186E68]">
          FEATURES
        </p>
      </div>
      <PrivateFamilyConnection />
      <MemoryPreservationSection />
      <LegacyInheritanceSection />
    </section>
  );
}
