import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class ArticlesService {
  private baseUrl = "http://localhost:8080/article/";

  constructor(private http: HttpClient) { }
  
  getArticleList():Observable<any>
  {
    return this.http.get(this.baseUrl);
  }

  getArticleById(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}id/${id}`);
  }
  getArticlesByUserId(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}doctor/${id}`)
  }
  deleteById(id:number):Observable<any>
  {
    
    return this.http.delete(`${this.baseUrl}${id}`,{ responseType: 'text' })
    
  }
  insertArticle(article:any):Observable<any>{
    return this.http.post(`${this.baseUrl}`,article)
  }
  getArticlesByKeyword(keyword:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}keyword/${keyword}`)
  }
  getArticlesbyDoctorByKeyword(id:number,keyword:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}user/${id}/keyword/${keyword}`)
  }
}
