import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class SignUpDoctorService {
  apiURL: string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }
    signUp(doctor: Doctor): Observable<void> {
    return this.http.post<void>(this.apiURL+"auth/signup/doctor",doctor);
  }
  }
