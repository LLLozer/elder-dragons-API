import { useState } from "react";

export const useMonsterSearch = () => {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMonster = async (name) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3004/api/monsters?name=${name}`,
      );
      const data = await res.json();
      setMonster(data.monsters[0] || null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    monster,
    loading,
    error,
    searchMonster
  };
};
