import { ChangeDetectorRef, Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { LoadingSpinnerComponent } from "../interceptors/loading-spinner/loading-spinner.component";
import { LoadingSpinnerDirective } from "../interceptors/loading-spinner/loading-spinner.directive";
import { ApplyForm } from "./apply-form";
import { InvalidFormModalComponent } from "../invalid-form-modal/invalid-form-modal.component";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    LoadingSpinnerDirective,
    InvalidFormModalComponent,
  ],
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingLocation?: HousingLocation;
  housingService: HousingService = inject(HousingService);
  housingLocationObservable?: Observable<HousingLocation | undefined>;

  applyForm!: ApplyForm;
  formValueSubscription?: Subscription;
  formInvalid: boolean = false;

  @Input()
  set id(id: number) {
    this.housingLocationId = id;
  }

  ngOnInit(): void {
    this.applyForm = new ApplyForm();

    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .subscribe((houseLocation) => {
        this.housingLocation = houseLocation;
      });

    this.formValueSubscription = this.applyForm.form.valueChanges.subscribe(
      (form) => {
        console.log(form);
      }
    );
  }

  constructor() {}

  submitApplication() {
    this.formInvalid = this.applyForm.validate();
    if (!this.formInvalid) {
      this.housingService.submitApplication(
        this.applyForm.form.value.firstName ?? "",
        this.applyForm.form.value.lastName ?? "",
        this.applyForm.form.value.email ?? ""
      );
    }
  }

  clear() {
    this.applyForm.clear();
  }

  get firstName() {
    return this.applyForm.form.get("firstName")!;
  }

  get lastName() {
    return this.applyForm.form.get("lastName")!;
  }

  get email() {
    return this.applyForm.form.get("email")!;
  }

  closeModal() {
    this.formInvalid = false;
  }
}
