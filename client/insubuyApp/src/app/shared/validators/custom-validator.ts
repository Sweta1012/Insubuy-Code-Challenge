import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    static ageValidator: ValidatorFn = (c: AbstractControl) => {
        if(c.value && !CustomValidators.validAgeCheck(c.value)) {
            return { 'invalidAge': true };
        }
        return null;
    }

    static validAgeCheck(inp: number): boolean {
        if(inp < 2019) {
            if(inp > 100 && inp < 1919) {
                return false;
            }
        }
        else if(inp > 2019) {
            return false;
        }
        else if(inp <= 0) {
            return false;
        }
        return true;
    }

    isFullFormVisited(formGroup: FormGroup): boolean {

        let visited = true;

        for(const formCtrl in formGroup.controls) {
            if(formGroup.controls.hasOwnProperty(formCtrl)) {
                const c = formGroup.controls[formCtrl];
                // If it is a FormGroup, process it's child controls.

                if(c instanceof FormGroup) {
                    visited = visited && this.isFullFormVisited(c);
                } else {
                    if(c.errors) {
                        Object.keys(c.errors).map(messageKey => {
                            if(messageKey == 'required') {
                                visited = visited && false;
                            }
                        });
                    }
                }
            }
        }

        return visited;
    }

}