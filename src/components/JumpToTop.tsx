"use client";
import { useEffect, useState } from "react";
export default function JumpToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 700); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  if (!show) return null;
  return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="glass fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center !rounded-full text-lg">↑</button>;
}
