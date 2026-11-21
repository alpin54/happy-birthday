"use client";
import { useEffect, useRef } from "react";
import { registerFx } from "@/lib/fx";

interface P { x: number; y: number; r: number; v: number; o: number }
interface Bit { x: number; y: number; vx: number; vy: number; a: number; s: number; c?: string; fade: number; glow?: boolean }

export default function FX() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!; const cx = cv.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, night = false, raf = 0;
    const resize = () => { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const n = reduced ? 0 : W < 640 ? 30 : 60;
    const ps: P[] = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 0.5, v: Math.random() * 0.4 + 0.1, o: Math.random() * 6 }));
    let confetti: Bit[] = [], hearts: Bit[] = [];
    const mkHeart = (x: number, y: number, vx: number, vy: number, fade: number, glow = false): Bit => ({ x, y, vx, vy, a: 1, s: Math.random() * 16 + 10, fade, glow });
    registerFx({
      confetti() { if (reduced) return; const cols = ["#D98C9A", "#D6B477", "#F6E7E9", "#ffffff"]; for (let i = 0; i < 120; i++) confetti.push({ x: W / 2, y: H / 2, vx: (Math.random() - 0.5) * 14, vy: Math.random() * -14 - 2, a: 1, s: Math.random() * 6 + 3, c: cols[i % 4], fade: 0.006 }); },
      burst(x, y, k) { if (reduced) return; for (let i = 0; i < k; i++) hearts.push(mkHeart(x, y, (Math.random() - 0.5) * 6, -Math.random() * 5 - 1, 0.012)); },
      heart() { if (reduced) return; hearts.push(mkHeart(Math.random() * W, H + 20, (Math.random() - 0.5), -Math.random() * 2 - 0.8, 0.002, true)); },
      night(v) { night = v; },
    });
    const ambient = window.setInterval(() => { if (!night && hearts.length < 12 && !reduced) hearts.push(mkHeart(Math.random() * W, H + 20, (Math.random() - 0.5), -Math.random() * 2 - 0.8, 0.002, true)); }, 1600);
    const loop = () => {
      cx.clearRect(0, 0, W, H);
      ps.forEach((p) => { p.y -= p.v; p.o += 0.01; if (p.y < 0) { p.y = H; p.x = Math.random() * W; } cx.globalAlpha = ((Math.sin(p.o) + 1) / 2) * 0.7; cx.fillStyle = night ? "#fff" : "#D6B477"; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); });
      confetti = confetti.filter((c) => c.a > 0);
      confetti.forEach((c) => { c.x += c.vx; c.y += c.vy; c.vy += 0.3; c.vx *= 0.99; c.a -= c.fade; cx.globalAlpha = Math.max(c.a, 0); cx.fillStyle = c.c ?? "#fff"; cx.fillRect(c.x, c.y, c.s, c.s * 0.6); });
      hearts = hearts.filter((h) => h.a > 0 && h.y > -40);
      hearts.forEach((h) => { h.x += h.vx; h.y += h.vy; h.a -= h.fade; cx.globalAlpha = Math.max(h.a, 0) * 0.8; cx.font = `${h.s}px serif`; cx.shadowColor = "#D98C9A"; cx.shadowBlur = night ? 14 : 0; cx.fillText("❤", h.x, h.y); cx.shadowBlur = 0; });
      cx.globalAlpha = 1; raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); clearInterval(ambient); window.removeEventListener("resize", resize); registerFx(null); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[5] h-full w-full" />;
}
