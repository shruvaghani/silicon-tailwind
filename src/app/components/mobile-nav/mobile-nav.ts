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
}
