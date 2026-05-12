import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { servicesData } from '../../data';

@Component({
  selector: 'medical-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Services {
  servicesData = servicesData;
}
