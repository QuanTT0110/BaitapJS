import { Router } from "express";
import authController from "../controllers/auth";
const router = Router();

router.post("/login", authController.login);
// .post("/register",authController.register)

export default router;