import {User} from "./User";

export interface Question{
    id:number,
    user:User,
    title:string,
    content:string,
    date:Date
}
