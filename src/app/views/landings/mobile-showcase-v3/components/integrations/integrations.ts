import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { integrationData } from '../../data';

@Component({
  selector: 'mobile-showcase-v3-integrations',
  imports: [RouterLink],
  templateUrl: './integrations.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Integrations {
  integrationData = integrationData;
}
