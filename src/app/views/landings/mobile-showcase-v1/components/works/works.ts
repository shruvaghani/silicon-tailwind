import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { screenData, swiperTabData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'mobile-showcase-v1-works',
  imports: [],
  templateUrl: './works.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Works {
  screenData = screenData;
  swiperTabData = swiperTabData;
}
