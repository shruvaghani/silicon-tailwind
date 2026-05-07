import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);

    if (savedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode()) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem(this.themeKey, 'dark');
  }

  enableLightMode(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(this.themeKey, 'light');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
