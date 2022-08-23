import express from "express";

import staffRouter from "./staff";
import authRouter from "./auth.route";

const router = express.Router();
router.use("/staff", staffRouter);
router.use("/auth", authRouter);

export default router;
