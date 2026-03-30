import { MonsterModel } from "../models/monster.model.js";

export const createMonster = async (req, res) => {
  const { data } = req.body;
  try {
    const newData = await Model.create({
      data: data,
    });
    res.status(201).json("Registro creado con éxito");
  } catch (error) {
    res.status(500).json("Error inesperado");
  }
};

export const getMonster = async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json({ msg: "Listando todo", data });
  } catch (error) {
    res.status(500).json("Error inesperado");
  }
};

export const getMonsterByID = async (req, res) => {
  const { id } = req.params;
  try {
    const singularData = await Model.findByPk(id);
    res.status(200).json({ msg: "Registro:", singularData });
  } catch (error) {
    res.status(500).json("Error inesperado");
  }
};

export const updateMonster = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const findData = await Model.findByPk(id);
    const update = await findData.update({ data: data });
    res.status(200).json({ msg: "Registro actualizado con éxito", update });
  } catch (error) {
    res.status(500).json("Error inesperado");
  }
};

export const deleteMonster = async (req, res) => {
  const { id } = req.params;
  try {
    const findData = await Model.findByPk(id);
    await findData.destroy();
    res.status(200).json("Registro eliminado con éxito");
  } catch (error) {
    res.status(500).json("Error inesperado");
  }
};
