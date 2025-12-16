import { useNavigate } from "react-router";
import { useState } from "react";
import Marker from "../components/Marker";
import { markerData } from "../data/markerData";
import FlightAnimation from "../components/FlightAnimation";
import "../styles/Home.css";

function Home() {
	const navigate = useNavigate();
	const [activeRouteId, setActiveRouteId] = useState<string | null>(null);

	const markerConfig: Record<string, { routeId: string; path: string }> = {
		"A propos": {
			routeId: "route-about-skills",
			path: "/about",
		},
		Skills: {
			routeId: "route-skills-projects",
			path: "/skills",
		},
		Projets: {
			routeId: "route-projects-contact",
			path: "/projects",
		},
		Contact: {
			routeId: "route-contact-cv",
			path: "/contact",
		},
		CV: {
			routeId: "route-contact-cv",
			path: "/cv",
		},
	};

	const handleMarkerClick = (label: string) => {
		const config = markerConfig[label];
		if (!config) return;

		setActiveRouteId(config.routeId);

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

			{activeRouteId && <FlightAnimation activeRouteId={activeRouteId} />}

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
