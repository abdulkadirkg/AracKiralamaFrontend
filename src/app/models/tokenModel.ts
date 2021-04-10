import { User } from "./userModel";

export interface TokenModel {
  token: string;
  expiration: string;
  user:string;
}
