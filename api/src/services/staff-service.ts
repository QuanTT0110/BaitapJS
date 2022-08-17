import responseMsg from "../const/response-msg";
import { IStaffCreatePayload, IStaffFindAllQuery } from "../models/staff";
import dao from "../dao";
import { Staff } from "../entitys";
import { NullLiteral } from "typescript";

const create = async (
  staff: IStaffCreatePayload
): Promise<[Object | null, Error | null]> => {
  if (await isPhoneExist(staff.phone, null)) {
    return [null, new Error(responseMsg.ALREADY_EXIST)];
  }
  const [data, error] = await dao.staff.create(staff);
  if (error) {
    return [null, error];
  }

  return [{ ...data, password: undefined }, null];
};

const update = async (
  id: string,
  staff: IStaffCreatePayload
): Promise<[Staff | null, Error | null]> => {
  if (await isPhoneExist(staff.phone, id)) {
    return [null, new Error(responseMsg.ALREADY_EXIST)];
  }
  if (!(await isExist(id))) {
    return [null, new Error(responseMsg.NOT_FOUND)];
  }
  const [oldStaff, error] = await dao.staff.findById(id);

  if (oldStaff) {
    const [data, error2] = await dao.staff.update(
      Object.assign(oldStaff, { ...staff, auth: undefined })
    );

    if (error2) {
      return [null, error];
    }
    return [data, null];
  } else {
    return [null, error];
  }
};

const changeActive = async (
  id: string
): Promise<[Object | null, Error | null]> => {
  const [staff, error] = await dao.staff.findById(id);
  if (staff) {
    const [data, error2] = await dao.staff.changeActive(id, !staff.active);
    if (error2) {
      return [null, error2];
    }
    return [{}, null];
  } else {
    return [null, error];
  }
};

const findById = async (id: string): Promise<[Staff | null, Error | null]> => {
  const [data, error] = await dao.staff.findById(id);
  if (error) {
    return [null, error];
  }
  return [data, null];
};

const find = async (query: IStaffFindAllQuery): Promise<[Staff[], null]> => {
  query.limit = query.limit ? Math.floor(query.limit) : 20;
  query.keyword = query.keyword ? "%" + query.keyword + "%" : "%%";
  const [data, error] = await dao.staff.find(query);
  return [data, null];
};

const isPhoneExist = async (
  phone: string,
  id: string | null
): Promise<boolean> => {
  const [data, error] = await dao.staff.findByPhone(phone);
  if (error) {
    return false;
  }
  // trường hợp update kiểm tra xem phải số của bản thân
  if (id) {
    if (data && data.id == id) {
      return false;
    }
    return true;
  }
  return true;
};

const isExist = async (id: string): Promise<boolean> => {
  const [data, error] = await dao.staff.findById(id);
  if (error) {
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
