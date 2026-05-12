import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { servicesData } from '../../data';
register();

@Component({
  selector: 'financial-service',
  imports: [RouterLink],
  templateUrl: './service.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Service {
  servicesData = servicesData;
}
