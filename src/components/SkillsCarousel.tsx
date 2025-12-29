import { useState } from "react";
import "../styles/SkillsCarousel.css";

const cards = [
	{
		label: "Frontend",
		background: "/IMG_1728.jpg",
	},
	{
		label: "Backend",
		background: "/IMG_1725.jpg",
	},
	{
		label: "Database",
		background: "/IMG_1726.jpg",
	},
];

function mod(n: number, m: number) {
	return ((n % m) + m) % m;
}

export default function SkillsCarousel() {
	const [active, setActive] = useState(0);
	const total = cards.length;

	const prev = () => setActive((i) => mod(i - 1, total));
	const next = () => setActive((i) => mod(i + 1, total));

	return (
		<div className="sc-wrap">
			<button className="sc-arrow left" onClick={prev} aria-label="previous">
				‹
			</button>

			<div className="sc-stage">
				{cards.map((card, i) => {
					// distance circulaire signée la plus courte (-2..2)
					let d = i - active;
					if (d > total / 2) d -= total;
					if (d < -total / 2) d += total;

					const isActive = d === 0;

					return (
						<div
							key={card.label}
							className={`sc-card ${isActive ? "active" : ""}`}
							style={{
								backgroundImage: `
                  linear-gradient(
                    to bottom,
                    rgba(255,255,255,0.15),
                    rgba(255,255,255,0.25)
                  ),
                  url(${card.background})
                `,
								transform: `
                  translateX(${d * 275}px)
                  translateZ(${isActive ? 120 : 40}px)
                  rotateY(${d * 22}deg)
                  scale(${isActive ? 1.15 : 0.9})
                `,
								opacity: isActive ? 1 : 0.55,
								zIndex: 10 - Math.abs(d),
								filter: Math.abs(d) >= 2 ? "blur(0.6px)" : "none",
							}}
							onClick={() => setActive(i)}
						>
							{card.label}
						</div>
					);
				})}
			</div>

			<button className="sc-arrow right" onClick={next} aria-label="next">
				›
			</button>
		</div>
	);
}
