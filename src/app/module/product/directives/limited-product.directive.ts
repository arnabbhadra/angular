import { Directive ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appLimitedProduct]'
})
export class LimitedProductDirective {

  constructor( private elRef: ElementRef) { 
    this.elRef.nativeElement.style.backgroundColor = 'Red';
  }

}
