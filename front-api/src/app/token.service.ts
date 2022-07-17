import { Doctor } from './modules/shared/models/Doctor';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modules/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }
  public setUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
  public setToken(token: string): void {
    localStorage.setItem("token", "Bearer " + token);
  }
  public getUser(): User | null {
    let userString = localStorage.getItem("user");
    if (userString == null) {
      return null;
    }
    let user: User = JSON.parse(userString)
    return user;
  }
  public getToken(): string {
    return localStorage.getItem("token") ?? "";
  }
  public isDoctor():boolean{
    try{
      JSON.parse(localStorage.getItem("user")!).governorate;
      return true
    }catch(e){
      return false;
    }
  }
  public setDoctor(doctor:Doctor): void{
    localStorage.setItem("doctor", JSON.stringify(doctor));
  }
  public getDoctor(): Doctor | null {
    let doctorString = localStorage.getItem("doctor");
    if (doctorString == null) {
      return null;
    }
    let doctor: Doctor = JSON.parse(doctorString)
    return doctor;
  }
  public clearDoctor(){
    localStorage.removeItem("doctor");
  }
  public clearUser(){
    localStorage.removeItem("user");
  }
  public clearToken(){
    localStorage.removeItem("token");
  }
  public signOut(){
    this.clearDoctor();
    this.clearUser();
    this.clearToken();
    this.router.navigate(["/client/login"]);
  }
  public redirectIfNotSignedIn():void{
    if(this.getToken()==""){
      this.router.navigate(["/client/login"]);
    }
  }
}
