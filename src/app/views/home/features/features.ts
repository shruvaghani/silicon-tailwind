import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { register } from 'swiper/element/bundle';
import { featuresData } from '../data';
register();

@Component({
  selector: 'home-features',
  imports: [LottieComponent],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Features {
  featuresData = featuresData;
}
