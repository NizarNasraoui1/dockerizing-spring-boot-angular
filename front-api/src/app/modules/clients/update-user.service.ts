import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/models/Doctor';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  apiURL: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      this.apiURL + 'user/update',
      user
    );
  }
  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(
      this.apiURL + 'doctor/update',
      doctor
    );
  }
}
