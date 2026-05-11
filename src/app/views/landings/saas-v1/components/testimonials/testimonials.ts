import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { testimonialData } from '../../data';

@Component({
  selector: 'saas-v1-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonials {
  testimonialData = testimonialData;
}
