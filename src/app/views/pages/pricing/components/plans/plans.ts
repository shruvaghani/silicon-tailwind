import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingPlansData } from '../../data';

@Component({
  selector: 'pricing-plans',
  imports: [RouterLink],
  templateUrl: './plans.html',
  styles: ``,
})
export class Plans {
  pricingPlansData = pricingPlansData;
}
