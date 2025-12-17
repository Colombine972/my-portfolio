import "../styles/FlightAnimation.css";
import type { FlightRoute } from "../data/flightRoutes";

type FlightAnimationProps = {
	route: FlightRoute;
	animationKey: number;
};

function FlightAnimation({ route, animationKey }: FlightAnimationProps) {
	return (
		<svg
			key={animationKey}
			className="flight-path"
			viewBox="0 0 1000 500"
			preserveAspectRatio="none"
		>
			{/* Trajet */}
			<path
				id={`${route.from}-${route.to}`}
				d={route.d}
				fill="none"
				stroke="#056acfff"
				strokeWidth="4"
				strokeDasharray="10 10"
			/>

			{/* Avion */}
			<image href="/avion.png" width="80" height="80" x="-40" y="-40">
				<animateMotion
					key={`${route.from}-${route.to}-${animationKey}`}
					dur={`${route.duration}s`}
					fill="freeze"
					rotate="auto"
				>
					<mpath href={`#${route.from}-${route.to}`} />
				</animateMotion>
			</image>
		</svg>
	);
}

export default FlightAnimation;
