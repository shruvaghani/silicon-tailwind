import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterLink, legalLinks, socialLinks, usefulLinks } from '../../data';

@Component({
  selector: 'medical-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  usefulLinks = usefulLinks;
  legalLinks = legalLinks;
  socialLinks = socialLinks;

  allUsefulLinks: FooterLink[] = [
    ...this.usefulLinks.map((link) => ({ text: link })),
    ...this.legalLinks,
  ];
}
