import SkillsCarousel from "./SkillsCarousel";
import "../styles/skillsModal.css";

export default function SkillsModal() {
	return (
		<div className="skills-modal">
			<div className="skills-bg">
				<div className="skills-stag">
					<h2 className="skills-title">Mes compétences</h2>

					<div className="skills-other">
						<SkillsCarousel />
					</div>
				</div>
			</div>
		</div>
	);
}
