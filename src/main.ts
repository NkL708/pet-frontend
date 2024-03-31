import { HttpClientModule } from "@angular/common/http";
import {
  ErrorHandler,
  enableProdMode,
  importProvidersFrom,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import * as Sentry from "@sentry/angular-ivy";

import { environment } from "./environments/environment";

import { AppComponent } from "./app/app.component";
import { MainComponent } from "./app/components/main/main.component";

if (!environment.production) {
  Sentry.init({
    dsn: environment.dsn,
    release: "7115ede",
    integrations: [Sentry.browserTracingIntegration()],
    tracePropagationTargets: ["31.207.45.145"],
    tracesSampleRate: 1.0,
  });
  enableProdMode();
}

const routes: Routes = [{ path: "", component: MainComponent }];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({ showDialog: false }),
    },
  ],
}).catch((err) => console.error(err));
