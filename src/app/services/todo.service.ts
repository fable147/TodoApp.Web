import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseapiurl:string = 'https://localhost:7164';

  constructor(private http:HttpClient) { }

  getAllTodos():Observable<Todo[]>
  {
    return this.http.get<Todo[]>(this.baseapiurl+'/api/Todos');
  }

  addTodo(newTodo:Todo): Observable<Todo>
  {
    return this.http.post<Todo>(this.baseapiurl+'/api/Todos',newTodo);
  }
}
