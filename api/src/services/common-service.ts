import dao from "../dao";
import { ILogin } from "../models/common-request";
import { Staff } from "../entitys";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import config from "../configs/config";
import responseMsg from "../const/response-msg";

const login = async (login: ILogin): Promise<[Object | null, Error | null]> => {
  const [user, error] = await dao.staff.findByPhone(login.phone);
  if (error) {
    return [null, error];
  }
  if (user && !user.isRoot) {
    if (!user.active) {
      return [null, new Error(responseMsg.ACCOUNT_IS_DISABLE)];
    }
  }
  if (user && (await bcrypt.compare(login.password, user.password))) {
    const accessToken = jwt.sign(
      { ...user, password: null },
      config.jwtSecret,
      {
        expiresIn: "24h",
      }
    );
    return [{ phone: user.phone, name: user.name, token: accessToken }, null];
  }
  return [null, new Error(responseMsg.WRONG_PASSWORD)];
};

export default { login };
