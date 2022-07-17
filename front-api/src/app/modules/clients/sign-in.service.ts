import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../shared/models/Login';
import { LoginResponse } from '../shared/models/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  apiURL: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      this.apiURL + 'auth/signin',
      login
    );
  }
}
