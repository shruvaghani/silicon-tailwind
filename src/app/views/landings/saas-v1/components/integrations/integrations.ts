import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brandData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'saas-v1-integrations',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './integrations.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Integrations {
  brandData = brandData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: '#toolspagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '600': {
        slidesPerView: 4,
      },
      '768': {
        slidesPerView: 5,
      },
      '850': {
        slidesPerView: 6,
      },
      '1000': {
        slidesPerView: 7,
      },
      '1200': {
        slidesPerView: 8,
      },
    },
  };
}
