"use client";

import Image from "next/image";

/**
 * FloatingCharacter — The animated floating illustration.
 * Uses the same infinite translate keyframe as Flying Papers.
 */

interface FloatingCharacterProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FloatingCharacter({
  src,
  alt = "Character illustration",
  width = 300,
  height = 300,
  className = "",
  style,
}: FloatingCharacterProps) {
  return (
    <div className={`floating ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
