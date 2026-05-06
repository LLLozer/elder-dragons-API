import { useDescription } from "../hooks/useDescription";
import "../styles/MonsterCard.css";
import { DescriptionModal } from "./DescriptionModal";

export const MonsterCard = ({ monster }) => {
  const { monster_name, habitat, size, generation, image, elements } = monster;
  const { descriptions } = useDescription();

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
        <div>
          {descriptions.map((description) => (
            <DescriptionModal key={description.id} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
