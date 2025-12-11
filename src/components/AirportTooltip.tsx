import "../styles/AirportTooltip.css";

interface TooltipProps {
	label: string;
}

function AirportTooltip({ label }: TooltipProps) {
	return (
		<div className="airport-tooltip">
			<div className="tooltip-title">DESTINATION</div>
			<div className="tooltip-separator"></div>

			<div className="tooltip-content">
				<span className="plane">✈</span>
				<span className="label">{label}</span>
			</div>
		</div>
	);
}

export default AirportTooltip;
