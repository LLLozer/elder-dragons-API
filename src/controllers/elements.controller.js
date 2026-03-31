import { ElementsModel } from "../models/elements.model.js";

export const createElement = async (req, res) => {
  const { element_name } = req.body;
  try {
    const newElement = await ElementsModel.create({
      element_name: element_name,
    });
    return res
      .status(201)
      .json({ msg: "Elemento registrado con éxito", newElement });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al crear elemento", error: error.msg });
  }
};

export const getElements = async (req, res) => {
  try {
    const elements = await ElementsModel.findAll();
    return res
      .status(200)
      .json({ msg: "Listando todos los elementos", elements });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al listar los elementos",
      error: error.msg,
    });
  }
};

export const getElementByID = async (req, res) => {
  const { id } = req.params;
  try {
    const element = await ElementsModel.findByPk(id);
    return res.status(200).json({ msg: "Se encontró:", element });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al buscar el elemento",
      error: error.msg,
    });
  }
};

export const updateElement = async (req, res) => {
  const { id } = req.params;
  const { element_name } = req.body;
  try {
    const element = await ElementsModel.findByPk(id);
    const update = await element.update({
      element_name: element_name,
    });
    return res.status(200).json({
      msg: "Registro de elemento actualizado con éxito",
      update,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al actualizar registro",
      error: error.msg,
    });
  }
};

export const deleteElement = async (req, res) => {
  const { id } = req.params;
  try {
    const element = await ElementsModel.findByPk(id);
    await element.destroy();
    return res.status(200).json("Registro de elemento eliminado con éxito");
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al eliminar registro", error: error.msg });
  }
};
