import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import SupportedPlatformSection from "@/components/landing/SupportedPlatformSection";

export default function page() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <SupportedPlatformSection />
      <CTASection />
    </div>
  );
}
