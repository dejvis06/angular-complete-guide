import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeConfig from "./app/routes";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { loggingInterceptor } from "./app/interceptors/logging-interceptor";
import { retryExponentialBackoffInterceptor } from "./app/interceptors/retry-exponential-backoff";
import { LoadingSpinnerInterceptor } from "./app/interceptors/loading-spinner/loading-spinner.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        retryExponentialBackoffInterceptor,
      ]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingSpinnerInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
