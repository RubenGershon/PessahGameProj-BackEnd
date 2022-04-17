import express from "express";
import authController from "../controllers/authController.js";
import { doesUserExist } from "../middlewares/doesUserExist.js";
import { encryptPassword } from "../middlewares/encryptPassword.js";

const router = express.Router();

router.post("/signup", doesUserExist, encryptPassword, authController.signup);
router.post("/login", authController.login);

export default router;
