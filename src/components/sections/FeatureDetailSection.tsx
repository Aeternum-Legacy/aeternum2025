import PrivateFamilyConnection from "./PrivateFamilyConnection";
import MemoryPreservationSection from "./MemoryPreservationSection";

import LegacyInheritanceSection from "./LegacyInheritanceSection";
import LogoLabel from "../ui/LogoLabel";

export default function FeatureDetailSection() {
  return (
    <section className="section-wrapper">
      <LogoLabel
        src="/icons/features.svg"
        text="FEATURES"
        alt="Features Logo"
      />
      <PrivateFamilyConnection />
      <MemoryPreservationSection />
      <LegacyInheritanceSection />
    </section>
  );
}
