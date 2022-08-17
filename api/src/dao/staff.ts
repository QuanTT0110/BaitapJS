import db from "../configs/data-source";
import { IStaffCreatePayload, IStaffFindAllQuery } from "../models/staff";
import { Staff } from "../entitys/";
import { Brackets } from "typeorm";
import responseMsg from "../const/response-msg";

const findByPhone = async (
  phone: string
): Promise<[Staff | null, Error | null]> => {
  const rs = await db
    .getStaffRepository()
    .createQueryBuilder("staffs")
    .where("staffs.phone = :phone", { phone })
    .select(["staffs", "staffs.password"])
    .getOne();
  if (!rs) {
    return [null, new Error(responseMsg.NOT_FOUND)];
  }
  return [rs, null];
};

const findById = async (id: string): Promise<[Staff | null, Error | null]> => {
  const rs = await db
    .getStaffRepository()
    .createQueryBuilder("staffs")
    .where("staffs.id = :id", { id })
    .getOne();
  if (!rs) {
    return [null, new Error(responseMsg.NOT_FOUND)];
  }
  return [rs, null];
};

const create = async (
  staff: IStaffCreatePayload
): Promise<[Staff | null, Error | null]> => {
  const newStaff = await db
    .getStaffRepository()
    .save(db.getStaffRepository().create(staff));
  if (!newStaff) {
    return [null, new Error(responseMsg.CREATE_ERROR)];
  }
  return [newStaff, null];
};

const update = async (staff: Staff): Promise<[Staff | null, Error | null]> => {
  try {
    const updateStaff = await db.getStaffRepository().save(staff);
    if (!updateStaff) {
      return [null, new Error(responseMsg.UPDATE_ERROR)];
    }
    return [updateStaff, null];
  } catch (error: unknown) {
    return [null, error as Error];
  }
};

const changeActive = async (
  id: string,
  active: boolean
): Promise<[Object | null, Error | null]> => {
  const updateStatus = await db.getStaffRepository().update(id, {
    active,
  });
  if (!updateStatus.affected) {
    return [null, new Error(responseMsg.UPDATE_STATUS_ERROR)];
  }
  return [{}, null];
};

const find = async (query: IStaffFindAllQuery): Promise<[Staff[], null]> => {
  const skip = query.page > 0 ? Math.floor(query.page - 1) * query.limit : 0;
  const queryString = await db
    .getStaffRepository()
    .createQueryBuilder("staffs");

  if (query.keyword) {
    queryString.andWhere(
      new Brackets((qh) => {
        qh.where("staffs.name LIKE :name", { name: query.keyword }).orWhere(
          "staffs.phone LIKE :phone",
          { phone: query.keyword }
        );
      })
    );
  }
  if (query.active) {
    await queryString.andWhere("staffs.active = :active", {
      active: query.active,
    });
  }
  return [await queryString.limit(query.limit).offset(skip).getMany(), null];
};

export default { findByPhone, findById, create, update, changeActive, find };
