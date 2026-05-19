import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { brandsData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'online-brands',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Brands {
  brandsData = brandsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '#brandspagination',
      clickable: true,
    },
    breakpoints: {
      '375': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      '1440': {
        slidesPerView: 6,
        spaceBetween: 16,
      },
    },
  };
}
