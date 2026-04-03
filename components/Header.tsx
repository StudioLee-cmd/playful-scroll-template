"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fp-header">
        <div className="fp-header-bar">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="text-tag">{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <span className="text-tag" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {siteConfig.name}
          </span>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 10,
              background: siteConfig.colors.purple,
              color: siteConfig.colors.yellow,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "4rem",
            }}
          >
            {siteConfig.nav.menuItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="display-text"
                  style={{ fontSize: "8vw" }}
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
