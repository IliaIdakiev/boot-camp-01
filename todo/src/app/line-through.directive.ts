import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLineThrough]'
})
export class LineThroughDirective {

  constructor(public elementRef: ElementRef) { }

}
