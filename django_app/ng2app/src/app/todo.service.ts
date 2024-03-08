import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo'
//import { TODOS } from './mock-lists';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = `http://127.0.0.1:8000/api/todo/`
  constructor(
    private http: HttpClient
  ) { }
  getTodos(): Observable<Todo[]> {
    //const todos = of(TODOS);
    return this.http.get<Todo[]>(this.todoUrl);
  }
}
