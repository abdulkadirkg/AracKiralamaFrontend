import { ResponseModel } from './responseModel';

export interface LoginResponseModel<T> extends ResponseModel {
  data: T;
  user: string;
}
