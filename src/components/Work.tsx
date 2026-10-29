"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import YouTube from "@/components/YouTube";
import { categories, projects, type Project } from "@/data/site";

export function Poster({ p, className = "" }: { p: Project; className?: string }) {
  const src = p.image ?? (p.youtube ? `https://img.youtube.com/vi/${p.youtube}/hqdefault.jpg` : undefined);
  if (src) return <Image src={src} alt={p.title} fill sizes="(min-width:768px) 400px, 100vw" className={`object-cover ${className}`} />;
  return <div aria-hidden className={`absolute inset-0 ${className}`} style={{ background: `radial-gradient(circle at 25% 20%, hsl(${p.hue} 90% 65%), transparent 55%), linear-gradient(135deg, hsl(${p.hue} 60% 28%), hsl(${(p.hue + 60) % 360} 70% 12%))` }} />;
}

function Card({ p, open }: { p: Project; open: () => void }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  return (
    <motion.button layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={open}
      onPointerMove={(e) => { if (e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 10); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10); }}
      onPointerLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group overflow-hidden rounded-2xl glass text-left">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Poster p={p} className="transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs text-amber backdrop-blur">{p.demo === false ? "Real campaign" : "Demo project"}</span>
        {(p.video || p.youtube) && <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs">Video</span>}
      </div>
      <div className="p-5"><h3 className="font-display text-xl font-medium">{p.title}</h3><p className="mt-1 text-sm text-bone/60">{p.desc}</p></div>
    </motion.button>
  );
}

export function BeforeAfter({ p }: { p: Project }) {
  const [v, setV] = useState(50);
  return (
    <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
      <div className="absolute inset-0"><Poster p={p} /></div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}><Poster p={p} className="grayscale brightness-75 contrast-75" /></div>
      <span className="absolute left-3 top-3 rounded bg-ink/70 px-2 py-0.5 text-xs">Before</span>
      <span className="absolute right-3 top-3 rounded bg-ink/70 px-2 py-0.5 text-xs">After</span>
      <div className="absolute inset-y-0 w-0.5 bg-amber" style={{ left: `${v}%` }} />
      <input type="range" min={0} max={100} value={v} onChange={(e) => setV(+e.target.value)} aria-label="Before and after comparison" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  );
}

function Detail({ p, close }: { p: Project; close: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [close]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <motion.div role="dialog" aria-modal="true" aria-label={p.title} initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: 40 }} onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-bone/10 bg-panel p-5 sm:rounded-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-sm text-amber">{p.demo === false ? "Real campaign from my internship" : "Demo project"}</p><h3 className="font-display text-3xl font-semibold">{p.title}</h3></div>
          <Link href={`/project/${p.id}`} className="mr-2 rounded-full border border-bone/25 px-4 py-1.5 text-sm">Open page</Link><button autoFocus onClick={close} className="rounded-full border border-bone/25 px-4 py-1.5 text-sm">Close</button>
        </div>
        {p.youtube ? <div className="mt-4"><YouTube id={p.youtube} title={p.title} /></div> : p.beforeAfter ? <BeforeAfter p={p} /> : p.video ? <video className="mt-4 aspect-video w-full rounded-xl" src={p.video} controls playsInline preload="metadata" /> : <div className="relative mt-4 aspect-video overflow-hidden rounded-xl"><Poster p={p} /></div>}
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          <div><dt className="text-sm text-bone/50">Objective</dt><dd className="mt-1">{p.objective}</dd></div>
          <div><dt className="text-sm text-bone/50">My role</dt><dd className="mt-1">{p.role}</dd></div>
          <div><dt className="text-sm text-bone/50">Tools</dt><dd className="mt-1">{p.tools.join(", ")}</dd></div>
          <div><dt className="text-sm text-bone/50">Creative process</dt><dd className="mt-1"><ol className="list-decimal pl-5">{p.process.map((s) => <li key={s}>{s}</li>)}</ol></dd></div>
        {p.results && <div className="sm:col-span-2"><dt className="text-sm text-bone/50">Results</dt><dd className="mt-1"><ul className="list-disc pl-5">{p.results.map((r) => <li key={r}>{r}</li>)}</ul></dd></div>}
        </dl>
      </motion.div>
    </motion.div>
  );
}

export default function Work({ limit, filters = true }: { limit?: number; filters?: boolean }) {
  const [cat, setCat] = useState<string>("all");
  const [sel, setSel] = useState<Project | null>(null);
  const list = projects.filter((p) => cat === "all" || p.category === cat).slice(0, limit);
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/20 blur-[100px]" />
      <h2 className="bg-gradient-to-r from-white via-bone to-white/60 bg-clip-text text-center font-display text-4xl font-semibold text-transparent sm:text-5xl">Projects</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-bone/70">The first project is a real campaign. The rest are labelled demos that show how I plan and edit.</p>
      {filters && <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c.id} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c.id ? "border-violet bg-violet text-ink" : "border-bone/20 hover:border-bone/50"}`}>{c.label} <span className="ml-1 text-xs opacity-60">{c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length}</span></button>
        ))}
      </div>}
      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">{list.map((p) => <Card key={p.id} p={p} open={() => setSel(p)} />)}</AnimatePresence>
      </motion.div>
      {limit && <Link href="/project" className="mx-auto mt-8 block w-fit rounded-full border border-bone/25 px-6 py-3">All projects →</Link>}
      <AnimatePresence>{sel && <Detail p={sel} close={() => setSel(null)} />}</AnimatePresence>
    </section>
  );
}
