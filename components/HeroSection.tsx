"use client";

import { useRef } from "react";
import SplitText from "./SplitText";
import CharacterSpot from "./CharacterSpot";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * HeroSection — Section 1.
 *
 * Layout from Flying Papers:
 * - Cream background, full viewport sticky section
 * - Small eyebrow heading at top ("I'm fly!")
 * - Large heading filling width ("Let me show you where we can go")
 * - Character floating below/between text
 * - Scroll drives: heading up, character down, all fades out
 * - Spacer is 300vh (200vh on desktop) for scroll length
 */

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const { hero } = siteConfig;

  return (
    <section
      className="section-full"
      style={{
        backgroundColor: hero.bg,
        color: hero.textColor,
      }}
    >
      <div
        ref={ref}
        className="sticky-wrap"
        style={{ minHeight: "280vh" }}
      >
        <div
          className="sticky-inner"
          style={{
            flexDirection: "column",
            gap: 0,
            backgroundColor: hero.bg,
          }}
        >
          {/* Eyebrow — small text above */}
          <div
            style={{
              position: "absolute",
              top: "12%",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: Math.max(0, 1 - progress * 4),
              zIndex: 2,
            }}
          >
            <SplitText
              lines={[hero.eyebrow]}
              as="h3"
              className="text-section"
              staggerDelay={0.1}
            />
          </div>

          {/* Main heading — fills viewport width */}
          <div
            style={{
              width: "92%",
              maxWidth: "1400px",
              textAlign: "center",
              zIndex: 2,
              transform: `translateY(${progress * -40}%)`,
              opacity: Math.max(0, 1 - progress * 2.5),
            }}
          >
            <SplitText
              lines={hero.heading}
              as="h2"
              className="text-hero"
              staggerDelay={0.03}
            />
          </div>

          {/* Character — positioned below heading */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "50%",
              transform: `translateX(-50%) translateY(${progress * 120}%)`,
              opacity: Math.max(0, 1 - progress * 3),
              zIndex: 1,
              width: "clamp(12rem, 22vw, 30rem)",
            }}
          >
            <CharacterSpot
              src={hero.characterImage}
              size={250}
              color={hero.textColor}
            />
          </div>

          <div className="dot-pattern" />
        </div>
      </div>
    </section>
  );
}
