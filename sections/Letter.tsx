"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";

export default function Letter() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const full = `${CFG.letter}\n${CFG.fromName}`;
  useEffect(() => {
    if (!open) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setText(full); return; }
    let i = 0; const t = window.setTimeout(() => {
      const iv = window.setInterval(() => { setText(full.slice(0, ++i)); if (i >= full.length) clearInterval(iv); }, 34);
      cleanup = () => clearInterval(iv);
    }, 800);
    let cleanup = () => {};
    return () => { clearTimeout(t); cleanup(); };
  }, [open, full]);
  return (
    <section id="ch4" className="ch bg-cream text-burgundy">
      <Reveal><p className="eyebrow !text-[#a07a30]">Chapter 04</p><h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)]">A Letter For You</h2></Reveal>
      <button onClick={() => setOpen(true)} aria-label="Buka amplop" className="relative my-8 h-[200px] w-[min(300px,80vw)] [perspective:800px]">
        <div className="absolute inset-0 rounded-md bg-rose shadow-[0_14px_30px_rgba(74,23,40,.3)]" />
        <motion.div className="absolute inset-x-0 top-0 h-[110px] origin-top bg-[#c97585]" style={{ clipPath: "polygon(0 0,100% 0,50% 100%)", zIndex: open ? 0 : 3 }}
          animate={{ rotateX: open ? 180 : 0 }} transition={{ duration: 0.9 }} />
        <div className="absolute inset-0 z-[2] rounded-md bg-gradient-to-br from-[#e5a0ad] to-rose" style={{ clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)" }} />
      </button>
      {!open && <button className="btn" onClick={() => setOpen(true)}>Read My Letter</button>}
      <motion.div initial={false} animate={open ? { opacity: 1, maxHeight: 1600 } : { opacity: 0, maxHeight: 0 }} transition={{ duration: 1.2 }}
        className="mt-7 w-full max-w-xl overflow-hidden rounded-md border border-[#e8d6b8] bg-[#fffdf8] text-left font-serif text-[clamp(1rem,3.6vw,1.2rem)] leading-[34px] shadow-[0_20px_50px_rgba(74,23,40,.18)] [background-image:repeating-linear-gradient(transparent_0_33px,rgba(214,180,119,.18)_33px_34px)]">
        <p className="whitespace-pre-wrap p-6">{text}</p>
      </motion.div>
    </section>
  );
}
