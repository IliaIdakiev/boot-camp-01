import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<any> {
  constructor(public todoService: TodoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.todoService.load();
  }
}
