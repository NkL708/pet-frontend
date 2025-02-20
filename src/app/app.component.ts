import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,

    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "frontend";
}
