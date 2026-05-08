import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { supportCardsData } from '../../data';

@Component({
  selector: 'mobile-showcase-v2-info',
  imports: [RouterLink],
  templateUrl: './info.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Info {
  supportCardsData = supportCardsData;
}
