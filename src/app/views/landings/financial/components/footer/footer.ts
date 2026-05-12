import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { usefulLinksData, socialLinksData } from '../../data';

@Component({
  selector: 'financial-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Footer {
  usefulLinksData = usefulLinksData;
  socialLinksData = socialLinksData;
}
