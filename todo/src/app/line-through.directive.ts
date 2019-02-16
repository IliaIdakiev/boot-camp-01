import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLineThrough]',
  exportAs: 'appLineThrough'
})
export class LineThroughDirective {
  @Input() set appLineThrough(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'line-through');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', '');
    }
  }
  constructor(public elementRef: ElementRef, public renderer: Renderer2) { }

}
