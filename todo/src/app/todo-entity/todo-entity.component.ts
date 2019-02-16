import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addHandler(title: string) {
    this.add.emit(title);
  }

}
