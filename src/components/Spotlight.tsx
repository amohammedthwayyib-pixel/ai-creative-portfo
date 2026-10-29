"use client";
import { useEffect, useRef } from "react";
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => ref.current?.style.setProperty("background", `radial-gradient(420px circle at ${e.clientX}px ${e.clientY}px, rgb(139 123 255 / .12), transparent 70%)`);
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-30" />;
}
