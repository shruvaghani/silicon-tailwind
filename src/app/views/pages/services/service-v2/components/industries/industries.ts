import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { industriesData } from '../../data';

@Component({
  selector: 'service-v2-industries',
  imports: [LucideAngularModule],
  templateUrl: './industries.html',
  styles: ``,
})
export class Industries {
  industriesData = industriesData;
}
