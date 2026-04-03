"use client";

import { useRef, ReactNode } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * StickySection — The core scroll mechanic from Flying Papers.
 *
 * Creates a tall container (300vh mobile, 200vh desktop) with a sticky inner
 * that stays pinned at top:0 while you scroll through. The scroll progress
 * (0-1) is passed to children via render prop.
 */

interface StickySectionProps {
  children: (progress: number) => ReactNode;
  bg?: string;
  textColor?: string;
  className?: string;
}

export default function StickySection({
  children,
  bg,
  textColor,
  className = "",
}: StickySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <div ref={containerRef} className={`sticky-section__spacer ${className}`}>
      <div
        className="sticky-section__inner"
        style={{
          backgroundColor: bg,
          color: textColor,
        }}
      >
        {children(progress)}
      </div>
    </div>
  );
}
