import { useState } from "react";
import Tilt from "react-parallax-tilt";
import "../styles/SkillsCarousel.css";

type Card = {
	label: string;
	background: string;
};

const cards: Card[] = [
	{ label: "FRONTEND", background: "/IMG_1728.jpg" },
	{ label: "BACKEND", background: "/IMG_1725.jpg" },
	{ label: "DATABASE", background: "/IMG_1726.jpg" },
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
			{/* FLÈCHE GAUCHE */}
			<button
				type="button"
				className="sc-arrow left"
				onClick={prev}
				aria-label="Précédent"
			>
				‹
			</button>

			{/* SCÈNE */}
			<div
				className="sc-stage"
				style={
					{
						"--rx": "0deg",
						"--ry": "0deg",
					} as React.CSSProperties
				}
			>
				{cards.map((card, i) => {
					// distance circulaire
					let d = i - active;
					if (d > total / 2) d -= total;
					if (d < -total / 2) d += total;

					const isActive = d === 0;

					return (
						<div
							key={card.label}
							role="button"
							tabIndex={0}
							aria-pressed={isActive}
							className={`sc-card ${isActive ? "active" : ""}`}
							style={
								{
									transform: `
                  					translateX(${d * 275}px)
                  					translateZ(${isActive ? 120 : 40}px)
                  					rotateY(${d * 22}deg)
                  					scale(${isActive ? 1.15 : 0.9})
                				`,
									opacity: isActive ? 1 : 0.85,
									zIndex: 10 - Math.abs(d),
								} as React.CSSProperties
							}
							onClick={() => setActive(i)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setActive(i);
								}
							}}
						>
							{isActive ? (
								<Tilt
									className="sc-tilt"
									tiltMaxAngleX={8}
									tiltMaxAngleY={8}
									perspective={900}
									transitionSpeed={800}
									scale={1.03}
									glareEnable={false}
									onMove={({ tiltAngleX, tiltAngleY }) => {
										const stage = document.querySelector(
											".sc-stage",
										) as HTMLElement;
										if (!stage) return;

										stage.style.setProperty("--rx", `${tiltAngleX}deg`);
										stage.style.setProperty("--ry", `${tiltAngleY}deg`);
									}}
									onLeave={() => {
										const stage = document.querySelector(
											".sc-stage",
										) as HTMLElement;
										if (!stage) return;

										stage.style.setProperty("--rx", "0deg");
										stage.style.setProperty("--ry", "0deg");
									}}
								>
									<div
										className="sc-card-inner"
										style={{ backgroundImage: `url(${card.background})` }}
									/>
								</Tilt>
							) : (
								<div
									className="sc-card-inner"
									style={{ backgroundImage: `url(${card.background})` }}
								/>
							)}
						</div>
					);
				})}

				{/* TITRE CINÉMATIQUE */}
				<div className="sc-title show">{cards[active].label}</div>
			</div>

			{/* FLÈCHE DROITE */}
			<button
				type="button"
				className="sc-arrow right"
				onClick={next}
				aria-label="Suivant"
			>
				›
			</button>
		</div>
	);
}
