import { Component } from "@angular/core";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
