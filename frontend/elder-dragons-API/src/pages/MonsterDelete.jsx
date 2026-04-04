import { useState } from "react";
import { useMonsterSearch } from "../hooks/useMonsterSearch";
import Swal from "sweetalert2";
import "../styles/MonsterDelete.css";
import { Loading } from "../components/Loading";

export const MonsterDelete = () => {
  const [searchName, setSearchName] = useState("");
  const { monster, loading, error, searchMonster } = useMonsterSearch();

  const handleDelete = async (id) => {
    if (!monster) return;
    const monsterName = monster.monster_name;
    const confirm = await Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: `${monsterName} será eliminado permanentemente`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#e84118",
      cancelButtonColor: "#e2b96f",
      background: "#1a1a2e",
      color: "#fff",
    });

    if (confirm.isConfirmed) {
      await fetch(`http://localhost:3004/api/monsters/${id}`, {
        method: "DELETE",
      });
      Swal.fire({
        icon: "success",
        title: "¡Eliminado!",
        text: `${monsterName} fue eliminado correctamente`,
        confirmButtonColor: "#e2b96f",
        background: "#1a1a2e",
        color: "#fff",
      });
    }
  };

  return (
    <div className="delete">
      <h2>Eliminar Dragón Anciano</h2>

      <div className="delete__search">
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

      {loading && <Loading />}
      {error && <p>Error: {error}</p>}

      {monster && (
        <div className="delete__result">
          <img src={monster.image} alt={monster.monster_name} />
          <div>
            <h3>{monster.monster_name}</h3>
            <p>Hábitat: {monster.habitat}</p>
            <p>Generación: {monster.generation}</p>
          </div>
          <button type="button" onClick={() => handleDelete(monster.id)}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};
