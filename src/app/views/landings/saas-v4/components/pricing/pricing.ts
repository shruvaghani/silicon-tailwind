import { Component } from '@angular/core';
import { pricingPlansData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'saas-v4-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
})

export class Pricing {
  pricingPlansData = pricingPlansData;
}
