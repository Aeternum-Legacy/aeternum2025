import FeatureSummarySection from "@/components/sections/FeatureSummarySection";
import DidYouKnowSection from "@/components/sections/DidYouKnowSection";
import HeroSection from "@/components/sections/HeroSection";
import FeatureDetailSection from "@/components/sections/FeatureDetailSection";
import ImageTileSection from "@/components/sections/ImageTileSection";
import ReimagineYourLegacySection from "@/components/sections/ReimagineYourLegacySection";
import SignUpSection from "@/components/sections/SignUpSection";
import WhatIfSection from "@/components/sections/WhatIfSection";

export const metadata = {
  title: "Reimagine Your Legacy | Aeternum",
  description:
    "Aeternum offers a private, secure space for families to connect, preserve memories, and share heartfelt messages that last across generations.",
};

export default function Home() {
  return (
    <main className="page-wrapper overflow-x-hidden">
      <HeroSection />
      <DidYouKnowSection />
      <WhatIfSection />
      <ReimagineYourLegacySection />
      <FeatureSummarySection />
      <FeatureDetailSection />
      <ImageTileSection />
      <SignUpSection />
    </main>
  );
}
