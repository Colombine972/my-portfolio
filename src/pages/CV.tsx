import { Link } from "react-router";
import "../styles/CV.css";

function CV() {
	return (
		<div className="cv-journey">
			{/* HERO TOP */}
			<section className="cv-hero">
				<h1 className="japan-title">JAPAN</h1>
				<div className="cv-image">IMAGE</div>
				<div className="cv-overlay" />
				<div className="cv-hero-fade" />
			</section>
			<div className="cv-hero-content">
				<Link to="/" className="cv-back">
					← Retour à la carte
				</Link>
			</div>

			{/* ABOUT TITLE */}
			<section className="about-section">
				<div className="about-line" />
				<h2 className="about-title">DOCUMENT DE VOYAGE</h2>
				<div className="about-line" />
			</section>

			{/* DOCUMENT */}
			<section className="cv-document">
				<div className="cv-frame">
					<iframe
						src="/CV_Cindy_COLOMBINE.pdf#toolbar=0"
						title="CV de Cindy Colombine"
					/>
				</div>
				<a
					href="/CV_Cindy_COLOMBINE.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="cv-download"
				>
					Télécharger le CV
				</a>
			</section>

			{/* BOTTOM IMAGE */}
			<section className="japan-bottom">
				<div className="japan-bottom-overlay" />
			</section>
		</div>
	);
}

export default CV;
