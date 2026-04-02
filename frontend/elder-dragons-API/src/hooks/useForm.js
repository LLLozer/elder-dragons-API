import { useState } from "react";

export const useForm = ({ initialValue }) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3004/api/monsters", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error en el submit: ", error);
    }
  };

  const handleReset = () => {
    setForm({ initialValue });
  };

  return { form, handleChange, handleSubmit, handleReset };
};
