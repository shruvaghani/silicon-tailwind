import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'service-detail-v2-prices',
  imports: [RouterLink,CommonModule],
  templateUrl: './prices.html',
  styles: ``,
})
export class Prices {
  pricingData = pricingData;
}
