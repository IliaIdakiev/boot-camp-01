import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {
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

  deleteTodo(index: number) {
    this.todoService.remove(index);
  }

  toggleTodo(index: number) {
    this.todoService.toggle(index);
  }

}
