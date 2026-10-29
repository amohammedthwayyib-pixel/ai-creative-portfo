import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import { BeforeAfter, Poster } from "@/components/Work";
import YouTube from "@/components/YouTube";

type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return projects.map((p) => ({ id: p.id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  return p ? { title: p.title, description: p.desc } : {};
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-28">
      <Link href="/project" className="text-sm text-bone/60 hover:text-bone">← All projects</Link>
      <p className="mt-6 text-sm text-amber">{p.demo === false ? "Real campaign from my internship" : "Demo project"}</p>
      <h1 className="font-display text-4xl font-semibold sm:text-6xl">{p.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-bone/70">{p.desc}</p>
      <div className="mt-8">
        {p.youtube ? <YouTube id={p.youtube} title={p.title} />
          : p.beforeAfter ? <BeforeAfter p={p} />
          : p.video ? <video className="aspect-video w-full rounded-xl" src={p.video} controls playsInline preload="metadata" />
          : <div className="relative aspect-video overflow-hidden rounded-xl"><Poster p={p} /></div>}
      </div>
      <dl className="glass mt-8 grid gap-6 p-6 sm:grid-cols-2">
        <div><dt className="text-sm text-bone/50">Objective</dt><dd className="mt-1">{p.objective}</dd></div>
        <div><dt className="text-sm text-bone/50">My role</dt><dd className="mt-1">{p.role}</dd></div>
        <div><dt className="text-sm text-bone/50">Tools</dt><dd className="mt-1">{p.tools.join(", ")}</dd></div>
        <div><dt className="text-sm text-bone/50">Creative process</dt><dd className="mt-1"><ol className="list-decimal pl-5">{p.process.map((s) => <li key={s}>{s}</li>)}</ol></dd></div>
        {p.results && <div className="sm:col-span-2"><dt className="text-sm text-bone/50">Results</dt><dd className="mt-1"><ul className="list-disc pl-5">{p.results.map((r) => <li key={r}>{r}</li>)}</ul></dd></div>}
      </dl>
    </main>
  );
}
