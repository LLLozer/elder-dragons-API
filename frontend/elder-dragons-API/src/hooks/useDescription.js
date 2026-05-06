import React, { useEffect, useState } from "react";

export const useDescription = () => {
  const [descriptions, setDescriptions] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchDescriptions = async () => {
      try {
        const res = await fetch("http://localhost:3004/api/descriptions");
        const data = await res.json();
        setDescriptions(data.descriptions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDescriptions();
  }, []);

  return { descriptions, loading, error };
};
