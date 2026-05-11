import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingPlanData } from '../../data';

@Component({
  selector: 'saas-v1-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Pricing {
  pricingPlanData = pricingPlanData;
}
