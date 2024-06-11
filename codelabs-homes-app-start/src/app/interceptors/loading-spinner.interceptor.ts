import { HttpEvent, HttpRequest, HttpHandlerFn } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";

let activeRequests = 0;

const showSpinner = () => document.body.classList.add("loading");
const hideSpinner = () => document.body.classList.remove("loading");

export function loadingSpinnerInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  if (activeRequests === 0) {
    showSpinner();
  }
  activeRequests++;

  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      if (activeRequests === 0) {
        hideSpinner();
      }
    })
  );
}
