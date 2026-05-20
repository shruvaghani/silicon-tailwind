import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  footerCompanyLinkData,
  footerFeatureData,
  footerSupportLinkData,
  socialMediaData,
} from '../../data';
import { credits } from '@common/constants';

@Component({
  selector: 'mobile-showcase-v3-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  socialMediaData = socialMediaData;
  footerFeatureData = footerFeatureData;
  footerCompanyLinkData = footerCompanyLinkData;
  footerSupportLinkData = footerSupportLinkData;
}
