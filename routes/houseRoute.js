import { Router } from "express";
import { addHouse, getAllHouses } from "../controllers/houseController.js";

const router = new Router();

router.route("/").get(getAllHouses).post(addHouse);

export default router;
