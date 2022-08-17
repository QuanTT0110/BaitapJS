import {
  getStaffByEmail,
  getStaff,
  getStaffs,
  createStaff,
  saveStaff,
} from '../DAO';
import { ICreateStaff, IQueryStaff } from '../models';

export const createStafff = async (staff: ICreateStaff) => {
  const result: any = await createStaff(staff);
  return result;
};

export const updateStaff = async (staff: ICreateStaff, id: any) => {
  const result = await saveStaff(staff, id);
  if (!result) {
    return null;
  }

  return result;
};

export const getStaffById = async (id: any) => {
  const result = await getStaff(id);
  if (!result) {
    return null;
  }

  return result;
};

export const getStaffS = async (query: IQueryStaff) => {
  const result = await getStaffs(query);
  if (!result) {
    return null;
  }

  return result;
};

export const deleteStaff = async (id: any) => {
  const result = await getStaff(id);
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
  const staff = await getStaffByEmail(email);
  if (!staff || staff.password != password) {
    return false;
  }

  return staff;
};

export const checkEmail = async (email: string) => {
  const oldStaff = await getStaffByEmail(email);
  if (oldStaff) {
    return true;
  }

  return false;
};
