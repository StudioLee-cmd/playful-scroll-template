"use client";

import { useRef } from "react";
import SplitText from "./SplitText";
import CharacterSpot from "./CharacterSpot";
import Card from "./Card";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Link from "next/link";

/**
 * ScrollRevealSection — Sections 3 & 4: Sticky parallax with product panel.
 *
 * Flying Papers mechanics:
 * - 300vh container with sticky 100vh inner
 * - Phase 1 (0-0.25): Static preview text centered, full opacity
 * - Phase 2 (0.25-0.5): Preview fades, animated heading reveals
 * - Phase 3 (0.5-1.0): Heading shifts left, product panel slides in from right
 * - Character floats in the background
 * - Each section has a bold single-color background
 */

interface ScrollRevealSectionProps {
  previewText: string[];
  heading: string[][];
  bg: string;
  textColor: string;
  characterImage?: string;
  products: {
    name: string;
    icon?: string;
    cta: string;
    href: string;
    bg: string;
    textColor: string;
  }[];
  shopAllHref: string;
}

export default function ScrollRevealSection({
  previewText,
  heading,
  bg,
  textColor,
  characterImage,
  products,
  shopAllHref,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  // Phase calculations — smooth transitions
  const phase1 = Math.max(0, 1 - progress * 5); // preview fades 0-0.2
  const phase2 = progress > 0.15 ? Math.min(1, (progress - 0.15) * 4) : 0; // heading in
  const phase3shift = progress > 0.45 ? Math.min(1, (progress - 0.45) * 3) : 0; // heading shifts left
  const panelIn = progress > 0.4 ? Math.min(1, (progress - 0.4) * 2.5) : 0; // panel slides in
  const charFade = progress > 0.2 ? Math.min(1, (progress - 0.2) * 3) : 0;

  return (
    <section className="section-full" style={{ backgroundColor: bg, color: textColor }}>
      <div ref={ref} className="sticky-wrap" style={{ minHeight: "350vh" }}>
        <div
          className="sticky-inner"
          style={{ backgroundColor: bg, position: "relative" }}
        >
          {/* Phase 1: Preview text (static, centered, fades out) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: phase1,
              pointerEvents: phase1 < 0.1 ? "none" : "auto",
              zIndex: 2,
            }}
          >
            <div style={{ width: "85%", maxWidth: "1000px", textAlign: "center" }}>
              {previewText.map((line, i) => (
                <div
                  key={i}
                  className="display-text text-section"
                  style={{ justifyContent: "center", lineHeight: 0.9 }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2: Animated heading (reveals, then shifts left in phase 3) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: `calc(50% - ${phase3shift * 25}%)`,
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "1000px",
              opacity: phase2,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={heading}
              as="h2"
              className="text-section"
              staggerDelay={0.04}
              once={false}
            />
          </div>

          {/* Character */}
          {characterImage !== undefined && (
            <div
              style={{
                position: "absolute",
                left: "8%",
                top: "15%",
                opacity: charFade,
                width: "clamp(10rem, 16vw, 22rem)",
                zIndex: 1,
              }}
            >
              <CharacterSpot
                src={characterImage}
                size={180}
                color={textColor}
              />
            </div>
          )}

          {/* Phase 3: Product panel — slides in from right */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "45%",
              height: "100%",
              transform: `translateX(${(1 - panelIn) * 105}%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "8rem 3rem",
              zIndex: 3,
              gap: "2rem",
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  width: "100%",
                  maxWidth: "26rem",
                  height: "24rem",
                }}
              >
                <Card
                  label={product.name}
                  icon={product.icon}
                  href={product.href}
                  cta={product.cta}
                  bg={product.bg}
                  textColor={product.textColor}
                />
              </div>
            ))}

            <Link
              href={shopAllHref}
              className="btn btn-solid"
              style={{
                backgroundColor: textColor,
                color: bg,
                marginTop: "1rem",
              }}
            >
              Shop all
            </Link>
          </div>

          <div className="dot-pattern" />
        </div>
      </div>
    </section>
  );
}
