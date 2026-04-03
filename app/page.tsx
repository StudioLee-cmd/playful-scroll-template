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

      {/* Section 1: Hero — "I'm fly! / Let me show you where we can go" */}
      <HeroSection />

      {/* Section 2: Explore slider — "Let's explore your options" */}
      <SliderSection />

      {/* Section 3+4: Scroll reveal sections — sticky parallax with product panels */}
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

      {/* Section 5: Bottom — "Wherever you want to go / Flying papers is your ticket" */}
      <BottomSection />

      {/* Section 6: Footer promo slider + credits */}
      <FooterSlider />
    </main>
  );
}
