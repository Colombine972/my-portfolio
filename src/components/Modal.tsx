import "../styles/Modal.css";

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			{/* CROIX AU NIVEAU DE L'OVERLAY */}
			<button
				type="button"
				className="modal-close"
				onClick={onClose}
				aria-label="Fermer"
			>
				×
			</button>

			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default Modal;
