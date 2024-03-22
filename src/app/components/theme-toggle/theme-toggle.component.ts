import { map, Observable, startWith } from "rxjs";

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-theme-toggle",
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: "./theme-toggle.component.html",
  styleUrl: "./theme-toggle.component.scss",
})
export class ThemeToggleComponent implements OnInit {
  currentIcon$!: Observable<string>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentIcon$ = this.themeService.theme$.pipe(
      map((theme) => {
        switch (theme) {
          case "light":
            return "lightTheme";
          case "dark":
            return "darkTheme";
          case "auto":
          default:
            return "systemTheme";
        }
      }),
      startWith("systemTheme")
    );
  }

  setTheme(theme: "light" | "dark" | "auto") {
    this.themeService.setTheme(theme);
  }

  isActiveTheme(theme: "light" | "dark" | "auto"): Observable<boolean> {
    return this.themeService.theme$.pipe(
      map((currentTheme) => currentTheme === theme)
    );
  }
}
