import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { servicesData } from '../../data';

@Component({
  selector: 'service-v2-service',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './service.html',
  styles: ``,
})
export class Service {
  servicesData = servicesData;
}
