import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appCheckAge][formControlName],[appCheckAge][formControl],[appCheckAge][ngModel],[appCheckAge][ngModelGroup]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckAgeDirective), multi: true }
 ]
})

export class CheckAgeDirective implements Validator {

  constructor(@Attribute('appCheckAge') public appCheckAge: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
      const inp = c.value;
   
      if(inp < 2019) {
          if(inp > 100 && inp < 1919) {
              appCheckAge: true
          }
      }
      else if(inp > 2019) {
          appCheckAge: true
      }
      else if(inp <= 0) {
          appCheckAge: true
      }

      return null;
    }
}
