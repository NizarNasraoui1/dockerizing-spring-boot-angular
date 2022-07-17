import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../shared/models/Doctor';
import Appointment from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url="http://localhost:8080/appointment";
  constructor(private http:HttpClient) { }
  
  getAvailableAppointments(doctorId:number,day:number,month:number,year:number):Observable<Date[]>{
    return this.http.get<Date[]>(`${this.url}/available/${doctorId}/${day}/${month}/${year}`);
  }
  addAppointment(appointment:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(this.url,appointment);
  }
  getDoctor(id:number):Observable<any>{
    return this.http.get<Doctor>(`http://localhost:8080/user/find/${id}`);
  }
  getAppointmentsHistory(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/history/${id}`);
  }
  getFutureAppointments(id:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/future/${id}`);
  }
  formatDate(date:Date):string{
    date=new Date(date);
    let hour=date.getHours().toString();
    if(hour[0]=='8' || hour[0]=='9') hour="0"+hour;
    let minute=date.getMinutes().toString();
    if(minute=='0') minute='00';
    let formatedDate=`${hour}:${minute}`;
    return formatedDate;
  }
}
