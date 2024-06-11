import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError, timer } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export function retryExponentialBackoffInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    retry(3),
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ProgressEvent) {
        console.error("Network error:", error);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was:`,
          error.error
        );
      }
      return throwError(
        () => new Error("Something bad happened; please try again later.")
      );
    })
  );
}
