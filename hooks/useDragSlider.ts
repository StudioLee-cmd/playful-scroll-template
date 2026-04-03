"use client";

import { useRef, useState, useCallback, MouseEvent, TouchEvent } from "react";

/**
 * Custom drag slider hook — replicates Flying Papers' LinearSlider.
 * Supports mouse drag and touch swipe with momentum.
 */
export function useDragSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animFrame = useRef<number>(0);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;

    setIsDragging(true);
    startX.current = e.pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
    velocity.current = 0;
    cancelAnimationFrame(animFrame.current);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const track = trackRef.current;
      if (!track) return;

      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      track.scrollLeft = scrollLeft.current - walk;

      // Track velocity for momentum
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        velocity.current = (e.pageX - lastX.current) / dt;
      }
      lastX.current = e.pageX;
      lastTime.current = now;
    },
    [isDragging]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    const track = trackRef.current;
    if (!track) return;

    // Apply momentum
    let v = velocity.current * 15;
    const decelerate = () => {
      if (Math.abs(v) < 0.5) return;
      track.scrollLeft -= v;
      v *= 0.95;
      animFrame.current = requestAnimationFrame(decelerate);
    };
    decelerate();
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;

    startX.current = e.touches[0].pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
    lastX.current = e.touches[0].pageX;
    lastTime.current = Date.now();
    velocity.current = 0;
    cancelAnimationFrame(animFrame.current);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const track = trackRef.current;
    if (!track) return;

    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    track.scrollLeft = scrollLeft.current - walk;

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (e.touches[0].pageX - lastX.current) / dt;
    }
    lastX.current = e.touches[0].pageX;
    lastTime.current = now;
  }, []);

  return {
    trackRef,
    isDragging,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleEnd,
      onMouseLeave: handleEnd,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleEnd,
    },
  };
}
