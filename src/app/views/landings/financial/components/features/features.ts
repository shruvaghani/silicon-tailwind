import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { featuresData } from '../../data';

register();

@Component({
  selector: 'financial-features',
  imports: [RouterLink],
  templateUrl: './features.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Features {
  featuresData = featuresData;
}
