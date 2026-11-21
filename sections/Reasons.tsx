"use client";
import { Gift, Heart, Smile, Sparkles, Star, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";

const ICONS = { smile: Smile, heart: Heart, sparkles: Sparkles, gift: Gift, sun: Sun, star: Star };

export default function Reasons() {
  return (
    <section id="ch5" className="ch bg-[linear-gradient(180deg,#FFF8F0_0,#F6E7E9_8%,#3a1424_30%,#17131A)]">
      <Reveal><p className="eyebrow mt-28">Chapter 05</p><h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)]">Why You Are Special</h2></Reveal>
      <div className="mt-9 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CFG.reasons.map((r, i) => {
          const Icon = ICONS[r.icon];
          return (
            <Reveal key={r.title} delay={i * 0.08}>
              <motion.article whileHover={{ y: -8 }} className="group h-full rounded-2xl border border-gold/30 bg-blush/10 p-7 backdrop-blur-md transition hover:border-gold hover:shadow-[0_0_34px_rgba(217,140,154,.35)]">
                <Icon className="mx-auto mb-3 text-rose transition group-hover:scale-125 group-hover:-rotate-6" size={34} />
                <h3 className="mb-2 font-serif text-xl text-gold">{r.title}</h3>
                <p className="text-[.95rem] opacity-85">{r.text}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
