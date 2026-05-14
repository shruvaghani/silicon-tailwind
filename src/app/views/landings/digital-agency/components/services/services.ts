import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { servicesData } from '../../data';

@Component({
  selector: 'digital-agency-services',
  imports: [LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
})
export class Services {
  servicesData = servicesData;
}
