import { useState } from "react";

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

			<input
				type="text"
				name="name"
				placeholder="Votre nom"
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<input
				type="tel"
				name="phonenumber"
				placeholder="Votre numéro"
				value={formData.phonenumber}
				onChange={handleChange}
				required
			/>

			<textarea
				name="commentaires"
				placeholder="Votre message"
				value={formData.commentaires}
				onChange={handleChange}
				required
			/>

			<button type="submit">Envoyer</button>
		</form>
	);
}

export default ContactForm;
