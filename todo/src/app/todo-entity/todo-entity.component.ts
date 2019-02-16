import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {

  @ViewChild('inputTitle') inputTitle: ElementRef;
  title = '';

  constructor(
    public renderer: Renderer2,
    public todoService: TodoService,
    public router: Router,
    public activedRoute: ActivatedRoute
  ) {
    const todoId = +activedRoute.snapshot.params['id'];
    const selectedTodo = todoService.todos.find(todo => todo.id === todoId);
    this.title = selectedTodo ? selectedTodo.title : '';
  }

  ngOnInit() {
  }

  addHandler(title: string) {
    this.todoService.add(title);
    this.renderer.setProperty(this.inputTitle.nativeElement, 'value', '');
    this.router.navigate(['list']);
  }

}
