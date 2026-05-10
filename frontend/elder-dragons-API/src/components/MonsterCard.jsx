import { useState } from "react";
import { DescriptionModal } from "./DescriptionModal";
import "../styles/MonsterCard.css";

export const MonsterCard = ({ monster }) => {
  const {
    monster_name,
    habitat,
    size,
    generation,
    image,
    elements,
    description,
  } = monster;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  console.log(monster_name, description);

  return (
    <div className="monster-card">
      <img src={image} alt={monster_name} />

      <div className="monster-info">
        <h2>{monster_name}</h2>
        <p>
          <span>Hábitat:</span> {habitat}
        </p>
        <p>
          <span>Tamaño:</span> {size}
        </p>
        <p>
          <span>Generación:</span> {generation}
        </p>

        {elements.length > 0 ? (
          <div className="monster-elements">
            <span>Elementos: </span>
            {elements.map((el) => (
              <span
                key={el.id}
                className={`element element--${el.element_name.toLowerCase()}`}
              >
                {el.element_name}
              </span>
            ))}
          </div>
        ) : (
          <p>Sin elementos</p>
        )}
        {description && (
          <>
            <button onClick={handleModal}>Ver descripción</button>
            {isOpen && (
              <DescriptionModal
                description={description}
                monsterName={monster_name}
                onClose={() => setIsOpen(false)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
