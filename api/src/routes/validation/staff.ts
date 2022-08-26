import { Request, Response, NextFunction } from "express";
import { validationResult, buildCheckFunction } from "express-validator";
import responseMsg from "../../const/response-msg";
import AppError from "../../utils/app-error";
import response from "../../utils/response";
const checkUUIDParamsAndRequest = buildCheckFunction([
  "body",
  "query",
  "params",
]);

const checkQuery = buildCheckFunction(["query"]);

const checkBody = buildCheckFunction(["body"]);

const createStaff = async (req: Request, res: Response, next: NextFunction) => {
  await checkBody(["name", "phone", "password", "active", "isRoot"])
    .notEmpty()
    .run(req);
  await checkBody(["name", "phone", "password"]).isString().trim().run(req);
  await checkBody(["active", "isRoot"]).isBoolean().run(req);

  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return response.r400(res, responseMsg.INVALID_INPUT);
  }
  if (typeof req.body.active == "string") {
    req.body.active = req.body.active == "true";
    req.body.isRoot = req.body.isRoot == "true";
  }
  next();
};

const isUUID = async (req: Request, res: Response, next: NextFunction) => {
  await checkUUIDParamsAndRequest("id").isUUID().run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return response.r400(res, responseMsg.INVALID_INPUT);
  }
  next();
};

const queryStaff = async (req: Request, res: Response, next: NextFunction) => {
  await checkQuery(["limit", "page"])
    .isNumeric()
    .optional({ nullable: true })
    .run(req);
  await checkQuery("keyword")
    .isString()
    .optional({ nullable: true })
    .trim()
    .run(req);
  await checkQuery("active").isBoolean().optional({ nullable: true }).run(req);
  const rs = await validationResult(req);
  if (!rs.isEmpty()) {
    return response.r400(res, responseMsg.INVALID_INPUT);
  }
  if (typeof req.body.active == "string") {
    req.body.active = req.body.active == "true";
  }
  next();
};

export default { createStaff, isUUID, queryStaff };