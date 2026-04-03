"use client";

import { useRef } from "react";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import SplitText from "./SplitText";
import { siteConfig } from "@/lib/site-config";

/**
 * FooterSlider — Bottom section with promo cards in a horizontal slider
 * + "Thanks for flying with us" footer text.
 *
 * Matches Flying Papers' footer layout:
 * - Colored background
 * - Horizontal drag slider with 3 promo cards (rotated slightly on mobile)
 * - Footer text at bottom
 */

export default function FooterSlider() {
  const { footer } = siteConfig;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, 0.1);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: footer.bg,
        color: footer.textColor,
        paddingTop: "8rem",
        paddingBottom: "4rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Promo cards slider */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "pan-y",
            userSelect: "none",
            gap: "3rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            width: "100%",
          }}
          {...handlers}
        >
          {footer.cards.map((card, i) => {
            // On mobile, cards are slightly rotated like Flying Papers
            const rotations = [0, -10, 5];
            return (
              <div
                key={card.title}
                style={{
                  flex: "0 0 28rem",
                  height: "38rem",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : `translateY(30px) rotate(${rotations[i] || 0}deg)`,
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                <Card
                  label={card.title}
                  icon={card.icon}
                  image={card.image}
                  href={card.href}
                  cta={card.cta}
                  bg={card.bg}
                  textColor={card.textColor}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer text */}
      <div
        style={{
          textAlign: "center",
          padding: "6rem 4rem 2rem",
        }}
      >
        <SplitText
          lines={[[footer.bottomText]]}
          as="h3"
          className="heading-h4"
          staggerDelay={0.06}
        />

        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="text-small" style={{ opacity: 0.6 }}>
            {siteConfig.name}
          </p>
          <p className="text-small" style={{ opacity: 0.6 }}>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
