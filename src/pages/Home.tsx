import { useNavigate } from "react-router";
import { useState } from "react";
import Marker from "../components/Marker";
import { markerData } from "../data/markerData";
import FlightAnimation from "../components/FlightAnimation";
import "../styles/Home.css";

type Section = "outside" | "about" | "skills" | "projects" | "contact" | "cv";

function Home() {
	const navigate = useNavigate();
	const [activeRouteId, setActiveRouteId] = useState<string | null>(null);

	const [currentSection, setCurrentSection] = useState<Section>("outside");

	const [animationKey, setAnimationKey] = useState(0);
	const markerConfig: Record<string, { section: Section; path: string }> = {
		"A propos": {
			section: "about",
			path: "/about",
		},
		Skills: {
			section: "skills",
			path: "/skills",
		},
		Projets: {
			section: "projects",
			path: "/projects",
		},
		Contact: {
			section: "contact",
			path: "/contact",
		},
		CV: {
			section: "cv",
			path: "/cv",
		},
	};

	const handleMarkerClick = (label: string) => {
		const config = markerConfig[label];
		if (!config) return;

		const targetSection = config.section;

		const routeId = `route-${currentSection}-${targetSection}`;

		setActiveRouteId(routeId);
		setCurrentSection(targetSection);

		setAnimationKey((k) => k + 1);

		// ⛔ TEMPORAIREMENT DÉSACTIVÉ
		// setTimeout(() => {
		// 	navigate(config.path);
		// }, 4000);
	};

	return (
		<div className="map-container">
			<img src="/carteMonde.png" className="map" alt="Carte du monde" />

			<div className="header-overlay">
				<h1 className="title">ODYSSEY</h1>
				<p className="subtitle">Mon voyage dans le développement web</p>
			</div>

			{activeRouteId && (
				<FlightAnimation
					activeRouteId={activeRouteId}
					animationKey={animationKey}
				/>
			)}

			{markerData.map((marker) => (
				<Marker
					key={marker.id}
					top={marker.top}
					left={marker.left}
					label={marker.label}
					onClick={() => handleMarkerClick(marker.label)}
				/>
			))}
		</div>
	);
}

export default Home;
