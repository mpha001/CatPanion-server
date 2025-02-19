import express from "express";
import { getSingleUser, getUsers } from "../data-controller/data-controller.js";

const router = express.Router();

router.route("/").get(getUsers);

router.route("/:user_id").get(getSingleUser);

export default router;
