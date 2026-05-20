import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterLink, legalLinks, socialLinks, usefulLinks } from '../../data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { credits } from '@common/constants';

@Component({
  selector: 'digital-agency-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  usefulLinks = usefulLinks;
  legalLinks = legalLinks;
  socialLinks = socialLinks;

  allUsefulLinks: FooterLink[] = [
    ...this.usefulLinks.map((link) => ({ text: link })),
    ...this.legalLinks,
  ];
}
