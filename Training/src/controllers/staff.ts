import {
  createStaff,
  updateStaff,
  getStaffById,
  getStaffs,
  checkEmail,
  deleteStaff,
} from "../services";
import { Request, Response } from "express";
import { ICreateStaff, IQueryStaff } from "../models";
export default class Staff {
  static getStaffById = async (req: Request, res: Response) => {
    const result = await getStaffById(req.params.id);
    if (!result) {
      return res.status(404).json("Not found");
    }
    return res.status(200).json({ msg: "Get Success", data: result });
  };
  static getStaffs = async (req: Request, res: Response) => {
    const query: IQueryStaff = req.query as any;
    const result = await getStaffs(query);
    if (!result) {
      return res.status(404).json({ msg: "Get Failed" });
    }
    return res.status(200).json({ msg: "Success", data: result });
  };
  static createStaff = async (req: Request, res: Response) => {
    const staff: ICreateStaff = req.body as ICreateStaff;
    if ((await checkEmail(staff.email)) === true) {
      return res.status(404).json({ msg: "Email Already Taken" });
    }
    const result = await createStaff(staff);
    if (!result) {
      return res.status(404).json({ msg: "Create Failed" });
    }
    return res.status(200).json({ msg: "Create Success", data: result });
  };
  static updateStaff = async (req: Request, res: Response) => {
    const staff: ICreateStaff = req.body as ICreateStaff;
    const result = await updateStaff(staff, req.params.id);
    if (!result) {
      return res.status(404).json("Update Failed");
    }
    return res.status(200).json({ msg: "Update Success", data: result });
  };
  static deleteStaff = async (req: Request, res: Response) => {
    const result = await deleteStaff(req.params.id);
    if (result !== true) {
      return res.status(404).json("Delete Failed");
    }
    return res.status(200).json({ msg: "Delete Success" });
  };
}
