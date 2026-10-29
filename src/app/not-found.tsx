import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div><p className="font-mono text-amber">404</p><h1 className="mt-2 font-display text-5xl font-semibold">Cut. This page isn&apos;t in the timeline.</h1>
        <Link href="/" className="mt-8 inline-block rounded-full bg-violet px-6 py-3 font-medium text-ink">Back home</Link></div>
    </main>
  );
}
