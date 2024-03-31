import { Component } from "@angular/core";

import { NewsDigestComponent } from "../news-digest/news-digest.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [NewsDigestComponent],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent {}
