"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  label: string;
  icon?: string;
  image?: string;
  href: string;
  cta?: string;
  bg: string;
  textColor: string;
}

export default function Card({ label, icon, image, href, cta = "Shop", bg, textColor }: CardProps) {
  return (
    <Link href={href} className="fp-card" style={{ background: bg }}>
      <div className="fp-card-content" style={{ color: textColor }}>
        <span className="text-button">{label}</span>

        {icon && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={icon} alt={label} width={80} height={80}
              style={{ width: "50%", height: "auto", maxWidth: "8rem" }} />
          </div>
        )}

        {image && (
          <div style={{ flex: 1, overflow: "hidden", borderRadius: "4px", width: "100%" }}>
            <Image src={image} alt={label} width={300} height={200}
              style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        )}

        <span className="text-tag">{cta}</span>
      </div>
    </Link>
  );
}
