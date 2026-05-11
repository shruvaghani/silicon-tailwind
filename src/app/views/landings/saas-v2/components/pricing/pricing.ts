import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingPlansData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'saas2-pricing',
  imports: [RouterLink, CommonModule],
  templateUrl: './pricing.html',
  styles: ``,
})

export class Pricing {
  pricingPlansData = pricingPlansData;
}
