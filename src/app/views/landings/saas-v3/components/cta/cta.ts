import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featureListData } from '../../data';

@Component({
  selector: 'saas-v3-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cta {
  featureListData = featureListData;
}
