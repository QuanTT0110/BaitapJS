import { Staff } from "../entitys";

export interface IStaffFindAllQuery {
  limit: number;
  page: number;
  keyword: string;
  active: boolean;
}

export interface IStaffCreatePayload {
  name: string;
  phone: string;
  password: string;
  isRoot: boolean;
  active: boolean;
  auth: Staff | undefined;
}
