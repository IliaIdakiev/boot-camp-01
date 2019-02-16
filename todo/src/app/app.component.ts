import { Component, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  todos: any[] = [];
  filterValue = null;

  constructor(public todoService: TodoService) {
    this.todos = todoService.todos;
  }

  ngDoCheck() {
    this.todos = this.todoService.todos;
  }

  changeFilter(value) {
    this.filterValue = value;
  }

  addHandler(value: string) {
    this.todoService.add(value);
  }

  deleteTodo(index: number) {
    this.todoService.remove(index);
  }

  toggleTodo(index: number) {
    this.todoService.toggle(index);
  }
}
