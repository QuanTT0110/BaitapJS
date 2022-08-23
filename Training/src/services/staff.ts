import  dao  from "../DAO";
import { ICreateStaff, IQueryStaff } from "../models";

export const createStaff = async (staff: ICreateStaff) => {
  const result = await dao.staff.create(staff);
  return result;
};
export const updateStaff = async (staff: ICreateStaff) => {
  const result = await dao.staff.update(staff);
  if (result instanceof Error) {
    return [null,result];
  }

  return [result,null];
};
export const getStaffById = async (id: any) => {
  const result = await dao.staff.getById(id);

  if (result instanceof Error) {
    return [null,result];
  }

  return [result,null];
};
export const getStaffs = async (query: IQueryStaff) => {
  const result = <Object|null> (
    await dao.staff.getStaffS(query)
  )

  if (result instanceof Error) {
    return [null,result];
  }
  
  return [result,null];
};


export const loginStaffWithEmailAndPassword = async (email: string,) => {
  const staff = await dao.staff.getByEmail(email)

  if (!staff ) {
    return false;
  }

  return [staff,null];
};

export const checkEmail = async (email: string) => {
  const oldStaff = await dao.staff.getByEmail(email);
  if (oldStaff) {
    return true;
  }
  
  return false;
};
