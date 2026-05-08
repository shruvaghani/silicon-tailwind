import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productColors } from '../../data';

@Component({
  selector: 'product-colors',
  imports: [RouterLink],
  templateUrl: './colors.html',
  styles: ``,
})

export class Colors {
  productColors = productColors;
}
