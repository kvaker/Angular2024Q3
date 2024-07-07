import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSearchItem]',
  standalone: true
})
export class SearchItemDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#2F80ED';
  }
}
