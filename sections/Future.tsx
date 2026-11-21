import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";

export default function Future() {
  return (
    <section id="ch6" className="ch bg-gradient-to-b from-midnight via-[#5a2a45] to-[#c9715f]">
      <Reveal><p className="eyebrow">Chapter 06 · Our Future</p></Reveal>
      <Reveal delay={0.15}><h2 className="max-w-3xl font-serif text-[clamp(1.9rem,6vw,3.6rem)] leading-tight">There’s Still So Much Life I Want to Experience With You.</h2></Reveal>
      <ul className="mt-8 grid gap-3 font-serif text-[clamp(1.15rem,4vw,1.6rem)] text-cream">
        {CFG.future.map((f, i) => (<Reveal key={f} delay={0.2 + i * 0.12}><li className="list-none"><span className="text-gold">✦ </span>{f}</li></Reveal>))}
      </ul>
    </section>
  );
}
