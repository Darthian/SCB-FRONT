import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[input-field-host]',
})
export class InputFielDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

