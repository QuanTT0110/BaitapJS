import { Staff } from "../DAO";
import { ICreateStaff, IQueryStaff } from "../models";

export const createStaff = async (staff: ICreateStaff) => {
  const result = await Staff.createStaff(staff);
  return result;
};
export const updateStaff = async (staff: ICreateStaff, id: any) => {
  const result = await Staff.saveStaff(staff, id);
  if (!result) {
    return null;
  }
  return result;
};
export const getStaffById = async (id: any) => {
  const result = await Staff.getStaffById(id);
  if (!result) {
    return null;
  }
  return result;
};
export const getStaffs = async (query: IQueryStaff) => {
  const result = await Staff.getStaffs(query);
  if (!result) {
    return null;
  }
  return result;
};
export const deleteStaff = async (id: any) => {
  const result = await Staff.getStaffById(id);
  if (!result) {
    return null;
  }
  await result.remove();
  return true;
};
export const loginStaffWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const staff = await Staff.getStaffByEmail(email);
  if (!staff || staff.password != password) {
    return false;
  }
  return staff;
};

export const checkEmail = async (email: string) => {
  const oldStaff = await Staff.getStaffByEmail(email);
  if (oldStaff) {
    return true;
  }
  return false;
};
