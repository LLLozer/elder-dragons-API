import { useState } from "react";

export const App = () => {
  const loadAll = async () => {
    const [dragons, setDragons] = useState([])
    try {
      const fetchMonsters = await fetch("http://localhost:3004/api/monsters", {
        method: GET,
        credentials: "include"
      })

      const data = await fetchMonsters.json();
      setDragons(data.monsters)
      console.log(data.monsters)
    } catch (error) {
      console.log("Error interno del servidor " + error)
    }
  }
  return(<>Dragones Ancianos</>)
}