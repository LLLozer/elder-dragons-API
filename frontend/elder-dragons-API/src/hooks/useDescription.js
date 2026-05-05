import React, { useState } from "react";

const useDescription = () => {
  const [descriptions, setDescriptions] = useState([]);

  const fetchDescriptions = async () => {
    try {
      const res = await fetch("http://localhost:3004/api/descriptions");
      const data = await res.json();
      setDescriptions(data.descriptions);
    } catch (error) {}
  };
  fetchDescriptions();

  return <div></div>;
};
