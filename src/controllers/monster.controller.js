import { MonsterModel } from "../models/monster.model.js";

export const createMonster = async (req, res) => {
  const { monster_name, habitat, size, generation, image } = req.body;
  try {
    const newMonster = await MonsterModel.create({
      monster_name: monster_name,
      habitat: habitat,
      size: size,
      generation: generation,
      image: image,
    });
    return res
      .status(201)
      .json({ msg: "Monstruo registrado con éxito", newMonster });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al crear monstruo", error: error.msg });
  }
};

export const getMonsters = async (req, res) => {
  try {
    const monsters = await MonsterModel.findAll();
    return res
      .status(200)
      .json({ msg: "Listando todos los Dragones Ancianos", monsters });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al listar los Dragones Ancianos",
      error: error.msg,
    });
  }
};

export const getMonsterByID = async (req, res) => {
  const { id } = req.params;
  try {
    const monster = await MonsterModel.findByPk(id);
    return res.status(200).json({ msg: "Se encontró:", monster });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al buscar al Dragón Anciano",
      error: error.msg,
    });
  }
};

export const updateMonster = async (req, res) => {
  const { id } = req.params;
  const { monster_name, habitat, size, generation, image } = req.body;
  try {
    const monster = await MonsterModel.findByPk(id);
    const update = await monster.update({
      monster_name: monster_name,
      habitat: habitat,
      size: size,
      generation: generation,
      image: image,
    });
    return res.status(200).json({
      msg: "Registro de Dragón Anciano actualizado con éxito",
      update,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al actualizar registro",
      error: error.msg,
    });
  }
};

export const deleteMonster = async (req, res) => {
  const { id } = req.params;
  try {
    const monster = await MonsterModel.findByPk(id);
    await monster.destroy();
    return res
      .status(200)
      .json("Registro de Dragón Anciano eliminado con éxito");
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al eliminar registro", error: error.msg });
  }
};
