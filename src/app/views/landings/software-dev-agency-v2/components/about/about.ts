import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';

@Component({
  selector: 'software-dev-agency2-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  testimonialsData = testimonialsData;
}
