import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import PreviewImage from "@/components/landing/PreviewImage";
import SupportedPlatformSection from "@/components/landing/SupportedPlatformSection";

export default function page() {
  return (
    <div className="">
      <HeroSection />
      <PreviewImage />
      <FeaturesSection />
      <SupportedPlatformSection />
      <CTASection />
    </div>
  );
}
