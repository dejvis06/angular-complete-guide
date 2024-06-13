import { FormGroup, FormControl, Validators } from "@angular/forms";
import { forbiddenNameValidator } from "../validators/forbidden-name-validator";

export class ApplyForm {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(),
      ]),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  clear() {
    this.form.reset({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  validate() {
    return this.form.invalid;
  }
}
