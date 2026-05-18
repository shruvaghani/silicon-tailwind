import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { offersData } from '../../data';

@Component({
  selector: 'service-detail-v1-offers',
  imports: [LucideAngularModule],
  templateUrl: './offers.html',
  styles: ``,
})
export class Offers {
  offersData = offersData;
}
