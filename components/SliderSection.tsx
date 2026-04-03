"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * SliderSection — Section 2: "Let's explore your options"
 *
 * Flying Papers layout:
 * - Full viewport, colored background (purple)
 * - Heading at top left, viewport-filling split-text
 * - Below: horizontal drag slider with bordered category cards
 * - Cards have icons, labels, and "Shop" CTA
 * - Touch + mouse drag with momentum
 */

export default function SliderSection() {
  const { explore } = siteConfig;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, 0.05);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={sectionRef}
      className="section-full"
      style={{
        backgroundColor: explore.bg,
        color: explore.textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10rem 0 6rem",
      }}
    >
      {/* Heading — fills width */}
      <div style={{ padding: "0 5%", marginBottom: "6rem" }}>
        <SplitText
          lines={explore.heading}
          as="h2"
          className="text-hero"
          staggerDelay={0.08}
        />
      </div>

      {/* Horizontal drag slider */}
      <div className="slider-viewport">
        <div
          ref={trackRef}
          className="slider-track"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
          }}
          {...handlers}
        >
          {explore.items.map((item, i) => (
            <motion.div
              key={item.label}
              className="slider-item"
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
            >
              <Card
                label={item.label}
                icon={item.icon}
                href={item.href}
                bg={item.bg}
                textColor={item.textColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
