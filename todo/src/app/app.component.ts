import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  addHandler(value: string) {
    if (value === '') { return; }
    this.todos.push({
      title: value,
      completed: false
    });
  }

  deleteTodo(index: number) {
    console.log('Delete todo', index);
  }
}
