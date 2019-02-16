import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() { }

  deleteHandler() {
    this.delete.emit();
  }

  handleToggle() {
    this.toggle.emit();
  }

}
