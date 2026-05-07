import { ThemeService } from '@/app/services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  imports: [],
  templateUrl: './theme-toggler.html',
  styles: ``,
})
  
export class ThemeToggler {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
