import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLinksData, socialLinksData } from '../../data';

@Component({
  selector: 'about-v3-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  socialLinksData = socialLinksData;
  footerLinksData = footerLinksData;
}
