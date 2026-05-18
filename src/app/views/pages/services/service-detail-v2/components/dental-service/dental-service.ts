import { Component } from '@angular/core';
import { serviceSectionData } from '../../data';

@Component({
  selector: 'service-detail-v2-dental-service',
  imports: [],
  templateUrl: './dental-service.html',
  styles: ``,
})
export class DentalService {
  serviceSectionData = serviceSectionData;
}
