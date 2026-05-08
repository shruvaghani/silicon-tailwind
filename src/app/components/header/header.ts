import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ThemeToggler } from '../theme-toggler/theme-toggler';
import { MobileNav } from '../mobile-nav/mobile-nav';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Navbar, ThemeToggler, MobileNav, RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {
  isSticky = false;
  isDarkHeader = false;

  constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {

      let currentRoute = this.router.routerState.root;

      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }

      this.isDarkHeader =
        currentRoute.snapshot.data['darkHeader'] || false;
    }
  });
}
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isSticky = window.scrollY > 50;
  }
}
