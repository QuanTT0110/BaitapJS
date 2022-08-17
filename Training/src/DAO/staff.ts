import { AppDataSource } from '../';
import { Staff } from '../entity';
import { ICreateStaff, IQueryStaff } from '../models';
const staffReponsitory = AppDataSource.getRepository(Staff);

export const getByEmail = async (email: string): Promise<Staff | Error> => {
  const result = await staffReponsitory.findOne({
    where: {
      email: email,
    },

    select: {
      email: true,
      password: true,
    },
  });

  if(!result){
    return new Error("Not Found")
  }

  return result;
};

export const getById = async (id: number): Promise<Staff | Error> => {
  const result = await staffReponsitory.findOne({
    where: {
      id: id,
    },
  });

  if(!result){
    return new Error("Not Found")
  }

  return result;
};

export const create = async (
  staff: ICreateStaff
): Promise<Staff | Error> => {
  const newStaff = await staffReponsitory.save(staffReponsitory.create(staff))
  if(!newStaff){
    return new Error("Create Failed")
  }
  return newStaff;
};

export const update = async (staff: ICreateStaff,): Promise<Staff | Error> => {
  const updateStaff = await staffReponsitory.save(staff);
  if (!updateStaff) {
    return new Error("Update Faild");
  }
  return updateStaff;
};

export const getStaffS = async (query: IQueryStaff): Promise<Staff[]> => {
  const limit = query.limit ? Math.floor(query.limit) : 10;
  const keyword = query.keyword ? '%' + query.keyword + '%' : '%%';
  const page = query.page > 0 ? Math.floor(query.page - 1) * limit : 1;
  const queryString = staffReponsitory.createQueryBuilder();
  queryString
    .where('Staff.name LIKE :name', { name: `%${keyword}%` })
    .orWhere('Staff.email LIKE :email', { email: `%${keyword}%` });
  return await queryString.limit(limit).offset(page).getMany();
};


