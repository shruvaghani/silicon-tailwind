import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { featuresData } from '../../data';
register();

@Component({
  selector: 'about-v1-features',
  imports: [SwiperDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Features {
  featuresData = featuresData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '991': {
        slidesPerView: 3,
      },
    },
  };
}
