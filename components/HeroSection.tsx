"use client";

import { useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);
  const { hero } = siteConfig;

  return (
    <section style={{ background: hero.bg, color: hero.textColor }}>
      <div ref={ref} className="sticky-outer">
        <div className="sticky-inner" style={{ flexDirection: "column", background: hero.bg }}>

          {/* Eyebrow */}
          <div style={{
            position: "absolute", top: "12%", width: "100%", textAlign: "center",
            opacity: Math.max(0, 1 - p * 4), zIndex: 2,
          }}>
            <SplitText lines={[hero.eyebrow]} tag="h3" fontSize="8vw" stagger={0.1} />
          </div>

          {/* Main heading */}
          <div style={{
            width: "90%", zIndex: 2,
            transform: `translateY(${p * -30}%)`,
            opacity: Math.max(0, 1 - p * 2),
          }}>
            <SplitText lines={hero.heading} fontSize="10vw" stagger={0.03} />
          </div>

          {/* Character image spot */}
          {hero.characterImage && (
            <div style={{
              position: "absolute", bottom: "8%", left: "50%",
              transform: `translateX(-50%) translateY(${p * 100}%)`,
              opacity: Math.max(0, 1 - p * 3),
              zIndex: 1, width: "clamp(120px, 20vw, 300px)",
            }}>
              <Image src={hero.characterImage} alt="" width={300} height={300}
                style={{ width: "100%", height: "auto" }} priority />
            </div>
          )}

          <div className="dot-pattern" />
        </div>
      </div>
    </section>
  );
}
