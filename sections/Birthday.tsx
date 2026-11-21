"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";
import { fx } from "@/lib/fx";

export default function Birthday() {
  const [out, setOut] = useState(false);
  const wish = () => { if (out) return; setOut(true); fx.confetti(); };
  return (
    <section id="ch2" className="ch bg-gradient-to-b from-midnight via-burgundy to-[#2a1021]">
      <Reveal><p className="eyebrow">Chapter 02 · Happy Birthday</p></Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)] leading-tight">Happy Birthday,<br /><span className="font-script text-[1.2em] text-rose">My Favorite Person.</span></h2>
      </Reveal>
      <Reveal delay={0.3}><p className="eyebrow mt-4">{CFG.birthday}</p><p className="mx-auto max-w-xl opacity-85">{CFG.birthdayMessage}</p></Reveal>
      <div className="relative mx-auto my-8 h-[170px] w-[190px]" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-[60px] rounded-xl bg-rose"><div className="h-3.5 rounded-t-xl rounded-b-[40%] bg-cream" /></div>
        <div className="absolute inset-x-[25px] bottom-[60px] h-[50px] rounded-xl bg-blush"><div className="h-3.5 rounded-t-xl rounded-b-[40%] bg-cream" /></div>
        {[60, 92, 124].map((l) => (
          <div key={l} className="absolute bottom-[110px] h-[34px] w-2 rounded-sm bg-gold" style={{ left: l }}>
            <motion.div className="absolute -left-[3px] -top-5 h-5 w-3.5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[radial-gradient(#fff,#ffb347_60%,transparent)] drop-shadow-[0_0_8px_#ffb347]"
              animate={out ? { opacity: 0, y: -12, scale: 0.2 } : { scaleY: [1, 0.9, 1], rotate: [0, 3, 0] }}
              transition={out ? { duration: 0.6 } : { repeat: Infinity, duration: 0.4 }} />
          </div>
        ))}
      </div>
      <button className="btn" onClick={wish} disabled={out}>{out ? "Wish made 💫" : "Make a Wish ✨"}</button>
      <p aria-live="polite" className="mt-5 min-h-[3.4em] max-w-md font-script text-[clamp(1.5rem,5vw,2.2rem)] text-gold">{out ? CFG.wishMessage : ""}</p>
    </section>
  );
}
