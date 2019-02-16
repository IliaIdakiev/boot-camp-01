import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntityComponent } from './todo-entity/todo-entity.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'add',
    component: TodoEntityComponent
  },
  {
    path: 'edit/:id',
    component: TodoEntityComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
