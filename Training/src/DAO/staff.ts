import { AppDataSource } from "../config/config";
import { staff } from "../entity";
import { ICreateStaff, IQueryStaff } from "../models";
const staffReponsitory = AppDataSource.getRepository(staff);

export default class Staff {
  static getStaffByEmail = async (email: string): Promise<staff | null> => {
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
  static getStaffById = async (id: number): Promise<staff | null> => {
    const result = await staffReponsitory.findOne({
      where: {
        id: id,
      },
    });
    return result;
  };
  static createStaff = async (staff: ICreateStaff): Promise<staff | null> => {
    return await staffReponsitory.save(staffReponsitory.create(staff));
  };

  static saveStaff = async (
    staff: ICreateStaff,
    id: number
  ): Promise<Staff | null> => {
    const oldStaff = await this.getStaffById(id);
    if (!oldStaff) {
      return null;
    }
    const updateStaff = await staffReponsitory.save(
      Object.assign(oldStaff, staff)
    );
    return updateStaff;
  };

  static getStaffs = async (query: IQueryStaff): Promise<Staff[]> => {
    const limit = query.limit ? Math.floor(query.limit) : 10;
    const keyword = query.keyword ? "%" + query.keyword + "%" : "%%";
    const page = query.page > 0 ? Math.floor(query.page - 1) * limit : 0;
    const queryString = staffReponsitory.createQueryBuilder();
    queryString;
    queryString
      .where("Staff.name LIKE :name", { name: `%${keyword}%` })
      .orWhere("Staff.email LIKE :email", { email: `%${keyword}%` });
    return await queryString.limit(limit).offset(page).getMany();
  };
}
