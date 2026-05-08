import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'mobile-showcase-v2-feature',
  imports: [],
  templateUrl: './feature.html',
  styles: ``,
})

export class Feature {
  featuresData = featuresData;
}
