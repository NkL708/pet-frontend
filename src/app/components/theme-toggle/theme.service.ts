import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<"light" | "dark" | "auto">("auto");
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const storedThemeValue = localStorage.getItem("theme") || "auto";
    this.setTheme(storedThemeValue);
  }

  setTheme(theme: string) {
    if (theme === "light" || theme === "dark") {
      this.applyTheme(theme, theme);
    } else {
      this.useSystemPreference();
    }
  }

  private useSystemPreference() {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    this.applyTheme(preferredTheme, "auto");
  }

  private applyTheme(
    theme: "light" | "dark",
    themePreference: "light" | "dark" | "auto"
  ) {
    localStorage.setItem("theme", themePreference);
    this.themeSubject.next(themePreference);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
}
