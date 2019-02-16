import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], completed): any {
    if (completed === null || completed === undefined) {
      return value;
    }
    return value.filter(todo => todo.completed === completed);
  }

}
