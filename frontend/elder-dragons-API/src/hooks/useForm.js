import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return action.value;
    case "SET":
      return action.value;
    default:
      return state;
  }
};

export const useForm = ({ initialValue }) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    dispatch({
      type: "CHANGE",
      name: name,
      value: value,
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
      value: initialValue,
    });
  };

  const handleSet = (value) => {
    dispatch({
      type: "SET",
      value: value,
    });
  };

  const handleSubmit = async (url, method = "POST") => {
    try {
      const res = await fetch(url, {
        method,
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
  return { form, dispatch, handleChange, handleSubmit, handleReset, handleSet };
};
