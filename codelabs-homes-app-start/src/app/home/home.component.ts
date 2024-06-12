import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../housing.service";
import { LoadingService } from "../interceptors/loading-spinner/loading-spinner.service";
import { LoadingSpinnerComponent } from "../interceptors/loading-spinner/loading-spinner.component";
import { LoadingSpinnerDirective } from "../interceptors/loading-spinner/loading-spinner.directive";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    LoadingSpinnerComponent,
    LoadingSpinnerDirective,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  housingLocationList!: HousingLocation[];
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {}

  ngOnInit(): void {
    this.housingService
      .getAllHousingLcoations()
      .subscribe((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredHousingLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) this.filteredHousingLocationList = this.housingLocationList;
    this.filteredHousingLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
