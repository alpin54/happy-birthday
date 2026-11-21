"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";
import { fx } from "@/lib/fx";

export default function Finale() {
	const [done, setDone] = useState(false);
	useEffect(() => {
		if (!done) return;
		const iv = window.setInterval(() => fx.heart(), 350);
		return () => {
			clearInterval(iv);
			fx.night(false);
		};
	}, [done]);
	const go = () => {
		setDone(true);
		fx.night(true);
		fx.confetti();
	};
	return (
		<section
			id="ch7"
			className={`ch transition-colors duration-[2000ms] ${done ? "bg-[radial-gradient(ellipse_at_50%_0,#2b1b4a,#0b0814_70%)]" : "bg-midnight"}`}
		>
			{!done && (
				<>
					<Reveal>
						<p className="eyebrow">Chapter 07 · The Final Surprise</p>
					</Reveal>
					<Reveal delay={0.15}>
						<h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)]">
							If I Could Make One Wish Today…
						</h2>
					</Reveal>
					<Reveal delay={0.3}>
						<button className="btn mt-8" onClick={go}>
							Click for One Last Surprise ❤️
						</button>
					</Reveal>
				</>
			)}
			{done && (
				<>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2.5, delay: 0.4 }}
						className="max-w-xl whitespace-pre-line font-serif text-[clamp(1.1rem,4vw,1.5rem)] leading-loose"
					>
						{CFG.finalMessage}
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 3 }}
						className="mt-8 font-script text-3xl text-rose"
					>
						{CFG.signature}
					</motion.p>
				</>
			)}
		</section>
	);
}
