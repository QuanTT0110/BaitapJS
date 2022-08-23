export interface ICreateStaff {
  name: string;
  email: string;
  password: string;
  status: string;
}

export interface IQueryStaff {
  limit: number;
  page: number;
  keyword: string;
}
