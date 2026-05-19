import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mobileNavbarData } from './data';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink],
  templateUrl: './mobile-nav.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class MobileNav {
  mobileNavbarData = mobileNavbarData;  
  closeMobileMenu(): void {
    document.body.style.overflow = '';
    const backdrop = document.getElementById('hs-offcanvas-example-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
    const offcanvas = document.querySelector('.hs-overlay.open');
    if (offcanvas) {
      offcanvas.classList.remove('open');
    }
  }
}
