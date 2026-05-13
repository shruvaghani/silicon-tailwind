import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { brandData } from '../../data';

@Component({
  selector: 'software-dev-agency3-brands',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Brands {
  brandData = brandData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '#logopagination',
      clickable: true,
    },
    breakpoints: {
      '375': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '1440': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  };
}
