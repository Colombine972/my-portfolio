import "../styles/Home.css";
import Marker from "../components/Marker";
import { markerData } from "../data/markerData";
import { useNavigate } from "react-router";

function Home() {
	const navigate = useNavigate();

	return (
		<div className="map-container">
			<div className="header-overlay">
				<h1 className="title">ODYSSEY</h1>
				<p className="subtitle">Mon voyage dans le développement web</p>
			</div>

			{/* Ici iront les marqueurs interactifs */}
			{markerData.map((marker) => (
				<Marker
					key={marker.id}
					top={marker.top}
					left={marker.left}
					label={marker.label}
					onClick={() => handleClick(marker.label)}
				/>
			))}
		</div>
	);
}

export default Home;
