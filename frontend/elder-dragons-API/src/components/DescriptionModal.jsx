import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const DescriptionModal = ({ monster }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { form, dispatch, handleChange, handleReset, handleSubmit } = useForm({
    initialValue: {
      abilities: "",
      behaviour: "",
    },
  });

  const handleModal = () => {
    try {
    } catch (error) {}
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModal}>Descripción Adicional</button>
    </div>
  );
};
