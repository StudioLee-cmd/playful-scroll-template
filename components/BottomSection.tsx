"use client";

import { useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/lib/site-config";

export default function BottomSection() {
  const { bottom } = siteConfig;
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  return (
    <section style={{ background: bottom.bg, color: bottom.textColor }}>
      <div ref={ref} className="sticky-outer">
        <div className="sticky-inner" style={{ flexDirection: "column", background: bottom.bg, position: "relative" }}>

          {/* Eyebrow */}
          <div style={{
            position: "absolute", top: "18%", width: "90%", textAlign: "center",
            opacity: Math.max(0, 1 - p * 4), zIndex: 2,
          }}>
            <SplitText lines={bottom.eyebrow} tag="h3" fontSize="7vw" stagger={0.08} />
          </div>

          {/* Main heading */}
          <div style={{ width: "90%", opacity: p > 0.15 ? Math.min(1, (p - 0.15) * 4) : 0, zIndex: 2 }}>
            <SplitText lines={bottom.heading} fontSize="10vw" stagger={0.03} once={false} />
          </div>

          {/* Character */}
          {bottom.characterImage && (
            <div style={{
              position: "absolute", bottom: "5%", left: "50%",
              transform: `translateX(-50%) translateY(${Math.max(0, 50 - p * 100)}vh)`,
              width: "clamp(120px, 18vw, 280px)", zIndex: 1,
            }}>
              <Image src={bottom.characterImage} alt="" width={280} height={280}
                style={{ width: "100%", height: "auto" }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
