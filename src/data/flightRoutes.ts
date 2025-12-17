import type { Section } from "../pages/Home";

export type FlightRoute = {
	from: Section;
	to: Section;
	d: string;
	duration: number;
};

export const flightRoutes: FlightRoute[] = [
	//	ABOUT
	{
		from: "outside",
		to: "about",
		d: "M-40 150 Q90 80 230 150",
		duration: 4,
	},
	{
		from: "about",
		to: "skills",
		d: "M230 150 L430 120",
		duration: 4,
	},
	{
		from: "about",
		to: "projects",
		d: "M230 150 Q330 50 640 100",
		duration: 4,
	},
	{
		from: "about",
		to: "contact",
		d: "M260 160 L480 275",
		duration: 4,
	},
	{
		from: "about",
		to: "cv",
		d: "M250 150 L720 340",
		duration: 4,
	},

	// SKILLS
	{
		from: "outside",
		to: "skills",
		d: "M-40 150 Q90 80 430 120",
		duration: 4,
	},
	{
		from: "skills",
		to: "about",
		d: "M450 130 L230 150",
		duration: 4,
	},
	{
		from: "skills",
		to: "contact",
		d: "M430 150  L480 275",
		duration: 4,
	},
	{
		from: "skills",
		to: "projects",
		d: "M430 120 L640 100",
		duration: 4,
	},
	{
		from: "skills",
		to: "cv",
		d: "M430 150 L720 340",
		duration: 4,
	},

	// PROJECTS
	{
		from: "outside",
		to: "projects",
		d: "M-40 150 Q90 80 640 100",
		duration: 4,
	},
	{
		from: "projects",
		to: "about",
		d: "M640 100 Q330 50 230 150",
		duration: 4,
	},
	{
		from: "projects",
		to: "skills",
		d: "M640 100 Q540 40 430 120",
		duration: 4,
	},
	{
		from: "projects",
		to: "contact",
		d: "M640 100 L480 275",
		duration: 4,
	},
	{
		from: "projects",
		to: "cv",
		d: "M640 110 L720 340",
		duration: 4,
	},
	//	CONTACT
	{
		from: "outside",
		to: "contact",
		d: "M-40 150 Q250 40 480 275",
		duration: 4,
	},
	{
		from: "contact",
		to: "about",
		d: "M480 275 L230 150",
		duration: 4,
	},
	{
		from: "contact",
		to: "skills",
		d: "M480 275 L430 150",
		duration: 4,
	},
	{
		from: "contact",
		to: "projects",
		d: "M480 275 L640 100",
		duration: 4,
	},
	{
		from: "contact",
		to: "cv",
		d: "M500 275 L720 340",
		duration: 4,
	},
	//	CV
	{
		from: "outside",
		to: "cv",
		d: "M-40 150 Q90 120 720 340",
		duration: 4,
	},
	{
		from: "cv",
		to: "about",
		d: "M720 340 L250 150",
		duration: 4,
	},
	{
		from: "cv",
		to: "skills",
		d: "M720 340 L 430 150",
		duration: 4,
	},
	{
		from: "cv",
		to: "projects",
		d: "M720 340 L640 120",
		duration: 4,
	},
	{
		from: "cv",
		to: "contact",
		d: "M720 340 L500 275",
		duration: 4,
	},
];
