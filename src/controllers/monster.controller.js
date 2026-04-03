import { MonsterModel } from "../models/monster.model.js";
import { ElementsModel } from "../models/elements.model.js";
import { Op } from "sequelize";

export const createMonster = async (req, res) => {
  const { monster_name, habitat, size, generation, image, elements } = req.body;
  try {
    const newMonster = await MonsterModel.create({
      monster_name: monster_name,
      habitat: habitat,
      size: size,
      generation: generation,
      image: image,
    });
    if (elements && elements.length > 0) {
      await newMonster.setElements(elements);
    }
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
  const { name } = req.query;
  const where = name
    ? {
        monster_name: { [Op.like]: `%${name}%` },
      }
    : {};
  try {
    const monsters = await MonsterModel.findAll({
      where,
      include: [
        {
          model: ElementsModel,
          as: "elements",
          attributes: ["id", "element_name"],
          through: { attributes: [] },
        },
      ],
    });
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
    const monster = await MonsterModel.findByPk(id, {
      include: [
        {
          model: ElementsModel,
          as: "elements",
          attributes: ["id", "element_name"],
          through: { attributes: [] },
        },
      ],
    });
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
  const { monster_name, habitat, size, generation, image, elements } = req.body;
  try {
    const monster = await MonsterModel.findByPk(id);
    if (!monster) {
      return res.status(404).json({ msg: "Dragón Anciano no encontrado" });
    }

    await monster.update({
      monster_name,
      habitat,
      size,
      generation,
      image,
    });

    if (elements) {
      await monster.setElements(elements);
    }

    const updatedMonster = await MonsterModel.findByPk(id, {
      include: [
        {
          model: ElementsModel,
          as: "elements",
          attributes: ["id", "element_name"],
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json({
      msg: "Registro de Dragón Anciano actualizado con éxito",
      updatedMonster,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error inesperado al actualizar registro",
      error: error.message,
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
