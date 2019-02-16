import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos;
  @Output() remove = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() { }

  handleRemove(index: number) {
    this.remove.emit(index);
  }

  handleToggle(index: number) {
    this.toggle.emit(index);
  }

}
