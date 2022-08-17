import { Request, Response, NextFunction } from "express";
import { validationResult, buildCheckFunction } from "express-validator";
import responseMsg from "../../const/response-msg";
import response from "../../utils/response";

const checkBody = buildCheckFunction(["body"]);

const login = async (req: Request, res: Response, next: NextFunction) => {
  await checkBody(["phone", "password"]).notEmpty().isString().trim().run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return response.r400(res, responseMsg.INVALID_INPUT);
  }
  next();
};

export default { login };
