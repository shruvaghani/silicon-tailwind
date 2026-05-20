import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { credits } from '@common/constants';

type FooterLink = {
  text: string;
  cssClass?: string;
};

@Component({
  selector: 'contact-v3-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  usefulLinks: string[] = ['Home', 'Features', 'Integrations', 'Our Clients', 'Blog'];

  legalLinks: FooterLink[] = [
    { text: 'Terms & Conditions', cssClass: 'text-nowrap' },
    { text: 'Privacy Policy' },
  ];

  socialLinks: string[] = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram'];

  allUsefulLinks: FooterLink[] = [
    ...this.usefulLinks.map((link) => ({ text: link })),
    ...this.legalLinks,
  ];
}
