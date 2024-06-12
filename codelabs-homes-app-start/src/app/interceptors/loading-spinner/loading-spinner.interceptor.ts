import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptor,
  HttpHandler,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoadingService } from "./loading-spinner.service";

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.show();

    return handler.handle(req).pipe(
      delay(1000), // Simulate a 3-second delay
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
