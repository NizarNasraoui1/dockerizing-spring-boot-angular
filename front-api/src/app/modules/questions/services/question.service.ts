import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../../shared/models/Question";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = 'http://localhost:8080/question';
  constructor(private httpClient: HttpClient) { }

  public addQuestion(question: Question,id:number): Observable<Question>{
    return this.httpClient.post<Question>(this.questionUrl+'/'+id, question);
  }
  public updateQuestion(question: Question): Observable<Question>{
    return this.httpClient.put<Question>(this.questionUrl, question);
  }
  public getQuestions (): Observable<Question[]>{
    return this.httpClient.get<Question[]>(this.questionUrl);
  }
  public getQuestion (id:number): Observable<Question>{
    return this.httpClient.get<Question>(this.questionUrl+'/'+id);
  }
  public deleteQuestion(id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.questionUrl+'/'+ id);
  }

}
