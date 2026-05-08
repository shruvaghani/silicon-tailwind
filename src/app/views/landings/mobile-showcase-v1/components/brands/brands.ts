import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { brandData } from '../../data';

register();
@Component({
  selector: 'mobile-showcase-v1-brands',
  imports: [RouterLink],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Brands {
  brandData = brandData;
}
