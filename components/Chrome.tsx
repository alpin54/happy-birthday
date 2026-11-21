"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Music2, Pause } from "lucide-react";
import { CFG } from "@/content/config";
import FX from "@/components/FX";

const IDS = ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7"];

export default function Chrome({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(0);
  const [active, setActive] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [toast, setToast] = useState("");
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const a = window.setInterval(() => setMsg((m) => (m + 1) % CFG.loadingMessages.length), 900);
    const b = window.setTimeout(() => setLoading(false), 2400);
    return () => { clearInterval(a); clearTimeout(b); };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      let c = 0;
      IDS.forEach((id, i) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < window.innerHeight / 2) c = i; });
      setActive(c);
    };
    const onMove = (e: MouseEvent) => { if (cursor.current) cursor.current.style.transform = `translate(${e.clientX - 13}px, ${e.clientY - 13}px)`; };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, []);

  const say = (t: string) => { setToast(t); window.setTimeout(() => setToast(""), 2600); };
  const toggle = (quiet = false) => {
    if (!CFG.music) { if (!quiet) say("Tambahkan file musik di content/config.ts 🎵"); return; }
    if (!audio.current) { audio.current = new Audio(CFG.music); audio.current.loop = true; }
    if (playing) { audio.current.pause(); setPlaying(false); }
    else audio.current.play().then(() => setPlaying(true)).catch(() => {});
  };
  useEffect(() => {
    const start = () => { if (!playing) toggle(true); };
    window.addEventListener("start-music", start);
    return () => window.removeEventListener("start-music", start);
  });

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && (
          <motion.div key="load" className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight px-5 text-center" exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="text-5xl">❤️</motion.div>
            <p className="mt-4 font-script text-3xl text-rose">{CFG.loadingMessages[msg]}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: bar }} className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-rose to-gold" />
      <nav aria-label="Chapters" className="fixed right-3 top-3 z-[55] flex gap-2 rounded-full border border-gold/30 bg-midnight/55 px-3.5 py-2.5 backdrop-blur-md">
        {IDS.map((id, i) => (
          <a key={id} href={`#${id}`} aria-label={`Chapter ${i + 1}`} className={`block h-2.5 w-2.5 rounded-full transition ${active === i ? "bg-gold shadow-[0_0_10px_#D6B477]" : "bg-blush/35"}`} />
        ))}
      </nav>
      <button onClick={() => toggle()} aria-label="Putar atau jeda musik" className="fixed bottom-4 left-4 z-[56] grid h-12 w-12 place-items-center rounded-full border border-gold bg-burgundy/80 text-cream backdrop-blur">
        {playing ? <Pause size={18} /> : <Music2 size={18} />}
      </button>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Kembali ke atas"
        className={`fixed bottom-4 right-4 z-[56] grid h-12 w-12 place-items-center rounded-full border border-gold bg-burgundy/80 text-cream backdrop-blur transition ${showTop ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <ArrowUp size={18} />
      </button>
      <div ref={cursor} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-[26px] w-[26px] rounded-full border border-gold [@media(hover:hover)_and_(pointer:fine)]:block" />
      <div role="status" className={`fixed bottom-20 left-1/2 z-[70] max-w-[88%] -translate-x-1/2 rounded-xl border border-gold bg-burgundy px-4 py-2.5 text-sm transition ${toast ? "opacity-100" : "opacity-0"}`}>{toast}</div>
      <FX />
      {children}
    </MotionConfig>
  );
}
