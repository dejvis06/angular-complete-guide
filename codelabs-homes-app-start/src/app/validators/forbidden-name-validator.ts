import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nameRe = /.*\d+.*/; // no numbers
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
