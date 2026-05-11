import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brandData } from '../../data';

@Component({
  selector: 'saas-v3-brands',
  imports: [RouterLink],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Brands {
  brandData = brandData;
}
