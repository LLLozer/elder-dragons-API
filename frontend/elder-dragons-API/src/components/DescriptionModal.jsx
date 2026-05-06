import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const DescriptionModal = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { form, dispatch, handleChange, handleReset, handleSubmit } = useForm({
    initialValue: {
      abilities: "",
      behaviour: "",
    },
  });

  const handleModal = () => {
    try {
      setIsOpen(true);
    } catch (error) {}
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log(description.abilities);

  return (
    <div>
      <button onClick={handleModal}>Descripción</button>
      <button onClick={closeModal}>Cerrar Descripción</button>
      {isOpen ? <p>{description.abilities}</p> : <p>NO</p>}
    </div>
  );
};
