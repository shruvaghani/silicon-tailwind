import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';

register();

@Component({
  selector: 'medical-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: ``,
})
export class Testimonials {
  testimonialsData = testimonialsData;
}
