import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {

  @Output() add = new EventEmitter();

  @ViewChild('inputTitle') inputTitle: ElementRef;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {
  }

  addHandler(title: string) {
    this.add.emit(title);
    this.renderer.setProperty(this.inputTitle.nativeElement, 'value', '');
  }

}
