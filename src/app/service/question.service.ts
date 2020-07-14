import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/question";
import {Observable} from "rxjs";


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private  http: HttpClient) { }

  listQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(API_URL + '/question')
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(API_URL + `/question`, question);
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(API_URL + `/question/${id}`);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(API_URL + `/question/${id}`, question);
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.http.delete<Question>(API_URL + `/question/${id}`);
  }
}
