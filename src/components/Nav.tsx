"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [["About", "/about"], ["Projects", "/project"], ["Skills", "/skills"], ["Results", "/#results"], ["Contact", "/contact"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-3">
      <motion.nav layout aria-label="Main" style={{ borderRadius: 28 }} transition={{ type: "spring", stiffness: 260, damping: 28 }} className="glass w-full max-w-5xl overflow-hidden px-4 py-2.5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-lg font-semibold">MT</Link>
          <div className="hidden gap-5 overflow-x-auto whitespace-nowrap text-sm md:flex [scrollbar-width:none]">
            {links.map(([l, h]) => <Link key={h} href={h} className="py-1 text-bone/75 hover:text-violet">{l}</Link>)}
          </div>
          <button className="rounded-full border border-bone/20 px-4 py-1 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>{open ? "Close" : "Menu"}</button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-3 grid grid-cols-2 gap-1 pb-2 md:hidden">
              {links.map(([l, h]) => <li key={h}><Link href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-bone/85 hover:bg-bone/10">{l}</Link></li>)}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
