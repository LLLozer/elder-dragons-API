import { createContext, useContext, useEffect, useState } from "react";

const ElementsContext = createContext();

export const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchElements = async () => {
      const res = await fetch("http://localhost:3004/api/elements");
      const data = await res.json();
      setElements(data.elements);
    };
    fetchElements();
  }, []);

  return (
    <ElementsContext.Provider value={{ elements }}>
      {children}
    </ElementsContext.Provider>
  );
};

export const useElements = () => useContext(ElementsContext);
