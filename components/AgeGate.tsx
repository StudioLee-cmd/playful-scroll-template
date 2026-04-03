"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharacterSpot from "./CharacterSpot";
import { siteConfig } from "@/lib/site-config";

/**
 * AgeGate — Full-screen overlay, first thing visitors see.
 *
 * Exact layout from Flying Papers:
 * - Deep purple background, full viewport
 * - Brand name small at top center
 * - MASSIVE yellow text "HOW OLD ARE YOU?" filling the width
 * - Character peeking through between text lines
 * - Two buttons: "I'm over 18" (solid) + "I'm not over 18" (ghost)
 */

export default function AgeGate() {
  const [visible, setVisible] = useState(true);
  const { ageGate, colors, name } = siteConfig;

  if (!ageGate?.enabled) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="age-gate"
          style={{
            backgroundColor: ageGate.bg || colors.purpleDark,
            color: ageGate.textColor || colors.gold,
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Brand name at top */}
          <div
            style={{
              position: "absolute",
              top: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 5,
            }}
          >
            <span
              className="text-tag"
              style={{ color: ageGate.textColor || colors.gold, opacity: 0.8 }}
            >
              {name}
            </span>
          </div>

          {/* Massive heading */}
          <div className="age-gate-text" style={{ width: "90%", maxWidth: "1200px" }}>
            {ageGate.heading.map((line: string, i: number) => (
              <motion.div
                key={i}
                className="display-text text-mega"
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: ageGate.textColor || colors.yellow,
                }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.1,
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Character peeking between text */}
          <motion.div
            style={{
              position: "absolute",
              top: "38%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              width: "clamp(8rem, 12vw, 16rem)",
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CharacterSpot
              src={ageGate.characterImage}
              size={150}
              color={ageGate.textColor || colors.gold}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="age-gate-actions"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              className="btn btn-solid"
              onClick={() => setVisible(false)}
            >
              {ageGate.confirmText || "I'm over 18, let me in"}
            </button>
            <a
              href={ageGate.denyHref || "#"}
              className="btn btn-ghost"
              style={{ color: ageGate.textColor || colors.gold }}
            >
              {ageGate.denyText || "I'm not over 18 yet"}
            </a>
          </motion.div>

          <div className="dot-pattern" style={{ opacity: 0.03 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
