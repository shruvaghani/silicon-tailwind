import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactInfoData, socialLinksData, countriesData } from '../../data';

@Component({
  selector: 'startup-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  contactInfoData = contactInfoData;
  socialLinksData = socialLinksData;
  countriesData = countriesData;
}
