"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * CharacterSpot — Placeholder for character illustrations.
 * Shows an animated bouncing circle with dashed border when no image provided.
 * When image is set, shows the actual character with float animation.
 */

interface CharacterSpotProps {
  src?: string;
  alt?: string;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CharacterSpot({
  src,
  alt = "Character",
  size = 200,
  color = "currentColor",
  className = "",
  style,
}: CharacterSpotProps) {
  // If we have an actual image, show it with float animation
  if (src && src !== "" && !src.includes("placeholder")) {
    return (
      <motion.div
        className={`floating ${className}`}
        style={style}
        animate={{
          y: [0, -8, 0, 5, 0],
          x: [0, 5, 0, -3, 0],
          rotate: [0, 2, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </motion.div>
    );
  }

  // Animated placeholder circle
  return (
    <div className={`placeholder-character ${className}`} style={style}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `3px dashed ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        animate={{
          scale: [1, 1.03, 1, 0.98, 1],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner bouncing ball */}
        <motion.div
          style={{
            width: size * 0.35,
            height: size * 0.35,
            borderRadius: "50%",
            background: color,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -size * 0.15, 0, -size * 0.08, 0],
            x: [0, size * 0.05, 0, -size * 0.05, 0],
            scale: [1, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Label */}
        <motion.span
          style={{
            position: "absolute",
            bottom: size * 0.15,
            fontSize: Math.max(10, size * 0.07),
            fontFamily: "var(--font-mono), monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            opacity: 0.4,
            color,
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Character
        </motion.span>
      </motion.div>
    </div>
  );
}
