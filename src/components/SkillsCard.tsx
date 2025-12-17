import "../styles/SkillCard.css";

type Props = {
	title: string;
	icon: string;
};

function SkillCard({ title, icon }: Props) {
	return (
		<div className="skill-card">
			<div className="skill-icon">{icon}</div>
			<h3>{title}</h3>
			<p>Clique pour découvrir les compétences</p>
		</div>
	);
}

export default SkillCard;
