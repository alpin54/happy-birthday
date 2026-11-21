"use client";
import { CFG } from "@/content/config";
import Reveal from "@/components/Reveal";
import { fx } from "@/lib/fx";

export default function Hero() {
	const open = () => {
		document.body.classList.remove("lock");
		fx.burst(window.innerWidth / 2, window.innerHeight / 2, 50);
		window.dispatchEvent(new Event("start-music"));
		document.getElementById("ch2")?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<section
			id="ch1"
			className="ch bg-[radial-gradient(ellipse_at_50%_30%,#6b2740,#4A1728_45%,#17131A)]"
		>
			<Reveal>
				<p className="eyebrow">A special day for someone special</p>
			</Reveal>
			<Reveal delay={0.2}>
				<h1 className="font-serif text-[clamp(2.4rem,9vw,5.6rem)] leading-tight">
					Today, The Universe
					<br />
					Celebrates{" "}
					<span className="font-script text-rose">{CFG.herName}</span>
				</h1>
			</Reveal>
			<Reveal delay={0.4}>
				<p className="mx-auto my-5 max-w-xl opacity-85">
					And I’m the luckiest person to be part of your story.
				</p>
			</Reveal>
			<Reveal delay={0.6}>
				<button className="btn" onClick={open}>
					Open Your Surprise ❤️
				</button>
			</Reveal>
		</section>
	);
}
