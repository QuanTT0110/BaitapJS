import { Request, Response, NextFunction } from "express";
import { validationResult, buildCheckFunction } from "express-validator";
const checkQuery = buildCheckFunction(["query"]);
const checkBody = buildCheckFunction(["body"]);

export const createStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await checkBody(["name", "email", "password", "status"]).notEmpty().run(req);
  await checkBody(["name", "password", "status"]).isString().run(req);
  await checkBody(["email"]).isEmail().run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return res.status(403).json({ msg: "Invalid Input" });
  }
  
  next();
};

export const updateStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await checkBody(["name", "email", "password", "status"]).notEmpty().run(req);
  await checkBody(["name", "password", "status"]).isString().run(req);
  await checkBody(["email"]).isEmail().run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return res.status(403).json({ msg: "Invalid Input" });
  }
  
  next();
};

export const queryStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await checkQuery(["limit", "page"])
    .isNumeric()
    .optional({ nullable: true })
    .run(req);
  await checkQuery("keyword").isString().optional({ nullable: true }).run(req);
  const rs = validationResult(req);
  if (!rs.isEmpty()) {
    return res.status(403).json({ msg: "Invalid Input" });
  }
  
  next();
};
