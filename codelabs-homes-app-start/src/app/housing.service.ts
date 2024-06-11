import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";
import { BaseResourceService } from "./base-resource.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HousingService extends BaseResourceService {
  protected override resource = "locations";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllHousingLcoations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.getResourcePath());
  }

  getHousingLocationById(id: Number): Observable<HousingLocation | undefined> {
    return this.http.get<HousingLocation | undefined>(
      `${this.getResourcePath()}/${id}`
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
