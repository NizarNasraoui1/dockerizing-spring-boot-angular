import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor() { }

  isDoctor(user:any):boolean
  {
    return user.hasOwnProperty("speciality");
  }
}
