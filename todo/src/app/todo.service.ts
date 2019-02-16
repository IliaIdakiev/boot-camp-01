import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  counter = 1;
  todos = [];

  constructor(public http: HttpClient) { }

  load() {
    return this.http.get('todos', { withCredentials: true }).pipe(
      tap((todos: any) => {
        this.todos = todos;
      })
    );
  }

  add(value: string) {
    if (value === '') { return; }
    // var arr = [1,2,3]; var b = [...arr];
    this.todos = [
      ...this.todos,
      {
        title: value,
        completed: false,
        id: this.counter++
      }
    ];

    // this.todos.push({
    //   title: value,
    //   completed: false
    // });
  }

  remove(index: number) {
    // this.todos.splice(index, 1);
    this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)];
  }

  toggle(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
