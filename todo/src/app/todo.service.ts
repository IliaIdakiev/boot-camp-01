import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [];

  constructor() { }

  add(value: string) {
    if (value === '') { return; }
    // var arr = [1,2,3]; var b = [...arr];
    this.todos = [
      ...this.todos,
      {
        title: value,
        completed: false
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
