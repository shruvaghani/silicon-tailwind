import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';
register;

@Component({
  selector: 'mobile-showcase-v2-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Testimonials {
  testimonialsData = testimonialsData;
}
