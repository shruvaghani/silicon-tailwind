import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { integrationsData } from '../../data';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'saas-v4-integration',
  imports: [RouterLink],
  templateUrl: './integration.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Integration {
  integrationsData = integrationsData;
}
