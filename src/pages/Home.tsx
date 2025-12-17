import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FlightAnimation from "../components/FlightAnimation";
import Marker from "../components/Marker";
import { markerData } from "../data/markerData";
import "../styles/Home.css";
import type { FlightRoute } from "../data/flightRoutes";
import { flightRoutes } from "../data/flightRoutes";
import { markerPositions } from "../data/markerPositions";
import type { Section } from "../types/sections";

function Home() {
	const navigate = useNavigate();
	const [activeRoute, setActiveRoute] = useState<FlightRoute | null>(null);

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

	useEffect(() => {
		const savedSection = localStorage.getItem("lastSection") as Section | null;

		if (savedSection) {
			setCurrentSection(savedSection);
		}
	}, []);

	const handleMarkerClick = (label: string) => {
		const config = markerConfig[label];
		if (!config) return;

		const targetSection = config.section;

		const route = flightRoutes.find(
			(r) => r.from === currentSection && r.to === targetSection,
		);

		if (!route) {
			console.warn("Aucune route pour", currentSection, "→", targetSection);
			return;
		}

		setActiveRoute(route);
		setCurrentSection(targetSection);
		localStorage.setItem("lastSection", targetSection);
		setAnimationKey((k) => k + 1);

		// ⛔ TEMPORAIREMENT DÉSACTIVÉ
		setTimeout(() => {
			navigate(config.path);
		}, 4000);
	};

	return (
		<div className="map-container">
			<img src="/carteMonde.png" className="map" alt="Carte du monde" />

			<div className="header-overlay">
				<h1 className="title">ODYSSEY</h1>
				<p className="subtitle">Mon voyage dans le développement web</p>
			</div>

			{activeRoute && (
				<FlightAnimation route={activeRoute} animationKey={animationKey} />
			)}

			{!activeRoute && (
				<svg
					role="img"
					aria-label="avion statique"
					className="flight-path"
					viewBox="0 0 1000 500"
				>
					<image
						href="/avion.png"
						width="80"
						height="80"
						x={markerPositions[currentSection].x - 40}
						y={markerPositions[currentSection].y - 40}
					/>
				</svg>
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
