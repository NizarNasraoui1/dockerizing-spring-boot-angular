import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Answer} from "../../shared/models/Answer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerUrl = 'http://localhost:8080/answer';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.answerUrl);
  }

  public getById(id: number): Observable<Answer> {
    return this.httpClient.get<Answer>(this.answerUrl + '/' + id);
  }

  public getByQuestion(id: number): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.answerUrl + '/question/' + id);
  }

  public add(answer: Answer): Observable<Answer> {
    return this.httpClient.post<Answer>(this.answerUrl + '/question/' + answer.question.id + '/doctor/' + answer.doctor.id, answer);
  }

  public update(answer: Answer): Observable<Answer> {
    return this.httpClient.put<Answer>(this.answerUrl, answer);
  }

  public delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.answerUrl + '/' + id);
  }

}
