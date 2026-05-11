import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brandData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'saas-v1-integrations',
  imports: [RouterLink],
  templateUrl: './integrations.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Integrations {
  brandData = brandData;
}
