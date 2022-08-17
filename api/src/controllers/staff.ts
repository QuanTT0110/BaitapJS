import services from "../services";
import { Request, Response } from "express";
import response from "../utils/response";
import { ICreateStaff } from "../models/create-request";
import { IQueryStaff } from "../models/query-request";
import responseMsg from "../const/response-msg";

const create = async (req: Request, res: Response) => {
  const staff: ICreateStaff = req.body as ICreateStaff;
  const [data, error] = await services.staff.create(staff);
  if (error) {
    if (error.message == responseMsg.ALREADY_EXIST) {
      return response.r400(res, error.message);
    }
    return response.r404(res);
  }
  return response.r200(res, data);
};

const update = async (req: Request, res: Response) => {
  const staff: ICreateStaff = req.body as ICreateStaff;
  const [data, error] = await services.staff.update(req.params.id, staff);
  if (error) {
    if (error.message == responseMsg.ALREADY_EXIST) {
      return response.r400(res, error.message);
    }
    return response.r404(res);
  }
  return response.r200(res, data);
};

const changeActive = async (req: Request, res: Response) => {
  const [data, error] = await services.staff.changeActive(req.params.id);
  if (error) {
    return response.r404(res);
  }
  return response.r200(res, data);
};

const findById = async (req: Request, res: Response) => {
  const [data, error] = await services.staff.findById(req.params.id);
  if (error) {
    return response.r404(res);
  }
  return response.r200(res, data);
};

const find = async (req: Request, res: Response) => {
  const query: IQueryStaff = req.query as never;
  const [data, error] = await services.staff.find(query);
  return response.r200(res, data);
};

export default {
  create,
  update,
  changeActive,
  findById,
  find,
};
