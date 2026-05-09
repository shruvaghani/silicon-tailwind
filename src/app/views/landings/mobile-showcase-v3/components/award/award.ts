import { Component } from '@angular/core';
import { awardData } from '../../data';

@Component({
  selector: 'mobile-showcase-v3-award',
  imports: [],
  templateUrl: './award.html',
  styles: ``,
})
  
export class Award {
  awardData = awardData;
  
}
