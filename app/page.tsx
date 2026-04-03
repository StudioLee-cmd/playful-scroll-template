import Header from "@/components/Header";
import AgeGate from "@/components/AgeGate";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import BottomSection from "@/components/BottomSection";
import FooterSlider from "@/components/FooterSlider";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* Age gate overlay — first thing visitors see */}
      <AgeGate />

      <main>
        <Header />

        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Explore slider */}
        <SliderSection />

        {/* Sections 3 & 4: Scroll reveal (sticky parallax) */}
        {siteConfig.scrollSections.map((section, i) => (
          <ScrollRevealSection
            key={i}
            previewText={section.previewText}
            heading={section.heading}
            bg={section.bg}
            textColor={section.textColor}
            characterImage={section.characterImage}
            products={section.products}
            shopAllHref={section.shopAllHref}
          />
        ))}

        {/* Section 5: Bottom */}
        <BottomSection />

        {/* Section 6: Footer */}
        <FooterSlider />
      </main>
    </>
  );
}
