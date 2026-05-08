import { Component } from '@angular/core';
import { specificationsData } from '../../data';

@Component({
  selector: 'product-specs',
  imports: [],
  templateUrl: './specs.html',
  styles: ``,
})

export class Specs {
  specificationsData = specificationsData;
}
