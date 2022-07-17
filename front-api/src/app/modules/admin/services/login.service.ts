import { Login } from './../../shared/models/Login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../shared/models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = "http://localhost:8080/"
constructor(private http: HttpClient) {

 }
 login(login:Login): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(this.apiURL+"auth/signin/admin",login);
}

}
