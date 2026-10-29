"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const tracks = [
  { name: "Strategy", clips: [{ l: "Research", s: 0, e: 28 }, { l: "Content calendar", s: 30, e: 72 }] },
  { name: "Video", clips: [{ l: "Reel edit", s: 12, e: 46 }, { l: "Ad cut", s: 48, e: 90 }] },
  { name: "AI video", clips: [{ l: "Storyboard", s: 5, e: 34 }, { l: "Generated shots", s: 36, e: 78 }] },
  { name: "Meta Ads", clips: [{ l: "Creative variants", s: 40, e: 64 }, { l: "Test plan", s: 66, e: 98 }] },
];
const tc = (p: number) => { const f = Math.round((p / 100) * 30 * 24); return `00:${String(Math.floor(f / 24)).padStart(2, "0")}:${String(f % 24).padStart(2, "0")}`; };

export default function Hero() {
  const [p, setP] = useState(38);
  return (
    <section id="home" className="relative isolate flex min-h-screen flex-col justify-center text-center mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute left-1/2 top-[35%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-700/15 blur-[120px]" /><div className="absolute -right-24 bottom-0 h-[420px] w-[520px] rounded-full bg-fuchsia-700/10 blur-[120px]" /></div>
      <p className="glass mx-auto inline-block !rounded-full px-4 py-1.5 text-sm text-bone/80"><span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />{site.name} · Available for hire</p>
      <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
        <motion.span initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }} className="block bg-gradient-to-b from-white to-white/50 bg-clip-text pb-1 text-transparent">DIGITAL MARKETING</motion.span>
        <motion.span initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }} className="block bg-gradient-to-r from-violet via-indigo-300 to-fuchsia-300 bg-clip-text pb-2 text-transparent">EXECUTIVE</motion.span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone/70">Paid social, performance marketing and short-form video, backed by Google Ads, Analytics and SEO certifications.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#projects" className="rounded-full bg-bone px-6 py-3 font-medium text-ink transition hover:brightness-90">View work</a>
        <Link href="/contact" className="glass !rounded-full px-6 py-3 transition hover:border-bone/40">Contact me</Link>
        <a href={site.resume} download className="rounded-full border border-bone/25 px-6 py-3 transition hover:border-bone/60">Download CV</a>
      </div>
      <ul className="mt-6 flex justify-center gap-5 text-sm text-bone/70">{site.socials.map((x) => <li key={x.label}><a href={x.href} target="_blank" rel="noopener noreferrer" className="hover:text-bone">{x.label}</a></li>)}</ul>
      <a href="#projects" className="mt-10 inline-block text-xs uppercase tracking-widest text-bone/45 hover:text-bone/80">Scroll</a>

      <div className="mt-16 glass p-4 text-left sm:p-6" style={{ perspective: 1200 }}>
        <div className="mb-4 flex items-center justify-between text-sm text-bone/60">
          <span>Drag the playhead to see what runs at each moment</span>
          <span className="font-mono text-amber" aria-live="off">{tc(p)}</span>
        </div>
        <div className="relative">
          {tracks.map((t, i) => (
            <div key={t.name} className="flex items-center gap-3 py-1">
              <span className="w-16 shrink-0 text-xs text-bone/50 sm:w-20">{t.name}</span>
              <div className="relative h-9 flex-1 rounded bg-ink/60">
                {t.clips.map((c, j) => {
                  const on = p >= c.s && p < c.e;
                  return (
                    <motion.div key={c.l} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.15 * i + 0.1 * j, duration: 0.6, ease: "easeOut" }}
                      style={{ left: `${c.s}%`, width: `${c.e - c.s}%`, transformOrigin: "left" }}
                      className={`absolute top-0.5 h-8 truncate rounded px-2 text-xs leading-8 transition-colors ${on ? "bg-violet text-ink" : "bg-violet/20 text-bone/70"}`}>{c.l}</motion.div>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="pointer-events-none absolute inset-y-0 right-0 left-[4.75rem] sm:left-[5.75rem]">
            <div className="absolute inset-y-0 w-px bg-amber" style={{ left: `${p}%` }}><span className="absolute -left-1.5 -top-1 h-3 w-3 rounded-sm bg-amber" /></div>
          </div>
          <input type="range" min={0} max={100} value={p} onChange={(e) => setP(+e.target.value)} aria-label="Timeline playhead"
            className="absolute inset-y-0 right-0 left-[4.75rem] h-full w-[calc(100%-4.75rem)] cursor-ew-resize opacity-0 sm:left-[5.75rem] sm:w-[calc(100%-5.75rem)]" />
        </div>
      </div>
    </section>
  );
}
