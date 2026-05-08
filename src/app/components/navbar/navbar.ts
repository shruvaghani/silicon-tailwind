import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { navbarData } from './data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Navbar {
  navbarData = navbarData;
  constructor(private router: Router) {}

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  isMenuActive(menu: any): boolean {
    return menu.columns?.some(
      (column: any) =>
        column.links?.some((item: any) => this.isActive(item.link)) ||
        column.sections?.some((section: any) =>
          section.links?.some((item: any) => this.isActive(item.link)),
        ),
    );
  }
}
