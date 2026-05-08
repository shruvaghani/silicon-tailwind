import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { testimonialData } from '../../data';

register();

@Component({
  selector: 'mobile-showcase-v1-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  testimonialData = testimonialData;
}
