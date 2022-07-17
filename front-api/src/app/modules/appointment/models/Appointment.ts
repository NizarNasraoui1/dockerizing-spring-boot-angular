import { Doctor } from "../../shared/models/Doctor";
import { User } from "../../shared/models/User";



export default class Appointment{
    id!:number;
    date!:Date;
    user!:User;
    doctor!:Doctor;
    constructor(date:Date,user:User,doctor:Doctor){
        this.date=date;
        this.user=user;
        this.doctor=doctor;
    }
}