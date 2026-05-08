import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { screenTabsData } from '../../data';
register();

@Component({
  selector: 'mobile-showcase-v2-work-slider',
  imports: [],
  templateUrl: './work-slider.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class WorkSlider {
  screenTabsData = screenTabsData;
  activeIndex = 0;

onSlideChange(swiperEl: any) {
  this.activeIndex = swiperEl.swiper.realIndex;
}
}
