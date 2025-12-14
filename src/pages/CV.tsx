import { Link } from "react-router";
import "../styles/CV.css";

function CV() {
	return (
		<div className="cv-journey">
			{/* HERO TOP */}
			<section className="cv-hero">
				<h1 className="australie-title">
					DEVELOPPEUR <br />
					WEB
				</h1>
				<h1 className="full-title">
					FULL <br />
					STACK
				</h1>
				<div className="cv-image"></div>
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
				<div className="cv-document-fade" />
				<div className="cv-frame">
					<iframe
						src="/CV_Cindy_COLOMBINE.pdf#toolbar=0"
						title="CV de Cindy Colombine"
					/>
				</div>
			</section>

			{/* BOTTOM IMAGE */}
			<section className="japan-bottom">
				<div className="japan-bottom-fade-top" />
				<div className="japan-bottom-overlay" />
				<div className="cv-glass-card">
					<h3>Envie d’échanger ?</h3>
					<p>Télécharger mon CV ou planifier un rendez-vous.</p>

					<div className="cv-glass-actions">
						<a
							href="/CV_Cindy_COLOMBINE.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Télécharger le CV
						</a>

						<a
							href="https://calendly.com/colombine-cindy/echange-autour-de-mon-cv"
							target="_blank"
							rel="noopener noreferrer"
							className="primary"
						>
							Echange de 15 min autour de mon CV
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default CV;
