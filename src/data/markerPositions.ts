import type { Section } from "../types/sections";

export const markerPositions: Record<Section, { x: number; y: number }> = {
	outside: { x: -40, y: 150 },
	about: { x: 210, y: 150 },
	skills: { x: 420, y: 120 },
	projects: { x: 640, y: 100 },
	contact: { x: 470, y: 275 },
	cv: { x: 710, y: 340 },
};
