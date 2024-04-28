import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";

import { MainComponent } from "./components/main/main.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,

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
