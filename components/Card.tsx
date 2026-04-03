"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Card — The bordered product/category card from Flying Papers.
 * 3px dark border, colored background, icon + label + CTA.
 */

interface CardProps {
  label: string;
  icon?: string;
  image?: string;
  href: string;
  cta?: string;
  bg: string;
  textColor: string;
  className?: string;
}

export default function Card({
  label,
  icon,
  image,
  href,
  cta = "Shop",
  bg,
  textColor,
  className = "",
}: CardProps) {
  return (
    <Link
      href={href}
      className={`card ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="card__content" style={{ color: textColor }}>
        <p className="text-button" style={{ textAlign: "center" }}>
          {label}
        </p>

        {icon && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={icon}
              alt={label}
              width={80}
              height={80}
              style={{ width: "60%", height: "auto", maxWidth: "8rem" }}
            />
          </div>
        )}

        {image && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "4px" }}>
            <Image
              src={image}
              alt={label}
              width={300}
              height={200}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        )}

        <p className="text-tag">{cta}</p>
      </div>
    </Link>
  );
}
