import { useState, useEffect } from "react";
import { useMonsterSearch } from "../hooks/useMonsterSearch";
import { useForm } from "../hooks/useForm";
import { useElements } from "../hooks/useElements";
import "../styles/MonsterUpdate.css";
import Swal from "sweetalert2";

export const MonsterUpdate = () => {
  const [searchName, setSearchName] = useState("");
  const { monster, loading, error, searchMonster } = useMonsterSearch();
  const { elements } = useElements();

  const { form, setForm, handleChange, handleSubmit } = useForm({
    initialValue: {
      monster_name: "",
      habitat: "",
      size: "",
      generation: "",
      image: "",
      elements: [],
    },
  });

  useEffect(() => {
    if (monster) {
      setForm({
        monster_name: monster.monster_name,
        habitat: monster.habitat,
        size: monster.size,
        generation: monster.generation,
        image: monster.image,
        elements: monster.elements.map((el) => el.id),
      });
    }
  }, [monster]);

  const handleElementChange = (elementId) => {
    const already = form.elements.includes(elementId);
    const updated = already
      ? form.elements.filter((id) => id !== elementId)
      : [...form.elements, elementId];
    handleChange({ target: { name: "elements", value: updated } });
  };

  return (
    <div className="update">
      <div className="update__search">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="button" onClick={() => searchMonster(searchName)}>
          Buscar
        </button>
      </div>

      {loading && <p>Buscando...</p>}
      {error && <p>Error: {error}</p>}

      {monster && (
        <div className="update__form">
          <div className="update__card">
            <img src={monster.image} alt={monster.monster_name} />
            <h3>{monster.monster_name}</h3>
          </div>

          <h2>Actualizar Dragón Anciano</h2>
          <input
            type="text"
            name="monster_name"
            value={form.monster_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="habitat"
            value={form.habitat}
            onChange={handleChange}
          />
          <input
            type="text"
            name="size"
            value={form.size}
            onChange={handleChange}
          />
          <input
            type="text"
            name="generation"
            value={form.generation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

          <div className="elements-check">
            <p>Elementos:</p>
            {elements.map((el) => (
              <label key={el.id}>
                <input
                  type="checkbox"
                  checked={form.elements.includes(el.id)}
                  onChange={() => handleElementChange(el.id)}
                />
                {el.element_name}
              </label>
            ))}
          </div>

          <div className="update__buttons">
            <button
              type="button"
              onClick={async () => {
                const data = await handleSubmit(
                  `http://localhost:3004/api/monsters/${monster.id}`,
                  "PUT",
                );
                if (data) {
                  Swal.fire({
                    icon: "success",
                    title: "¡Actualización exitosa!",
                    text: `${form.monster_name} fue actualizado correctamente`,
                    confirmButtonColor: "#e2b96f",
                    background: "#1a1a2e",
                    color: "#fff",
                  });
                }
              }}
            >
              Actualizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
