import { Response } from "express";
import responseMsg from "../const/response-msg";

const r200 = (
  res: Response,
  data: any,
  message: string = responseMsg.SUCCESS
) => {
  return res.status(200).json({ message, data: data });
};
const r404 = (res: Response, message: string = responseMsg.NOT_FOUND) => {
  return res.status(404).json({ message });
};
const r401 = (res: Response, message: string = responseMsg.AUTH_FAILED) => {
  return res.status(401).json({ message });
};
const r400 = (res: Response, message: string = responseMsg.BAD_REQUEST) => {
  return res.status(401).json({ message });
};

export default { r200, r404, r401, r400 };