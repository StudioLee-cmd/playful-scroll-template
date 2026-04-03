"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/**
 * Header — Fixed header with animated menu text and logo.
 * Matches Flying Papers: menu button left, logo center (in border frame), cart right.
 */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 3rem",
          pointerEvents: "none",
        }}
      >
        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            pointerEvents: "auto",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          <span className="text-tag" style={{ overflow: "hidden", display: "block", position: "relative", height: "1.4rem" }}>
            <motion.span
              style={{ display: "block" }}
              animate={{ y: menuOpen ? "-100%" : "0%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Menu
            </motion.span>
            <motion.span
              style={{ display: "block", position: "absolute", top: "100%", left: 0 }}
              animate={{ y: menuOpen ? "-100%" : "0%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Close
            </motion.span>
          </span>
        </button>

        {/* Center logo */}
        <Link
          href="/"
          style={{
            pointerEvents: "auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {siteConfig.nav.logo ? (
            <Image
              src={siteConfig.nav.logo}
              alt={siteConfig.name}
              width={120}
              height={30}
              style={{ height: "2.4rem", width: "auto" }}
              priority
            />
          ) : (
            <span className="text-button">{siteConfig.name}</span>
          )}
        </Link>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9,
              backgroundColor: siteConfig.colors.purple,
              color: siteConfig.colors.yellow,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            {siteConfig.nav.menuItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="heading-display"
                  style={{
                    fontSize: "clamp(4rem, 8vw, 12rem)",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
