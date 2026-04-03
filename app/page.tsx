import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import BottomSection from "@/components/BottomSection";
import FooterSlider from "@/components/FooterSlider";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SliderSection />
      {siteConfig.scrollSections.map((section, i) => (
        <ScrollRevealSection key={i} {...section} />
      ))}
      <BottomSection />
      <FooterSlider />
    </main>
  );
}
