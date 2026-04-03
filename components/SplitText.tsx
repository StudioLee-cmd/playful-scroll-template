"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * SplitText — Word-by-word reveal animation.
 *
 * Exact replica of Flying Papers' text animation system:
 * - Each word is wrapped in an overflow:hidden container
 * - The word translates up from below with a slight rotation
 * - Words stagger with a delay between each
 * - Each line is a separate flex row
 *
 * lines = array of arrays: [["Let", "me", "show"], ["you", "where"]]
 */

interface SplitTextProps {
  lines: string[][];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export default function SplitText({
  lines,
  as: Tag = "h2",
  className = "",
  staggerDelay = 0.05,
  once = true,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  let wordIndex = 0;

  return (
    <Tag
      ref={ref}
      className={`heading-display ${className}`}
      style={{ opacity: isInView ? 1 : 0.01 }}
    >
      {lines.map((line, lineIdx) => (
        <span
          key={lineIdx}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.2em",
            flexWrap: "wrap",
          }}
        >
          {line.map((word) => {
            const i = wordIndex++;
            return (
              <span
                key={`${lineIdx}-${word}-${i}`}
                className="split-word"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  lineHeight: "inherit",
                }}
              >
                {/* Static copy (for layout) */}
                <span
                  style={{
                    visibility: "hidden",
                    display: "inline-block",
                  }}
                >
                  {word}
                </span>
                {/* Animated copy (absolute positioned over static) */}
                <motion.span
                  className="split-word-inner"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                  }}
                  initial={{
                    y: "110%",
                    rotate: 8,
                  }}
                  animate={
                    isInView
                      ? {
                          y: "0%",
                          rotate: 0,
                        }
                      : {
                          y: "110%",
                          rotate: 8,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * staggerDelay,
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
