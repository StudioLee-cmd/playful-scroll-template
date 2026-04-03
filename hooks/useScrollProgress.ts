"use client";

import { useEffect, useState, useRef, RefObject } from "react";

/**
 * Tracks scroll progress through a container element.
 * Returns 0 at the top of the element, 1 when scrolled past.
 * This drives the sticky scroll sections exactly like Flying Papers.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const totalHeight = el.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / totalHeight));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

/**
 * Returns true when element is in viewport.
 * threshold = how much of the element must be visible (0-1).
 */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.2
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
