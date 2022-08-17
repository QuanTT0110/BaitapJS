import { Request, Response, NextFunction } from "express";
import { check, validationResult, buildCheckFunction } from "express-validator";
import AppError from "../../utils/app-error";
import responseMsg from "../../const/response-msg";

const checkBody = buildCheckFunction(["body"]);

const login = async (req: Request, res: Response, next: NextFunction) => {
  await checkBody(["phone", "password"]).notEmpty().isString().trim().run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    const error = new AppError(403, responseMsg.INVALID_INPUT);
    return next(error);
  }
  next();
};

export default { login };
