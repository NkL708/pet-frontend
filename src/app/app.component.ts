import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    BrowserModule,
    NgbModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ThemeToggleComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "frontend";
}
