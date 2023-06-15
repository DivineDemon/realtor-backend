import { Router } from "express";
import {
  addAgent,
  getAgent,
  getAllAgents,
} from "../controllers/agentController.js";

const router = new Router();

router.route("/").get(getAllAgents).post(addAgent);
router.get("/:agent_id", getAgent);

export default router;
