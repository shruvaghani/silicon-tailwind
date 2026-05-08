import { Component } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'mobile-showcase-v1-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
  
export class Features {
  featureData = featureData;
}
