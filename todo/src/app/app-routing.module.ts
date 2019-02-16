import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntityComponent } from './todo-entity/todo-entity.component';
import { TodosResolver } from './todos.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: TodoListComponent,
    resolve: [TodosResolver]
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
