import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { testimonialData } from '../../data';

@Component({
  selector: 'mobile-showcase-v3-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
})
  
export class Testimonial {
  testimonialData = testimonialData;
  Math = Math;
}
