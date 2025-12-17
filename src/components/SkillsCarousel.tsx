import { useState } from "react";
import SkillsCard from "../components/SkillsCard";
import "../styles/SkillsCarousel.css";

const cards = [
	{
		title: "Front-end",
		icon: "💻",
	},
	{
		title: "Back-end",
		icon: "🧠",
	},
	{
		title: "Database",
		icon: "🗄️",
	},
	{
		title: "Tools",
		icon: "🛠️",
	},
];

function SkillsCarousel() {
	const [index, setIndex] = useState(0);

	const prev = () => setIndex((i) => (i === 0 ? cards.length - 1 : i - 1));

	const next = () => setIndex((i) => (i === cards.length - 1 ? 0 : i + 1));

	return (
		<div className="carousel">
			<button
				className="carousel-btn left"
				onClick={prev}
				aria-label="Previous"
			>
				‹
			</button>

			<div className="carousel-track">
				<SkillsCard title={cards[index].title} icon={cards[index].icon} />
			</div>

			<button className="carousel-btn right" onClick={next} aria-label="Next">
				›
			</button>
		</div>
	);
}

export default SkillsCarousel;
