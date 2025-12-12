import { Link } from "react-router";
import "../styles/CV.css";

function CV() {
	return (
		<div className="cv-journey">
			{/* HERO */}
			<section className="cv-hero">
				<div className="cv-hero-overlay" />

				<div className="cv-hero-content">
					<Link to="/" className="cv-back">
						← Retour à la carte
					</Link>

					<h1 className="cv-title">MON PARCOURS</h1>
					<p className="cv-subtitle">Un voyage dans le développement web</p>

					<div className="cv-cards">
						<div className="cv-card">🎓 Formation</div>
						<div className="cv-card">⚛️ Stack</div>
						<div className="cv-card">💼 Projets</div>
						<div className="cv-card">🎯 Objectif</div>
					</div>
				</div>
			</section>

			{/* ITINÉRAIRE */}
			<section className="cv-itinerary">
				<h2>Itinéraire professionnel</h2>

				<div className="timeline">
					<div className="timeline-item">
						<span className="timeline-date">2023</span>
						<p>Découverte du développement web</p>
					</div>

					<div className="timeline-item">
						<span className="timeline-date">2024</span>
						<p>Formation Full Stack – React, TypeScript, Node.js</p>
					</div>

					<div className="timeline-item">
						<span className="timeline-date">2025</span>
						<p>Création de projets & recherche de poste</p>
					</div>
				</div>
			</section>

			{/* DOCUMENT */}
			<section className="cv-document">
				<h2>Document de voyage</h2>

				<div className="cv-frame">
					<iframe src="/CV_Cindy_COLOMBINE.pdf" title="CV de Cindy Colombine" />
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
		</div>
	);
}

export default CV;
