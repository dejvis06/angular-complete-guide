import { FormGroup, FormControl, Validators } from "@angular/forms";

export class ApplyForm {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
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
