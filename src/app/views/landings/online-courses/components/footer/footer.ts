import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterLink, legalLinks, socialLinks, usefulLinks } from '../../data';

@Component({
  selector: 'online-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  usefulLinks = usefulLinks;
  legalLinks = legalLinks;
  socialLinks = socialLinks;

  allUsefulLinks: FooterLink[] = [...this.usefulLinks, ...this.legalLinks];
}
