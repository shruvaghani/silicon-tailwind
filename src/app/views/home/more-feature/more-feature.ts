import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moreFeaturesData } from '../data';

@Component({
  selector: 'home-more-feature',
  imports: [],
  templateUrl: './more-feature.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoreFeature {
  moreFeaturesData = moreFeaturesData;
}
