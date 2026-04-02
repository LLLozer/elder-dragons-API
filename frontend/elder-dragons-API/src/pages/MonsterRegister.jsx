import { useElements } from "../hooks/useElements";
import { useForm } from "../hooks/useForm";

export const MonsterRegister = () => {
  const { form, handleChange, handleSubmit, handleReset } = useForm({
    initialValue: {
      monster_name: "",
      habitat: "",
      size: "",
      generation: "",
      image: "",
      elements: [],
    },
  });

  const { elements } = useElements();
  const handleElementChange = (elementId) => {
    const already = form.elements.includes(elementId);
    const updated = already
      ? form.elements.filter((id) => id !== elementId)
      : [...form.elements, elementId];
    handleChange({ target: { name: "elements", value: updated } });
  };

  return (
    <div className="register">
      <h2>Registrar Dragón Anciano</h2>

      <form>
        <input
          type="text"
          name="monster_name"
          placeholder="Nombre"
          value={form.monster_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="habitat"
          placeholder="Hábitat"
          value={form.habitat}
          onChange={handleChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Tamaño"
          value={form.size}
          onChange={handleChange}
        />
        <input
          type="text"
          name="generation"
          placeholder="Generación"
          value={form.generation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
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

        <button
          type="button"
          onClick={() => handleSubmit("http://localhost:3004/api/monsters")}
        >
          Registrar
        </button>
        <button type="button" onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </div>
  );
};
