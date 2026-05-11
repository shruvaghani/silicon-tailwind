import { Component } from '@angular/core';
import { featuresData } from '../../data';

@Component({
  selector: 'saas2-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})

export class Features {
  featuresData = featuresData;
}
