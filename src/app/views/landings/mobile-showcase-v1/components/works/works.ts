import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { screenData, swiperTabData } from '../../data';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'mobile-showcase-v1-works',
  imports: [SwiperDirective],
  templateUrl: './works.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Works {
  screenData = screenData;
  swiperTabData = swiperTabData;

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '#swiper-progress',
      type: 'progressbar',
    },
    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
    breakpoints: {
      '768': { slidesPerView: 3 },
    },
  };
}
