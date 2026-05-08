import { Component } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'mobile-showcase-v3-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
  
export class Features {
  featureData = featureData;
}
