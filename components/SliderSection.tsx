"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import Card from "./Card";
import { useDragSlider } from "@/hooks/useDragSlider";
import { useInView } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

export default function SliderSection() {
  const { explore } = siteConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.05);
  const { trackRef, isDragging, handlers } = useDragSlider();

  return (
    <section
      ref={ref}
      className="color-transition"
      style={{
        background: explore.bg, color: explore.textColor,
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "10rem 0 6rem",
      }}
    >
      <div style={{ padding: "0 4rem", marginBottom: "5rem" }}>
        <SplitText lines={explore.heading} fontSize="14vw" stagger={0.08} />
      </div>

      <div className="fp-slider">
        <div
          ref={trackRef}
          className="fp-slider-track"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          {...handlers}
        >
          {explore.items.map((item, i) => (
            <motion.div
              key={item.label}
              className="fp-slider-item"
              style={{ height: "30rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            >
              <Card
                label={item.label} icon={item.icon} href={item.href}
                bg={item.bg} textColor={item.textColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
