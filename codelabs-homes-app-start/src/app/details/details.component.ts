import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { LoadingSpinnerComponent } from "../interceptors/loading-spinner/loading-spinner.component";
import { LoadingSpinnerDirective } from "../interceptors/loading-spinner/loading-spinner.directive";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    LoadingSpinnerDirective,
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

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {}

  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);

    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .subscribe((houseLocation) => {
        this.housingLocation = houseLocation;
      });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }
}
