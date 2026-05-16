import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'service-v1-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  featuresData = featuresData;
}
