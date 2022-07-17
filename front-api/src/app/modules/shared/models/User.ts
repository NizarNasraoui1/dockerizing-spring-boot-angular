import { Role } from './Role';
export interface User{
    id:number,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    password:string,
    roles:Role[]
}
