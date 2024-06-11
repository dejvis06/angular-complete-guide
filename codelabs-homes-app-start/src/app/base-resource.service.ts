import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseResourceService {
  protected baseUrl: string = "http://localhost:3000";
  protected abstract resource: string;

  constructor(protected http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  getResourcePath() {
    return this.baseUrl + "/" + this.resource;
  }
}
