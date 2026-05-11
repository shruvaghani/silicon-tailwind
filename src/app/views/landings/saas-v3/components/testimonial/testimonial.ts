import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { testimonialData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'saas-v3-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Testimonial {
  testimonialData = testimonialData;
}
