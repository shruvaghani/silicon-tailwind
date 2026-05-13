import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { heroSlidesData, socialLinksData } from '../../data';

@Component({
  selector: 'software-dev-agency1-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  heroSlidesData = heroSlidesData;
  socialLinksData = socialLinksData;
}
