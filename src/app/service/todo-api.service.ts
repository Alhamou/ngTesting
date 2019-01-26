import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../interface/inter-face';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor( private http: HttpClient) { }

  todo: Todo[];

  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  url: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=5';

  // Get Data Todos
  getTodoDate(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.limit}`);
  }

  // on Change Completed 
  changeCompleted (todo): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions);
  }

  // on Delete Todo
  onDeleteTodo (todo) : Observable<any>{
    const url = `${this.url}/${todo.id}`;
    return this.http.delete(url, this.httpOptions);
  }

  // on Add new Todo
  AddNewTodo (todo) : Observable<any> {
    const url = `${this.url}`;
    return this.http.post(url, todo, this.httpOptions);
  }
}
