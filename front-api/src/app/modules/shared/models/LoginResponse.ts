import { User } from "./User";

export interface LoginResponse {
  jwttoken:string;
  user:User;
}
