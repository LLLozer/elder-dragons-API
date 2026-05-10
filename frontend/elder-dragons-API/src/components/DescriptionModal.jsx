import { createPortal } from "react-dom";
import "../styles/DescriptionModal.css"

export const DescriptionModal = ({ description, monsterName, onClose }) => {
  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2>{monsterName}</h2>
          <h3>Título: {description.title}</h3>
        </div>
        <div className="modal__body">
          <div>
            <h3>Habilidades</h3>
            <p>{description.abilities}</p>
            <h3>Comportamiento</h3>
            <p>{description.behaviour}</p>
          </div>
          <img src={description.icon} alt={description.title} />
        </div>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>,
    document.body,
  );
};
