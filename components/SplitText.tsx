"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * SplitText — Word-by-word reveal animation.
 *
 * Each line is a horizontal row. Each word in the line slides up from below.
 * Two copies: static (invisible, holds space) + animated (positioned over it).
 *
 * fontSize: pass a CSS value like "12vw" or "8rem"
 */

interface SplitTextProps {
  lines: string[][];
  tag?: "h1" | "h2" | "h3" | "p";
  fontSize?: string;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export default function SplitText({
  lines,
  tag: Tag = "h2",
  fontSize = "10vw",
  className = "",
  stagger = 0.04,
  once = true,
}: SplitTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.3 });
  let wordIdx = 0;

  return (
    <Tag
      ref={ref}
      className={`display-text ${className}`}
      style={{ fontSize }}
    >
      {lines.map((words, lineIdx) => (
        <span key={lineIdx} className="display-line">
          {words.map((word) => {
            const i = wordIdx++;
            return (
              <span
                key={`${lineIdx}-${i}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  position: "relative",
                  lineHeight: "inherit",
                }}
              >
                {/* Static copy for layout */}
                <span style={{ visibility: "hidden" }}>{word}</span>
                {/* Animated copy */}
                <motion.span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    willChange: "transform",
                  }}
                  initial={{ y: "115%", rotate: 6 }}
                  animate={
                    inView
                      ? { y: "0%", rotate: 0 }
                      : { y: "115%", rotate: 6 }
                  }
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * stagger,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
