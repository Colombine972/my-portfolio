import { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		phonenumber: "",
		commentaires: "",
	});

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault(); // empêche le rechargement de la page
		console.log("Données envoyées :", formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Vous avez une question ?</h3>
			<div className="formulaire">
				<input
					type="text"
					name="name"
					placeholder="Votre nom"
					aria-label="nom"
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<input
					type="tel"
					name="phonenumber"
					placeholder="Votre numéro"
					aria-label="Numéro"
					value={formData.phonenumber}
					onChange={handleChange}
					required
				/>

				<textarea
					name="commentaires"
					placeholder="Votre message"
					aria-label="commentaires"
					value={formData.commentaires}
					onChange={handleChange}
					required
				/>

				<button type="submit">Envoyer</button>
			</div>
		</form>
	);
}

export default ContactForm;
