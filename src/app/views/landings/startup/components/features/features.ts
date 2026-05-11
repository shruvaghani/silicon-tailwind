import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'startup-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  featuresData = featuresData;
}
