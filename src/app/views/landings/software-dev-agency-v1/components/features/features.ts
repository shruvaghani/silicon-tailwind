import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'software-dev-agency1-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  featuresData = featuresData;
}
