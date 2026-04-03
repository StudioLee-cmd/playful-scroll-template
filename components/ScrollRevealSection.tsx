"use client";

import { useRef } from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import Card from "./Card";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Link from "next/link";

interface Props {
  previewText: string[];
  heading: string[][];
  bg: string;
  textColor: string;
  characterImage?: string;
  products: { name: string; icon?: string; cta: string; href: string; bg: string; textColor: string }[];
  shopAllHref: string;
}

export default function ScrollRevealSection({
  previewText, heading, bg, textColor, characterImage, products, shopAllHref,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  const previewFade = Math.max(0, 1 - p * 5);
  const headingFade = p > 0.15 ? Math.min(1, (p - 0.15) * 4) : 0;
  const headingShift = p > 0.45 ? (p - 0.45) * 80 : 0;
  const panelIn = p > 0.4 ? Math.min(100, (1 - Math.min(1, (p - 0.4) * 2.5)) * 105) : 105;
  const charFade = p > 0.2 ? Math.min(1, (p - 0.2) * 3) : 0;

  return (
    <section style={{ background: bg, color: textColor }}>
      <div ref={ref} style={{ minHeight: "350vh", position: "relative" }}>
        <div className="sticky-inner" style={{ background: bg, position: "relative" }}>

          {/* Preview text (fades out as you scroll) */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: previewFade, pointerEvents: previewFade < 0.1 ? "none" : "auto",
          }}>
            <div className="display-text" style={{ fontSize: "7vw", width: "85%" }}>
              {previewText.map((line, i) => (
                <div key={i} className="display-line">{line}</div>
              ))}
            </div>
          </div>

          {/* Animated heading (reveals, shifts left) */}
          <div style={{
            position: "absolute", top: "50%", width: "75%",
            left: `calc(50% - ${headingShift}px)`,
            transform: "translate(-50%, -50%)",
            opacity: headingFade, zIndex: 2,
          }}>
            <SplitText lines={heading} fontSize="7vw" stagger={0.03} once={false} />
          </div>

          {/* Character */}
          {characterImage && (
            <div style={{
              position: "absolute", left: "8%", top: "18%",
              opacity: charFade, width: "clamp(100px, 14vw, 200px)", zIndex: 1,
            }}>
              <Image src={characterImage} alt="" width={200} height={200}
                style={{ width: "100%", height: "auto" }} />
            </div>
          )}

          {/* Product panel — slides in from right */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "clamp(280px, 40%, 500px)", height: "100%",
            transform: `translateX(${panelIn}%)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "8rem 2rem", zIndex: 3, gap: "1.5rem",
          }}>
            {products.map((prod) => (
              <div key={prod.name} style={{ width: "100%", maxWidth: "24rem", height: "22rem" }}>
                <Card label={prod.name} icon={prod.icon} href={prod.href}
                  cta={prod.cta} bg={prod.bg} textColor={prod.textColor} />
              </div>
            ))}
            <Link href={shopAllHref} className="fp-btn"
              style={{ background: textColor, color: bg, marginTop: "1rem" }}>
              Shop all
            </Link>
          </div>

          <div className="dot-pattern" />
        </div>
      </div>
    </section>
  );
}
