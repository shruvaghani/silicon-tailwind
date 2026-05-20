import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactInfo, socialLinksData } from '../../data';
import { credits } from '@common/constants';

@Component({
  selector: 'saas-v4-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  socialLinksData = socialLinksData;
  contactInfo = contactInfo;
}
