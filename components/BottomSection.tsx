"use client";

import { useRef } from "react";
import SplitText from "./SplitText";
import CharacterSpot from "./CharacterSpot";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * BottomSection — Section 5: "Wherever you want to go / is your ticket to get there"
 *
 * Flying Papers layout:
 * - Blue-grey background
 * - Sticky scroll section
 * - Small eyebrow heading appears first
 * - Main heading reveals below
 * - Character rises from below
 */

export default function BottomSection() {
  const { bottom } = siteConfig;
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  const eyebrowFade = Math.max(0, 1 - progress * 4);
  const headingFade = progress > 0.15 ? Math.min(1, (progress - 0.15) * 4) : 0;
  const charRise = Math.max(0, 60 - progress * 120);

  return (
    <section className="section-full" style={{ backgroundColor: bottom.bg, color: bottom.textColor }}>
      <div ref={ref} className="sticky-wrap" style={{ minHeight: "280vh" }}>
        <div
          className="sticky-inner"
          style={{
            flexDirection: "column",
            backgroundColor: bottom.bg,
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              position: "absolute",
              top: "18%",
              width: "90%",
              textAlign: "center",
              opacity: eyebrowFade,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={bottom.eyebrow}
              as="h3"
              className="text-sub"
              staggerDelay={0.08}
            />
          </div>

          {/* Main heading */}
          <div
            style={{
              width: "92%",
              maxWidth: "1400px",
              textAlign: "center",
              opacity: headingFade,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={bottom.heading}
              as="h2"
              className="text-hero"
              staggerDelay={0.03}
              once={false}
            />
          </div>

          {/* Character rising from below */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "50%",
              transform: `translateX(-50%) translateY(${charRise}vh)`,
              width: "clamp(14rem, 22vw, 32rem)",
              zIndex: 1,
            }}
          >
            <CharacterSpot
              src={bottom.characterImage}
              size={280}
              color={bottom.textColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
