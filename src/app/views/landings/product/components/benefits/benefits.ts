import { Component } from '@angular/core';
import { benefitsData } from '../../data';

@Component({
  selector: 'product-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styles: ``,
})
export class Benefits {
  benefitsData = benefitsData;
}
