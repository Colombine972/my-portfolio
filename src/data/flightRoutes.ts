export type FlightRoute = {
	id: string;
	d: string;
	duration: number;
};

export const flightRoutes: FlightRoute[] = [
	{
		id: "route-outside-about",
		d: "M-40 150 Q90 80 230 150",
		duration: 4,
	},
	{
		id: "route-about-skills",
		d: "M230 150 Q330 50 430 120",
		duration: 4,
	},

	{
		id: "route-skills-projects",
		d: "M430 120 Q540 40 640 100",
		duration: 4,
	},
	{
		id: "route-projects-contact",
		d: "M640 100 Q560 260 480 275",
		duration: 4,
	},
	{
		id: "route-contact-cv",
		d: "M480 275 Q620 360 720 340",
		duration: 4,
	},
];
