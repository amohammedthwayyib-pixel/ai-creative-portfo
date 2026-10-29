"use client";
import { useState } from "react";
import Image from "next/image";
// Loads only a thumbnail until clicked, then swaps in the privacy-friendly player.
export default function YouTube({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-ink">
      {on ? (
        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&vq=hd1080`} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      ) : (
        <button onClick={() => setOn(true)} aria-label={`Play ${title}`} className="group absolute inset-0">
          <Image src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" fill sizes="(min-width:768px) 700px, 100vw" className="object-cover" />
          <span className="absolute inset-0 grid place-items-center bg-ink/30 transition group-hover:bg-ink/10"><span className="glass grid h-16 w-16 place-items-center !rounded-full text-2xl">▶</span></span>
        </button>
      )}
    </div>
  );
}
