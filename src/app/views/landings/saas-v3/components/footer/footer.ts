import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLinkGroupData, socialLinkData } from '../../data';
import { credits } from '@common/constants';

@Component({
  selector: 'saas-v3-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  footerLinkGroupData = footerLinkGroupData;
  socialLinkData = socialLinkData;
}
