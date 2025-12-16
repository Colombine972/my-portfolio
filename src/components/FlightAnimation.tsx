import "../styles/FlightAnimation.css";
import { flightRoutes } from "../data/flightRoutes";

type FlightAnimationProps = {
	activeRouteId: string;
	animationKey: number;
};

function FlightAnimation({
	activeRouteId,
	animationKey,
}: FlightAnimationProps) {
	const activeRoute = flightRoutes.find((route) => route.id === activeRouteId);

	if (!activeRoute) return null;

	return (
		<svg
			key={animationKey}
			className="flight-path"
			viewBox="0 0 1000 500"
			preserveAspectRatio="none"
		>
			<path
				id={activeRoute.id}
				d={activeRoute.d}
				fill="none"
				stroke="#056acfff"
				strokeWidth="4"
				strokeDasharray="10 10"
			/>
			<image href="/avion.png" width="80" height="80" x="-40" y="-40">
				<animateMotion
					dur={`${activeRoute.duration}s`}
					fill="freeze"
					rotate="auto"
					key={activeRoute.id}
				>
					<mpath href={`#${activeRoute.id}`} />
				</animateMotion>
			</image>
		</svg>
	);
}

export default FlightAnimation;
