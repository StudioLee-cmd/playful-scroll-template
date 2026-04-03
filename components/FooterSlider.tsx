"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

/**
 * FooterSlider — Section 6: Promo cards + footer.
 *
 * Flying Papers layout:
 * - Red background
 * - Horizontal slider with 3 promotional cards (tilted on mobile)
 * - "Thanks for flying with us" in display text at bottom
 * - Brand name + copyright
 */

export default function FooterSlider() {
  const { footer, name } = siteConfig;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, 0.05);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={sectionRef}
      className="section-full"
      style={{
        backgroundColor: footer.bg,
        color: footer.textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10rem 0 4rem",
      }}
    >
      {/* Promo cards slider */}
      <div
        className="slider-viewport"
        style={{ flex: 1, display: "flex", alignItems: "center" }}
      >
        <div
          ref={trackRef}
          className="slider-track"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            gap: "3rem",
          }}
          {...handlers}
        >
          {footer.cards.map((card, i) => {
            const rotations = [0, -8, 4];
            return (
              <motion.div
                key={card.title}
                style={{
                  flex: "0 0 28rem",
                  height: "40rem",
                }}
                initial={{ opacity: 0, y: 40, rotate: rotations[i] || 0 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, rotate: 0 }
                    : { opacity: 0, y: 40, rotate: rotations[i] || 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer text */}
      <div style={{ textAlign: "center", padding: "6rem 5% 2rem" }}>
        <div className="display-text text-sub" style={{ justifyContent: "center" }}>
          {footer.bottomText}
        </div>

        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 2rem",
          }}
        >
          <span className="text-small" style={{ opacity: 0.5 }}>
            {name}
          </span>
          <span className="text-small" style={{ opacity: 0.5 }}>
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
