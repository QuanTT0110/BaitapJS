import { Router } from "express";
import { Staff } from "../controllers";
import { auth } from "../middleware/auth";
import { createStaff, queryStaff, updateStaff } from "../validations";

const router = Router();

router
  .post("/", auth, createStaff, Staff.createStaff)
  .get("/:id", auth, Staff.getStaffById)
  .get("/", auth, queryStaff, Staff.getStaffs)
  .put("/:id", auth, updateStaff, Staff.updateStaff)
  .delete("/:id", auth, Staff.deleteStaff);

export default router;
