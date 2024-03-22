import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { MainComponent } from "./app/components/main/main.component";
import { environment } from "./environments/environment";

if (!environment.debug) {
  enableProdMode();
}

const routes: Routes = [{ path: "", component: MainComponent }];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
