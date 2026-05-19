import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { integrationData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'mobile-showcase-v3-integrations',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './integrations.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Integrations {
  integrationData = integrationData;
  SwiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView:2,
    spaceBetween: 12,
    pagination: {
      el: '#pagination4',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  };
}
