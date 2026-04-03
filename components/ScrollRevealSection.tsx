"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import FloatingCharacter from "./FloatingCharacter";
import Card from "./Card";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Link from "next/link";

/**
 * ScrollRevealSection — The sticky parallax sections from Flying Papers.
 *
 * How it works:
 * 1. Tall container (300vh) with sticky inner (100vh)
 * 2. Phase 1 (progress 0-0.3): Preview text visible, fades as you scroll
 * 3. Phase 2 (progress 0.3-0.6): Real heading animates in with split-text
 * 4. Phase 3 (progress 0.6-1.0): Product panel slides in from right,
 *    heading shifts left, character appears
 *
 * Each section has:
 * - Preview text (static, centered)
 * - Animated heading (split-text reveal)
 * - Floating character
 * - Product cards panel that slides in from the right
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
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Phase calculations
  const previewOpacity = Math.max(0, 1 - progress * 4);
  const headingOpacity = progress > 0.15 ? Math.min(1, (progress - 0.15) * 5) : 0;
  const headingX = progress > 0.5 ? -(progress - 0.5) * 60 : 0;
  const panelX = progress > 0.4 ? Math.max(0, 100 - (progress - 0.4) * 200) : 100;
  const characterOpacity = progress > 0.3 ? Math.min(1, (progress - 0.3) * 4) : 0;

  return (
    <section style={{ backgroundColor: bg, color: textColor }}>
      <div ref={containerRef} style={{ minHeight: "300vh", position: "relative" }}>
        <div
          className="sticky-section__inner"
          style={{
            backgroundColor: bg,
            color: textColor,
            position: "relative",
          }}
        >
          {/* Phase 1: Preview text (static, fades out) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: previewOpacity,
              textAlign: "center",
              width: "80%",
              pointerEvents: "none",
            }}
          >
            {previewText.map((line, i) => (
              <p
                key={i}
                className="heading-display heading-h3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "0.1em",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Phase 2: Animated heading */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "80%",
              opacity: headingOpacity,
              transform: `translate(calc(-50% + ${headingX}%), -50%)`,
              zIndex: 2,
            }}
          >
            <SplitText
              lines={heading}
              as="h2"
              className="heading-h3"
              staggerDelay={0.04}
              once={false}
            />
          </motion.div>

          {/* Floating character */}
          {characterImage && (
            <div
              style={{
                position: "absolute",
                left: "10%",
                top: "20%",
                opacity: characterOpacity,
                width: "clamp(10rem, 20vw, 25rem)",
                zIndex: 1,
              }}
            >
              <FloatingCharacter src={characterImage} />
            </div>
          )}

          {/* Phase 3: Product panel slides in from right */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              transform: `translateX(${panelX}%)`,
              transition: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "9rem 2.2rem 1.5rem 1.5rem",
              zIndex: 3,
              gap: "2rem",
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  width: "100%",
                  maxWidth: "28rem",
                  height: "22rem",
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

            {/* Shop all button */}
            <Link
              href={shopAllHref}
              className="btn-primary"
              style={{
                backgroundColor: textColor,
                color: bg,
                marginTop: "1rem",
              }}
            >
              Shop all
            </Link>
          </div>

          {/* Dot pattern */}
          <div className="dot-pattern" style={{ opacity: 0.03 }} />
        </div>
      </div>
    </section>
  );
}
