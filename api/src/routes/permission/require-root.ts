import { NextFunction, Request, Response } from "express";
import responseMsg from "../../const/response-msg";
import response from "../../utils/response";

export const isRoot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.auth) {
    return response.r401(res);
  }
  if (!req.body.auth.isRoot) {
    return response.r401(res, responseMsg.DENIED_ACCESS);
  }
  next();
};
