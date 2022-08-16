import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const ACCESS_TOKEN_SECRET: any = process.env.ACCESS_TOKEN_SECRET;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader: any = req.headers["authorization"];
  // Beaer [token]
  if (!authorizationHeader) res.status(404).json("Please Auth");
  const token = authorizationHeader.split(" ")[1];
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any) => {
    if (err) {
      return res.status(403).json("Authen failed");
    }
    return next();
  });
};

export const accessToken = async (req: Request) => {
  const data = req.body;
  const accesstoken = jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
  return accesstoken;
};
