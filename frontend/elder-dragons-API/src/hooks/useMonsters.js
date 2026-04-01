import { useState, useEffect } from "react";

export const useMonsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch("http://localhost:3004/api/monsters");
        const data = await res.json();
        setMonsters(data.monsters);
      } catch (error) {
        setError(error.msg);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  return { monsters, loading, error };
};
