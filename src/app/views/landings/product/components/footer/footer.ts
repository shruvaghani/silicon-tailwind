import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactInfo, socialLinks } from '../../data';

@Component({
  selector: 'product-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  socialLinks = socialLinks;
  contactInfo = contactInfo;
}
