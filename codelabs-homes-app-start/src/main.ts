import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeConfig from "./app/routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { loggingInterceptor } from "./app/interceptors/logging-interceptor";
import { retryExponentialBackoffInterceptor } from "./app/interceptors/retry-exponential-backoff";
import { loadingSpinnerInterceptor } from "./app/interceptors/loading-spinner.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        retryExponentialBackoffInterceptor,
        loadingSpinnerInterceptor,
      ])
    ),
  ],
}).catch((err) => console.error(err));
