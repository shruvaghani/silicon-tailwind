import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';

@Component({
  selector: 'online-tesimonials',
  imports: [LucideAngularModule],
  templateUrl: './tesimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tesimonials {
  testimonialsData = testimonialsData;
}
