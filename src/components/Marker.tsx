import { useState } from "react";
import AirportTooltip from "./AirportTooltip";
import "../styles/Marker.css";

function Marker({ top, left, label, onClick }) {
	const [hover, setHover] = useState(false);

	return (
		<div
			className="marker-container"
			style={{ top, left }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={onClick}
		>
			<img
				src="/pointInteractif.png"
				alt="point de navigation"
				className="marker-icon"
			/>

			{/* Infobulle */}
			{hover && <AirportTooltip label={label} />}
		</div>
	);
}

export default Marker;
{
	/* tout est en rouge car le onClick est undefined */
}
