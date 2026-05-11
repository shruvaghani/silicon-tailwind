import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLinkGroupData, socialLinkData } from '../../data';

@Component({
  selector: 'saas-v1-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer {
  footerLinkGroupData = footerLinkGroupData;
  socialLinkData = socialLinkData;
}
