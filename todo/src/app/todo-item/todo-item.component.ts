import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo;
  @Output() delete = new EventEmitter();

  constructor() { }

  deleteHandler() {
    this.delete.emit();
  }

  ngOnInit() {
  }

}
