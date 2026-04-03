"use client";

import { useRef } from "react";
import SplitText from "./SplitText";
import FloatingCharacter from "./FloatingCharacter";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * BottomSection — "Wherever you want to go / Flying papers is your ticket to get there"
 *
 * Sticky scroll section with:
 * - Small eyebrow heading that appears first
 * - Large main heading
 * - Character that floats up from below
 */

export default function BottomSection() {
  const { bottom } = siteConfig;
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  const eyebrowOpacity = Math.max(0, 1 - progress * 3);
  const headingOpacity = progress > 0.2 ? Math.min(1, (progress - 0.2) * 4) : 0;
  const characterY = Math.max(0, 50 - progress * 100);

  return (
    <section style={{ backgroundColor: bottom.bg, color: bottom.textColor }}>
      <div ref={containerRef} style={{ minHeight: "250vh", position: "relative" }}>
        <div
          className="sticky-section__inner"
          style={{
            backgroundColor: bottom.bg,
            color: bottom.textColor,
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              width: "100%",
              textAlign: "center",
              opacity: eyebrowOpacity,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={bottom.eyebrow}
              as="h3"
              className="heading-h4"
              staggerDelay={0.06}
            />
          </div>

          {/* Main heading */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              opacity: headingOpacity,
              width: "90%",
              textAlign: "center",
            }}
          >
            <SplitText
              lines={bottom.heading}
              as="h2"
              className="heading-h2"
              staggerDelay={0.04}
              once={false}
            />
          </div>

          {/* Character floating up */}
          {bottom.characterImage && (
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: `translateX(-50%) translateY(${characterY}vh)`,
                width: "clamp(15rem, 25vw, 35rem)",
                zIndex: 1,
              }}
            >
              <FloatingCharacter src={bottom.characterImage} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
