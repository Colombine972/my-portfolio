import { useState } from "react";
import AirportTooltip from "./AirportTooltip";
import "../styles/Marker.css";

interface MarkerProps {
	top: string;
	left: string;
	label: string;
	onClick: () => void;
}

function Marker({ top, left, label, onClick }: MarkerProps) {
	const [hover, setHover] = useState(false);

	return (
		<button
			type="button"
			className="marker-container"
			style={{ top: `${top}%`, left: `${left}%` }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={onClick}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					onClick();
				}
			}}
		>
			<img
				src="/pointInteractif.png"
				alt="point de navigation"
				className="marker-icon"
			/>

			{/* Infobulle */}
			{hover && <AirportTooltip label={label} />}
		</button>
	);
}

export default Marker;
{
	/* tout est en rouge car le onClick est undefined */
}
