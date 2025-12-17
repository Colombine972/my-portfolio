import SkillsCarousel from "./SkillsCarousel";

function SkillsModal() {
	return (
		<div className="skills-modal">
			<h2 className="skills-title">My Skills</h2>
			<p className="skills-subtitle">
				Technologies & outils utilisés dans mon parcours
			</p>

			<SkillsCarousel />
		</div>
	);
}

export default SkillsModal;
