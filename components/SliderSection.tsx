"use client";

import { useRef } from "react";
import SplitText from "./SplitText";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * SliderSection — "Let's explore your options" with horizontal drag slider.
 *
 * Matches Flying Papers:
 * - Full-height section with colored background
 * - Large heading at top with split-text reveal
 * - Horizontal draggable card carousel below
 * - Cards have 3px borders, colored backgrounds, icons
 */

export default function SliderSection() {
  const { explore } = siteConfig;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, 0.1);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={sectionRef}
      className="color-section"
      style={{
        backgroundColor: explore.bg,
        color: explore.textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div style={{ padding: "0 4rem", marginBottom: "6rem" }}>
        <SplitText
          lines={explore.heading}
          as="h2"
          className="heading-h2"
          staggerDelay={0.06}
        />
      </div>

      {/* Horizontal drag slider */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
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
            gap: "2rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
          {...handlers}
        >
          {explore.items.map((item, i) => (
            <div
              key={item.label}
              className="slider-item"
              style={{
                flex: "0 0 21rem",
                height: "30rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <Card
                label={item.label}
                icon={item.icon}
                href={item.href}
                bg={item.bg}
                textColor={item.textColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
