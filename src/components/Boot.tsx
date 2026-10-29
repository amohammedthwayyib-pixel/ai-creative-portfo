"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Boot() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setN((v) => { if (v >= 100) { clearInterval(t); setDone(true); return 100; } return v + 4; }), 40);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} role="status" aria-label="Loading portfolio" className="fixed inset-0 z-[60] grid place-items-center bg-ink">
          <div className="w-64 text-center"><p className="font-display text-3xl font-semibold">MT</p><p className="mt-2 text-sm text-bone/60">Loading timeline</p>
            <div className="mt-4 h-0.5 bg-bone/10"><div className="h-full bg-amber" style={{ width: `${n}%` }} /></div><p className="mt-2 font-mono text-xs text-amber">{n}%</p></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
