import { ICommonLoginPayload } from "../models/common";
import services from "../services";
import { Request, Response } from "express";
import response from "../utils/response";

const login = async (req: Request, res: Response) => {
  const queryLogin: ICommonLoginPayload = req.body as ICommonLoginPayload;

  const [data, error] = await services.common.login(queryLogin);
  if (error) {
    console.log(error);
    return response.r401(res, error.message);
  }
  return response.r200(res, data);
};

export default { login };
