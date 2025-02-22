import express from "express";
import {
  getSingleUser,
  getUsers,
  editSingleUser,
} from "../data-controller/data-controller.js";

const router = express.Router();

router.route("/").get(getUsers);

router.route("/:user_id").get(getSingleUser).put(editSingleUser);

export default router;
