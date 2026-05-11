import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerItemsData, SocialItemData } from '../../data';

@Component({
  selector: 'saas2-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Footer {
  footerItemsData = footerItemsData;
  SocialItemData = SocialItemData;
}
