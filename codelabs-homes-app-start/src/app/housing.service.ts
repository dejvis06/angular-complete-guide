import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";
import { BaseResourceService } from "./base-resource.service";
import { HttpClient, HttpParams } from "@angular/common/http";
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
    const url = `${this.getResourcePath()}/${id}`;
    return this.http.get<HousingLocation | undefined>(url);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
