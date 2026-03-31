import { MonsterModel } from "../models/monster.model.js";
import { MonsterElementModel } from "../models/monster_element.model.js";
import { ElementsModel } from "../models/elements.model.js";

export const getAll = async (req, res) => {
  try {
    const findAll = await MonsterElementModel.findAll({
      include: [
        {
          model: MonsterModel,
          as: "monsters",
        },
        {
          ElementsModel,
          as: "elements",
        },
      ],
    });
    return res
      .status(200)
      .json({ msg: "Listando todo con sus modelos:", findAll });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al listar todo", msg: error.msg });
  }
};

export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await MonsterElementModel.findByPk(id, {
      include: [
        {
          model: MonsterModel,
          as: "monsters",
        },
        {
          model: ElementsModel,
          as: "elements",
        },
      ],
    });
    return res.status(200).json({ msg: "Se encontró:", data });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error inesperado al encontrar datos", error: msg.error });
  }
};
