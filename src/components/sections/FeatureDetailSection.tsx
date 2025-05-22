import PrivateFamilyConnection from "./PrivateFamilyConnection";
import MemoryPreservationSection from "./MemoryPreservationSection";

import LegacyInheritanceSection from "./LegacyInheritanceSection";
import LogoLabel from "../ui/LogoLabel";

export default function FeatureDetailSection() {
  return (
    <section className="section-wrapper gap-20">
      <LogoLabel
        src="/icons/features.svg"
        alt="Features Logo"
        text="FEATURES"
      />
      <PrivateFamilyConnection />
      <MemoryPreservationSection />
      <LegacyInheritanceSection />
    </section>
  );
}
