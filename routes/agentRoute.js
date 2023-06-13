import { Router } from "express";
import { addAgent, getAllAgents } from "../controllers/agentController.js";

const router = new Router();

router.route("/").get(getAllAgents).post(addAgent);

export default router;
