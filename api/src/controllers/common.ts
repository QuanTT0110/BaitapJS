import { ILogin } from "../models/common-request";
import services from "../services";
import { Request, Response } from "express";
import response from "../utils/response";

const login = async (req: Request, res: Response) => {
  const queryLogin: ILogin = req.body as ILogin;

  const [data, error] = await services.common.login(queryLogin);
  if (error) {
    console.log(error);
    return response.r401(res, error.message);
  }
  return response.r200(res, data);
};

export default { login };
