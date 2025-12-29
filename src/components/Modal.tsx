import "../styles/Modal.css";

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<button
				type="button"
				className="modal-close"
				onClick={onClose}
				aria-label="Fermer"
			>
				×
			</button>

			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{/* ✅ wrapper qui porte le layout */}
				<div className="modal-inner">{children}</div>
			</div>
		</div>
	);
}

export default Modal;
