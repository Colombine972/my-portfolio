import { Link } from "react-router";
import "../styles/CV.css";

function CV() {
	return (
		<div className="cv-page">
			<h1 className="cv-title">Mon CV</h1>

			<div className="cv-actions">
				<Link to="/" className="back-button">
					← Retour à l'accueil
				</Link>

				<a
					href="/CV_Cindy_COLOMBINE.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="download-button"
				>
					Ouvrir mon CV
				</a>
			</div>

			<iframe
				src="/CV_Cindy_COLOMBINE.pdf"
				className="cv-viewer"
				title="CV de Cindy Colombine"
			/>
		</div>
	);
}

export default CV;
