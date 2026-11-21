"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";

function Ph({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-rose to-burgundy">
      {src ? <Image src={src} alt={alt} fill sizes="(max-width:640px) 90vw, 33vw" className="object-cover" /> : <Heart className="text-cream/80" size={40} />}
    </div>
  );
}

export default function Gallery() {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setSel(null); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  const p = sel !== null ? CFG.photos[sel] : null;
  return (
    <section id="ch3" className="ch bg-gradient-to-b from-[#2a1021] to-midnight">
      <Reveal><p className="eyebrow">Chapter 03</p><h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)]">Our Little Memories</h2></Reveal>
      <div className="mt-9 w-full max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {CFG.photos.map((ph, i) => (
          <Reveal key={ph.title} className="mb-6 break-inside-avoid">
            <button onClick={() => setSel(i)} className={`w-full bg-cream p-3 pb-4 text-left text-burgundy shadow-[0_14px_34px_rgba(0,0,0,.5)] transition duration-300 hover:rotate-0 hover:scale-105 focus-visible:rotate-0 focus-visible:scale-105 ${i % 2 ? "rotate-[1.8deg]" : "-rotate-2"}`}>
              <Ph src={ph.src} alt={ph.title} />
              <small className="mt-2.5 block text-xs tracking-widest text-[#9a6b78]">{ph.date}</small>
              <b className="block font-serif text-lg">{ph.title}</b>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {p && (
          <motion.div role="dialog" aria-modal="true" className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-4 bg-black/90 p-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <div className="w-[min(86vw,420px)]" onClick={(e) => e.stopPropagation()}><Ph src={p.src} alt={p.title} /></div>
            <div className="max-w-sm"><b className="font-serif text-2xl">{p.title}</b><br /><small className="text-gold">{p.date}</small><p className="mt-2 opacity-85">{p.caption}</p></div>
            <button className="btn flex items-center gap-2" onClick={() => setSel(null)}><X size={16} /> Tutup</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
