import express from "express";
import scoreController from "../controllers/scoreController.js";

const router = express.Router();

router.post("/add", scoreController.add);

export default router;
