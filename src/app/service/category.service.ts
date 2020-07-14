import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  listCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/category')
  }
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + `/category`, category);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `/category/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(API_URL + `/category/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL + `/category/${id}`);
  }

}
