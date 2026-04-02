import { useState, useEffect } from "react";

export const useElements = () => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const res = await fetch("http://localhost:3004/api/elements");
        const data = await res.json();
        setElements(data.elements);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchElements();
  }, []);

  return { elements, loading, error };
};
