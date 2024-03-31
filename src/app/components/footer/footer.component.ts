import { Component } from "@angular/core";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {}
