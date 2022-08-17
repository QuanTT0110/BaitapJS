import { AppDataSource } from '../';
import { Staff } from '../entity';
import { ICreateStaff, IQueryStaff } from '../models';
const staffReponsitory = AppDataSource.getRepository(Staff);

export const getStaffByEmail = async (email: string): Promise<Staff | null> => {
  const result = await staffReponsitory.findOne({
    where: {
      email: email,
    },

    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });

  return result;
};

export const getStaff = async (id: number): Promise<Staff | null> => {
  const result = await staffReponsitory.findOne({
    where: {
      id: id,
    },
  });

  return result;
};

export const createStaff = async (
  staff: ICreateStaff
): Promise<Staff | null> => {
  return await staffReponsitory.save(staffReponsitory.create(staff));
};

export const saveStaff = async (
  staff: ICreateStaff,
  id: number
): Promise<Staff | null> => {
  const oldStaff = await getStaff(id);
  if (!oldStaff) {
    return null;
  }

  const updateStaff = await staffReponsitory.save(
    Object.assign(oldStaff, staff)
  );

  return updateStaff;
};

export const getStaffs = async (query: IQueryStaff): Promise<Staff[]> => {
  const limit = query.limit ? Math.floor(query.limit) : 10;
  const keyword = query.keyword ? '%' + query.keyword + '%' : '%%';
  const page = query.page > 0 ? Math.floor(query.page - 1) * limit : 1;
  const queryString = staffReponsitory.createQueryBuilder();
  queryString
    .where('Staff.name LIKE :name', { name: `%${keyword}%` })
    .orWhere('Staff.email LIKE :email', { email: `%${keyword}%` });
  return await queryString.limit(limit).offset(page).getMany();
};
