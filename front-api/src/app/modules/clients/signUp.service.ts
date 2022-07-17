import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  apiURL: string = "http://localhost:8080/"

constructor(private http: HttpClient) { }
  signUpUser(user: User): Observable<void> {
  return this.http.post<void>(this.apiURL+"auth/signup/user",user);
}
}
