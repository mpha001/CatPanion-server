import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

async function getUsers(_req, res) {
  try {
    const data = await knex("userdata");
    res.json(data);
  } catch (err) {
    res.status(500).send("Error getting user data");
  }
}

const getSingleUser = async (req, res) => {
  try {
    const singleUserFound = await knex("userdata").where({
      user_id: req.params.user_id,
    });

    if (singleUserFound.length === 0) {
      return res.status(404).json({
        message: `Single user with ID ${req.params.user_id} not found`,
      });
    }

    const userData = singleUserFound[0];
    res.json(userData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve single user data for with ID ${req.params.user_id}`,
    });
  }
};

const editSingleUser = async (req, res) => {
  try {
    const singleUserFound = await knex("userdata")
      .where({
        user_id: req.params.user_id,
      })
      .update(req.body);

    if (singleUserFound.length === 0) {
      return res.status(404).json({
        message: `Single user with ID ${req.params.user_id} not found`,
      });
    }
    res.status(201).json({
      message: "User edit was successful",
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve single user data for with ID ${req.params.user_id} `,
      error: `${error}`,
    });
  }
};

export { getSingleUser, getUsers, editSingleUser };
