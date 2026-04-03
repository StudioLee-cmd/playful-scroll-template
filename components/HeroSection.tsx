"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import FloatingCharacter from "./FloatingCharacter";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * HeroSection — First section of the page.
 *
 * Structure (matches Flying Papers):
 * 1. Sticky container that pins while you scroll through
 * 2. Small eyebrow heading ("I'm fly!") that fades in first
 * 3. Large main heading ("Let me show you where we can go") with split-text animation
 * 4. Floating character illustration that bounces gently
 * 5. As you scroll, heading translates up and character slides down to reveal next section
 */

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);
  const { hero } = siteConfig;

  // Scroll-driven transforms
  const headingY = progress * -60; // heading moves up as you scroll
  const characterY = progress * 100; // character moves down
  const eyebrowOpacity = Math.max(0, 1 - progress * 3);
  const headingOpacity = Math.max(0, 1 - progress * 2);

  return (
    <section
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: hero.bg,
        color: hero.textColor,
      }}
    >
      <div ref={containerRef} className="sticky-section__spacer">
        <div className="sticky-section__inner" style={{ flexDirection: "column" }}>
          {/* Eyebrow — small heading */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: eyebrowOpacity,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={[hero.eyebrow]}
              as="h3"
              className="heading-h3"
              staggerDelay={0.08}
            />
          </div>

          {/* Main heading */}
          <motion.div
            style={{
              position: "relative",
              zIndex: 2,
              transform: `translateY(${headingY}%)`,
              opacity: headingOpacity,
              width: "100%",
              textAlign: "center",
            }}
          >
            <SplitText
              lines={hero.heading}
              as="h2"
              className="heading-h2"
              staggerDelay={0.04}
            />
          </motion.div>

          {/* Floating character */}
          {hero.characterImage && (
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: `translateX(-50%) translateY(${characterY}%)`,
                opacity: Math.max(0, 1 - progress * 4),
                zIndex: 1,
                width: "clamp(15rem, 30vw, 40rem)",
              }}
            >
              <FloatingCharacter
                src={hero.characterImage}
                alt={`${siteConfig.name} character`}
              />
            </div>
          )}

          {/* Dot pattern overlay */}
          <div className="dot-pattern" style={{ opacity: 0.04 }} />
        </div>
      </div>
    </section>
  );
}
