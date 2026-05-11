import { Component } from '@angular/core';
import { cryptoBrandData } from '../../data';

@Component({
  selector: 'saas-v3-feature',
  imports: [],
  templateUrl: './feature.html',
  styles: ``,
})
  
export class Feature {
  cryptoBrandData = cryptoBrandData;
}
