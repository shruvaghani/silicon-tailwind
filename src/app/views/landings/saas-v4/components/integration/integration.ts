import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { integrationsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'saas-v4-integration',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './integration.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Integration {
  integrationsData = integrationsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#toolsPagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '600': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '991': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 38,
      },
    },
  };
}
