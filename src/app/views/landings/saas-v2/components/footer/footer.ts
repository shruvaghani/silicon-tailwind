import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerItemsData, SocialItemData } from '../../data';
import { credits } from '@common/constants';

@Component({
  selector: 'saas-v2-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  credits = credits;
  footerItemsData = footerItemsData;
  SocialItemData = SocialItemData;
}
