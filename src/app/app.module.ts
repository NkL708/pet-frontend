import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";

const routes: Routes = [{ path: "", component: MainComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThemeToggleComponent,
    SvgIconComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgbModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
