import { DescriptionModel } from "../models/description.model.js";
import { MonsterModel } from "../models/monster.model.js";

export const addDescription = async (req, res) => {
  const { abilities, behaviour } = req.body;
  const { id } = req.params;
  try {
    const monsterId = await MonsterModel.findByPk(id);
    const newDesc = await DescriptionModel.create({
      abilities,
      behaviour,
      monster_id: monsterId.id,
    });
    return res.status(201).json({
      msg: "Descripción añadida",
      newDesc,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al agregar descripción",
      error: error.msg,
    });
  }
};

export const getDescriptions = async (req, res) => {
  try {
    const descriptions = await DescriptionModel.findAll({
      include: [
        {
          model: MonsterModel,
          as: "monster",
          attributes: ["id", "monster_name"],
        },
      ],
    });
    return res.status(200).json({
      msg: "Listando descripciones",
      descriptions,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al listar descripciones",
      error: error.msg,
    });
  }
};

export const findDescriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const description = await DescriptionModel.findByPk({
      id,
      include: [
        {
          model: MonsterModel,
          as: "monster",
          attributes: ["id", "monster_name"],
        },
      ],
    });
    return res.status(200).json({
      msg: "Descripción:",
      description,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al encontrar descripción",
      error: error.msg,
    });
  }
};

export const updateDesc = async (req, res) => {
  const { id } = req.params;
  const { abilities, behaviour } = req.body;
  try {
    const desc = await DescriptionModel.findByPk(id);
    console.log(desc);
    if (!desc) {
      return res.status(404).json("No se encontró al monstruo a actualizar");
    }

    await desc.update({
      abilities,
      behaviour,
    });

    const updatedDesc = await DescriptionModel.findByPk(id, {
      include: [
        {
          model: MonsterModel,
          as: "monster",
          attributes: ["id", "monster_name"],
        },
      ],
    });
    return res.status(200).json({
      msg: "Descripción actualizada",
      updatedDesc,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar descripción",
      error: error.msg,
    });
  }
};

export const deleteDesc = async (req, res) => {
  const { id } = req.params;
  try {
    const desc = await DescriptionModel.findByPk(id);
    await desc.destroy();
    return res.status(200).json("Descripción borrada");
  } catch (error) {
    return res.status(500).json({
      msg: "Error al eliminar descripción",
      error: error.msg,
    });
  }
};
