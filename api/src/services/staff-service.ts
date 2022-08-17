import responseMsg from "../const/response-msg";
import { ICreateStaff } from "../models/create-request";
import { IQueryStaff } from "../models/query-request";
import dao from "../dao";
import { Staff } from "../entitys";
import { NullLiteral } from "typescript";

const create = async (
  staff: ICreateStaff
): Promise<[Object | null, Error | null]> => {
  if (await isPhoneExist(staff.phone, null)) {
    return [null, new Error(responseMsg.ALREADY_EXIST)];
  }
  const rs = await dao.staff.create(staff);
  if (rs instanceof Error) {
    return [null, rs];
  }

  return [{ ...rs, password: undefined }, null];
};

const update = async (
  id: string,
  staff: ICreateStaff
): Promise<[Staff | null, Error | null]> => {
  if (await isPhoneExist(staff.phone, id)) {
    return [null, new Error(responseMsg.ALREADY_EXIST)];
  }
  if (!(await isExist(id))) {
    return [null, new Error(responseMsg.NOT_FOUND)];
  }
  const oldStaff = await dao.staff.findById(id);
  if (oldStaff instanceof Error) {
    return [null, oldStaff];
  }
  const rs = await dao.staff.update(
    Object.assign(oldStaff, { ...staff, auth: undefined })
  );
  if (rs instanceof Error) {
    return [null, rs];
  }

  return [rs, null];
};

const changeActive = async (
  id: string
): Promise<[Object | null, Error | null]> => {
  const staff = await dao.staff.findById(id);
  if (staff instanceof Error) {
    return [null, staff];
  }
  const rs = await dao.staff.changeActive(id, !staff.active);
  if (rs instanceof Error) {
    return [null, rs];
  }
  return [{}, null];
};

const findById = async (id: string): Promise<[Staff | null, Error | null]> => {
  const rs = await dao.staff.findById(id);
  if (rs instanceof Error) {
    return [null, rs];
  }
  return [rs, null];
};

const find = async (query: IQueryStaff): Promise<[Staff[], null]> => {
  query.limit = query.limit ? Math.floor(query.limit) : 20;
  query.keyword = query.keyword ? "%" + query.keyword + "%" : "%%";
  const rs = await dao.staff.find(query);
  return [rs, null];
};

const isPhoneExist = async (
  phone: string,
  id: string | null
): Promise<boolean> => {
  const rs = await dao.staff.findByPhone(phone);
  if (rs instanceof Error) {
    return false;
  }
  // trường hợp update kiểm tra xem phải số của bản thân
  if (id) {
    if (rs.id == id) {
      return false;
    }
    return true;
  }
  return true;
};

const isExist = async (id: string): Promise<boolean> => {
  const rs = await dao.staff.findById(id);
  if (rs instanceof Error) {
    return false;
  }
  return true;
};

export default {
  create,
  update,
  changeActive,
  findById,
  find,
  isPhoneExist,
  isExist,
};
