import FeatureSummarySection from "@/components/sections/FeatureSummarySection";
import DidYouKnowSection from "@/components/sections/DidYouKnowSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HeroSection from "@/components/sections/HeroSection";
import FeatureDetailSection from "@/components/sections/FeatureDetailSection";
import ImageTileSection from "@/components/sections/ImageTileSection";
import ReimagineYourLegacySection from "@/components/sections/ReimagineYourLegacySection";
import SignUpSection from "@/components/sections/SignUpSection";

export default function Home() {
  return (
    <main className="bg-pattern overflow-x-hidden">
      <HeroSection />
      <DidYouKnowSection />
      <SolutionSection />
      <ReimagineYourLegacySection />
      <FeatureSummarySection />
      <FeatureDetailSection />
      <ImageTileSection />
      <SignUpSection />
    </main>
  );
}
