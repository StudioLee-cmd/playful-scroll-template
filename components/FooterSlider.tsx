"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

export default function FooterSlider() {
  const { footer, name } = siteConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.05);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={ref}
      style={{
        background: footer.bg, color: footer.textColor,
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "10rem 0 4rem",
      }}
    >
      <div className="fp-slider" style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div
          ref={trackRef}
          className="fp-slider-track"
          style={{ cursor: isDragging ? "grabbing" : "grab", gap: "2rem" }}
          {...handlers}
        >
          {footer.cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="fp-slider-item"
              style={{ height: "38rem", flex: "0 0 26rem" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <Card label={card.title} icon={card.icon} image={card.image}
                href={card.href} cta={card.cta} bg={card.bg} textColor={card.textColor} />
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "5rem 4rem 2rem" }}>
        <div className="display-text" style={{ fontSize: "6vw", justifyContent: "center" }}>
          {footer.bottomText}
        </div>
        <div style={{
          marginTop: "3rem", display: "flex", justifyContent: "space-between",
          padding: "0 2rem", opacity: 0.5,
        }}>
          <span className="text-tag">{name}</span>
          <span className="text-tag">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
